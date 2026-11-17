import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCheck,
  Database,
  MapPin,
  Monitor,
  Truck,
} from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import { ShippingArchitecture } from "../components/ShippingArchitecture";
import {
  dashboardScreenshots,
  kioskScreenshots,
  ownershipSteps,
  shippingChallenges,
} from "../data/shippingCaseStudy";
import type { Project } from "../types/project";
import "../styles/shipping-case-study.css";
const sections = [
  ["overview", "Overview"],
  ["ownership", "Ownership"],
  ["kiosk", "Driver kiosk"],
  ["dashboard", "Dashboard"],
  ["architecture", "Architecture"],
  ["challenges", "Challenges"],
  ["outcomes", "Outcomes"],
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
export function ShippingCaseStudy({ project }: { project: Project }) {
  return (
    <div className="shipping-case-study container">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" /> All projects
      </Link>
      <header className="shipping-hero">
        <div>
          <p className="eyebrow">
            FLAGSHIP CASE STUDY / ENTERPRISE APPLICATIONS
          </p>
          <h1>{project.title}</h1>
          <p className="shipping-subtitle">
            End-to-End Engineering of an Integrated Shipping Operations Platform
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="shipping-owner">
            <strong>Jason Lewis</strong> · End-to-end software engineer &
            application owner
          </p>
          <p className="shipping-hero-description">
            I took this suite from planning and requirements through
            architecture, UI/UX design, implementation, database integration,
            testing, troubleshooting, and production deployment.
          </p>
          <button
            type="button"
            className="button primary"
            onClick={() => jumpTo("kiosk")}
          >
            Explore the applications <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
        <aside className="shipping-hero-panel" aria-label="Project at a glance">
          <p className="production-indicator">
            <CheckCheck size={17} aria-hidden="true" /> {project.status}
          </p>
          <h2>
            Two applications.
            <br />
            One connected workflow.
          </h2>
          <div className="shipping-app-summary">
            <Truck size={25} aria-hidden="true" />
            <div>
              <strong>Driver Check-In Kiosk</strong>
              <span>
                Pickup identification → shipment confirmation → check-in
              </span>
            </div>
          </div>
          <div className="shipping-app-summary">
            <Monitor size={25} aria-hidden="true" />
            <div>
              <strong>Shipping Dashboard</strong>
              <span>Truck arrivals → shipment readiness → completion</span>
            </div>
          </div>
          <div className="shipping-data-note">
            <Database size={17} aria-hidden="true" /> Coordinated through SQL
            Server
          </div>
        </aside>
      </header>
      <nav className="case-section-nav" aria-label="Case study sections">
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section id="overview" className="shipping-section" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / PROJECT OVERVIEW"
          title="Clarity at every step of shipping."
        >
          {project.problem}
        </SectionHeading>
        <div className="shipping-overview">
          <p>
            I developed two integrated desktop applications to support these
            workflows and reduce shipping errors. The driver-facing kiosk guides
            pickup identification and check-in; the employee-facing dashboard
            brings arrival, shipment status, and document readiness into view.
          </p>
          <p>{project.approach} The suite is fully deployed in production.</p>
        </div>
      </section>
      <section id="ownership" className="shipping-section" tabIndex={-1}>
        <SectionHeading
          eyebrow="02 / OWNERSHIP & RESPONSIBILITIES"
          title="From the first requirement to production."
        >
          {project.responsibilities}
        </SectionHeading>
        <ol className="ownership-grid">
          {ownershipSteps.map(([title, description], index) => (
            <li key={title}>
              <span className="ownership-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section id="kiosk" className="shipping-section" tabIndex={-1}>
        <SectionHeading
          eyebrow="03 / APPLICATION ONE"
          title="Driver Check-In Kiosk."
        >
          A touchscreen-oriented WPF application for arriving truck drivers. A
          guided sequence connects pickup lookup, endorsement self-attestation,
          shipment verification, and check-in.
        </SectionHeading>
        <p className="gallery-publication-note">
          AI-assisted privacy-edited kiosk views. Branding, dates, shipment
          identifiers, customer and product details, and operational values are
          concealed. Layout and typography may differ from the original
          captures; these are not untouched, pixel-exact screenshots. Select an
          image to enlarge it.
        </p>
        <ScreenshotGallery
          screenshots={kioskScreenshots}
          label="Driver Check-In Kiosk workflow"
        />
      </section>
      <section id="dashboard" className="shipping-section" tabIndex={-1}>
        <SectionHeading
          eyebrow="04 / APPLICATION TWO"
          title="Shipping Dashboard."
        >
          An internal WPF application for shipping employees, bringing active
          shipments, truck arrivals, shipment details, pulled status, missing
          Bill of Lading warnings, completion actions, and recently shipped
          orders into one workflow.
        </SectionHeading>
        <p className="gallery-publication-note">
          Redacted application captures. Business data is intentionally
          obscured; some operational indicators are also covered. Select an
          image to inspect it at a larger size.
        </p>
        <ScreenshotGallery
          screenshots={dashboardScreenshots}
          label="Shipping Dashboard screenshots"
        />
      </section>
      <section id="architecture" className="shipping-section" tabIndex={-1}>
        <SectionHeading
          eyebrow="05 / SYSTEM ARCHITECTURE"
          title="Distinct interfaces. Shared shipment information."
        >
          {project.architecture}
        </SectionHeading>
        <ShippingArchitecture />
      </section>
      <section id="challenges" className="shipping-section" tabIndex={-1}>
        <SectionHeading
          eyebrow="06 / ENGINEERING CHALLENGES"
          title="Engineering around the operational details."
        >
          The work spans business rules, user interactions, shared application
          state, and the exceptions shipping teams need to see.
        </SectionHeading>
        <div className="shipping-challenges">
          {shippingChallenges.map(([title, description]) => (
            <article key={title}>
              <Check size={20} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="outcomes" className="shipping-section" tabIndex={-1}>
        <SectionHeading
          eyebrow="07 / PRODUCTION OUTCOMES"
          title="Operational visibility. Correct shipments."
        >
          Two confirmed outcomes from the deployed suite.
        </SectionHeading>
        <div className="shipping-outcomes">
          <article>
            <MapPin size={28} aria-hidden="true" />
            <p className="eyebrow">RECORDED CHECK-IN EVENTS</p>
            <h3>Truck arrival measurement & visibility</h3>
            <p>
              The application records truck check-in events, allowing shipping
              operations to track truck arrivals and identify which drivers have
              checked in.
            </p>
          </article>
          <article>
            <CheckCheck size={28} aria-hidden="true" />
            <p className="eyebrow">OWNER-OBSERVED PRODUCTION OUTCOME</p>
            <h3>Wrong-load errors eliminated</h3>
            <p>
              Since implementation, wrong-load errors have been eliminated
              according to my operational observations as the project owner.
            </p>
            <p className="outcome-attribution">
              This is an observed production outcome, not an audited statistic
              or a controlled experimental result.
            </p>
          </article>
        </div>
      </section>
      <section className="shipping-section shipping-stack">
        <SectionHeading
          eyebrow="08 / TECHNOLOGY STACK"
          title="Built with an enterprise desktop stack."
        />
        <div className="badges">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </section>
      <section className="shipping-closing">
        <div>
          <p className="eyebrow">LET’S TALK ENGINEERING</p>
          <h2>
            From business requirements
            <br />
            to software people use.
          </h2>
          <p>
            Discuss the engineering decisions behind this suite or explore more
            of my work.
          </p>
        </div>
        <div className="shipping-closing-actions">
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
