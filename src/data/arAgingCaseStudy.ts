import type { CaseStudyScreenshot } from "../types/caseStudy";
export const arAgingImages: readonly CaseStudyScreenshot[] = [
  {
    id: "ar-criteria",
    title: "01 / Report criteria",
    description:
      "Choose report type, sort method, credit method, invoice date, minimum aging days, and territory range. The interface also exposes territory grouping. Values and development overlays are concealed in this privacy-edited render.",
    alt: "Privacy-edited A/R Aging application report criteria and empty preview",
    width: 1380,
    height: 1140,
    asset: "ar-01-criteria.png",
  },
  {
    id: "ar-preview",
    title: "02 / Receivables preview",
    description:
      "The preview organizes customer and invoice information alongside aging columns and open balances. Customer records, dates, IDs, counts, and financial values are concealed.",
    alt: "Privacy-edited A/R Aging preview with customer and invoice records concealed",
    width: 1629,
    height: 965,
    asset: "ar-02-preview.png",
  },
  {
    id: "ar-pdf",
    title: "03 / Fictional PDF-style sample",
    description:
      "Recreated portfolio illustration using five fictional customers and a $10,000 sample balance. Names, dates, IDs, and amounts are invented. Sample bucket rules are disclosed in the image and do not document production aging logic.",
    alt: "Fictional PDF-style A/R aging report with five demo customers and aging totals; no company data",
    width: 1600,
    height: 992,
    asset: "ar-03-fictional-pdf.png",
  },
  {
    id: "ar-excel",
    title: "04 / Fictional Excel-style sample",
    description:
      "Spreadsheet-style illustration of the same fictional records and totals. This is an image illustrating structured output, not an actual Excel export or downloadable workbook.",
    alt: "Fictional Excel-style receivables table showing the same demo records as the PDF-style sample",
    width: 1600,
    height: 866,
    asset: "ar-04-fictional-excel.png",
  },
];
export const arCriteria = [
  ["Customer scope", "Review all customers or choose particular customers."],
  ["Credit method", "Select a credit-method criterion for the report."],
  [
    "Invoice date",
    "Choose the invoice-date criterion for the reporting request.",
  ],
  ["Minimum aging days", "Focus the request using a minimum-aging selection."],
  [
    "Territories",
    "Select a territory range, with an option to group by territory.",
  ],
  ["Preview and output", "Review results before PDF or Excel export."],
] as const;
export const arConsiderations = [
  [
    "Reporting correctness",
    "Incorrect reporting data was a driver for the replacement. Customer, date, credit, and territory criteria provide the context for reviewing a receivables snapshot.",
  ],
  [
    "Aging interpretation",
    "Age categories help users identify overdue accounts. Exact boundaries, the aging reference date, and credit treatment depend on business rules that are not documented in this case study.",
  ],
  [
    "Historical context",
    "Historical reporting was part of the problem addressed. The case study does not assume how prior balances are reconstructed or stored.",
  ],
  [
    "Preview and export",
    "PDF and Excel serve different review needs. Matching criteria and report scope across output formats is an engineering consideration; no particular synchronization mechanism is claimed.",
  ],
] as const;
