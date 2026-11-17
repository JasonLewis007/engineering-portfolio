import type { CaseStudyScreenshot } from "../types/caseStudy";

export const kioskScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "pickup-lookup",
    title: "01 / Identify the pickup",
    description:
      "The driver enters a pickup number so the kiosk can retrieve the corresponding shipment. The touchscreen flow starts with one clear task.",
    alt: "Driver Check-In Kiosk pickup-number entry screen",
    width: 2048,
    height: 1222,
    withheldReason:
      "The supplied capture still contains a date and possible branding fragments. A fully redacted replacement is needed.",
  },
  {
    id: "endorsement",
    title: "02 / Confirm the required endorsement",
    description:
      "Shipment-specific rules prompt the driver to confirm any required specialized endorsement. This is driver self-attestation, not independent government credential verification.",
    alt: "Driver Check-In Kiosk specialized-endorsement self-attestation screen",
    width: 2048,
    height: 1226,
    withheldReason:
      "The supplied capture still contains a date and possible branding fragments. A fully redacted replacement is needed.",
  },
  {
    id: "pickup-confirmation",
    title: "03 / Verify the shipment",
    description:
      "The driver reviews pickup information, products, and shipment weight before confirming that the correct shipment has been selected.",
    alt: "Driver Check-In Kiosk shipment review and pickup-confirmation screen",
    width: 2048,
    height: 1232,
    withheldReason:
      "Customer and product information, shipment weights, and dates remain visible. The capture is withheld until redaction is complete.",
  },
  {
    id: "driver-information",
    title: "04 / Record the check-in",
    description:
      "The driver enters a name, truck number, and optional trailer number. The check-in is recorded in SQL Server and reflected in the Shipping Dashboard’s arrival state.",
    alt: "Driver Check-In Kiosk driver, truck, and optional trailer information form",
    width: 2048,
    height: 1229,
    withheldReason:
      "A pickup identifier and date remain visible. A fully redacted replacement is needed.",
  },
];

export const dashboardScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "truck-arrivals",
    title: "01 / Monitor active shipments & truck arrivals",
    description:
      "Kiosk check-ins drive Truck Arrived indicators on active shipments. Employees can inspect shipment details, Pulled / Not Pulled status, and completion actions. Operational labels and data are obscured in this redacted capture.",
    alt: "Redacted Shipping Dashboard active-shipment cards with green status areas and Pulled, Details, and Ship controls",
    width: 2048,
    height: 1176,
    asset: "dashboard-truck-arrivals.png",
  },
  {
    id: "recently-shipped",
    title: "02 / Review shipped orders & restore a shipment",
    description:
      "The recently shipped view supports shipping timestamps and Return to Shipping actions. Shipment data and timestamps are concealed in the supplied redacted image.",
    alt: "Redacted Shipping Dashboard recently shipped view showing green cards and Return to Shipping buttons",
    width: 2047,
    height: 1223,
    asset: "dashboard-recently-shipped.png",
  },
  {
    id: "missing-bol",
    title: "03 / Surface missing Bill of Lading exceptions",
    description:
      "Yellow shipment cards and explicit No BOL labels draw attention to document-readiness exceptions, with shipment details and completion controls available in the workflow.",
    alt: "Redacted Shipping Dashboard with yellow shipment cards, No BOL labels, and Not Pulled, Details, and Ship controls",
    width: 2048,
    height: 1225,
    asset: "dashboard-missing-bol.png",
  },
];

export const ownershipSteps = [
  ["Plan", "Requirements gathering and shipping-workflow planning."],
  [
    "Design",
    "Application and workflow design, technical architecture, and UI/UX design.",
  ],
  [
    "Build & integrate",
    "C# implementation, WPF/XAML interfaces, and SQL Server integration.",
  ],
  ["Validate & deploy", "Testing, troubleshooting, and production deployment."],
] as const;

export const shippingChallenges = [
  [
    "Two audiences, shared shipment data",
    "Connect the driver-facing kiosk and employee dashboard through SQL Server while keeping each interface focused on its users’ tasks.",
  ],
  [
    "Shipment-specific business rules",
    "Present endorsement requirements for the selected shipment and collect the driver’s confirmation at the appropriate step.",
  ],
  [
    "Consistent shipment status",
    "Coordinate check-in information, truck-arrival visibility, and active and shipped states across both applications.",
  ],
  [
    "A clear touchscreen workflow",
    "Guide drivers through pickup lookup, endorsement self-attestation, shipment review, and driver information in an understandable sequence.",
  ],
  [
    "Visible operational exceptions",
    "Make document-readiness and pulled-status exceptions recognizable through status labels and color-coded shipment cards.",
  ],
  [
    "Completion and restoration",
    "Support shipment completion, recently shipped history, timestamps, and return-to-shipping actions when a shipment needs to re-enter the workflow.",
  ],
] as const;
