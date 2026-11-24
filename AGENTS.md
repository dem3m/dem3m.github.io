# Security and privacy requirements

Read SECURITY.md before changes. This is a public static portfolio: frontend code,
all public assets, and Git history are public. Never put credentials in source,
VITE variables, builds, logs, or documentation. Never print discovered secrets.
Use React text rendering; no unsafe HTML sinks or dynamic code execution. Review
any new URL input, upload, form, third-party script, tracking, or browser permission.
Keep resources same-origin and external links HTTPS with safe new-tab behavior.
Maintain the production CSP and test the native PDF viewer after policy changes.

Preserve the design, legitimate content, engineering results, photographs, and
language feature state. Do not rewrite translations unless explicitly requested.
Flag personal metadata and document disclosure for the owner; do not strip private
information, alter media, rewrite Git history, or remove features without approval.
Review new media for GPS, EXIF, XMP, usernames, device details, and visible private
information before publication. A hidden PDF toolbar never prevents downloading.

Run npm run lint, npm run security:check, npm audit --registry=https://registry.npmjs.org, npm run build, and
npm run security:check -- --dist. Test routes, menu, disclosures, media, and poster
viewer after changes. No new dependencies without a concrete need. Preserve the
lockfile and pin Actions to verified full commit SHAs with least job permissions.
Do not claim these pattern checks prove absence of secrets or vulnerabilities.
