import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, CodeXml } from "lucide-react";
import { Link } from "react-router-dom";
export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const url = new URL(href);
  if (url.protocol !== "https:" || url.hostname !== "github.com")
    throw new Error("Unsupported external destination");
  return (
    <a
      href={url.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function TechBadge({ children }: { children: ReactNode }) {
  return <span className="tech-badge">{children}</span>;
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}
export function CallToAction() {
  return (
    <section className="contact-band">
      <div>
        <p className="eyebrow">LET’S CONNECT</p>
        <h2>
          Good software starts with
          <br className="desktop-break" /> a thoughtful conversation.
        </h2>
        <p>
          For hiring teams and engineering leaders building practical, lasting
          solutions.
        </p>
      </div>
      <div className="cta-actions">
        <Link className="button primary" to="/contact">
          Start a conversation <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <ExternalLink
          href="https://github.com/JasonLewis007"
          className="text-link"
        >
          <CodeXml size={17} aria-hidden="true" /> Connect on GitHub{" "}
          <ArrowUpRight size={16} aria-hidden="true" />
        </ExternalLink>
      </div>
    </section>
  );
}
