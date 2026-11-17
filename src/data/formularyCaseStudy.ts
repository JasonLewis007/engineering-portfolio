import type { CaseStudyScreenshot } from "../types/caseStudy";
export const formularyScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "hub",
    title: "01 / One hub, three entry points",
    description:
      "The main hub separates Formulas, Inventory, and Check Inventory so users can choose the workflow they need. Employer branding is concealed in this supplied redacted image.",
    alt: "Redacted Formula and Inventory Hub with Formulas, Inventory, and Check Inventory cards",
    width: 2048,
    height: 1221,
    asset: "hub-overview.png",
  },
  {
    id: "formulas",
    title: "02 / Formula Manager",
    description:
      "Create a new formula and item group, add a formula to an existing item group, edit an item group, or edit a formula. The supplied screenshot shows task entry points rather than formula contents.",
    alt: "Redacted Formula Manager showing four formula creation and maintenance actions with empty selection controls",
    width: 2048,
    height: 1227,
    asset: "formula-manager.png",
  },
  {
    id: "inventory",
    title: "03 / Inventory Manager",
    description:
      "Create an inventory item, maintain inventory master information, or edit inventory and warehouse-specific information. No actual inventory records are displayed.",
    alt: "Redacted Inventory Manager showing create item, edit inventory master, and edit inventory item actions",
    width: 2048,
    height: 1222,
    asset: "inventory-manager.png",
  },
  {
    id: "reorder",
    title: "04 / Synthetic inventory reorder report",
    description:
      "Illustrative report with fictional item codes, descriptions, stock quantities, reorder points, and quantities on order. It is not an actual production report and does not establish the application's reorder calculation or purchase-order automation.",
    alt: "Synthetic demo reorder notice with six fictional items and three marked below their sample reorder point; not a production report",
    width: 1600,
    height: 1050,
    asset: "reorder-report-synthetic.png",
  },
];
export const formulaTasks = [
  "Create a new formula and item group",
  "Add a formula to an existing item group",
  "Edit an existing item group",
  "Edit an existing formula",
] as const;
export const inventoryTasks = [
  "Create new inventory items",
  "Edit inventory master information",
  "Edit inventory and warehouse-specific information",
] as const;
export const formularyConsiderations = [
  [
    "A user-facing entry point",
    "Replacing backend-only formula entry means giving users dedicated tasks for creating and maintaining formula records.",
  ],
  [
    "Formula and item-group relationships",
    "The Formula Manager distinguishes creating a new item group from adding a formula to an existing group. The case study does not infer underlying schema or validation rules.",
  ],
  [
    "Master and warehouse context",
    "The Inventory Manager separates inventory master maintenance from inventory-specific and warehouse-level information.",
  ],
  [
    "Visibility without overclaiming",
    "The hub provides a Check Inventory entry point for current levels, warehouse products, and available quantities. Its detailed lookup screen has not been supplied.",
  ],
] as const;
