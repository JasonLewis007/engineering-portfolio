import type { Project } from "../types/project";
export const shippingProject: Project = {
  slug: "enterprise-shipping-management-suite",
  featured: true,
  status: "Fully deployed in production",
  number: "01",
  category: "ENTERPRISE APPLICATIONS",
  title: "Enterprise Shipping Management Suite",
  icon: "shipping",
  summary:
    "End-to-end ownership of two integrated production applications, coordinated through SQL Server for truck arrival tracking and shipping verification. Since implementation, the owner has observed no wrong-load errors.",
  stack: ["C#", ".NET 8", "WPF", "XAML", "SQL Server", "T-SQL"],
  problem:
    "Shipping operations require accurate shipment identification, driver check-in, endorsement confirmation, shipment verification, document readiness, and communication between drivers and shipping employees.",
  responsibilities:
    "Jason Lewis independently planned, designed, architected, implemented, integrated, tested, troubleshot, and deployed the suite as its end-to-end software engineer and application owner.",
  approach:
    "A touchscreen-oriented Driver Check-In Kiosk and an employee-facing Shipping Dashboard coordinate shipping information through SQL Server.",
  architecture:
    "Two C#/.NET 8 WPF/XAML applications share shipping information through SQL Server, with T-SQL supporting database integration.",
  challenges:
    "Coordinate distinct user interfaces, shipment-specific business rules, consistent shipment status, clear touchscreen interactions, visible exceptions, and shipment completion and restoration.",
  outcome:
    "Recorded check-in events support truck arrival measurement and visibility. Since implementation, wrong-load errors have been eliminated according to the project owner's operational observations; this is not an audited statistic or controlled experimental result.",
  confirmation:
    "Screenshot publication permission remains a separate review. Four kiosk captures are withheld until redaction is complete.",
};
export const reportingProject: Project = {
  slug: "reporting-modernization",
  number: "02",
  category: "APPLICATION MODERNIZATION",
  title: "VOC/HAP Reporting Modernization",
  icon: "reporting",
  status: "Deployed and in use",
  summary:
    "Independently developed a deployed replacement for a legacy VB.NET application experiencing Crystal Reports runtime issues, bringing customer setup, PDF reporting, and recipient workflows together.",
  stack: [".NET 8", "WPF", "SQL Server", "QuestPDF"],
  problem:
    "Monthly customer reporting involves maintaining customer assignments and recipients, selecting reporting periods, generating documents, and distinguishing historical review from customer email distribution.",
  responsibilities:
    "Jason Lewis independently developed the application and owns the modernization work. The replacement is deployed and currently being used.",
  approach:
    "The desktop workflow organizes customer configuration, recipient management, historical PDF review, and monthly reporting and email processing.",
  architecture:
    "The documented portfolio stack is .NET 8, WPF, SQL Server, and QuestPDF. The workflow illustration describes application tasks rather than an infrastructure topology.",
  challenges:
    "Engineering considerations include maintainable reporting, customer and recipient associations, clear period selection, separating historical review from distribution, and communicating run status.",
  outcome:
    "A deployed application, currently in use, replaces the legacy VB.NET reporting application that was experiencing Crystal Reports runtime issues.",
  confirmation:
    "Confirm current stack details and employer permission before expanding technical or publication claims. Runtime root cause, email transport, and measured improvements have not been supplied.",
};
export const dailyShippingProject: Project = {
  slug: "daily-shipping-report",
  number: "03",
  category: "SHAREHOLDER REPORTING & MODERNIZATION",
  title: "Daily Shipping & Budget Reporting",
  icon: "daily-reporting",
  status: "Deployed in production",
  summary:
    "Designed, built, tested, and deployed a SQL-backed shipping and budget reporting application for shareholders, with current-month reporting and historical review, replacing a legacy VB reporting system.",
  stack: ["C#", ".NET 8", "SQL", "QuestPDF"],
  problem:
    "Shareholders need to review shipped, ordered, potential, and budget information for the month. The legacy VB application had reporting-day problems, Crystal Reports runtime issues, and no historical-data review.",
  responsibilities:
    "Jason Lewis designed, built, tested, and deployed the replacement application into production.",
  approach:
    "The application brings report-date selection, prior-workday context, shipping and budget previews, historical review, and PDF export into a desktop reporting workflow.",
  architecture:
    "C# and .NET 8 support the application, a SQL database provides its data background, and QuestPDF supports report output. The workflow diagram is conceptual, not an infrastructure topology.",
  challenges:
    "Engineering considerations include reporting-period clarity, shipped-versus-ordered context, current and historical review, and a consistent path from report preview to PDF output.",
  outcome:
    "A production-deployed replacement supports shareholder shipping and budget reporting and historical review, addressing the scope that the legacy VB application could not support adequately.",
  confirmation:
    "The exact potential formula, date/workday rules, database engine, runtime root cause, and any measured improvements require supporting details. Screenshot files need privacy review before integration.",
};
export const arAgingProject: Project = {
  slug: "ar-aging-report",
  number: "04",
  category: "RECEIVABLES REPORTING & MODERNIZATION",
  title: "A/R Aging Report Modernization",
  icon: "ar-aging",
  status: "Deployed in production",
  summary:
    "Built a production-deployed C# and .NET 8 receivables reporting application with customer, credit-method, invoice-date, aging, and territory criteria, plus PDF and Excel output and historical reporting.",
  stack: ["C#", ".NET 8", "QuestPDF", "Excel export"],
  problem:
    "The previous reporting workflow had incorrect data, Crystal Reports runtime problems, and limitations around historical reporting. Users needed a useful snapshot of open customer receivables and aging to prioritize collections.",
  responsibilities: "Jason Lewis built the A/R Aging Report application.",
  approach:
    "Select all or particular customers, credit method, invoice date, minimum aging days, and territories; preview results, then export a PDF or Excel report.",
  architecture:
    "C# and .NET 8 support the application, with QuestPDF for PDF output and an Excel export workflow. Database engine, UI framework, and Excel library are not specified.",
  challenges:
    "Engineering considerations include reporting criteria, aging interpretation, historical context, and consistent preview and export workflows.",
  outcome:
    "The application is deployed and in production, providing a snapshot of outstanding customer receivables, open balances, age categories, historical reporting, and PDF and Excel output. The owner reports that it addressed incorrect data and Crystal Reports runtime problems.",
  confirmation:
    "Exact aging rules, credit handling, data validation evidence, historical reconstruction, database engine, and Excel library remain unconfirmed. No measured collection or financial improvement is claimed.",
};
export const projects: readonly Project[] = [
  shippingProject,
  reportingProject,
  dailyShippingProject,
  arAgingProject,
  {
    slug: "manufacturing-erp",
    number: "05",
    category: "DATA & BUSINESS WORKFLOWS",
    title: "Manufacturing & ERP Workflow Engineering",
    icon: "manufacturing",
    summary:
      "Engineering the data and application workflows behind manufacturing, inventory, reporting, and ERP operations.",
    stack: ["SQL Server", "T-SQL", "Access/VBA", ".NET", "ERP integrations"],
    problem:
      "Manufacturing and production work depends on connected business processes. Inventory, reporting, and ERP-related workflows need engineering that reflects operational requirements and existing systems.",
    responsibilities:
      "The engineering context includes business-critical manufacturing, production, inventory, reporting, and ERP-related workflows using SQL Server, T-SQL, Access/VBA, and .NET.",
    approach:
      "Work at the intersection of applications and data, with attention to existing business rules, maintainability, troubleshooting, and the way information moves through operational processes.",
    architecture:
      "SQL Server and T-SQL support data engineering, alongside Access/VBA, .NET, and ERP integrations. This is a technology overview, not a diagram or disclosure of actual internal architecture.",
    challenges:
      "Existing business workflows can place constraints on modernization. Balancing compatibility, data correctness, and maintainability is an engineering consideration; specific implementation decisions are not disclosed.",
    outcome:
      "This portfolio entry describes an area of enterprise engineering responsibility. Specific delivered changes and business outcomes require confirmation; no quantitative impact is claimed.",
    confirmation:
      "Confirm representative public examples, individual responsibilities, and nonconfidential outcomes.",
  },
];
export const technologies = [
  "C#",
  ".NET 8",
  "WPF",
  "XAML",
  "SQL Server",
  "T-SQL",
  "Access/VBA",
  "VB.NET",
  "React",
  "TypeScript",
  "JavaScript",
  "REST APIs",
  "Git",
  "GitHub",
] as const;
