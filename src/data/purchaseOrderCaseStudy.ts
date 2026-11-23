import type { CaseStudyScreenshot } from "../types/caseStudy";
export const purchaseOrderScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "po-manager",
    title: "PO Adjustment Manager / Single-screen workspace",
    description:
      "The empty application screen shows Load and Clear, vendor and PO context, a line-item grid, Edit PO, Save PO, Reset, Adjust Receiving, and Unreceive PO. It demonstrates the interface layout, not a completed receiving or ERP transaction.",
    alt: "AI-assisted privacy-edited PO Adjustment Manager with empty order fields, line-item grid, and editing and receiving controls",
    width: 1358,
    height: 1159,
    asset: "po-adjustment-manager.png",
  },
];
export const purchaseOrderWorkflow = [
  [
    "Load the order",
    "Select the purchase order and review its vendor information, order fields, and line-item context.",
  ],
  [
    "Edit and save",
    "Use the Edit PO and Save PO actions to work with the selected order.",
  ],
  [
    "Adjust receiving",
    "The same screen exposes Adjust Receiving and Unreceive PO actions alongside the order context.",
  ],
  [
    "Update the ERP",
    "The owner confirms the application sends updates to the ERP system. The transfer protocol and timing are not documented here.",
  ],
] as const;
export const purchaseOrderConsiderations = [
  [
    "Order context",
    "Vendor information, PO identifiers, and line items share one workspace, helping users review the order associated with an action.",
  ],
  [
    "Distinct update types",
    "Editing a PO, adjusting receiving, and unreceiving have separate controls. The screenshot does not establish confirmation dialogs, permissions, rollback, or audit behavior.",
  ],
  [
    "ERP handoff",
    "ERP integration is part of the confirmed workflow. API endpoints, file transfers, synchronization, retries, and transaction boundaries remain unspecified.",
  ],
] as const;
