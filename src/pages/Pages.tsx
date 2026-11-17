import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CodeXml,
  MapPin,
  Mail,
  ContactRound,
  FileText,
  Code2,
} from "lucide-react";
import {
  SectionHeading,
  TechBadge,
  CallToAction,
  ExternalLink,
} from "../components/Shared";
import { ProjectCard } from "../components/ProjectCard";
import { CaseStudyLayout } from "../components/CaseStudyLayout";
import { projects } from "../data/projects";
import { contact } from "../data/contact";
function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
export function About() {
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="ABOUT JASON"
        title="Software is a business tool. Engineering makes it work."
        description="A hands-on approach to enterprise applications, modernization, and the details that make software useful."
      />
      <div className="about-grid">
        <div className="prose">
          <h2>Understanding the work behind the workflow.</h2>
          <p>
            I’m Jason Lewis, a software engineer based in Charlotte, North
            Carolina. My engineering work centers on business-critical
            applications, databases, integrations, and operational workflows.
          </p>
          <p>
            I work with .NET, C#, and SQL Server across enterprise application
            development and modernization. That includes desktop interfaces,
            reporting workflows, and the connections between software and
            day-to-day business operations.
          </p>
          <p>
            I’m interested in the whole problem: what people need to accomplish,
            how information moves, and where existing systems make the work
            harder. My approach is practical—understand the requirements, make
            thoughtful technical choices, and keep the result maintainable.
          </p>
          <p>
            This portfolio also brings together React, TypeScript, and frontend
            development. The projects here describe enterprise engineering at a
            public level, with clear boundaries around confidentiality and
            unverified details.
          </p>
        </div>
        <aside className="profile-panel">
          <span className="profile-monogram" aria-hidden="true">
            JL<span>.</span>
          </span>
          <h2>Jason Lewis</h2>
          <p>Software Engineer</p>
          <p className="location">
            <MapPin size={16} aria-hidden="true" /> Charlotte, North Carolina
          </p>
          <div className="profile-specialties">
            .NET & C#
            <br />
            SQL Server & data workflows
            <br />
            Enterprise modernization
            <br />
            Full-stack development
          </div>
          <div className="profile-links">
            <ExternalLink className="text-link" href={contact.linkedIn}>
              Connect on LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
            </ExternalLink>
            <ExternalLink className="text-link" href={contact.github}>
              Find me on GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </ExternalLink>
          </div>
        </aside>
      </div>
      <CallToAction />
    </div>
  );
}
export function Projects() {
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="SELECTED WORK"
        title="Real workflows. Thoughtful engineering."
        description="A closer look at enterprise applications, legacy modernization, and manufacturing systems. Each case study focuses on the engineering context and the work involved."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="note-panel">
        <h2>A note on enterprise work</h2>
        <p>
          These are high-level descriptions of professional engineering
          contexts. Internal code, customer data, and proprietary details are
          excluded. Completion status and individual contributions are flagged
          where confirmation is needed.
        </p>
      </div>
      <CallToAction />
    </div>
  );
}
export function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  return project ? <CaseStudyLayout project={project} /> : <NotFound />;
}
export function Experience() {
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="PROFESSIONAL CONTEXT"
        title="Engineering close to the business."
        description="Hands-on enterprise software work connecting applications, data, and the operational processes they support."
      />
      <article className="experience-card">
        <div className="experience-meta">
          <span className="eyebrow">CURRENT ENGINEERING CONTEXT</span>
          <h2>HarperLove Adhesives LLC</h2>
          <p>Enterprise application & workflow engineering</p>
          <div className="confirmation">
            <p>
              <strong>Details to confirm</strong>
            </p>
            <p>
              Official job title and employment dates have not been supplied.
            </p>
          </div>
        </div>
        <div className="experience-body">
          <h3>Applications, data, and connected workflows.</h3>
          <p>
            The engineering context spans shipping operations, reporting
            modernization, manufacturing, production, inventory, and ERP-related
            workflows.
          </p>
          <ul>
            <li>
              Enterprise application development and modernization with C#,
              .NET, WPF, and XAML.
            </li>
            <li>
              SQL Server and T-SQL work supporting business-critical data and
              reporting workflows.
            </li>
            <li>
              Legacy application contexts involving Access/VBA and VB.NET.
            </li>
            <li>
              Application integrations and workflow engineering across
              operational systems.
            </li>
            <li>
              Maintainability, troubleshooting, and careful handling of business
              information.
            </li>
          </ul>
          <p className="muted">
            This describes the supplied engineering context. Formal title,
            dates, individual ownership, and specific delivery outcomes need
            confirmation.
          </p>
          <Link className="text-link" to="/projects">
            Explore related engineering work{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </article>
      <CallToAction />
    </div>
  );
}
const categories = [
  [
    "Languages",
    ["C#", "T-SQL", "VB.NET", "VBA", "TypeScript", "JavaScript"],
    "Application logic, database programming, and web interfaces.",
  ],
  [
    ".NET & desktop engineering",
    [".NET 8", "WPF", "XAML"],
    "Enterprise desktop applications and modernization.",
  ],
  [
    "Frontend & web development",
    ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"],
    "Responsive, accessible interfaces—including this portfolio.",
  ],
  [
    "Databases & data engineering",
    ["SQL Server", "T-SQL", "Access"],
    "Data workflows, reporting, and business rules.",
  ],
  [
    "Enterprise integrations & reporting",
    ["REST APIs", "ERP integrations", "QuestPDF", "Reporting workflows"],
    "Connected applications and document-generation work. Specific delivery status is noted in case studies.",
  ],
  [
    "Development tools & practices",
    [
      "Git",
      "GitHub",
      "Troubleshooting",
      "Maintainability",
      "Security-conscious design",
    ],
    "Practical tools and habits for understandable, maintainable software.",
  ],
] as const;
export function Skills() {
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="TECHNICAL TOOLKIT"
        title="The right tools. Applied with purpose."
        description="A practical toolkit spanning enterprise desktop applications, data engineering, integrations, and modern frontend development."
      />
      <div className="skills-grid">
        {categories.map(([title, skills, description], index) => (
          <section className="skill-card" key={title}>
            <span className="skill-index">
              0{index + 1} <Code2 size={19} aria-hidden="true" />
            </span>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="badges">
              {skills.map((skill) => (
                <TechBadge key={skill}>{skill}</TechBadge>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="disclosure">
        Technologies describe areas of work and this portfolio’s implementation,
        without proficiency scores or unsupported years-of-experience claims.
      </p>
      <CallToAction />
    </div>
  );
}
export function Contact() {
  return (
    <div className="container page-content">
      <PageHeading
        eyebrow="LET’S CONNECT"
        title="Let’s talk about meaningful engineering."
        description="For recruiters, hiring teams, and engineering leaders interested in enterprise applications, .NET development, or full-stack engineering."
      />
      <div className="contact-grid">
        <div className="contact-primary">
          <Mail size={32} aria-hidden="true" />
          <SectionHeading eyebrow="START A CONVERSATION" title="Get in touch.">
            Have a role, project, or engineering challenge in mind? Send me an
            email or connect on LinkedIn.
          </SectionHeading>
          <a className="button primary" href={`mailto:${contact.email}`}>
            Email Jason <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="location">
            <MapPin size={15} aria-hidden="true" /> Charlotte, North Carolina
          </p>
        </div>
        <div className="contact-options">
          <section className="contact-option">
            <Mail size={21} aria-hidden="true" />
            <div>
              <h2>Business email</h2>
              <p>
                <a
                  className="text-link contact-address"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </section>
          <section className="contact-option">
            <ContactRound size={21} aria-hidden="true" />
            <div>
              <h2>LinkedIn</h2>
              <p>
                <ExternalLink className="text-link" href={contact.linkedIn}>
                  Connect with Jason Lewis{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </ExternalLink>
              </p>
            </div>
          </section>
          <section className="contact-option">
            <CodeXml size={21} aria-hidden="true" />
            <div>
              <h2>GitHub</h2>
              <p>
                <ExternalLink className="text-link" href={contact.github}>
                  Explore JasonLewis007{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </ExternalLink>
              </p>
            </div>
          </section>
          <section className="contact-option">
            <FileText size={21} aria-hidden="true" />
            <div>
              <h2>
                Résumé <span>NOT YET PROVIDED</span>
              </h2>
              <p>A reviewed, public résumé will be added here.</p>
            </div>
          </section>
        </div>
      </div>
      <p className="disclosure">
        Email links open your email application. This site has no contact form
        and does not collect messages. LinkedIn and GitHub open in a new tab.
      </p>
    </div>
  );
}
export function NotFound() {
  return (
    <div className="container not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>A small detour.</h1>
      <p>
        The page you’re looking for doesn’t exist. Let’s get you back to the
        work.
      </p>
      <Link className="button primary" to="/">
        Back to home <ArrowRight size={18} aria-hidden="true" />
      </Link>
      <Link className="text-link" to="/projects">
        Explore projects
      </Link>
    </div>
  );
}
