import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CodeXml,
  MapPin,
  Blocks,
  RefreshCw,
  Database,
  Workflow,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { EngineeringVisual } from "../components/EngineeringVisual";
import {
  SectionHeading,
  TechBadge,
  CallToAction,
  ExternalLink,
} from "../components/Shared";
import { ProjectCard } from "../components/ProjectCard";
import { projects, technologies } from "../data/projects";
const principles = [
  [
    Blocks,
    "Practical architecture",
    "Structure that serves the business, with clear boundaries and room to evolve.",
  ],
  [
    RefreshCw,
    "Thoughtful modernization",
    "Bring established applications forward while respecting the workflows people rely on.",
  ],
  [
    Database,
    "Database engineering",
    "Work where application behavior, business rules, and dependable data meet.",
  ],
  [
    Workflow,
    "Operational reliability",
    "Connect real-world steps into clear, consistent application workflows.",
  ],
  [
    Wrench,
    "Maintainability & troubleshooting",
    "Build for the next change, and take a methodical approach to understanding problems.",
  ],
  [
    ShieldCheck,
    "Security-conscious development",
    "Treat confidentiality, careful data handling, and a small attack surface as design concerns.",
  ],
] as const;
export function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span /> SOFTWARE ENGINEER · CHARLOTTE, NC
          </p>
          <h1>
            Engineering Software <br />
            That Solves{" "}
            <span>
              Real
              <br className="hero-break" /> Business Problems.
            </span>
          </h1>
          <p className="hero-description">
            I’m Jason Lewis. I build and modernize enterprise applications,
            connect systems, and turn complex business workflows into dependable
            software.
          </p>
          <p className="hero-specialties">
            .NET & C# <span>/</span> SQL Server <span>/</span> Full-Stack
            Development
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              View My Work <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <ExternalLink
              className="button secondary"
              href="https://github.com/JasonLewis007"
            >
              <CodeXml size={18} aria-hidden="true" /> GitHub Profile{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </ExternalLink>
          </div>
          <p className="hero-location">
            <MapPin size={14} aria-hidden="true" /> Charlotte, North Carolina{" "}
            <span>•</span> Enterprise-minded. Detail-driven.
          </p>
        </div>
        <EngineeringVisual />
      </section>
      <section className="stack-strip">
        <div className="container">
          <p className="eyebrow">THE TOOLS BEHIND THE WORK</p>
          <div className="stack-list">
            {technologies.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-title-row">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Engineering in practice."
          >
            Enterprise applications, modernization, and the systems that keep
            business moving.
          </SectionHeading>
          <Link className="text-link" to="/projects">
            All projects <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="disclosure">
          Enterprise work, shared responsibly. Case studies describe engineering
          scope without proprietary code or confidential business data.
        </p>
      </section>
      <section className="approach-section">
        <div className="container section">
          <SectionHeading
            eyebrow="HOW I THINK ABOUT SOFTWARE"
            title="Built for the real world."
          >
            Good engineering connects technical decisions to the people and
            processes they support.
          </SectionHeading>
          <div className="principles-grid">
            {principles.map(([Icon, title, description], i) => (
              <article className="principle" key={title}>
                <div className="principle-icon">
                  <Icon size={22} aria-hidden="true" />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="container section">
        <CallToAction />
      </div>
    </>
  );
}
