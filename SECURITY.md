# Security policy

## Architecture and assumptions

This is a public static website. It has no backend, database, authentication, sessions, visitor forms, analytics, trackers, third-party scripts, or application cookies/storage. No secrets or personal contact information are required to run it. Anything shipped in HTML, JavaScript, CSS, public assets, or build-time `VITE_*` variables is public.

React's normal text rendering is used throughout. Do not introduce `dangerouslySetInnerHTML`, `eval`, `new Function`, arbitrary HTML insertion, or untrusted script execution. The external-link helper parses URLs and restricts them to HTTPS GitHub and www.linkedin.com destinations, rejecting embedded credentials and nonstandard ports. Business email uses explicit `mailto:` links; mail is handled by the visitor’s email application. Owner-supplied email and LinkedIn details are intentionally public. External new-tab links use `noopener noreferrer` and announce that behavior to assistive technology. Route parameters are matched against local typed project data and unknown values show a 404 page.

## Production Content Security Policy

The early meta tag in `index.html` supplies:

```
default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'none'; object-src 'none'; upgrade-insecure-requests
```

Production output has external same-origin scripts and styles, no inline scripts/event attributes, and no remote resources. Font loading uses the operating system font stack. Connections are restricted to the same origin, though the application makes no API requests. The production policy is checked through browser console observation and explicit blocked-inline-script / blocked-third-party-image tests in the current local preview.

Vite's development-only HTML transform omits this meta CSP because local HMR injects scripts and styles. This does not modify the built production HTML. Do not expose a development server as a production service. Validate production using the build and preview commands.

A meta CSP begins applying only when parsed. It cannot provide header-only directives such as `frame-ancestors`, CSP `sandbox`, or a report-only policy; CSP reporting directives are not effective through meta delivery. It does not set HTTP response headers. GitHub Pages does not offer repository-level custom response headers, so this project does not claim to configure HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, or anti-framing headers. A hosting platform with configurable response headers is needed if those controls are required. Same-origin script trust also means a compromise of the hosting origin or dependency/build chain remains relevant.

## Dependencies and delivery

- Commit and review `package-lock.json`; use `npm ci` for reproducible installs.
- Run `npm audit` and `npm audit --omit=dev` after changes. Review advisories and test upgrades; do not blindly use breaking `npm audit fix --force` upgrades.
- Dependabot checks npm and GitHub Actions weekly. Review and validate its updates.
- GitHub Actions are pinned to full SHAs; keep those pins current.
- The Pages workflow is manual-only and must not be dispatched before owner approval or on untrusted branches.
- Build permissions are read-only; Pages write and OIDC permissions are scoped to the deployment job. No PAT is used. Protect the default branch and deployment environment as appropriate when enabling publication.
- TLS and package-integrity verification must remain enabled.

`.gitignore` excludes Node dependencies, build output, environment files, private key extensions, local settings, and logs. This is a safeguard rather than a secret scanner. Review staged files and build artifacts before publication. Do not include proprietary HarperLove source, internal server names, schemas, customer/business records, credentials, or confidential screenshots. A résumé must be reviewed for public suitability before adding it.

## Reporting a vulnerability

Do not post secrets, sensitive exploit details, or proprietary data in a public issue. If this repository has GitHub private vulnerability reporting enabled, use its **Security → Report a vulnerability** feature. This project does not enable or assume that setting. If it is unavailable, open a minimal public issue asking the maintainer to establish a private reporting channel without including sensitive details. No reporting email has been supplied.

## Remaining considerations

The site has no server-side authorization boundary. Hosting providers may keep their own request logs; this application does not control that infrastructure. Hosting account security, repository permissions, branch protections, dependency maintenance, and publication review remain owner responsibilities. The manual workflow and GitHub Pages production hosting have not been executed in this task. Automated checks do not constitute a penetration test or a guarantee of accessibility/security. Content and confidentiality approval are required before publication.
