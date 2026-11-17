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
export const projects: readonly Project[] = [
  shippingProject,
  {
    slug: "reporting-modernization",
    number: "02",
    category: "APPLICATION MODERNIZATION",
    title: "VOC/HAP Reporting Modernization",
    icon: "reporting",
    summary:
      "Modernizing legacy monthly reporting with a maintainable desktop application and structured PDF workflows.",
    stack: [".NET 8", "WPF", "SQL Server", "QuestPDF"],
    problem:
      "Legacy monthly reporting workflows can be difficult to maintain and evolve. This modernization effort focuses on a maintainable application for reporting, document generation, and recipient-related workflows.",
    responsibilities:
      "The project scope covers monthly reporting, PDF generation, customer and recipient management, and email delivery. These are areas of work and planned capability, not a claim that every feature is deployed.",
    approach:
      "Modernize the reporting workflow using .NET 8 and WPF, SQL Server data workflows, and QuestPDF for document generation. Keep the public description focused on the application’s purpose rather than confidential report content.",
    architecture:
      ".NET 8, WPF, SQL Server, and QuestPDF form the described technology stack. Exact component boundaries, delivery infrastructure, and data models are intentionally not published.",
    challenges:
      "Modernization must account for existing reporting expectations while improving maintainability. Report correctness, document layout, and recipient handling are considerations; specific validation practices and delivery behavior need confirmation.",
    outcome:
      "This is an ongoing modernization scope. Feature completion, deployment milestones, and operational results require confirmation. No reporting, PDF, or email functionality is claimed to be fully delivered here.",
    confirmation:
      "Confirm which reporting, PDF, recipient-management, and email capabilities are implemented, tested, and deployed.",
  },
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
