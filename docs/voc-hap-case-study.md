# VOC/HAP Reporting Modernization — implementation notes

## Content authority

The owner confirmed independent development, deployed/in-use status, and replacement of a legacy VB.NET application experiencing Crystal Reports runtime issues. The existing `/projects/reporting-modernization` route is retained with HashRouter and the configured Vite base path. Home and Projects use the corrected shared `reportingProject` entry; shipping remains the flagship.

No hardest challenge, runtime root cause, delivery mechanism, quantitative improvement, or regulatory certification was invented. The page uses Engineering considerations and a conceptual application workflow. Historical review is explicitly PDF-only, does not send customer emails, and does not update email history. Monthly processing is presented separately using the supplied interface workflow, including its confirmation and test-email controls.

## Image review

The package was extracted outside the checkout's public directory. All nine image renders were reinspected at full resolution before integration. No residual customer/recipient details, identifiers, operational dates/counts, or employer branding were visible in this review. No images needed to be withheld. Every copied public PNG and production PNG matches its package manifest SHA-256 hash and dimensions; the files contain no exposed metadata fields. Only the reviewed edited PNGs were copied into public assets. The source ZIP, original captures, and source documents are not in `public` or `dist`.

These are AI-assisted privacy-edited renders, not untouched pixel-exact screenshots. The page prominently discloses their provenance before the first gallery, and each image's alt text identifies it as an AI-assisted redacted view. Original layout, typography, and dimensions may differ; visual fidelity approval and employer publication permission remain separate considerations.

Public directory: `public/images/voc-hap/`

| File                                  | Exported dimensions | Decision                                              |
| ------------------------------------- | ------------------- | ----------------------------------------------------- |
| `voc-hap-01-dashboard.png`            | 1384 × 1136         | Integrated; no residual identifiers visible in review |
| `voc-hap-02-customer-management.png`  | 1625 × 968          | Integrated; no residual identifiers visible in review |
| `voc-hap-03-add-customer.png`         | 1347 × 1168         | Integrated; no residual identifiers visible in review |
| `voc-hap-04-edit-customer.png`        | 1293 × 1216         | Integrated; no residual identifiers visible in review |
| `voc-hap-05-recipient-management.png` | 1637 × 961          | Integrated; no residual identifiers visible in review |
| `voc-hap-06-add-recipient.png`        | 1454 × 1082         | Integrated; no residual identifiers visible in review |
| `voc-hap-07-edit-recipient.png`       | 1484 × 1060         | Integrated; no residual identifiers visible in review |
| `voc-hap-08-historical-report.png`    | 1393 × 1129         | Integrated; no residual identifiers visible in review |
| `voc-hap-09-monthly-email-run.png`    | 1520 × 1034         | Integrated; no residual identifiers visible in review |

## Shared viewer

`CaseStudyScreenshot` is now in `src/types/caseStudy.ts`. `ScreenshotGallery` accepts a local image directory limited to `shipping` or `voc-hap`, defaults to `shipping`, and validates each PNG basename before constructing a base-prefixed same-origin URL. Shared gallery/modal CSS moved to `src/styles/screenshot-gallery.css`; the shipping-specific first-image layout stays in its existing stylesheet. The existing dialog behavior, placeholders, keyboard handling, focus restoration, and reduced-motion handling are retained.

## Facts still needed before expanding technical claims

- Confirm the current .NET 8, WPF, SQL Server, and QuestPDF stack if implementation details have changed since the existing portfolio entry.
- Supply concrete architecture decisions, test strategies, or the root cause/resolution of the Crystal Reports runtime issue before describing them as project facts.
- Specify email transport, authentication, scheduler, or infrastructure only if appropriate for public disclosure and confirmed.
- Provide measured outcomes only if documented. The case study currently claims only the confirmed deployed replacement and current use.
- Employer permission for public descriptions/images and owner approval of AI-edited visual fidelity are not established by this implementation.

## Local preview

```sh
npm run build
npm run preview -- --port 4173
```

Open `http://localhost:4173/engineering-portfolio/#/projects/reporting-modernization`.

The owner subsequently authorized committing and pushing the implementation. Deployment, publication, and GitHub settings changes remain outside that authorization.
