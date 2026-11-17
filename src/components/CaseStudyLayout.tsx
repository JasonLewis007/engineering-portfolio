import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import type { Project } from "../types/project";
import { TechBadge } from "./Shared";
export function CaseStudyLayout({ project }: { project: Project }) {
  const sections = [
    ["Project overview", project.summary],
    ["The engineering problem", project.problem],
    ["Role & responsibilities", project.responsibilities],
    ["Technical approach", project.approach],
    ["Architecture & technologies", project.architecture],
    ["Challenges & tradeoffs", project.challenges],
    ["Results & current scope", project.outcome],
  ];
  return (
    <div className="container page-content">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" /> All projects
      </Link>
      <header className="page-heading">
        <p className="eyebrow">
          CASE STUDY {project.number} / {project.category}
        </p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="badges">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </header>
      <div className="case-layout">
        <div className="case-sections">
          {sections.map(([title, content], index) => (
            <section key={title}>
              <span className="case-index">0{index + 1}</span>
              <div>
                <h2>{title}</h2>
                <p>{content}</p>
              </div>
            </section>
          ))}
        </div>
        <aside className="case-aside">
          <LockKeyhole size={22} aria-hidden="true" />
          <h2>Shared with discretion.</h2>
          <p>
            This is a public, high-level engineering overview. Proprietary code,
            customer information, internal systems, schemas, and screenshots are
            excluded.
          </p>
          <div className="confirmation">
            <span className="eyebrow">DETAILS TO CONFIRM</span>
            <p>{project.confirmation}</p>
          </div>
          <Link className="text-link" to="/contact">
            Discuss the work <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
