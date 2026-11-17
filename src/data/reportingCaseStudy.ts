import type { CaseStudyScreenshot } from "../types/caseStudy";

export const reportingScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "voc-hap-01-dashboard",
    title: "Reporting dashboard",
    description:
      "Reporting overview and workflow entry points. Reporting-period, last-run and result values are concealed.",
    alt: "AI-assisted redacted view of the VOC/HAP reporting dashboard screen",
    width: 1384,
    height: 1136,
    asset: "voc-hap-01-dashboard.png",
  },
  {
    id: "voc-hap-02-customer-management",
    title: "Customer management",
    description:
      "Customer setup and reporting controls; all table records are concealed.",
    alt: "AI-assisted redacted view of the VOC/HAP customer management screen",
    width: 1625,
    height: 968,
    asset: "voc-hap-02-customer-management.png",
  },
  {
    id: "voc-hap-03-add-customer",
    title: "Add customer",
    description:
      "Customer setup and recipient-assignment form; identifier and background records concealed.",
    alt: "AI-assisted redacted view of the VOC/HAP add customer screen",
    width: 1347,
    height: 1168,
    asset: "voc-hap-03-add-customer.png",
  },
  {
    id: "voc-hap-04-edit-customer",
    title: "Edit customer",
    description:
      "Customer configuration and recipient-assignment form; entered values and background records concealed.",
    alt: "AI-assisted redacted view of the VOC/HAP edit customer screen",
    width: 1293,
    height: 1216,
    asset: "voc-hap-04-edit-customer.png",
  },
  {
    id: "voc-hap-05-recipient-management",
    title: "Recipient management",
    description:
      "Recipient maintenance controls; all names, email addresses, identifiers and table records concealed.",
    alt: "AI-assisted redacted view of the VOC/HAP recipient management screen",
    width: 1637,
    height: 961,
    asset: "voc-hap-05-recipient-management.png",
  },
  {
    id: "voc-hap-06-add-recipient",
    title: "Add recipient",
    description:
      "Recipient-details form; identifier and background records concealed.",
    alt: "AI-assisted redacted view of the VOC/HAP add recipient screen",
    width: 1454,
    height: 1082,
    asset: "voc-hap-06-add-recipient.png",
  },
  {
    id: "voc-hap-07-edit-recipient",
    title: "Edit recipient",
    description:
      "Recipient-details form; all entered values and background records concealed.",
    alt: "AI-assisted redacted view of the VOC/HAP edit recipient screen",
    width: 1484,
    height: 1060,
    asset: "voc-hap-07-edit-recipient.png",
  },
  {
    id: "voc-hap-08-historical-report",
    title: "Historical PDF report",
    description:
      "Customer/date-range report review; date values concealed. The visible UI distinguishes this action from sending emails.",
    alt: "AI-assisted redacted view of the VOC/HAP historical pdf report screen",
    width: 1393,
    height: 1129,
    asset: "voc-hap-08-historical-report.png",
  },
  {
    id: "voc-hap-09-monthly-email-run",
    title: "Monthly email run",
    description:
      "Monthly report/email confirmation controls; reporting-period values concealed.",
    alt: "AI-assisted redacted view of the VOC/HAP monthly email run screen",
    width: 1520,
    height: 1034,
    asset: "voc-hap-09-monthly-email-run.png",
  },
];

export const reportingConsiderations = [
  [
    "Maintainable reporting",
    "Modernization provides a current application context for the customer-reporting workflow previously handled by the VB.NET application.",
  ],
  [
    "Customer & recipient associations",
    "Customer configuration and recipient maintenance are connected tasks: report assignments and email destinations need to be understandable to the user.",
  ],
  [
    "Reporting-period clarity",
    "Historical review lets users choose a customer and date range; the monthly confirmation screen presents the reporting period before processing.",
  ],
  [
    "Review versus distribution",
    "Historical PDF review explicitly does not send customer emails or update email history, keeping it distinct from the monthly distribution workflow.",
  ],
  [
    "Run confirmation & visibility",
    "The monthly workflow presents a confirmation step, while the dashboard organizes last-run and result information. Edited images conceal those operational values.",
  ],
] as const;
