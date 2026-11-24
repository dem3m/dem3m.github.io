// A targeted regression guard, not a complete secret scanner or metadata audit.
import { readdir, readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const failures = [];
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})/,
  /(?:AKIA|ASIA)[A-Z0-9]{16}/,
  /AIza[0-9A-Za-z_-]{35}/,
];
const forbiddenFile = /(?:^|\/)(?:\.env(?:\..+)?|\.git|\.aws|\.codex)(?:\/|$)|\.(?:pem|key|p12|pfx|bak|log)$/i;
async function inspect(path, production = false) {
  const data = await readFile(path);
  const text = data.toString('utf8');
  if (secretPatterns.some(pattern => pattern.test(text))) failures.push(`${path}: credential-like content (value withheld)`);
  if (/\.(?:jsx?|html|css|json|mjs)$/.test(path) && !path.endsWith('package-lock.json')) {
    if (/[A-Za-z]:\\Users\\|\/Users\/|\/home\/[a-z][\w-]+\//i.test(text)) failures.push(`${path}: local user path`);
    if (!production && path.startsWith('src') && /dangerouslySetInnerHTML|\b(?:eval|Function)\s*\(|\.innerHTML\s*=|document\.write\s*\(/.test(text)) failures.push(`${path}: unsafe HTML or dynamic execution requires review`);
    if (!production && path.startsWith('src') && /import\.meta\.env\.(?!BASE_URL\b|DEV\b|PROD\b|MODE\b|SSR\b)/.test(text)) failures.push(`${path}: client environment variable requires review`);
    if (!production && /\.(jsx|css)$/.test(path) && /["'(]http:\/\//.test(text)) failures.push(`${path}: insecure resource URL`);
  }
}
const tracked = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean);
for (const path of tracked) {
  if (forbiddenFile.test(path) && !path.endsWith('.env.example')) failures.push(`${path}: sensitive filename is tracked`);
  await inspect(path);
}
if (process.argv.includes('--dist')) {
  async function walk(directory) {
    for (const item of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, item.name);
      if (item.isDirectory()) await walk(path);
      else {
        if (forbiddenFile.test(path.replaceAll('\\', '/')) || /\.(?:map|jsx|tsx|ya?ml)$/.test(path)) failures.push(`${path}: development or sensitive build artifact`);
        await inspect(path, true);
      }
    }
  }
  await walk('dist');
  const html = await readFile('dist/index.html', 'utf8');
  const decoded = html.replaceAll('&#39;', "'").replaceAll('&#x27;', "'");
  if (!decoded.includes('Content-Security-Policy') || !decoded.includes("script-src 'self'")) failures.push('dist/index.html: production CSP missing');
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else console.log(`Security regression checks passed (${tracked.length} tracked files${process.argv.includes('--dist') ? ' and production output' : ''}).`);
