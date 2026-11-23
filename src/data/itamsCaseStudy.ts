import type { CaseStudyScreenshot } from "../types/caseStudy";
export const itamsScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "dashboard",
    title: "01 / Dashboard",
    description:
      "Overview of total, assigned and unassigned assets, active employees, and device-type breakdown. Recent-asset rows are concealed. Visible counts are a captured operational snapshot, not performance or impact metrics.",
    alt: "Sanitized ITAMS dashboard with asset and employee summary cards, device breakdown, and concealed recent-asset records",
    width: 1887,
    height: 1149,
    asset: "01-dashboard.png",
  },
  {
    id: "assets",
    title: "02 / Assets",
    description:
      "Asset inventory management with add and edit controls and columns for identifiers, device type, manufacturer, model, serial number, and purchase date. Operational asset rows are concealed.",
    alt: "Sanitized ITAMS asset inventory screen showing column headings and add and edit controls with record values removed",
    width: 1897,
    height: 1146,
    asset: "02-assets.png",
  },
  {
    id: "employees",
    title: "03 / Employees",
    description:
      "Employee record management supports assignment context, with add, edit, and status controls. Employee table records are concealed; this view does not expose integration endpoints or authentication details.",
    alt: "Sanitized ITAMS employee management screen with employee record rows concealed",
    width: 1920,
    height: 1173,
    asset: "03-employees.png",
  },
  {
    id: "locations",
    title: "04 / Locations",
    description:
      "Location management provides shared technology-location context and active status. General location labels remain visible in the supplied sanitized capture.",
    alt: "ITAMS location management screen with general location categories and active-status controls",
    width: 1900,
    height: 1168,
    asset: "04-locations.png",
  },
  {
    id: "assign-return",
    title: "05 / Assign, return & transfer",
    description:
      "Assign an asset to an employee or company location, return it, or transfer it while preserving history. Selection fields and current-asset values are concealed or empty in this view.",
    alt: "Sanitized ITAMS assign and return workspace showing employee or company-location assignment options and Assign, Return, and Transfer actions",
    width: 1927,
    height: 1153,
    asset: "05-assign-return.png",
  },
  {
    id: "reports",
    title: "06 / Management reports",
    description:
      "Inventory, device type, status, age/warranty, employee/location assignment, and assignment-history report categories. Excel exports and branded PDF reports are owner-confirmed capabilities; the screenshot shows report choices rather than report contents.",
    alt: "ITAMS Reports screen showing inventory and assignment report categories including assignment history and asset age and warranty",
    width: 1905,
    height: 1159,
    asset: "06-reports.png",
  },
];
export const itamsCapabilities = [
  [
    "Asset inventory",
    "Track laptops, desktops, monitors, printers, phones, and other technology assets with manufacturer, model, serial number, purchase date, warranty expiration, and status.",
  ],
  [
    "Employee and location context",
    "Associate equipment with people and company locations, including assets used in-house and out in the field.",
  ],
  [
    "Assignments and movements",
    "Assign, return, and transfer equipment with preserved previous-assignment and movement history.",
  ],
  [
    "Audit history",
    "Review historical assignments and movements for accountability. No particular immutable logging or security mechanism is asserted.",
  ],
  [
    "Operational dashboard",
    "Review inventory totals, assignment status, active employees, and device-type breakdown without treating screenshot counts as outcome metrics.",
  ],
  [
    "Management reporting",
    "Inventory and assignment report categories support management visibility, with owner-confirmed Excel exports and branded PDF reports. Report libraries are unspecified.",
  ],
] as const;
export const itamsConsiderations = [
  [
    "Inventory and assignment context",
    "Equipment records, employees, and locations need to be understandable together across departmental and field usage.",
  ],
  [
    "Preserved history",
    "Transfers and returns should remain understandable alongside current assignment state. Preserved movement history is confirmed; schema and transaction details are not supplied.",
  ],
  [
    "Existing Microsoft integrations",
    "Microsoft Entra ID and Intune already supply employee and managed-device information automatically. No Graph endpoints, sync schedule, bidirectional behavior, or mapping rules are assumed.",
  ],
] as const;
