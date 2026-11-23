import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, UserRound, Calculator } from "lucide-react";
import { ExternalLink, SectionHeading, TechBadge } from "../components/Shared";
import { ScreenshotGallery } from "../components/ScreenshotGallery";
import { novaScreenshots, novaCapabilities } from "../data/novaCaseStudy";
import type { Project } from "../types/project";
import "../styles/reporting-case-study.css";
const sections = [
  ["nova-overview", "Overview"],
  ["nova-workflow", "Learning workflow"],
  ["nova-gallery", "Screenshots"],
  ["nova-technology", "Technology"],
  ["nova-boundaries", "Offline & online"],
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
export function NovaCaseStudy({ project }: { project: Project }) {
  return (
    <div className="container reporting-case-study">
      <Link className="text-link back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" />
        All projects
      </Link>
      <header className="reporting-hero">
        <div>
          <p className="eyebrow">
            CASE STUDY / DESKTOP APPLICATION DEVELOPMENT
          </p>
          <h1>{project.title}</h1>
          <p className="reporting-subtitle">
            Spoken guidance, keyboard calculation, and unit conversion for
            learning.
          </p>
          <div className="badges">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
          <p className="reporting-owner">
            <UserRound size={18} aria-hidden="true" />
            <span>
              <strong>Jason Lewis</strong> · {project.role}
            </span>
          </p>
          <p className="reporting-intro">{project.summary}</p>
          <button
            className="button primary"
            onClick={() => jumpTo("nova-gallery")}
          >
            Explore the application <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <aside
          className="reporting-context"
          aria-label="NOVA application at a glance"
        >
          <p className="project-status">{project.status}</p>
          <div className="reporting-context-step">
            <span className="eyebrow">SPOKEN MATH ASSISTANT</span>
            <h2>
              Calculate by keyboard.
              <br />
              Learn with spoken guidance.
            </h2>
            <p>
              A Python desktop application designed for blind and low-vision
              learners, distributed through GitHub.
            </p>
          </div>
          <Calculator size={42} aria-hidden="true" />
          <div className="reporting-context-step">
            <h2>Voice recognition uses the internet.</h2>
            <p>
              Keyboard calculation and conversion work offline. Microphone
              recognition uses Google's online recognizer.
            </p>
          </div>
        </aside>
      </header>
      <nav
        className="reporting-section-nav"
        aria-label="NOVA case study sections"
      >
        {sections.map(([id, label]) => (
          <button key={id} onClick={() => jumpTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <section className="reporting-section" id="nova-overview" tabIndex={-1}>
        <SectionHeading
          eyebrow="01 / PURPOSE & OWNERSHIP"
          title="Designed around spoken and keyboard interaction."
        >
          {project.problem}
        </SectionHeading>
        <p>
          Jason Lewis developed and deployed NOVA as its solo developer and
          deployment owner. The app offers spoken guidance, keyboard navigation,
          and adjustable display and speech settings.
        </p>
      </section>
      <section className="reporting-section" id="nova-workflow" tabIndex={-1}>
        <SectionHeading
          eyebrow="02 / LEARNING WORKFLOW"
          title="Guidance from first use to results."
        />
        <div className="reporting-overview-grid">
          {novaCapabilities.map(([title, text]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reporting-section" id="nova-gallery" tabIndex={-1}>
        <SectionHeading
          eyebrow="03 / APPLICATION GALLERY"
          title="Home, Calculator, Converter, Settings."
        >
          The four light-theme captures from the portfolio kit appear in this
          order. Select an image to enlarge it.
        </SectionHeading>
        <ScreenshotGallery
          directory="nova"
          screenshots={novaScreenshots}
          label="NOVA application gallery"
        />
      </section>
      <section className="reporting-section" id="nova-technology" tabIndex={-1}>
        <SectionHeading
          eyebrow="04 / TECHNOLOGY"
          title="Python desktop application and speech tooling."
        >
          {project.architecture}
        </SectionHeading>
        <div className="reporting-overview-grid">
          <div>
            <h3>Desktop and preferences</h3>
            <p>
              Python 3.12 supports application logic, the arithmetic parser,
              conversion engine, and preferences. Tkinter, ttk, and
              CustomTkinter provide controls, navigation, and themes.
            </p>
          </div>
          <div>
            <h3>Speech output and recognition</h3>
            <p>
              Windows SAPI via pywin32 supplies native Windows text-to-speech.
              SpeechRecognition and PyAudio support microphone input through
              Google's online recognizer. The kit also documents pyttsx3 and
              eSpeak NG for Linux speech output.
            </p>
          </div>
        </div>
      </section>
      <section className="reporting-section" id="nova-boundaries" tabIndex={-1}>
        <SectionHeading
          eyebrow="05 / CONNECTIVITY & ACCESSIBILITY SCOPE"
          title="Clear boundaries for offline use and support."
        />
        <div className="reporting-behavior-note">
          <p>
            <strong>Offline:</strong> keyboard calculation and conversion.{" "}
            <strong>Online:</strong> speech recognition through Google's
            recognizer. Offline voice recognition is not claimed.
          </p>
        </div>
        <p>{project.confirmation}</p>
        <p>
          The application kit documents unittest coverage areas for engine,
          audio, preferences, and interface behavior. This portfolio update does
          not assert a new application test run or a coverage percentage.
        </p>
      </section>
      <section className="reporting-closing">
        <h2>Explore NOVA and more engineering work.</h2>
        <div>
          {project.sourceUrl && (
            <ExternalLink className="button primary" href={project.sourceUrl}>
              View on GitHub <ArrowRight size={17} aria-hidden="true" />
            </ExternalLink>
          )}
          <Link className="button secondary" to="/projects">
            View projects
          </Link>
        </div>
      </section>
    </div>
  );
}
