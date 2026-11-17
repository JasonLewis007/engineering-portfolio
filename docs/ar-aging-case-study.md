# A/R Aging Report case study handoff

## Confirmed content

Jason Lewis built an A/R Aging application in C# and .NET 8 using QuestPDF and Excel output. It gives a snapshot of customer open receivables categorized by age, supporting overdue-account review and collections prioritization. The owner reports it addressed incorrect reporting data, Crystal Reports runtime issues, and historical-reporting limitations. Criteria include all or particular customers, credit method, invoice date, minimum aging days, and territories. Visible UI also shows sort and territory-grouping controls.

The owner subsequently confirmed the application is deployed and in production. The shared project card and case-study hero now show that status.

No independent ownership, SQL engine, UI framework, Excel library, aging formula, historical reconstruction mechanism, runtime root cause, or measured financial benefit is inferred. Do not equate the invoice-date input with a confirmed as-of algorithm.

## Implementation / Codex maintenance instructions

- Route: `/#/projects/ar-aging-report`, preserving the Vite GitHub Pages base and hash router.
- Shared project data in `src/data/projects.ts` integrates Home and Projects; shipping stays first and flagship. Manufacturing becomes project 05.
- Dedicated page: `src/pages/ArAgingCaseStudy.tsx`, typed image/filter/consideration data: `src/data/arAgingCaseStudy.ts`.
- Reuse existing reporting styles and the accessible `ScreenshotGallery`. Its validated local directory allowlist now includes `ar-aging`; existing directories remain unchanged.
- Preserve viewer Escape dismissal, focus containment/restoration, arrow controls, responsive size, and reduced-motion support. Preserve CSP and unrelated pages.
- Public assets live only in `public/images/ar-aging/`. Never add supplied raw financial screenshots or source documents to public assets.
- Two application images are AI-assisted privacy-edited renders, not exact original captures. Review before integration; if sensitive data remains, withhold the affected image.
- Two output images are generated from scratch using only fictional records via `scripts/generate-ar-aging-samples.mjs`. They are PDF-style and Excel-style illustrations, not production exports or downloadable financial files. Both the images and the page disclose this.
- Sample totals: current $4,200; 1–30 $1,800; 31–60 $2,600; 61–90 $900; 91+ $500; balance $10,000. Each row belongs to one sample bucket. These non-overlapping bucket choices and sample due-date rules do not assert production behavior. Do not describe the samples as actual QuestPDF or Excel output from the application.
- Run `npm run build` and `npm run lint`; check Home/Projects, route refresh, images, keyboard viewer, mobile overflow, and existing case studies.

## Remaining factual questions

Full lifecycle/independent ownership; precise aging reference date, boundaries and credit handling; historical balance reconstruction; validation evidence for corrected data; database/UI/Excel library; employer publication permission. No invented metrics or guarantees.

## Local preview

```sh
npm run dev
```

Open the URL printed by Vite followed by `#/projects/ar-aging-report` (include `/engineering-portfolio/` if required by its base).

Reviewed `ar-01-criteria.png`: 1380 × 1140; visual inspection and OCR found no remaining customer records, monetary figures, full dates, or long identifiers. SHA-256 `c8770e4eda6224f10f79a71942fb26c2a10a78d4ebecf23720e400a233f24da2`.

Reviewed `ar-02-preview.png`: 1629 × 965; visual inspection and OCR found no remaining customer records, monetary figures, full dates, or long identifiers. SHA-256 `3c7417fbf22ff03c41b5bb42b1d982b2aced3bcba58974b9268307f9ac2b7e9e`.
