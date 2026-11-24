# Security policy

This repository and its static GitHub Pages output are public. No credentials,
private environment files, unpublished research, or personal identity documents
belong here. Frontend environment variables, minification, and obfuscation provide
no secrecy. Report a suspected issue privately to the professional contact listed
on the site; do not include secrets in a public issue. Rotate any leaked credential
before considering history cleanup, which requires the owner's explicit approval.

## Implementation requirements

- React escapes ordinary text. Avoid raw HTML, eval, Function constructors, and
  HTML string sinks. Validate any future user-controlled URLs with an allowlist.
- Same-origin assets only; no tracking, analytics, cookies, remote fonts, or CDN
  scripts. Current external destinations are user-initiated professional links.
- Production-only CSP is injected by Vite. Scripts require same origin, network
  connections and form submission are blocked, and base URL overrides are blocked.
  Inline styles support existing React style properties; inline scripts and eval
  remain blocked. Same-origin frames/objects preserve the browser PDF viewer.
  Development HMR is intentionally outside this production policy.
- The no-referrer policy suppresses outgoing referrers. GitHub still processes
  visitor requests and IP addresses; a static site is not anonymous hosting.
- GitHub Pages has no repository-configurable arbitrary response headers. Meta CSP
  does not support frame-ancestors, report-only, or protect directly opened assets.
  No fake _headers file or meta X-Frame-Options is used. A different hosting layer
  would be needed for those headers. Never promise prevention of PDF downloads.
- Public images/PDFs and their metadata require owner review. Preserve originals
  until metadata removal or redaction is explicitly authorized. Review faces,
  screens, badges, workshop signage, addresses, and publication rights manually.

## Maintenance and checks

Use npm ci and commit package-lock.json for dependency changes. Run npm run lint,
npm run security:check, npm audit --registry=https://registry.npmjs.org, npm run build, and npm run security:check -- --dist.
The custom scanner catches selected credential formats, unsafe source patterns,
tracked sensitive filenames, and unwanted build artifacts. It is not exhaustive:
it does not replace history scanning, binary metadata inspection, or manual review.
Dependency advisories change over time; zero findings is a dated result.

Deployments run these checks before uploading only dist. Pull requests and weekly
scheduled runs also check them. Actions use verified commit pins, checkout does
not persist credentials, and only the deployment job receives Pages/OIDC write
permissions. Dependabot proposes npm and Action updates weekly; review and test
them rather than automatically merging. No repository secrets are required.

## Owner settings to verify in GitHub

- Settings > Pages: Enforce HTTPS.
- Account security: two-factor authentication or passkeys, recovery codes stored
  privately, least-privilege access tokens, review authorized apps and sessions.
- Repository security settings: dependency graph, Dependabot alerts/security
  updates, secret scanning and push protection where available.
- Protect main with required pull-request security checks; restrict the
  github-pages environment to main. Decide whether deployment approval is desired.
- Use GitHub's no-reply commit email for future commits if a personal email should
  not be public; historical identities remain public without a history rewrite.

These account settings are not enforced by files in the repository. No live
settings, history, media, or published deployment are changed by this audit alone.
