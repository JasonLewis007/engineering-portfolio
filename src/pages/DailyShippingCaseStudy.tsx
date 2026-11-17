import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CheckCheck,
  FileText,
  History,
  UserRound,
} from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  dailyReportConsiderations,
  dailyReportMeasures,
  dailyShippingScreenshots,
} from "../data/dailyShippingCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
import "../styles/daily-shipping-case-study.css";
const sections = [
  ["daily-overview", "Overview"],
  ["daily-workflow", "Report workflow"],
  ["daily-history", "Historical review"],
  ["daily-output", "PDF output"],
  ["daily-considerations", "Considerations"],
  ["daily-outcomes", "Outcomes"],
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
export function DailyShippingCaseStudy({ project }: { project: Project }) {
  return (
    <div className="reporting-case-study daily-report-case-study container">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" /> All projects
      </Link>
      <header className="reporting-hero">
        <div>
          <p className="eyebrow">CASE STUDY / SHAREHOLDER REPORTING</p>
          <h1>{project.title}</h1>
          <p className="reporting-subtitle">
            Current-month visibility and historical review for shareholder
            reporting.
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={17} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · Design, development, testing &
              production deployment
            </span>
          </p>
          <p className="reporting-intro">
            I designed, built, tested, and deployed this reporting application
            into production, replacing a legacy VB system that had reporting-day
            problems, Crystal Reports runtime issues, and no historical-data
            review.
          </p>
          <button
            className="button primary"
            onClick={() => jumpTo("daily-workflow")}
          >
            Explore the reporting workflow{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <aside
          className="reporting-context"
          aria-label="Daily shipping report at a glance"
        >
          <p className="reporting-deployment">
            <CheckCheck size={18} aria-hidden="true" /> {project.status}
          </p>
          <div className="reporting-context-step">
            <span className="eyebrow">FOR SHAREHOLDERS</span>
            <h2>
              Shipping activity.
              <br />
              Monthly budget context.
            </h2>
            <p>
              Shipped, ordered, potential, and budget measures, with reporting
              views in pounds and dollars.
            </p>
          </div>
          <ArrowDown className="reporting-context-arrow" aria-hidden="true" />
          <div className="reporting-context-step">
            <span className="eyebrow">CURRENT & HISTORICAL</span>
            <h2>Review the reporting period.</h2>
            <p>
              Look at current-month reporting or review historical reports, with
              preview and PDF export controls.
            </p>
          </div>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="Daily report case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section className="reporting-section" id="daily-overview" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / BUSINESS CONTEXT & OWNERSHIP"
          title="A reporting view for shareholder review."
        >
          {project.problem}
        </SectionHeading>
        <div className="reporting-overview-grid">
          <article>
            <h3>The legacy reporting gap</h3>
            <p>
              The previous VB application had issues showing the correct
              reporting days and encountered Crystal Reports runtime problems.
              It also did not let users review historical data.
            </p>
          </article>
          <article>
            <h3>Hands-on engineering ownership</h3>
            <p>{project.responsibilities}</p>
            <p>
              The replacement connects current reporting and historical review
              with a report-preview and PDF-export workflow.
            </p>
          </article>
        </div>
        <div className="daily-report-measures">
          {dailyReportMeasures.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="daily-workflow" tabIndex={-1}>
        <SectionHeading
          eyebrow="02 / REPORTING WORKFLOW"
          title="Dates, context, and report review."
        >
          {project.approach}
        </SectionHeading>
        <aside
          className="reporting-image-disclosure"
          aria-label="Screenshot privacy status"
        >
          <strong>AI-assisted privacy-edited images</strong>
          <p>
            These renders are based on application screenshots. Financial
            values, dates, identifiers, and report details are concealed for
            privacy. Layout and typography may differ from the original
            captures; these are not untouched, pixel-exact screenshots.
          </p>
        </aside>
        <ScreenshotGallery
          directory="daily-shipping"
          screenshots={dailyShippingScreenshots.slice(0, 4)}
          label="Daily shipping report workflow views"
        />
      </section>
      <section className="reporting-section" id="daily-history" tabIndex={-1}>
        <SectionHeading
          eyebrow="03 / HISTORICAL REVIEW"
          title="Go beyond the current month's view."
        >
          The application lets users look at historical reports, a capability
          the legacy system lacked.
        </SectionHeading>
        <div className="reporting-behavior-note">
          <History size={23} aria-hidden="true" />
          <p>
            <strong>
              Current and historical reporting are both part of the application.
            </strong>{" "}
            Date selection and reporting-period context support the review
            workflow.
          </p>
        </div>
      </section>
      <section className="reporting-section" id="daily-output" tabIndex={-1}>
        <SectionHeading
          eyebrow="04 / PDF REPORT OUTPUT"
          title="From report preview to a shareable document."
        >
          QuestPDF supports report output in the application. The fictional sample
          below illustrates a readable reporting document using invented data.
          It is a recreated portfolio illustration, not a production export.
        </SectionHeading>
        <div className="reporting-behavior-note">
          <FileText size={23} aria-hidden="true" />
          <p>
            <strong>Preview before export.</strong> The application exposes
            separate Preview Report and Export PDF controls.
          </p>
        </div>
        <ScreenshotGallery
          directory="daily-shipping"
          screenshots={dailyShippingScreenshots.slice(4)}
          label="Daily shipping report PDF output"
        />
      </section>
      <section className="reporting-section">
        <SectionHeading
          eyebrow="05 / CONCEPTUAL WORKFLOW"
          title="A clear path through the reporting tasks."
        />
        <figure className="daily-report-flow">
          <ol>
            <li>Select reporting dates</li>
            <li>Review SQL-backed report data</li>
            <li>Inspect the preview</li>
            <li>Export a PDF with QuestPDF</li>
          </ol>
          <figcaption>
            Conceptual application workflow, not an exact data-processing
            sequence or infrastructure topology.
          </figcaption>
        </figure>
      </section>
      <section
        className="reporting-section"
        id="daily-considerations"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="06 / ENGINEERING CONSIDERATIONS"
          title="Reporting needs context as well as numbers."
        >
          A focus on reporting periods, changing shipping information, and
          useful historical context.
        </SectionHeading>
        <div className="reporting-considerations">
          {dailyReportConsiderations.map(([title, description], index) => (
            <article key={title}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="daily-outcomes" tabIndex={-1}>
        <SectionHeading
          eyebrow="07 / CONFIRMED DELIVERY"
          title="Designed, built, tested, and deployed."
        >
          {project.outcome}
        </SectionHeading>
        <div className="reporting-outcome">
          <CheckCheck size={30} aria-hidden="true" />
          <div>
            <h3>Production reporting with historical review.</h3>
            <p>
              The delivered application supports shareholder review of shipping
              and budget information and allows users to look at historical
              reports.
            </p>
          </div>
        </div>
      </section>
      <section className="reporting-section reporting-stack">
        <SectionHeading
          eyebrow="08 / CONFIRMED TECHNOLOGIES"
          title="Application, data, and report generation."
        />
        <div className="badges">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </section>
      <section className="reporting-closing">
        <div>
          <p className="eyebrow">LET’S TALK ENTERPRISE REPORTING</p>
          <h2>
            Modernization grounded
            <br />
            in business needs.
          </h2>
          <p>
            Explore more application work or discuss the engineering behind
            enterprise reporting.
          </p>
        </div>
        <div>
          <Link className="button primary" to="/contact">
            Start a conversation <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="text-link" to="/projects">
            Explore all projects <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
