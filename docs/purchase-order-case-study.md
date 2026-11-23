# Purchase Order Receiving & ERP Integration

## Confirmed context

The owner built a single-screen application for PO receiving, PO editing, received-quantity and receipt-record adjustments, and receivables adjustments. The owner confirmed C#, .NET, SQL Server, updates sent to the ERP system, and production deployment. The exact transfer method has not been established: an upload does not by itself establish a REST API. The case study labels this ERP integration, with no protocol or transport claim.

The supplied empty PO Adjustment Manager screen shows Load/Clear, vendor information, date/ship/agent/reference/PO-number fields, a line-item grid, Edit PO, Save PO, Reset, Adjust Receiving, Unreceive PO, and Exit. It does not show a completed transaction, a loaded order, detailed adjustment dialogs, or financial business rules. The page distinguishes visible controls from the broader owner-reported scope. No amounts or order records were invented to fill the empty fields.

No .NET version, UI framework, permissions, confirmations, validation, rollback, audit trail, retries, ERP transaction boundaries, runtime root cause, historical implementation, or measured outcomes are assumed.

## Portfolio integration

Replaces the broad Manufacturing & ERP Workflow Engineering entry at project 05. Other six entries, ordering, numbering, and flagship status remain intact; there are still seven cards. The card uses the existing component/factory artwork and production status convention.

New route: `/#/projects/purchase-order-receiving-erp`. Existing `/#/projects/manufacturing-erp` resolves to the same dedicated case study so older links remain usable. Hash routing and Vite base-aware local assets are preserved.

- Shared data: `src/data/projects.ts`, exported `purchaseOrderProject`.
- Page: `src/pages/PurchaseOrderCaseStudy.tsx`, using shared reporting styles.
- Typed image and workflow data: `src/data/purchaseOrderCaseStudy.ts`.
- Viewer allowlist: added `purchase-order`; no other viewer behavior changed.

## Image review

Only the AI-assisted privacy-edited output is integrated, at `public/images/purchase-order/po-adjustment-manager.png`. The source screenshot remains outside public assets. The output removes employer branding from the title and app header, the debugging/accessibility toolbar, and background desktop fragments. Form fields and line-item rows remain empty, with generic labels and actions retained.

The exported image was visually inspected at full exported resolution and OCR checked for residual employer names, operational numbers, email addresses, and financial figures; none were found. Exported dimensions are 1358 × 1159, with empty PNG metadata. Page text and alt text identify this as an AI-assisted privacy edit whose typography and layout may differ from the original. It is not represented as an untouched pixel-exact capture or a completed transaction.

Employer permission is not established by the screenshot alone. The case-study implementation stays local for owner review; no commit, push, deployment, or publication was performed.

## Local preview

```sh
npm run dev
```

Use the Vite URL with `#/projects/purchase-order-receiving-erp`.

## Remaining factual details

.NET version; UI framework; ERP transfer mechanism and timing; detailed adjustment semantics and financial records involved; validation and transaction safeguards; specific business problem that prompted development; measured outcomes if available. The current page does not invent these details.

Reviewed image SHA-256: `3fdba6a3c346d5ff3125daef39cf190e8bee5712c9c32e4dcd0142af40dd9165`.
