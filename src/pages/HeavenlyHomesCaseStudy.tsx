import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  House,
  CalendarDays,
  UsersRound,
  UserRound,
} from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  heavenlyHomesScreenshots,
  heavenlyHomesJourneys,
  heavenlyHomesRoadmap,
} from "../data/heavenlyHomesCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
import "../styles/heavenly-homes-case-study.css";
const sections = [
  ["homes-overview", "Overview"],
  ["homes-role", "My role"],
  ["homes-vision", "Product vision"],
  ["homes-preview", "UI preview"],
  ["homes-gallery", "Walkthrough"],
  ["homes-architecture", "Technology"],
  ["homes-roadmap", "Roadmap"],
  ["homes-status", "Current status"],
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
export function HeavenlyHomesCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container reporting-case-study heavenly-homes-case-study">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" />
        All projects
      </Link>
      <header className="reporting-hero">
        <div>
          <p className="eyebrow">
            CASE STUDY / FULL-STACK APPLICATION DEVELOPMENT
          </p>
          <h1>{project.title}</h1>
          <p className="reporting-subtitle">
            Faith-centered hospitality and community marketplace
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={18} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · Technical Co-Founder / Lead
              Developer
            </span>
          </p>
          <p className="reporting-intro">
            Heavenly Homes is being developed to connect travelers with
            welcoming vacation homes, long-term stays, retreats and gatherings,
            and nearby churches or parishes. The current frontend preview
            communicates the product vision and intended user journeys.
          </p>
          <button
            className="button primary"
            onClick={() => jumpTo("homes-gallery")}
          >
            Explore the product preview{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <aside
          className="reporting-context"
          aria-label="Heavenly Homes development status"
        >
          <p className="project-status">{project.status}</p>
          <div className="reporting-context-step">
            <span className="eyebrow">STAYS · GATHERINGS · COMMUNITY</span>
            <h2>
              A place to stay.
              <br />A community to belong to.
            </h2>
            <p>
              UI preview — backend integrations, live availability, and booking
              are under development.
            </p>
          </div>
          <div className="homes-symbols" aria-hidden="true">
            <House size={30} />
            <CalendarDays size={30} />
            <UsersRound size={30} />
          </div>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="Heavenly Homes case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section className="reporting-section" id="homes-overview" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / OVERVIEW"
          title="Hospitality with community in view."
        >
          {project.summary}
        </SectionHeading>
        <div className="reporting-behavior-note">
          <p>
            <strong>In-development full-stack project.</strong> The supplied
            screenshots demonstrate the frontend presentation. They do not
            establish a launched marketplace or completed backend functionality.
          </p>
        </div>
      </section>
      <section className="reporting-section" id="homes-role" tabIndex={-1}>
        <SectionHeading
          eyebrow="02 / MY ROLE"
          title="Technical Co-Founder / Lead Developer."
        >
          {project.responsibilities}
        </SectionHeading>
        <p>
          The engineering direction includes component-based UI, typed data
          models, reusable search/filter patterns, multi-journey UX, and
          API-ready frontend design. Secure authentication and backend
          integration are development goals; internal implementation has not
          been verified from application source.
        </p>
      </section>
      <section className="reporting-section" id="homes-vision" tabIndex={-1}>
        <SectionHeading
          eyebrow="03 / PROBLEM & PRODUCT VISION"
          title="Bring lodging and meaningful connections together."
        />
        <div className="reporting-overview-grid">
          <div>
            <h3>The problem</h3>
            <p>{project.problem}</p>
          </div>
          <div>
            <h3>The product vision</h3>
            <p>{project.approach}</p>
          </div>
        </div>
      </section>
      <section className="reporting-section" id="homes-preview" tabIndex={-1}>
        <SectionHeading
          eyebrow="04 / FEATURES DEMONSTRATED"
          title="Visible journeys in the frontend preview."
        >
          These are screenshot-demonstrated screens and UI concepts, not
          verified working integrations.
        </SectionHeading>
        <div className="reporting-overview-grid">
          {heavenlyHomesJourneys.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="homes-gallery" tabIndex={-1}>
        <SectionHeading
          eyebrow="05 / SCREENSHOTS & PRODUCT WALKTHROUGH"
          title="Eight views of the product direction."
        >
          The supplied Heavenly Homes screenshots are shown in order, with their
          original branding and aspect ratios. Select any image to enlarge it.
        </SectionHeading>
        <aside
          className="reporting-image-disclosure"
          aria-label="UI preview disclosure"
        >
          <strong>
            UI preview — backend integrations, live availability, and booking
            are under development.
          </strong>
          <p>
            Property listings, photographs, church/parish results, and maps are
            illustrative preview content. Authentication choices are shown as
            intended UI; account creation, provider sign-in, payments,
            geolocation, and live parish results are not established by these
            screenshots.
          </p>
        </aside>
        <ScreenshotGallery
          directory="heavenly-homes"
          screenshots={heavenlyHomesScreenshots}
          label="Heavenly Homes product walkthrough"
        />
      </section>
      <section
        className="reporting-section"
        id="homes-architecture"
        tabIndex={-1}
      >
        <SectionHeading
          eyebrow="06 / ARCHITECTURE & TECHNOLOGY"
          title="Owner-specified stack, with implementation status made clear."
        >
          The application repository was not included in the package and is not
          available in this workspace. No backend layer is represented as
          complete.
        </SectionHeading>
        <div className="homes-table-wrap">
          <table className="homes-status-table">
            <caption>Target stack and available evidence</caption>
            <thead>
              <tr>
                <th scope="col">Technology</th>
                <th scope="col">Current evidence / status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">React & TypeScript</th>
                <td>
                  Owner-described frontend preview; screenshots supplied. Source
                  code, interaction behavior, and application responsiveness
                  have not been independently verified.
                </td>
              </tr>
              <tr>
                <th scope="row">C#/.NET & REST APIs</th>
                <td>
                  Owner-specified target backend and API stack. Implementation
                  and integration are unverified.
                </td>
              </tr>
              <tr>
                <th scope="row">SQL Server & MongoDB</th>
                <td>
                  Owner-specified target data technologies. Schema,
                  responsibilities, persistence, and connections are unverified.
                </td>
              </tr>
              <tr>
                <th scope="row">Docker</th>
                <td>
                  Owner-specified target tooling. Container configuration and
                  deployment are unverified.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="homes-architecture-note">
          Conceptual target direction: frontend → REST APIs → backend and data
          services. This is not a verified deployed topology. No public preview
          or source link is provided because none was verified in the supplied
          configuration.
        </p>
      </section>
      <section className="reporting-section" id="homes-roadmap" tabIndex={-1}>
        <SectionHeading
          eyebrow="07 / ROADMAP"
          title="Planned capabilities, not live features."
        />
        <ul className="homes-roadmap">
          {heavenlyHomesRoadmap.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="reporting-section" id="homes-status" tabIndex={-1}>
        <SectionHeading eyebrow="08 / CURRENT STATUS" title="In Development.">
          {project.outcome}
        </SectionHeading>
        <p>
          Next verification requires the Heavenly Homes application source:
          implementation status for each stack layer, responsive behavior, data
          handling, authentication, and integration tests. No launch date, user
          counts, revenue, performance, or test-coverage metrics are claimed.
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
