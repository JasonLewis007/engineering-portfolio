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
