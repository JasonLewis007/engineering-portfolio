import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCheck,
  UserRound,
  Grid3X3,
  TrendingUp,
} from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  formularyScreenshots,
  formulaTasks,
  inventoryTasks,
  formularyConsiderations,
} from "../data/formularyCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
import "../styles/formulary-case-study.css";
const sections = [
  ["hub-overview", "Overview"],
  ["hub-application", "Application hub"],
  ["hub-formulas", "Formulas"],
  ["hub-inventory", "Inventory"],
  ["hub-report", "Reorder report"],
  ["hub-outcomes", "Outcomes"],
] as const;
function jumpTo(id: string) {
  const target = document.getElementById(id);
  target?.focus({ preventScroll: true });
  target?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
    block: "start",
  });
}
export function FormularyCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container reporting-case-study formulary-case-study">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" />
        All projects
      </Link>
      <header className="reporting-hero">
        <div>
          <p className="eyebrow">
            CASE STUDY / ENTERPRISE APPLICATION DEVELOPMENT
          </p>
          <h1>{project.title}</h1>
          <p className="reporting-subtitle">
            From backend-only formula entry to a dedicated production
            application.
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={18} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · Application creator
            </span>
          </p>
          <p className="reporting-intro">
            {project.responsibilities} The Hub brings formula maintenance,
            inventory records, and inventory visibility into separate,
            user-facing workflows.
          </p>
          <button
            className="button primary"
            onClick={() => jumpTo("hub-application")}
          >
            Explore the application <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <aside
          className="reporting-context"
          aria-label="Application at a glance"
        >
          <p className="reporting-deployment">
            <CheckCheck size={18} aria-hidden="true" />
            {project.status}
          </p>
          <div className="reporting-context-step">
            <span className="eyebrow">FORMULAS · INVENTORY · VISIBILITY</span>
            <h2>
              One hub.
              <br />
              Focused workflows.
            </h2>
            <p>A C# and .NET 8 desktop application connected to SQL Server.</p>
          </div>
          <div className="formulary-hero-symbols" aria-hidden="true">
            <span>ƒ(x)</span>
            <span>
              <Grid3X3 size={28} />
            </span>
            <span>
              <TrendingUp size={28} />
            </span>
          </div>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="Formulary case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section className="reporting-section" id="hub-overview" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / BUSINESS PROBLEM & OWNERSHIP"
          title="Move formula entry into an application."
        >
          {project.problem}
        </SectionHeading>
        <div className="reporting-overview-grid">
          <div>
            <h3>Created for the workflow</h3>
            <p>
              {project.responsibilities} The application is fully deployed and
              operating in production.
            </p>
          </div>
          <div>
            <h3>Formula and inventory context</h3>
            <p>{project.approach}</p>
          </div>
        </div>
      </section>
      <section
        className="reporting-section reporting-single"
        id="hub-application"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="02 / APPLICATION HUB"
          title="Three clear places to start."
        >
          Formulas supports formula maintenance; Inventory supports record
          management; Check Inventory provides an entry point for stock and
          warehouse visibility.
        </SectionHeading>
        <aside
          className="reporting-image-disclosure"
          aria-label="Application screenshot privacy review"
        >
          <strong>Reviewed, redacted application screenshots</strong>
          <p>
            The three supplied application views conceal employer names and
            branding. They show navigation and task choices, not confidential
            formulas or inventory records. Dates and generic UI labels remain
            visible. The images below retain the supplied pixels and aspect
            ratios.
          </p>
        </aside>
        <ScreenshotGallery
          directory="formulary-inventory"
          screenshots={formularyScreenshots.slice(0, 1)}
          label="Formulary application hub"
        />
      </section>
      <section
        className="reporting-section reporting-single"
        id="hub-formulas"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="03 / FORMULA MANAGER"
          title="Create and maintain formula records."
        >
          Dedicated task entry points replace backend-only formula entry.
        </SectionHeading>
        <ul className="formulary-task-list">
          {formulaTasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <ScreenshotGallery
          directory="formulary-inventory"
          screenshots={formularyScreenshots.slice(1, 2)}
          label="Formula manager workflow"
        />
      </section>
      <section
        className="reporting-section reporting-single"
        id="hub-inventory"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="04 / INVENTORY MANAGER"
          title="Separate master records from item context."
        >
          Inventory maintenance has distinct entry points for creation, master
          information, and inventory or warehouse-specific updates.
        </SectionHeading>
        <ul className="formulary-task-list">
          {inventoryTasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <ScreenshotGallery
          directory="formulary-inventory"
          screenshots={formularyScreenshots.slice(2, 3)}
          label="Inventory manager workflow"
        />
        <div className="reporting-behavior-note">
          <p>
            <strong>Check Inventory:</strong> The hub describes searches for
            current inventory levels, products by warehouse, and available
            quantities. A detailed lookup screenshot has not been supplied, so
            no additional lookup interface is illustrated here.
          </p>
        </div>
      </section>
      <section
        className="reporting-section reporting-single"
        id="hub-report"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="05 / INVENTORY REORDER VISIBILITY"
          title="Illustrate stock and reorder context."
        >
          The supplied synthetic notice demonstrates stock, reorder points, and
          on-order quantities with fictional demo records.
        </SectionHeading>
        <aside
          className="reporting-image-disclosure"
          aria-label="Synthetic report disclosure"
        >
          <strong>Synthetic demo data — not a production report</strong>
          <p>
            All item codes, descriptions, quantities, and statuses in this image
            are fictional. This visual mockup illustrates reporting context; it
            is not an actual application export and does not document production
            reorder rules.
          </p>
        </aside>
        <ScreenshotGallery
          directory="formulary-inventory"
          screenshots={formularyScreenshots.slice(3)}
          label="Synthetic inventory reorder report"
        />
      </section>
      <section className="reporting-section">
        <SectionHeading
          eyebrow="06 / ENGINEERING CONSIDERATIONS"
          title="Clear tasks and record boundaries."
        />
        <div className="reporting-overview-grid">
          {formularyConsiderations.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="hub-outcomes" tabIndex={-1}>
        <SectionHeading
          eyebrow="07 / PRODUCTION OUTCOME & STACK"
          title="A dedicated application, operating in production."
        >
          {project.outcome}
        </SectionHeading>
        <p>{project.architecture}</p>
        <div className="badges">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </section>
      <section className="reporting-closing">
        <h2>Explore more engineering work.</h2>
        <div>
          <Link className="button primary" to="/projects">
            View projects <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="button secondary" to="/contact">
            Contact Jason
          </Link>
        </div>
      </section>
    </div>
  );
}
