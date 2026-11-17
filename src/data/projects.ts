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
export const projects: readonly Project[] = [
  shippingProject,
  reportingProject,
  {
    slug: "manufacturing-erp",
    number: "03",
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
