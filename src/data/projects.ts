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
export const formularyProject: Project = {
  slug: "formulary-inventory-hub",
  number: "06",
  category: "ENTERPRISE APPLICATION DEVELOPMENT",
  title: "Formulary & Inventory Hub",
  icon: "formulary",
  status: "Fully deployed in production",
  summary:
    "Modernizing backend-only formula entry with a dedicated production application for formula and inventory workflows.",
  stack: ["C#", ".NET 8", "SQL Server"],
  problem:
    "Formula entry previously relied on backend-only work. A dedicated application was needed to bring formula maintenance and related inventory workflows into a user-facing interface.",
  responsibilities:
    "Jason Lewis created the application to replace backend-only formula entry.",
  approach:
    "A central hub separates Formulas, Inventory, and Check Inventory entry points. Formula Manager and Inventory Manager organize creation and maintenance tasks.",
  architecture:
    "A C# and .NET 8 desktop application connected to SQL Server. The workflow overview is conceptual; no specific UI framework, ERP integration, or deployment method is asserted.",
  challenges:
    "Engineering considerations include clear task entry points, formula and item-group relationships, and the distinction between inventory master and warehouse-specific records.",
  outcome:
    "The application is fully deployed and operating in production, replacing backend-only formula entry with a dedicated interface for formula and inventory workflows.",
  confirmation:
    "Detailed inventory lookup screens, integration specifics, deployment methods, business rules, and measurable outcomes have not been supplied. The reorder report illustration uses entirely fictional data.",
};
export const heavenlyHomesProject: Project = {
  slug: "heavenly-homes",
  number: "07",
  category: "FULL-STACK APPLICATION DEVELOPMENT",
  title: "Heavenly Homes",
  icon: "heavenly-homes",
  status: "In Development",
  summary:
    "Building a faith-centered hospitality marketplace for vacation rentals, long-term stays, retreats, and community connections.",
  stack: [
    "React",
    "TypeScript",
    "C#/.NET",
    "SQL Server",
    "REST APIs",
    "MongoDB",
    "Docker",
  ],
  problem:
    "Typical rental discovery focuses on accommodation. Heavenly Homes aims to combine lodging with faith-centered hospitality, retreats, and community discovery.",
  responsibilities:
    "Jason Lewis is Technical Co-Founder / Lead Developer, developing the product vision and frontend preview while planning full-stack integration.",
  approach:
    "A cohesive experience for discovering stays, planning gatherings, and finding churches or parishes near a destination. Screenshots demonstrate UI concepts rather than verified live transactions or integrations.",
  architecture:
    "Owner-specified target stack: React, TypeScript, C#/.NET, SQL Server, REST APIs, MongoDB, and Docker. Application source was not supplied, so implementation and deployment of these layers have not been independently verified.",
  challenges:
    "Engineering themes include component-based UI, typed data models, reusable search/filter patterns, multi-journey UX, API-ready frontend design, and planned secure authentication and backend integration. These are development themes, not source-verified implementation claims.",
  outcome:
    "An in-development frontend preview communicates the hospitality marketplace vision. Backend integrations, live availability, and booking are under development.",
  confirmation:
    "Application repository, live URL, backend implementation, responsive source behavior, auth providers, data persistence, and hosting remain unverified. No launch, booking, payment, revenue, or user metrics are claimed.",
};
export const purchaseOrderProject: Project = {
  slug: "purchase-order-receiving-erp",
  number: "05",
  category: "PURCHASING & ERP WORKFLOWS",
  title: "Purchase Order Receiving & ERP Integration",
  icon: "manufacturing",
  status: "Deployed in production",
  summary:
    "Built a single-screen C# and .NET application for purchase-order receiving, editing, and adjustments, with SQL Server and updates sent to the ERP system.",
  stack: ["C#", ".NET", "SQL Server", "ERP integration"],
  problem:
    "Purchase-order work requires users to review vendor and order details, edit orders, and handle receiving adjustments in the context of the selected PO.",
  responsibilities:
    "Jason Lewis built the application. It is deployed and operating in production.",
  approach:
    "One screen brings PO loading, vendor information, order details, line items, editing, saving, receiving adjustments, and unreceiving into a single workspace.",
  architecture:
    "C# and .NET support the application, with SQL Server and updates sent to the ERP system. The exact ERP transfer mechanism is unconfirmed; no API protocol or file-import process is asserted.",
  challenges:
    "Engineering considerations include keeping changes tied to the selected PO, distinguishing editing from receipt adjustments, and communicating the ERP handoff without assuming undocumented safeguards.",
  outcome:
    "A deployed production application brings purchase-order editing and receiving work into one screen and sends updates to the ERP system.",
  confirmation:
    "The .NET version, UI framework, ERP transfer mechanism, transaction and validation behavior, financial adjustment details, and measured improvements have not been supplied. The screenshot shows the empty application layout, not a completed transaction.",
};
export const itamsProject: Project = {
  slug: "itams",
  number: "08",
  category: "ENTERPRISE APPLICATION / IT OPERATIONS",
  title: "ITAMS — IT Asset Management System",
  icon: "itams",
  status: "Deployed in Production",
  summary:
    "Designed and built an IT asset management application to track company equipment, assignments, transfers, returns, audit history, and management reporting.",
  stack: [
    "C#",
    ".NET",
    "WPF",
    "SQL Server",
    "Microsoft Entra ID",
    "Microsoft Intune",
  ],
  problem:
    "Technology assets distributed across departments, internal locations, and field assignments need centralized visibility and clear accountability for who holds equipment and where it is located.",
  responsibilities:
    "Jason Lewis designed and built ITAMS. The application is deployed in production; Microsoft integration behavior is confirmed by the owner without claiming sole authorship of each integration.",
  approach:
    "A WPF application brings asset inventory, employee and location records, assignment, return and transfer workflows, historical accountability, dashboards, and reporting into one system.",
  architecture:
    "C# and .NET with WPF and SQL Server, integrated with Microsoft Entra ID and Microsoft Intune. The existing integrations automatically retrieve employee and managed-device information. Exact .NET version, transport/API, authentication method, sync cadence, and mapping are not specified.",
  challenges:
    "Engineering considerations include employee and location assignment context, preserved movement history, inventory visibility, and using current employee and managed-device information from existing Microsoft integrations.",
  outcome:
    "A production-deployed system centralizes asset visibility, assignment accountability, movement history, and management reporting across in-house and field assets. No measured savings or ROI is claimed.",
  confirmation:
    "Integration mechanisms, data mapping, synchronization behavior, database schema, report libraries, and future enhancements require evidence before further technical claims. Screenshots conceal tabular records but retain counts and general location labels for owner review.",
};
export const projects: readonly Project[] = [
  shippingProject,
  heavenlyHomesProject,
  reportingProject,
  dailyShippingProject,
  arAgingProject,
  purchaseOrderProject,
  formularyProject,
  itamsProject,
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
