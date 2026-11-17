# Validation record

Validated locally with Node.js 24.22.1 and npm 11.9.0. This record describes the current implementation; it is not a claim about a deployed GitHub Pages site.

| Check                                                 | Result                                                                                                           |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `npm install`                                         | Passed using a writable npm cache after the default cache location was unavailable                               |
| `npm ci --cache /tmp/engineering-portfolio-npm-cache` | Passed; lockfile installation reproduced successfully                                                            |
| `npm run build`                                       | Passed; strict TypeScript check and Vite production output                                                       |
| `npm run lint`                                        | Passed; zero errors and zero warnings                                                                            |
| `npm audit`                                           | Passed; zero vulnerabilities                                                                                     |
| `npm audit --omit=dev`                                | Passed; zero vulnerabilities                                                                                     |
| Development server                                    | Started with the documented command and loaded in Chromium without browser errors                                |
| Production browser smoke checks                       | Passed for 11 URLs, including all primary routes, three case studies, unknown route, and unknown project slug    |
| Deep-link reloads                                     | All 11 URLs refreshed successfully using hash routing                                                            |
| Responsive checks                                     | No horizontal document overflow across those URLs at 320, 375, 768, and 1440 pixels                              |
| Keyboard behavior                                     | Skip link, route-change main focus, mobile-menu links, Escape dismissal, and focus return passed                 |
| External links                                        | HTTPS GitHub URLs, new-tab announcement, and `noopener noreferrer` verified                                      |
| Reduced motion                                        | CSS transitions disabled under the reduced-motion preference                                                     |
| Browser console                                       | No application or CSP errors during normal production navigation                                                 |
| Resource privacy                                      | No third-party requests observed during normal application browsing                                              |
| axe accessibility                                     | 20 scans: 10 pages at 1440 and 375 pixels; zero WCAG 2 A/AA and WCAG 2.1 A/AA rule violations after correction   |
| CSP enforcement                                       | Inline-script execution blocked; third-party image blocked with `script-src-elem` and `img-src` violation events |
| Visual review                                         | Desktop and mobile full-page screenshots reviewed; fixed missing word spacing when the mobile headline wraps     |

Browser checks were one-off Playwright/Chromium checks using environment tooling. axe was installed in a temporary validation directory rather than adding browser tooling to the shipped application dependencies. The first browser launch attempted an unavailable Playwright-managed browser; checks ultimately used the installed system Chromium. No browser checks are represented as an `npm test` suite, and no unit-test suite is configured.

The accessibility scan initially identified a wordmark name/visible-label mismatch; the implementation was corrected and all scans rerun. Development checks also caught a CSP transform that did not match formatted multiline HTML; that transform was corrected without relaxing the production policy. Browser automation is not a substitute for a screen-reader user review, testing every device/browser, or a security assessment.

## Recheck before publication

1. Run `npm ci`, `npm run lint`, `npm run build`, `npm audit`, and `npm audit --omit=dev`.
2. Start `npm run preview` and inspect `/engineering-portfolio/` and direct `#/projects/...` links. Refresh each case study.
3. Navigate using only a keyboard, including the mobile menu, active links, and skip link. Review at narrow widths and with reduced motion enabled.
4. Run an accessibility checker against each page, including mobile navigation while open. Inspect the console and network panel for CSP violations or third-party resources.
5. Confirm all professional content, contact destinations, and confidentiality requirements with the owner.

The GitHub Actions workflow, GitHub Pages settings, production HTTPS behavior, hosting response headers, and published URL have not been exercised. No push, deployment, visibility change, or external repository setting change was performed. See `SECURITY.md` for meta CSP and static-host limitations.

## Contact details update

Owner-supplied business email and LinkedIn were added to the contact page, with LinkedIn links also on About and in the footer. `npm run build` and `npm run lint` passed. Browser checks verified the exact `mailto:` and HTTPS LinkedIn destinations, new-tab link protections, no horizontal overflow, and no browser errors. Four axe scans (About and Contact at 320 and 1440 pixels) reported zero WCAG 2/2.1 A/AA violations. No dependencies changed. The portrait was not part of this contact update.

## Portrait update

Added the owner-supplied 400 × 400 JPEG to the About profile panel, preserving the original image bytes. The file is approximately 23 KB and contains no EXIF fields. Vite bundles it locally with a hashed asset URL compatible with the repository base path. Explicit dimensions reserve layout space; responsive sizing preserves its square proportions and alt text identifies Jason Lewis.

`npm run build` and `npm run lint` passed. Production browser checks verified successful image decoding at its original dimensions, the correct base-prefixed asset URL, no horizontal overflow, and no console/CSP errors at 1440 and 320 pixels. Both About-page axe scans reported zero WCAG 2/2.1 A/AA violations. Desktop and mobile screenshots were visually reviewed. No dependency or deployment changes were made.

## Skills and engineering experience draft

Expanded Skills to nine typed categories in `src/data/professional.ts`, keeping .NET architecture, databases, and full-stack development first. Added the owner-supplied AI tools and their development uses, reporting technologies, platforms, delivery practices, and infrastructure expertise. Updated Experience from `Jason_Lewis_Resume_10_9_26.docx`: HarperLove Software Engineer / IT Specialist (2023–Present) and Full Stack Solutions LLC Full Stack Developer (2022–2023). Removed the superseded title/date placeholders.

`npm run build`, `npm run lint`, and `git diff --check` passed. Production browser checks confirmed both routes and reloads, nine skill cards, both experience entries, exact supplied role/date and AI-tool text, and no horizontal overflow at 320, 768, and 1440 pixels. Six axe scans reported zero WCAG 2/2.1 A/AA violations. No browser errors were observed. Desktop Skills and mobile Experience screenshots were visually reviewed. No dependencies were changed. This update was validated locally. No deployment or publication was performed.

## Résumé download draft

Connected the owner-uploaded `Jason_Lewis_Resume_Revised_v3.pdf` to the Contact page's Download résumé (PDF) link. The original two-page PDF is bundled locally with a Vite-generated, base-prefixed URL and an explicit download filename of `Jason_Lewis_Resume.pdf`.

`npm run build`, `npm run lint`, and `git diff --check` passed. Desktop (1440px) and mobile (320px) browser checks activated the link by keyboard, verified the downloaded filename and exact file-byte match to the supplied PDF, and confirmed HTTP 200 with an application/pdf content type. Both Contact-page axe scans reported zero WCAG 2/2.1 A/AA violations; no horizontal overflow or browser errors were observed. The supplied PDF is unencrypted, has two pages, and PDF inspection reports no JavaScript. No dependencies were changed. The portfolio updates were validated locally. No deployment or publication was performed.

## Enterprise Shipping Management Suite case study

Prepared the dedicated flagship page at `/#/projects/enterprise-shipping-management-suite`, preserving the GitHub Pages base path and redirecting the previous `/#/projects/enterprise-shipping` URL. Home and Projects share the updated typed project description, production status, stack, and flagship styling. Unrelated pages and case studies are preserved.

The page covers end-to-end ownership, production deployment, the kiosk and dashboard workflows, self-attested endorsement confirmation, conceptual SQL Server integration, engineering challenges, owner-attributed wrong-load observations, arrival measurement, technology stack, and Projects/Contact calls to action. No deployment date, shipment count, savings, percentage, extra service, or infrastructure topology was invented.

### Image review

All seven candidates were visually inspected. Three reviewed dashboard PNGs were integrated under `public/images/shipping/` with unchanged bytes, correct dimensions, local URLs, descriptive alt text, captions, and lazy loading. Four kiosk candidates still contain visible operational details and are represented by labeled placeholders; their image files are absent from both `public` and `dist`. The dashboard PNGs have no embedded metadata. The review and source-to-public mapping are documented in `docs/shipping-image-review.md`. Employer publication permission remains separate from visual redaction review.

### Checks executed

- `npm run build`: passed, including strict TypeScript and Vite production output.
- `npm run lint`: passed with zero errors/warnings.
- `git diff --check`: passed.
- Browser functional checks at 1440, 768, 375, and 320 pixels: direct case-study navigation and reloads; three images loaded with their original aspect ratios; four withheld placeholders; no horizontal document overflow.
- Native dialog viewer: opening, forward/backward screenshot navigation using buttons and arrow keys, Tab focus containment, Escape and close-button dismissal, focus restoration to the opening thumbnail, and body-scroll restoration passed. An initial browser check prompted explicit Tab wrapping to keep focus inside the viewer.
- Four page and four dialog axe scans: zero WCAG 2/2.1 A/AA violations.
- Section navigation with reduced motion, both flagship entry points, the old-route redirect, and existing About, Experience, Skills, Contact, other case studies, and 404 page: passed functional checks.
- No browser application/CSP errors or failed HTTP responses in the browser run.
- Desktop/mobile hero and enlarged-image screenshots were visually reviewed.

There is no configured unit-test suite or `npm test` command. Browser checks were one-off checks using the environment's Playwright, Chromium, and temporary axe tooling; no application dependencies were added. The owner subsequently authorized committing and pushing the reviewed implementation. No publication or deployment was performed. The implementation is complete with the explicitly requested placeholders for images requiring corrected redaction.

## VOC/HAP reporting case-study implementation

Built the dedicated reporting page at the existing `/projects/reporting-modernization` hash route. Updated shared project summaries and status on Home and Projects; shipping remains the flagship. Moved the screenshot type and gallery/modal styles into shared files and added a validated local directory option to the viewer, retaining `shipping` as its default.

### Image decisions

Extracted the source package outside the public directory; read its task, content, review, and manifest. Reinspected all nine AI-assisted redacted renders at full resolution. No residual sensitive identifiers were visible, so all nine were integrated under `public/images/voc-hap/` without further visual edits. Public and production image hashes and dimensions match the manifest; all have no exposed metadata fields. No originals or ZIP archives are in public/build output. The page and alt text disclose AI-assisted privacy editing. See `docs/voc-hap-case-study.md` for each path and decision.

### Checks executed

- `npm run build`: passed, including strict TypeScript and Vite output.
- `npm run lint`: passed with zero errors/warnings.
- `git diff --check`: passed.
- Reporting browser checks at 1440, 768, 375, and 320 pixels: correct direct route and refresh, nine image slots, successful image decoding, base-prefixed same-origin URLs, preserved aspect ratios, no horizontal overflow.
- Four reporting-page and four reporting-dialog axe scans: zero WCAG 2/2.1 A/AA findings.
- Viewer: initial close-button focus, Tab/Shift+Tab containment, previous/next buttons and wrapping, left/right arrow navigation, Escape and close-button dismissal, focus restoration, single-image gallery behavior, and body-scroll restoration passed.
- Reduced-motion section navigation, Home/Projects entry points, deployed status, retained shipping flagship, representative unrelated pages, and résumé download passed functional checks.
- No application/CSP errors, failed HTTP responses, or third-party requests in the reporting run.
- Shipping regression browser run passed at the same four widths, including its three images, four withheld placeholders, aspect ratios, modal controls, section navigation, direct refresh, legacy redirect, and Home/Projects entry points. Four page and four dialog accessibility scans reported zero findings.
- Desktop/mobile reporting hero and viewer screenshots visually reviewed.

No unit-test suite or `npm test` script is configured. Browser checks used the existing environment's Playwright/Chromium and temporary axe tooling; no application dependencies changed. The owner subsequently authorized committing and pushing the implementation. No deployment, publication, or GitHub settings changes were performed.

## Daily Shipping & Budget Reporting — November 17, 2026

- `npm run build` and `npm run lint`: passed. `git diff --check`: passed.
- Chromium checks of the production preview at widths 1440, 768, 375, and 320: reporting route and refresh, Home/Projects links, four-card responsive layout, image loading/dimensions, section navigation and reduced-motion behavior passed with no horizontal overflow.
- Five reviewed AI-assisted privacy-edited PNGs loaded from the local daily-shipping asset directory. Exported aspect ratios are retained. Public provenance text and alt text disclose the edits. Visual and OCR review found no remaining financial amounts, full dates, email addresses, or long numeric identifiers; original source captures are excluded. Built asset hashes match reviewed files; no ZIP is in the build.
- Screenshot dialog: previous/next arrow navigation and wraparound, Tab/Shift+Tab containment, Escape dismissal, focus restoration, and single-image PDF behavior passed. Existing shipping and VOC/HAP viewers also passed focused regression checks.
- Eight automated WCAG A/AA scans (page and open dialog at each width): zero violations. Automated scans do not replace human screen-reader review.
- Representative About, Experience, Skills, Contact, manufacturing, and missing-page routes passed. No browser console/page errors or failed HTTP responses occurred.
- No dedicated unit-test command exists. No commit, push, deployment, or publication was performed.

### Fictional sample report update

Replaced the fifth, heavily masked PDF view with a locally rendered report illustration containing entirely fictional names, dates, and values. Verified row and aggregate totals and the sales/budget bar proportions; reviewed the final image visually. Both the image and portfolio caption disclose its fictional origin and sample-only potential calculation. The four application workflow renders retain their privacy-edit disclosure.

Production build and ESLint passed. Repeated browser checks passed at 1440, 768, 375, and 320 pixels, including five image loads with matching dimensions, dialog keyboard behavior, direct-route refresh, Home/Projects integration, existing case-study viewers, and eight page/dialog accessibility scans with zero violations. No commit, push, or publication performed.

## A/R Aging Report — November 17, 2026

- Production build, TypeScript, ESLint, and whitespace checks passed. No application dependencies or CSP changes.
- Two application renders visually reviewed and OCR checked: customer names, records, financial figures, IDs, full dates, and counts concealed; debug overlays removed. Public page discloses AI-assisted edits and possible layout/typography differences. Original screenshots were not placed in public assets.
- PDF-style and Excel-style samples generated from fictional data only, with matching rows and $10,000 total. Sample due dates agree with disclosed non-overlapping example buckets. Image and caption both disclose fictional data, recreated appearance, and illustrative rules.
- Chromium production-preview checks at 1440, 768, 375, and 320 pixels passed: direct route and refresh, Home/Projects five-card navigation, four image loads and dimensions, reduced-motion section focus, no horizontal overflow.
- Both gallery viewers passed arrow-key movement and wraparound, Tab/Shift+Tab containment, Escape, and focus restoration. Twelve automated page/dialog WCAG A/AA scans found zero violations; this does not replace human screen-reader review.
- Existing daily shipping, VOC/HAP, and flagship shipping viewers, plus About, Experience, Skills, Contact, and manufacturing routes passed focused regressions. No browser errors or failed HTTP responses.
- No dedicated unit-test suite exists. Deployment/publication remains manual and was not requested.
