interface SkillCategory {
  readonly title: string;
  readonly skills: readonly string[];
  readonly description: string;
}

export const skillCategories: readonly SkillCategory[] = [
  {
    title: ".NET & application architecture",
    skills: [
      "C#",
      ".NET 8",
      "WPF",
      "XAML",
      "MVVM",
      "Layered architecture",
      "Service/repository patterns",
    ],
    description:
      "Enterprise desktop applications and legacy modernization, with presentation, business logic, and data access organized into clear layers.",
  },
  {
    title: "Databases & data engineering",
    skills: [
      "SQL Server",
      "T-SQL",
      "MySQL",
      "MongoDB",
      "Access",
      "Stored procedures",
      "Database design",
      "Query optimization",
      "SSIS",
    ],
    description:
      "Application data models, transactional workflows, database queries, and operational data integration.",
  },
  {
    title: "Full-stack & web development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MERN stack",
      "REST APIs",
      "HTML",
      "CSS",
      "Vite",
    ],
    description:
      "Web applications, backend services, responsive interfaces, and database integrations. This portfolio also applies React and TypeScript.",
  },
  {
    title: "Languages & legacy systems",
    skills: [
      "C#",
      "Python",
      "VB.NET",
      "VBA",
      "JavaScript",
      "T-SQL",
      "C++",
      "Java",
      "WinForms",
      "Excel/VBA",
    ],
    description:
      "Application logic, scripting, and modernization across established systems. C++ and Java are additional languages in my toolkit.",
  },
  {
    title: "Enterprise integrations & reporting",
    skills: [
      "REST APIs",
      "ERP integrations",
      "SSRS",
      "Crystal Reports",
      "QuestPDF",
      "Automated reporting",
    ],
    description:
      "Connected business workflows, operational reporting, and document generation. Project-specific delivery status is described in the case studies.",
  },
  {
    title: "AI-assisted development",
    skills: ["ChatGPT", "OpenAI Codex", "Claude", "GitHub Copilot"],
    description:
      "Use AI tools for architecture, refactoring, debugging, SQL, testing, documentation, and code review while retaining ownership of technical decisions and production implementation.",
  },
  {
    title: "Development & delivery practices",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Requirements gathering",
      "Testing",
      "Code review",
      "Documentation",
      "Production support",
    ],
    description:
      "Work across the software lifecycle, from requirements and design to deployment, troubleshooting, and ongoing enhancements.",
  },
  {
    title: "Platforms & systems",
    skills: [
      "Azure",
      "Docker",
      "Windows Server",
      "Microsoft 365",
      "Exchange Online",
      "Application deployment",
    ],
    description:
      "Infrastructure and delivery tools supporting application development and enterprise operations, alongside server and account administration.",
  },
  {
    title: "Networking & identity",
    skills: [
      "Cisco Meraki",
      "Firewalls",
      "LAN/WAN",
      "VLANs",
      "VPN",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Active Directory",
      "Group Policy",
      "Duo MFA",
      "Endpoint security",
      "Identity & access management",
    ],
    description:
      "Supporting enterprise connectivity, secure remote access, network segmentation, account lifecycles, and security troubleshooting.",
  },
];

interface ExperienceEntry {
  readonly employer: string;
  readonly title: string;
  readonly period: string;
  readonly context: string;
  readonly heading: string;
  readonly summary: string;
  readonly responsibilities: readonly string[];
}

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    employer: "HarperLove Adhesives LLC",
    title: "Software Engineer / IT Specialist",
    period: "2023–Present",
    context: "CURRENT ROLE · CHARLOTTE, NC",
    heading: "Applications, architecture, and operational workflows.",
    summary:
      "Develop, deploy, and support enterprise applications for manufacturing, warehouse, financial, laboratory, inventory, shipping, and administrative operations.",
    responsibilities: [
      "Architect C#/.NET WPF applications using WPF/XAML, MVVM, service and business-logic layers, repository and data-access layers, and SQL Server.",
      "Modernize VB.NET, VBA, Access, Excel/VBA, and WinForms applications while preserving operational workflows and data integrity.",
      "Design SQL Server databases, stored procedures, transactional workflows, and T-SQL queries; support reporting with SSRS and Crystal Reports.",
      "Build automation with C#, Python, SQL, and scripting for monitoring, reporting, and notifications.",
      "Own requirements, technical design, testing, source control, deployment, documentation, production troubleshooting, and enhancements.",
      "Use ChatGPT, OpenAI Codex, Claude, and GitHub Copilot for development, modernization, debugging, SQL, testing, documentation, and code review while retaining ownership of architecture and implementation.",
      "Support Cisco Meraki networking, Windows Server, Microsoft 365, Exchange Online, Active Directory, identity management, and endpoint security.",
      "Partner with business users, operational teams, and executive leadership to translate requirements and explain technical decisions.",
    ],
  },
  {
    employer: "Full Stack Solutions LLC",
    title: "Full Stack Developer",
    period: "2022–2023",
    context: "PREVIOUS ROLE · CHARLOTTE, NC",
    heading: "Full-stack applications and connected services.",
    summary:
      "Developed web applications using MongoDB, Express.js, React, and Node.js, connecting responsive interfaces with backend services and application data.",
    responsibilities: [
      "Built REST APIs, backend services, authentication workflows, responsive React interfaces, and database integrations.",
      "Designed application data models and optimized database queries.",
      "Used Git/GitHub and CI/CD practices across development, testing, and deployment.",
    ],
  },
];
