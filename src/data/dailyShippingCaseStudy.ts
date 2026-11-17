import type { CaseStudyScreenshot } from "../types/caseStudy";

export const dailyShippingScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "daily-report-setup",
    title: "01 / Reporting dates & workday context",
    description:
      "The report screen presents request and date-range inputs, month boundaries, workday indicators, and a prior-workday snapshot alongside the reporting workflow.",
    alt: "AI-assisted privacy-edited render of Daily Shipping Report date controls and prior-workday context",
    width: 1627,
    height: 967,
    asset: "daily-01-report-dates.png",
  },
  {
    id: "daily-report-controls",
    title: "02 / Preview & export controls",
    description:
      "Calculate Dates, Preview Report, and Export PDF controls make the report workflow explicit. The preview organizes shipped, ordered, potential, and budget measures in pounds and dollars.",
    alt: "AI-assisted privacy-edited render of Daily Shipping Report preview area and report action controls",
    width: 2122,
    height: 741,
    asset: "daily-02-preview-controls.png",
  },
  {
    id: "daily-report-current",
    title: "03 / Current-month shipping & budget context",
    description:
      "The populated view brings prior-workday information and month-to-date shipped, ordered, potential, and budget measures into a single report preview.",
    alt: "AI-assisted privacy-edited render of Daily Shipping Report populated month-to-date overview",
    width: 1624,
    height: 968,
    asset: "daily-03-current-month.png",
  },
  {
    id: "daily-report-detail",
    title: "04 / Detailed report review",
    description:
      "The detailed preview organizes reporting rows with region, territory, inventory, shipping, order, potential, and budget columns for review before export.",
    alt: "AI-assisted privacy-edited render of Daily Shipping Report detailed reporting grid",
    width: 1625,
    height: 968,
    asset: "daily-04-report-detail.png",
  },
  {
    id: "daily-report-pdf",
    title: "05 / Fictional sample report",
    description:
      "Recreated portfolio illustration with entirely fictional regions, dates, and figures. It shows reporting totals and a budget comparison, not an actual production export. For this sample only, potential equals shipped plus ordered; the production formula is not documented here.",
    alt: "Fictional sample shipping report with regional totals and a shipped-sales versus budget chart; no company data",
    width: 1440,
    height: 1222,
    asset: "daily-05-fictional-sample.png",
  },
];

export const dailyReportMeasures = [
  ["Shipped", "Review shipped activity in the reporting period."],
  ["Ordered", "Review ordered activity alongside shipped information."],
  [
    "Potential",
    "Reflects shipped versus ordered activity and can change daily.",
  ],
  ["Budget", "Compare the reporting picture with the month's budget."],
] as const;

export const dailyReportConsiderations = [
  [
    "Reporting-period clarity",
    "The legacy application had problems showing the correct reporting days. The new interface exposes date selection, month boundaries, and workday context.",
  ],
  [
    "A changing operational picture",
    "Shipped, ordered, and potential information needs reporting-period context. Potential reflects shipped-versus-ordered activity and can change from day to day.",
  ],
  [
    "Historical review",
    "Users can review historical reports, expanding the reporting workflow beyond the current month.",
  ],
  [
    "Preview and report output",
    "A preview-to-PDF workflow gives users distinct review and export steps. QuestPDF is the confirmed report library.",
  ],
] as const;
