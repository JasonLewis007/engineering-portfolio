import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  UserRound,
  ArrowLeftRight,
  PackageOpen,
  Handshake,
} from "lucide-react";
import { SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import {
  barterBetterScreenshots,
  barterBetterEvidence,
  barterBetterStackEvidence,
} from "../data/barterBetterCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
const sections = [
  ["barter-overview", "Overview"],
  ["barter-role", "My role"],
  ["barter-vision", "Product vision"],
  ["barter-evidence", "Development status"],
  ["barter-gallery", "Onboarding"],
  ["barter-stack", "Technology"],
  ["barter-roadmap", "Next steps"],
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
export function BarterBetterCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container reporting-case-study">
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
            Connecting people through item and service exchange.
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={18} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · Technical Co-Founder & Full-Stack
              Developer
            </span>
          </p>
          <p className="reporting-intro">{project.summary}</p>
          <button
            className="button primary"
            onClick={() => jumpTo("barter-gallery")}
          >
            Explore the onboarding preview{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <aside
          className="reporting-context"
          aria-label="Barter Better development status"
        >
          <p className="project-status">{project.status}</p>
          <div className="reporting-context-step">
            <span className="eyebrow">ITEMS · SERVICES · COMMUNITY</span>
            <h2>
              A community marketplace.
              <br />
              An onboarding journey.
            </h2>
            <p>
              Six supplied screens illustrate product direction. Backend
              integrations and operational trading features are not verified as
              complete.
            </p>
          </div>
          <div className="formulary-hero-symbols" aria-hidden="true">
            <span>
              <ArrowLeftRight size={28} />
            </span>
            <span>
              <PackageOpen size={28} />
            </span>
            <span>
              <Handshake size={28} />
            </span>
          </div>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="Barter Better case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section className="reporting-section" id="barter-overview" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / OVERVIEW"
          title="A marketplace in development."
        >
          Barter Better is a community trading marketplace being developed to
          help people connect and exchange items or services within public and
          community contexts.
        </SectionHeading>
        <div className="reporting-behavior-note">
          <p>
            <strong>In Development.</strong> This case study presents the
            supplied onboarding interface and established technology stack. It
            does not represent a production launch or verified end-to-end
            trading service.
          </p>
        </div>
      </section>
      <section className="reporting-section" id="barter-role" tabIndex={-1}>
        <SectionHeading
          eyebrow="02 / ROLE & OWNERSHIP"
          title="Technical Co-Founder & Full-Stack Developer."
        >
          {project.responsibilities}
        </SectionHeading>
        <p>
          This is an ongoing startup product, with product direction and
          full-stack development responsibilities. Its application repository
          remains private; no source-code link is included.
        </p>
      </section>
      <section className="reporting-section" id="barter-vision" tabIndex={-1}>
        <SectionHeading
          eyebrow="03 / BUSINESS PROBLEM & PROPOSED SOLUTION"
          title="Help people discover exchange opportunities."
        />
        <div className="reporting-overview-grid">
          <div>
            <h3>The problem</h3>
            <p>{project.problem}</p>
          </div>
          <div>
            <h3>The proposed experience</h3>
            <p>{project.approach}</p>
          </div>
        </div>
      </section>
      <section className="reporting-section" id="barter-evidence" tabIndex={-1}>
        <SectionHeading
          eyebrow="04 / DEMONSTRATED UI & DEVELOPMENT STATUS"
          title="Visible interfaces, with clear limits on completion claims."
        >
          The package contains screenshots rather than the private application
          source or functional test evidence. No operational backend feature is
          marked complete on screenshot evidence alone.
        </SectionHeading>
        <div className="reporting-overview-grid">
          {barterBetterEvidence.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="barter-gallery" tabIndex={-1}>
        <SectionHeading
          eyebrow="05 / ONBOARDING WALKTHROUGH"
          title="Six steps, in the supplied sequence."
        >
          Loading → Registration → Profile name → Optional photo → Location/ZIP
          → Item or service. Select any image to enlarge it.
        </SectionHeading>
        <aside
          className="reporting-image-disclosure"
          aria-label="Barter Better screenshot status"
        >
          <strong>Interface preview — product in development</strong>
          <p>
            The location screen explicitly uses demo content, not a real
            accessed location. Sign-in, uploads, location services, and matching
            are not established as working features by these captures. The
            supplied branding and image aspect ratios are preserved.
          </p>
        </aside>
        <ScreenshotGallery
          directory="barter-better"
          screenshots={barterBetterScreenshots}
          label="Barter Better onboarding sequence"
        />
      </section>
      <section className="reporting-section" id="barter-stack" tabIndex={-1}>
        <SectionHeading
          eyebrow="06 / ARCHITECTURE & TECHNOLOGY"
          title="The established stack, without assumed implementation details."
        >
          {project.architecture}
        </SectionHeading>
        <div className="reporting-overview-grid">
          {barterBetterStackEvidence.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="reporting-behavior-note">
          <p>
            <strong>High-level design intent:</strong> frontend experience,
            backend/API services, and supporting platform services. Exact
            responsibilities and connections are not specified here; this is not
            a verified deployment topology.
          </p>
        </div>
      </section>
      <section className="reporting-section" id="barter-roadmap" tabIndex={-1}>
        <SectionHeading
          eyebrow="07 / NEXT STEPS"
          title="Continue the product and verify the integrated experience."
        >
          Development and verification priorities include account access,
          profile handling, location behavior, item/service journeys, and
          backend integration. These are not completion promises or release
          commitments.
        </SectionHeading>
        <p>
          No working third-party authentication, camera access, uploads,
          location services, live matching, payments, Supabase authentication,
          REST endpoints, or persistence is claimed without supporting evidence.
          No user counts, revenue, performance gains, launch dates, or
          production status are invented.
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
