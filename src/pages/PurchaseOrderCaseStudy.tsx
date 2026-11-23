import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCheck, UserRound } from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  purchaseOrderScreenshots,
  purchaseOrderWorkflow,
  purchaseOrderConsiderations,
} from "../data/purchaseOrderCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
const sections = [
  ["po-overview", "Overview"],
  ["po-workspace", "Application screen"],
  ["po-workflow", "Workflow"],
  ["po-integration", "ERP integration"],
  ["po-considerations", "Considerations"],
  ["po-outcomes", "Outcomes"],
] as const;
function jumpTo(id: string) {
  const el = document.getElementById(id);
  el?.focus({ preventScroll: true });
  el?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
    block: "start",
  });
}
export function PurchaseOrderCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container reporting-case-study">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" />
        All projects
      </Link>
      <header className="reporting-hero">
        <div>
          <p className="eyebrow">CASE STUDY / PURCHASING & ERP WORKFLOWS</p>
          <h1>{project.title}</h1>
          <p className="reporting-subtitle">
            PO editing and receiving adjustments in one production workspace.
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={18} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · Application developer
            </span>
          </p>
          <p className="reporting-intro">{project.summary}</p>
          <button
            className="button primary"
            onClick={() => jumpTo("po-workspace")}
          >
            Explore the application <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <aside
          className="reporting-context"
          aria-label="Purchase order application status"
        >
          <p className="reporting-deployment">
            <CheckCheck size={18} aria-hidden="true" />
            {project.status}
          </p>
          <div className="reporting-context-step">
            <span className="eyebrow">LOAD · REVIEW · UPDATE</span>
            <h2>
              One screen.
              <br />
              Order and receiving context.
            </h2>
            <p>
              Vendor information, PO details, line items, and distinct editing
              and receiving controls.
            </p>
          </div>
          <div className="reporting-context-step">
            <span className="eyebrow">ERP INTEGRATION</span>
            <h2>Updates reach the ERP.</h2>
            <p>
              The integration is confirmed; its transport method is not
              specified.
            </p>
          </div>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="Purchase order case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section className="reporting-section" id="po-overview" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / BUSINESS CONTEXT & OWNERSHIP"
          title="Bring order work into a single view."
        >
          {project.problem}
        </SectionHeading>
        <div className="reporting-overview-grid">
          <div>
            <h3>Application ownership</h3>
            <p>{project.responsibilities}</p>
          </div>
          <div>
            <h3>Scope of the work</h3>
            <p>
              The owner reports that the application supports PO receiving,
              editing, received-quantity and receipt-record adjustments, and
              receivables adjustments. The supplied screen directly demonstrates
              order and receiving controls; detailed financial-adjustment
              screens and rules are not shown.
            </p>
          </div>
        </div>
      </section>
      <section
        className="reporting-section reporting-single"
        id="po-workspace"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="02 / PO ADJUSTMENT MANAGER"
          title="A single-screen operational workspace."
        >
          {project.approach}
        </SectionHeading>
        <aside
          className="reporting-image-disclosure"
          aria-label="PO screenshot provenance"
        >
          <strong>AI-assisted privacy-edited application view</strong>
          <p>
            Employer branding, the debug toolbar, and background fragments are
            removed. Fields and line items remain empty. Layout and typography
            may differ from the original capture; this is not an untouched,
            pixel-exact screenshot.
          </p>
        </aside>
        <ScreenshotGallery
          directory="purchase-order"
          screenshots={purchaseOrderScreenshots}
          label="Purchase order adjustment workspace"
        />
      </section>
      <section className="reporting-section" id="po-workflow" tabIndex={-1}>
        <SectionHeading
          eyebrow="03 / WORKFLOW"
          title="Order context stays in view."
        >
          The following describes available tasks, not a verified execution
          sequence or transaction protocol.
        </SectionHeading>
        <div className="reporting-overview-grid">
          {purchaseOrderWorkflow.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="po-integration" tabIndex={-1}>
        <SectionHeading
          eyebrow="04 / ERP INTEGRATION & STACK"
          title="A production application connected to business operations."
        >
          {project.architecture}
        </SectionHeading>
        <div className="reporting-behavior-note">
          <p>
            <strong>Confirmed technologies:</strong> C#, .NET, SQL Server, and
            ERP integration. The .NET version, UI framework, and exact ERP
            interface have not been supplied.
          </p>
        </div>
      </section>
      <section
        className="reporting-section"
        id="po-considerations"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="05 / ENGINEERING CONSIDERATIONS"
          title="Clear context for different operational actions."
        />
        <div className="reporting-overview-grid">
          {purchaseOrderConsiderations.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="po-outcomes" tabIndex={-1}>
        <SectionHeading
          eyebrow="06 / CONFIRMED OUTCOME"
          title="Deployed and operating in production."
        >
          {project.outcome}
        </SectionHeading>
        <p>
          No measured time savings, financial impact, error reduction, or
          automated-control guarantees are claimed.
        </p>
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
