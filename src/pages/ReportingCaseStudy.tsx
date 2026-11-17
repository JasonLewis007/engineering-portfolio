import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CheckCheck,
  FileText,
  Mail,
  UserRound,
} from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  reportingConsiderations,
  reportingScreenshots,
} from "../data/reportingCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
const sections = [
  ["reporting-overview", "Overview"],
  ["reporting-dashboard", "Dashboard"],
  ["reporting-customers", "Customers"],
  ["reporting-recipients", "Recipients"],
  ["reporting-history", "Historical PDFs"],
  ["reporting-monthly", "Monthly run"],
  ["reporting-considerations", "Considerations"],
  ["reporting-outcomes", "Outcomes"],
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
export function ReportingCaseStudy({ project }: { project: Project }) {
  return (
    <div className="reporting-case-study container">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" /> All projects
      </Link>
      <header className="reporting-hero">
        <div>
          <p className="eyebrow">CASE STUDY / APPLICATION MODERNIZATION</p>
          <h1>{project.title}</h1>
          <p className="reporting-subtitle">
            Independent engineering of a deployed customer-reporting
            application.
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={17} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · Independent software engineer &
              application owner
            </span>
          </p>
          <p className="reporting-intro">
            I independently developed this application to replace a legacy
            VB.NET reporting application experiencing Crystal Reports runtime
            issues. The replacement is deployed and currently being used.
          </p>
          <button
            className="button primary"
            onClick={() => jumpTo("reporting-dashboard")}
          >
            Explore the workflow <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <aside
          className="reporting-context"
          aria-label="Modernization at a glance"
        >
          <p className="reporting-deployment">
            <CheckCheck size={18} aria-hidden="true" /> {project.status}
          </p>
          <div className="reporting-context-step">
            <span className="eyebrow">LEGACY CONTEXT</span>
            <h2>VB.NET reporting</h2>
            <p>
              The previous application was experiencing Crystal Reports runtime
              issues.
            </p>
          </div>
          <ArrowDown
            className="reporting-context-arrow"
            size={24}
            aria-hidden="true"
          />
          <div className="reporting-context-step">
            <span className="eyebrow">DEPLOYED REPLACEMENT</span>
            <h2>Customer reporting, brought together.</h2>
            <p>
              Customer setup, recipient management, historical PDF review, and
              monthly reporting workflows.
            </p>
          </div>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="Reporting case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section
        className="reporting-section"
        id="reporting-overview"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="01 / OVERVIEW & OWNERSHIP"
          title="Modernizing the reporting workflow."
        >
          {project.problem}
        </SectionHeading>
        <div className="reporting-overview-grid">
          <article>
            <h3>The legacy context</h3>
            <p>
              The project replaced a VB.NET application that was experiencing
              Crystal Reports runtime issues. The modernization brings reporting
              configuration and report processing into a current desktop
              workflow.
            </p>
          </article>
          <article>
            <h3>Independent ownership</h3>
            <p>{project.responsibilities}</p>
            <p>{project.approach}</p>
          </article>
        </div>
      </section>
      <aside
        className="reporting-image-disclosure"
        aria-label="Image provenance"
      >
        <strong>About the images</strong>
        <p>
          These nine views are AI-assisted, privacy-edited renders of supplied
          application screenshots. Customer and recipient details, identifiers,
          dates, counts, and branding are concealed. Typography, layout, and
          dimensions may differ from the originals; these are not untouched,
          pixel-exact captures.
        </p>
      </aside>
      <section
        className="reporting-section reporting-single"
        id="reporting-dashboard"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="02 / REPORTING DASHBOARD"
          title="One starting point for reporting."
        >
          The dashboard organizes customer and recipient setup, historical
          review, and monthly report processing, alongside reporting-period,
          last-run, and run-result information.
        </SectionHeading>
        <ScreenshotGallery
          directory="voc-hap"
          screenshots={reportingScreenshots.slice(0, 1)}
          label="Reporting dashboard image"
        />
      </section>
      <section
        className="reporting-section reporting-record-gallery"
        id="reporting-customers"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="03 / CUSTOMER SETUP"
          title="Organize customers and report assignments."
        >
          Customer management brings together reporting assignments, active
          status, consignment settings, and recipient associations, with
          dedicated add and edit forms.
        </SectionHeading>
        <ScreenshotGallery
          directory="voc-hap"
          screenshots={reportingScreenshots.slice(1, 4)}
          label="Customer management images"
        />
      </section>
      <section
        className="reporting-section reporting-record-gallery"
        id="reporting-recipients"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="04 / RECIPIENT MANAGEMENT"
          title="Maintain the people receiving reports."
        >
          A recipient list and add/edit dialogs organize names and email
          addresses used for report distribution. Entered values and table
          records are concealed in the edited views.
        </SectionHeading>
        <ScreenshotGallery
          directory="voc-hap"
          screenshots={reportingScreenshots.slice(4, 7)}
          label="Recipient management images"
        />
      </section>
      <section
        className="reporting-section reporting-single"
        id="reporting-history"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="05 / HISTORICAL PDF REVIEW"
          title="Review a report without sending an email."
        >
          Select a customer and date range to generate a historical VOC/HAP PDF
          for review. The application explicitly distinguishes this action from
          customer email distribution.
        </SectionHeading>
        <div className="reporting-behavior-note">
          <FileText size={22} aria-hidden="true" />
          <p>
            <strong>Historical review generates a PDF only.</strong> It does not
            send customer emails or update email history.
          </p>
        </div>
        <ScreenshotGallery
          directory="voc-hap"
          screenshots={reportingScreenshots.slice(7, 8)}
          label="Historical PDF report image"
        />
      </section>
      <section
        className="reporting-section reporting-single"
        id="reporting-monthly"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="06 / MONTHLY REPORTING & EMAIL"
          title="Confirm the run before distribution."
        >
          The monthly confirmation screen describes generating a VOC/HAP PDF for
          each active customer and emailing the report to assigned recipients.
          It presents the reporting period and includes a test-email control.
        </SectionHeading>
        <div className="reporting-behavior-note">
          <Mail size={22} aria-hidden="true" />
          <p>
            <strong>
              Monthly processing is the customer distribution workflow.
            </strong>{" "}
            Its confirmation step is separate from historical PDF review.
          </p>
        </div>
        <ScreenshotGallery
          directory="voc-hap"
          screenshots={reportingScreenshots.slice(8, 9)}
          label="Monthly email run image"
        />
      </section>
      <section className="reporting-section">
        <SectionHeading
          eyebrow="07 / CONCEPTUAL WORKFLOW"
          title="Shared setup. Two reporting paths."
        >
          A view of the application tasks, keeping review-only reporting
          separate from customer distribution.
        </SectionHeading>
        <figure className="reporting-workflow">
          <div className="reporting-workflow-origin">
            <span className="eyebrow">REPORTING SETUP</span>
            <h3>Customer configuration & recipient assignments</h3>
          </div>
          <ArrowDown className="reporting-workflow-arrow" aria-hidden="true" />
          <div className="reporting-workflow-branches">
            <div>
              <FileText size={27} aria-hidden="true" />
              <h3>Historical review</h3>
              <p>Customer + date range → PDF for review</p>
              <span>No email sent · Email history unchanged</span>
            </div>
            <div>
              <Mail size={27} aria-hidden="true" />
              <h3>Monthly processing</h3>
              <p>Active customers → Reports + assigned recipients</p>
              <span>Customer email distribution</span>
            </div>
          </div>
          <figcaption>
            Conceptual application workflow, not a production infrastructure
            topology or a description of the email-delivery mechanism.
          </figcaption>
        </figure>
      </section>
      <section
        className="reporting-section"
        id="reporting-considerations"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="08 / ENGINEERING CONSIDERATIONS"
          title="Attention to the reporting details."
        >
          The workflow brings together these practical design considerations.
        </SectionHeading>
        <div className="reporting-considerations">
          {reportingConsiderations.map(([title, description], index) => (
            <article key={title}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="reporting-section"
        id="reporting-outcomes"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="09 / CONFIRMED OUTCOME"
          title="A replacement application, deployed and in use."
        >
          {project.outcome}
        </SectionHeading>
        <div className="reporting-outcome">
          <CheckCheck size={30} aria-hidden="true" />
          <div>
            <h3>Independent development. Operational use.</h3>
            <p>
              The application is currently being used for customer reporting,
              following replacement of the legacy VB.NET reporting application.
            </p>
          </div>
        </div>
      </section>
      <section className="reporting-section reporting-stack">
        <SectionHeading
          eyebrow="10 / DOCUMENTED TECHNOLOGY STACK"
          title="Enterprise desktop and reporting technologies."
        />
        <div className="badges">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </section>
      <section className="reporting-closing">
        <div>
          <p className="eyebrow">LET’S TALK MODERNIZATION</p>
          <h2>
            Software built around
            <br />
            the work people do.
          </h2>
          <p>
            Discuss enterprise application development or explore more
            engineering work.
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
