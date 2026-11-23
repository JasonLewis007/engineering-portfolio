import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCheck,
  UserRound,
  Monitor,
  UsersRound,
  History,
} from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  itamsScreenshots,
  itamsCapabilities,
  itamsConsiderations,
} from "../data/itamsCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
const sections = [
  ["itams-overview", "Overview"],
  ["itams-role", "My role"],
  ["itams-capabilities", "Workflows"],
  ["itams-microsoft", "Microsoft integrations"],
  ["itams-architecture", "Architecture"],
  ["itams-gallery", "Screenshots"],
  ["itams-outcomes", "Outcomes"],
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
export function ItamsCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container reporting-case-study">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" />
        All projects
      </Link>
      <header className="reporting-hero">
        <div>
          <p className="eyebrow">
            CASE STUDY / ENTERPRISE APPLICATION & IT OPERATIONS
          </p>
          <h1>{project.title}</h1>
          <p className="reporting-subtitle">
            Centralized visibility for equipment, assignments, and asset history
            across the organization.
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={18} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · Application design & development
            </span>
          </p>
          <p className="reporting-intro">{project.summary}</p>
          <button
            className="button primary"
            onClick={() => jumpTo("itams-gallery")}
          >
            Explore the application <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <aside className="reporting-context" aria-label="ITAMS at a glance">
          <p className="reporting-deployment">
            <CheckCheck size={18} aria-hidden="true" />
            {project.status}
          </p>
          <div className="reporting-context-step">
            <span className="eyebrow">IN-HOUSE & FIELD ASSETS</span>
            <h2>
              Know the equipment.
              <br />
              Understand its assignment.
            </h2>
            <p>
              Inventory, employees, locations, transfers, returns, and
              historical accountability.
            </p>
          </div>
          <div className="reporting-context-step">
            <span className="eyebrow">CURRENT MICROSOFT INTEGRATIONS</span>
            <h2>Entra ID & Intune</h2>
            <p>
              Existing integrations automatically retrieve employee and
              managed-device information.
            </p>
          </div>
          <div className="formulary-hero-symbols" aria-hidden="true">
            <span>
              <Monitor size={28} />
            </span>
            <span>
              <UsersRound size={28} />
            </span>
            <span>
              <History size={28} />
            </span>
          </div>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="ITAMS case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section className="reporting-section" id="itams-overview" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / OVERVIEW & BUSINESS PROBLEM"
          title="One view of distributed technology assets."
        >
          {project.problem}
        </SectionHeading>
        <p>
          ITAMS brings inventory and assignment information together so the IT
          department can track equipment throughout the organization, including
          equipment deployed outside the office.
        </p>
      </section>
      <section className="reporting-section" id="itams-role" tabIndex={-1}>
        <SectionHeading
          eyebrow="02 / MY ROLE"
          title="Designed and built for internal IT operations."
        >
          Jason Lewis designed and built the application, which is deployed in
          production.
        </SectionHeading>
        <p>
          The existing Microsoft integrations and automatic retrieval behavior
          are owner-confirmed. This case study does not claim sole authorship of
          unverified integration components.
        </p>
      </section>
      <section
        className="reporting-section"
        id="itams-capabilities"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="03 / CORE CAPABILITIES & WORKFLOWS"
          title="Track equipment through its assignments."
        >
          {project.approach}
        </SectionHeading>
        <div className="reporting-overview-grid">
          {itamsCapabilities.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="itams-microsoft" tabIndex={-1}>
        <SectionHeading
          eyebrow="04 / EXISTING MICROSOFT INTEGRATIONS"
          title="Employee and managed-device information, retrieved automatically."
        >
          ITAMS currently integrates with Microsoft Entra ID and Microsoft
          Intune. These integrations are already part of the application, not
          future roadmap work.
        </SectionHeading>
        <div className="reporting-behavior-note">
          <p>
            <strong>Confirmed behavior:</strong> automatic retrieval of employee
            and managed-device information. The package does not establish the
            API/transport, authentication method, synchronization cadence, exact
            field mappings, or bidirectional synchronization.
          </p>
        </div>
      </section>
      <section
        className="reporting-section"
        id="itams-architecture"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="05 / TECHNICAL ARCHITECTURE"
          title="A production desktop application with Microsoft integration."
        >
          {project.architecture}
        </SectionHeading>
        <div className="reporting-overview-grid">
          {itamsConsiderations.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="itams-gallery" tabIndex={-1}>
        <SectionHeading
          eyebrow="06 / APPLICATION WALKTHROUGH"
          title="Dashboard to management reporting."
        >
          Six supplied sanitized views, in workflow order. Select an image to
          enlarge it.
        </SectionHeading>
        <aside
          className="reporting-image-disclosure"
          aria-label="ITAMS screenshot privacy disclosure"
        >
          <strong>Privacy-sanitized application screenshots</strong>
          <p>
            Employee and asset table records are concealed in the supplied
            images. Aggregate counts, general location labels, and some employer
            wording remain visible for owner review. These captures are not
            performance metrics or evidence of a particular integration
            implementation. The gallery preserves the supplied image pixels and
            aspect ratios.
          </p>
        </aside>
        <ScreenshotGallery
          directory="itams"
          screenshots={itamsScreenshots}
          label="ITAMS application walkthrough"
        />
      </section>
      <section className="reporting-section" id="itams-outcomes" tabIndex={-1}>
        <SectionHeading
          eyebrow="07 / CONFIRMED OUTCOMES"
          title="Production visibility and assignment accountability."
        >
          {project.outcome}
        </SectionHeading>
        <p>
          The confirmed scope includes current inventory, employee and location
          assignment, preserved movement history, dashboards, and management
          reporting. No user-count, efficiency, error-reduction, financial, or
          ROI metrics are claimed.
        </p>
      </section>
      <section className="reporting-section">
        <SectionHeading
          eyebrow="08 / FUTURE DIRECTION"
          title="Further enhancements require confirmed scope."
        >
          Entra ID and Intune integration are existing functionality. Additional
          roadmap items have not been confirmed, so this case study makes no
          promises about new reconciliation, alerting, or budgeting
          capabilities.
        </SectionHeading>
        <p>
          Further technical documentation could clarify integration transport,
          mapping, synchronization behavior, and reporting implementation
          without exposing private source or secrets.
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
