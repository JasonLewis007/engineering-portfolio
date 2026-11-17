import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCheck, FileText, UserRound } from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  arAgingImages,
  arCriteria,
  arConsiderations,
} from "../data/arAgingCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
const sections = [
  ["ar-overview", "Overview"],
  ["ar-criteria", "Report criteria"],
  ["ar-preview", "Application views"],
  ["ar-output", "Sample reports"],
  ["ar-considerations", "Considerations"],
  ["ar-outcomes", "Outcomes"],
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
export function ArAgingCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container reporting-case-study">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" /> All projects
      </Link>
      <header className="reporting-hero">
        <div>
          <p className="eyebrow">CASE STUDY / RECEIVABLES REPORTING</p>
          <h1>{project.title}</h1>
          <p className="reporting-subtitle">
            A customer receivables snapshot to support overdue-account review
            and collections priorities.
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={18} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · Application development
            </span>
          </p>
          <p className="reporting-intro">{project.summary}</p>
          <button
            className="button primary"
            onClick={() => jumpTo("ar-criteria")}
          >
            Explore the report workflow{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        <aside
          className="reporting-context reporting-context-step"
          aria-label="Application purpose"
        >
          <p className="reporting-deployment">
            <CheckCheck size={18} aria-hidden="true" /> {project.status}
          </p>
          <p className="eyebrow">OPEN RECEIVABLES</p>
          <h2>
            Customer balances.
            <br />
            Aging context.
          </h2>
          <p>
            See outstanding balances categorized by age to identify overdue
            accounts and prioritize collections.
          </p>
          <p className="eyebrow">REVIEW & EXPORT</p>
          <h2>Criteria → Preview → Output</h2>
          <p>
            Choose reporting criteria, review receivables, and export PDF or
            Excel reports.
          </p>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="AR aging case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section className="reporting-section" id="ar-overview" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / BUSINESS CONTEXT"
          title="Make outstanding balances easier to review."
        >
          {project.problem}
        </SectionHeading>
        <div className="reporting-overview-grid">
          <div>
            <h3>Receivables visibility</h3>
            <p>
              The report provides a snapshot of outstanding customer
              receivables. Open balances and age categories help users focus on
              accounts that need attention.
            </p>
          </div>
          <div>
            <h3>Modernization scope</h3>
            <p>
              {project.responsibilities} The application addresses
              reporting-data issues, Crystal Reports runtime problems, and
              historical-reporting needs.
            </p>
          </div>
        </div>
      </section>
      <section className="reporting-section" id="ar-criteria" tabIndex={-1}>
        <SectionHeading
          eyebrow="02 / REPORT CRITERIA"
          title="Focus the reporting request."
        >
          {project.approach}
        </SectionHeading>
        <div className="reporting-overview-grid">
          {arCriteria.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="ar-preview" tabIndex={-1}>
        <SectionHeading
          eyebrow="03 / APPLICATION WORKFLOW"
          title="Review criteria and receivables before export."
        />
        <aside
          className="reporting-image-disclosure"
          aria-label="Application image provenance"
        >
          <strong>AI-assisted privacy-edited application views</strong>
          <p>
            Application renders conceal customer names, financial records,
            identifiers, dates, and counts. Layout and typography may differ
            from the original captures; these are not untouched, pixel-exact
            screenshots.
          </p>
        </aside>
        <ScreenshotGallery
          directory="ar-aging"
          screenshots={arAgingImages.slice(0, 2)}
          label="AR aging application views"
        />
      </section>
      <section className="reporting-section" id="ar-output" tabIndex={-1}>
        <SectionHeading
          eyebrow="04 / PDF & EXCEL OUTPUT"
          title="Readable reports and structured review."
        >
          QuestPDF supports PDF reporting, and the application also offers Excel
          export. Historical reporting extends review beyond the current
          snapshot.
        </SectionHeading>
        <aside
          className="reporting-image-disclosure"
          aria-label="Fictional report disclosure"
        >
          <strong>Fictional samples — no company or customer data</strong>
          <p>
            The following images are recreated portfolio illustrations, not
            actual production exports. Both use the same invented records and
            totals. Non-overlapping sample aging buckets and the sample date are
            illustration assumptions, not a claim about production rules.
          </p>
        </aside>
        <ScreenshotGallery
          directory="ar-aging"
          screenshots={arAgingImages.slice(2)}
          label="AR aging fictional report samples"
        />
      </section>
      <section
        className="reporting-section"
        id="ar-considerations"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="05 / ENGINEERING CONSIDERATIONS"
          title="Criteria, aging, and reporting context."
        />
        <div className="reporting-overview-grid">
          {arConsiderations.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="ar-outcomes" tabIndex={-1}>
        <SectionHeading
          eyebrow="06 / OUTCOMES & TECHNOLOGY"
          title="A focused receivables reporting workflow."
        >
          {project.outcome}
        </SectionHeading>
        <div className="reporting-behavior-note">
          <FileText size={23} aria-hidden="true" />
          <p>
            <strong>Confirmed stack:</strong> C#, .NET 8, QuestPDF, and Excel
            export.
          </p>
        </div>
        <p>
          No collection-rate, financial-savings, or performance metrics are
          claimed.
        </p>
      </section>
      <section className="reporting-closing">
        <h2>Explore more engineering work.</h2>
        <div className="reporting-cta-actions">
          <Link className="button primary" to="/projects">
            View projects <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="button secondary" to="/contact">
            Contact Jason
          </Link>
        </div>
      </section>
    </div>
  );
}
