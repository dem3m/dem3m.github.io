# Security and privacy audit — 2026-11-24

## Scope and result

Reviewed the complete tracked repository, source/components/hooks/translations,
configuration, npm manifest/lockfile, workflows, SVGs, image metadata, PDF metadata
and decompressed PDF streams, generated production assets, and all six locally
available commits (69 distinct historical blobs). Files ignored as installed
dependencies were assessed using npm audit and the installed dependency tree,
not a manual review of every third-party source file. Git internal object storage
was inspected through Git rather than modified. Remote deleted/unreachable history,
other branches unavailable locally, private account settings, and unreported
dependency vulnerabilities are outside verified coverage.

No critical or high findings were identified. This is a dated review, not a
guarantee of absence of secrets, private data, vulnerabilities, or licensing issues.
All changes remain local until explicitly published.

## Findings by severity

### Critical

None identified. Selected high-confidence key/token formats and credential
assignments found no candidates in the available historical blobs. No revocation
or rotation is indicated by this scan; arbitrary passwords and unknown token
formats cannot be conclusively excluded by pattern scanning.

### High

None identified. No unsafe HTML rendering, eval/Function execution, user-controlled
redirects, credential-bearing frontend environment values, tracking, external CDN
scripts, analytics, or browser permission requests found in application code.
The hash route selects bundled content; it is not inserted into HTML or executed.
External new-tab links already use noreferrer (which also provides noopener).
The dormant language preference validates against a fixed list and does not write
storage while the feature is disabled. There are no forms, uploads, authentication,
or backend inputs to sanitize in this implementation.

### Medium — owner review required

1. **Personal email in Git history.** All six commits expose a personal Gmail
   address in author identities, distinct from the intentionally published
   professional contact. It is publicly accessible through repository history.
   Configure a verified GitHub no-reply email for future commits if desired.
   Historical identities were preserved; history rewriting requires approval and
   cannot remove copies already fetched by others.
2. **Publication scope and people in media.** Engineering figures, hardware photos,
   students/team members, workshop surroundings, screens, signage, and the complete
   research poster are public assets. Confirm team/organization permission and
   review visible details and any research publication restrictions. No sensitive
   engineering designation was established by this audit; this is a manual review
   requirement, not a claim that the projects are restricted. No media or content
   was removed, edited, or redacted.

### Low — owner review / platform limits

- **Photo metadata:** assembled-test-cell.jpg, p100-front.jpg, and
  p100-test-stand.jpg retain Nikon COOLPIX S6300 camera metadata, capture timestamps,
  exposure details, maker notes, and thumbnail-related fields. The assembled photo
  reports 2026-11-21 08:13:02. No GPS tags were detected by the image-property pass.
  Other photos retain color profiles and encoding metadata; three images contain
  Discord/jpegli encoder comments. PNG chunk inspection found no textual or EXIF
  chunks. Metadata was preserved, including opaque maker notes whose full vendor
  contents were not decoded. No detected GPS is not proof of no location clues in
  pixels or proprietary metadata.
- **PDF metadata:** the poster includes the six credited authors, project title,
  PowerPoint/pdfHarmony producer details, and creation/modification timestamps.
  No user-directory paths, JavaScript/Launch actions, OpenAction, or embedded-file
  markers were found in raw/decompressed stream inspection. This was a structural
  pattern review, not full PDF malware analysis or exhaustive OCR/text extraction.
  Preserve the intentional author credits. The PDF and photographs remain
  downloadable regardless of hidden viewer controls.
- **Response-header limits:** the live site serves HTTPS and HSTS. No CSP header
  was present at audit time. The new production meta CSP protects HTML after it
  is parsed; it cannot enforce frame-ancestors or protect directly opened assets.
  No fake header configuration was added. A hosting/proxy change would be needed
  for arbitrary response headers. The PDF viewer intentionally needs same-origin
  frame/object loading; existing React inline styles need unsafe-inline styles.
  Scripts still forbid unsafe-inline and unsafe-eval.
- **Account controls unverified:** HTTPS enforcement setting, 2FA/passkeys,
  Dependabot alerts/security updates, secret scanning/push protection, branch rules,
  and deployment-environment restrictions require owner review. They cannot be
  inferred from repository files. Instructions are in SECURITY.md.
- **Existing font warning:** Radeil-Regular.woff2 is referenced but absent; the
  build retains the reference and the browser uses the existing fallback. This is
  not a credential or security issue, and the design/font declarations were kept.

## Safe improvements implemented

- .gitignore: excludes environment files, private-key/certificate formats, local
  credential/agent directories, and backup/temp files. Existing tracked files are
  never made private by ignore rules.
- vite.config.js: build-only CSP restricts resources to the origin, blocks outbound
  fetch/WebSocket connections and form submissions, disallows inline/eval scripts,
  and blocks base URL injection. Dev HMR remains functional without weakening the
  production policy. Same-origin native PDF embedding is retained.
- index.html: no-referrer policy; existing professional outbound links preserved.
- .github/workflows/deploy.yml: only the deployment job gets Pages/OIDC write
  permissions; checkout no longer persists credentials. Added timeouts, lint,
  source/build security checks, and full npm audit before deployment. Official
  Action versions were resolved through GitHub's API and pinned to full SHAs.
- .github/workflows/security.yml: read-only PR, weekly, and manual checks using
  pinned Actions. No pull_request_target or untrusted workflow code with write
  credentials. Scheduled advisory checks do not require a deployment.
- .github/dependabot.yml: weekly npm and Action update proposals.
- scripts/security-check.mjs, package.json, eslint.config.js: native Node regression
  checks for selected secrets, unsafe source patterns, client environment values,
  local user paths, sensitive tracked filenames, unwanted production artifacts,
  and production CSP. Includes untracked nonignored files locally. Findings never
  print credential values. This is intentionally a limited guard, not a full
  secret scanner, complete URL validator, or binary metadata inspector.
- SECURITY.md and AGENTS.md: persistent security, privacy, preservation, incident,
  verification, and manual GitHub settings requirements.

No dependency patches were needed: npm audit reported **zero known vulnerabilities**
across its 168-package inventory, including development dependencies. React and
ReactDOM are application dependencies; Vite/React plugin and ESLint packages are
used by build/lint. React type packages support editor/type tooling. No genuinely
unused runtime package was identified; no packages, lockfile entries, or framework
were changed just to reduce the reported count.

## Verification

- npm run lint: passed.
- npm audit --json: zero vulnerabilities, all severity levels.
- npm run build: passed, with the existing missing-font warning above.
- npm run security:check and npm run security:check -- --dist: passed.
- git diff --check: passed. Source data, translations, images, PDF and all other
  public assets match HEAD after normalizing source line endings; media bytes are
  unchanged. Generated JS and CSS asset hashes/names also match the preceding
  build, demonstrating no application-content/style changes from this audit.
- Production-preview Edge browser: all five pages at 320, 375, 768, 1024, and
  1440 pixels. No broken images, horizontal overflow, runtime exceptions, or normal
  usage CSP violations. Keyboard disclosures and Escape menu dismissal passed;
  expanded project text and expected images were checked against bundled data.
- A separate negative browser probe confirmed an injected inline script and an
  attempted outbound fetch were blocked by CSP. The fetch was blocked before an
  external request could be sent. Expected violations were isolated to that probe.
- Native PDF frame loaded with application/pdf, and a screenshot confirmed the
  poster rendered under the policy. Browser-specific PDF controls, mobile external
  PDF apps, and every browser implementation remain outside this verification.
- No dedicated unit-test runner exists. No arbitrary new unit tests or dependencies
  were added; checks focus on build, source guards, and actual browser behavior.

## Required manual actions

Review the medium/low privacy findings before publication. Configure a no-reply
commit identity for future work if desired. Review the GitHub settings checklist
in SECURITY.md; require the Security checks job on main if enforced PR gates are
desired. Enable secret scanning and push protection where your repository/account
supports them; regex checks alone do not replace those controls. No credentials,
account settings, history, photographs, or PDF were changed during the audit.

## Platform references

- [GitHub: enforce HTTPS for Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [MDN: CSP and meta delivery limitations](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)
- [MDN: frame-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-src)
