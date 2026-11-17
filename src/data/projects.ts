import type { Project } from "../types/project";
export const projects: readonly Project[] = [
  {
    slug: "enterprise-shipping",
    number: "01",
    category: "ENTERPRISE APPLICATIONS",
    title: "Enterprise Shipping Management Suite",
    icon: "shipping",
    summary:
      "Connecting driver check-in, order validation, and shipping operations in a cohesive enterprise workflow.",
    stack: ["C#", ".NET 8", "WPF", "XAML", "SQL Server"],
    problem:
      "Shipping operations bring together driver information, order requirements, and shipment validation. The engineering problem is to make those steps understandable and consistent across a kiosk and an operational dashboard.",
    responsibilities:
      "Engineering work spans driver check-in, order lookup and validation, item and weight confirmation, license endorsement requirements, and driver, truck, and trailer information.",
    approach:
      "The suite integrates a driver check-in kiosk with an operational shipping dashboard. Its workflows bring order requirements and shipment confirmation into the same application context.",
    architecture:
      "C# and .NET 8 support the application, with WPF and XAML for desktop interfaces and SQL Server for data workflows. This public overview intentionally omits internal topology, schemas, and infrastructure.",
    challenges:
      "The central tradeoff is balancing a straightforward driver-facing flow with detailed operational validation. Handling incomplete information and keeping confirmation steps clear are key engineering considerations; implementation details require confirmation.",
    outcome:
      "The described scope brings shipping validation and operational visibility into a shared suite. Deployment status, adoption, and measured outcomes are not confirmed and are not represented as completed results.",
    confirmation:
      "Confirm individual ownership, deployment status, and any public outcomes before expanding this case study.",
  },
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
