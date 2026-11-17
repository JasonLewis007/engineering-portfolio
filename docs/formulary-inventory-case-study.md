# Formulary & Inventory Hub implementation and image review

## Authority and package contents

The uploaded archive contains `README.md`, `CASE_STUDY.md`, and four PNGs. The named `README_START_HERE.md`, `CODEX_INSTRUCTIONS.md`, and `CASE_STUDY_DRAFT.md` were not supplied. The owner explicitly confirmed using their message and the included case study as the specification. Source files are extracted outside the repository and public directory at `/workspace/case-study-source/formulary-inventory-hub/`.

The owner requested a new Hub card. This checkout contains five existing projects, none titled Production & Formula Dashboard. All five entries and their routes remain intact; no existing project was renamed, replaced, or removed. The new card is project 06 and shipping remains the flagship.

## Confirmed facts and implementation

- Jason Lewis created the application to replace backend-only formula entry.
- Stack: C#, .NET 8, SQL Server. Fully deployed and operating in production.
- Central hub exposes Formulas, Inventory, and Check Inventory.
- Formula Manager supports creating formulas/item groups, adding formulas to existing item groups, and editing groups/formulas.
- Inventory Manager provides creation, inventory master maintenance, and inventory/warehouse-specific maintenance entry points.
- Check Inventory is documented by the supplied hub labels; its detailed screen was not supplied and is not invented.
- Synthetic reorder report is a wholly fictional visual mockup, not a production export. No purchase-order automation, algorithm, validation, audit, ERP, UI framework, or quantified outcome is inferred.

Route: `/#/projects/formulary-inventory-hub`, preserving hash routing and the Vite base. Shared data: `src/data/projects.ts`; dedicated page: `src/pages/FormularyCaseStudy.tsx`; typed image data: `src/data/formularyCaseStudy.ts`; styling: `src/styles/formulary-case-study.css`. Project artwork uses local DOM and existing icons, following the supplied preview's three symbols, colors, navy panels, and borders.

## Image review

All four exported images were visually inspected and OCR checked before integration. No visible employer names, customer/supplier names, formula contents, real item identifiers, pricing, inventory quantities, or purchase-order data were found in the three application views. Solid supplied masks conceal branding in header/footer regions, selection controls are empty, and generic task labels remain visible. Dates/times and version labels are visible and are acknowledged in the page disclosure. The source does not establish how the screenshots were prepared, so the page does not assert pixel-exact original capture provenance; it only states that integration preserves the supplied pixels.

The synthetic report explicitly says it is not a production report, uses DEMO identifiers and sample descriptions, and states that all quantities and identifiers are fictional. Its three below-reorder sample statuses agree with the fictional on-hand/reorder values. No production reorder formula is claimed. All four PNGs have empty embedded metadata. Public files are byte-for-byte copies of these reviewed inputs and preserve intrinsic aspect ratios. No image edits, generated substitutes, source ZIPs, or documents are included in public assets.

Public directory: `public/images/formulary-inventory/`. Filenames: `hub-overview.png`, `formula-manager.png`, `inventory-manager.png`, `reorder-report-synthetic.png`. The existing screenshot viewer is reused with an additional validated local directory option.

## Remaining limitations

Detailed inventory lookup screen, schema/validation/integration specifics, deployment method, and measured outcomes are unavailable. Employer publication permission is not established by the asset package. No extra claims are added.

## Preview

```sh
npm run dev
```

Use the local URL Vite prints, followed by `#/projects/formulary-inventory-hub` (retain `/engineering-portfolio/` if present in its base).

No commit, push, deployment, publication, or GitHub settings change was performed.

## Reviewed asset inventory

| Asset | Dimensions | SHA-256 |
| --- | --- | --- |
| `formula-manager.png` | 2048 × 1227 | `58642019e9b14ba064d179cd4ec50dea632bd5b073d5c6c64070c2c0ba48ee11` |
| `hub-overview.png` | 2048 × 1221 | `f14639690ccc0b2be8f93dc57292310e374736292a8592b4e1fc8fcd93f06559` |
| `inventory-manager.png` | 2048 × 1222 | `af003a4ab79c01d05b1e53f90cf0c0561e1c4b26b57a0dcafe604a010c8419d2` |
| `reorder-report-synthetic.png` | 1600 × 1050 | `2c1916b15b29f84d1b2b9b168e22b7c7a5b8be4b8455fd422984f78ccb224042` |
