# Daily Shipping & Budget Reporting

## Owner-confirmed facts

- Jason Lewis designed, built, tested, and deployed the application into production.
- The application supports daily shipping reporting for shareholders, with shipped, ordered, potential, and monthly budget information.
- Users can review historical reports.
- It replaces a legacy VB system with reporting-day problems, Crystal Reports runtime issues, and no historical-data review.
- Confirmed technologies: C#, .NET 8, a SQL database background, and QuestPDF (the owner's “quest” response in the report-library context).
- Potential relates to shipped versus ordered activity and can change daily. No precise arithmetic formula was supplied.

Do not infer WPF, a SQL Server database engine, a specific date/workday algorithm, weekend/holiday rules, automatic delivery, infrastructure, runtime root cause, or performance/financial benefits. The owner described hands-on design/build/test/deployment; the text does not invent a claim of sole independent ownership or additional lifecycle stages.

## Integration

Route: `/projects/daily-shipping-report` using the existing GitHub Pages hash routing and Vite base path.

- `src/data/projects.ts`: shared fourth-case-study data; positioned after VOC/HAP, with shipping retained as the flagship.
- `src/data/dailyShippingCaseStudy.ts`: typed reporting measures, considerations, and five image slots.
- `src/pages/DailyShippingCaseStudy.tsx`: dedicated reporting page using existing case-study styles and components.
- `src/styles/daily-shipping-case-study.css`: reporting measure and conceptual workflow presentation.
- `ScreenshotGallery`: a validated `daily-shipping` local directory option, alongside existing shipping and VOC/HAP directories.
- Home and Projects display four cards, with a balanced two-column desktop grid and the existing narrow-screen layout.

The conceptual workflow shows report-date selection, SQL-backed report review, preview, and QuestPDF export. It is explicitly not an infrastructure topology or exact data-processing sequence.

## Remaining factual questions

- Exact potential calculation, rounding, aggregation, and reporting-period behavior.
- How reporting dates, workdays, month boundaries, weekends/holidays, and historical periods are determined and validated.
- Specific SQL engine and UI framework, if those should appear publicly.
- Crystal Reports runtime root cause and any specific engineering fixes, before describing them as technical facts.
- Employer permission for public images/descriptions and any measured business improvements.

No raw financial values, shipment volumes, region/territory records, inventory identifiers, or operational dates from the source screenshots are quoted in the page or this document.

## Local preview

```sh
npm run build
npm run preview -- --port 4173
```

Open `http://localhost:4173/engineering-portfolio/#/projects/daily-shipping-report`.

The implementation is local only. No commit, push, deployment, publication, or GitHub settings change was authorized by this task.

## Image review

Five AI-assisted privacy-edited renders are included in `public/images/daily-shipping/`. Every exported image was visually reviewed; OCR found no remaining currency amounts, full dates, email addresses, or long numeric identifiers. This is an additional check, not a guarantee of pixel-exact fidelity. The page discloses that layout and typography may differ. Source captures and ZIP files were not added to public assets. The fourth render expands the detailed view into a full-screen composition, so it is explicitly presented as an edited render. Employer publication permission remains unconfirmed.

- `daily-01-report-dates.png`: 1627 × 967; visually reviewed and OCR checked; financial values, dates, and record details concealed. SHA-256 `24941820f5ae1a53dc682f9b48a809be18dbfd2185b119ba473ca73911730f75`.
- `daily-02-preview-controls.png`: 2122 × 741; visually reviewed and OCR checked; financial values, dates, and record details concealed. SHA-256 `e98068b9193ffb0091ec1b58d94b809b9626815616862b021f91eb2bacd16dda`.
- `daily-03-current-month.png`: 1624 × 968; visually reviewed and OCR checked; financial values, dates, and record details concealed. SHA-256 `a274e37bf04bba0ad748e95493347a741594c3fd52bc8bffe491bb6b59839a50`.
- `daily-04-report-detail.png`: 1625 × 968; visually reviewed and OCR checked; financial values, dates, and record details concealed. SHA-256 `58dc032e4eb33db61c90259d8546c90bbbad4f9941bfd3f15feb08961405511f`.
- `daily-05-pdf-output.png`: 1497 × 1051; visually reviewed and OCR checked; financial values, dates, and record details concealed. SHA-256 `4764cfeac1cce72c1908d65d674811a9c6d0997da72839d6e7180a65683a11c5`.

## Fictional sample report replacement

The fifth image is now `daily-05-fictional-sample.png` (1440 × 1222), replacing the heavily masked PDF render listed in the earlier review record. It is generated from scratch by `scripts/generate-sample-shipping-report.mjs`, with no employer branding or source financial records. All regional names, dates, and values are invented. Row totals, aggregate totals, and chart proportions agree. The sample-only convention potential = shipped + ordered is explicitly disclosed and does not assert the production formula. The image and visible caption identify it as a recreated illustration, not a production export. The other four images remain AI-assisted privacy-edited workflow renders.
