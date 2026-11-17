import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "./Shared";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link to="/" className="wordmark">
            Jason Lewis<span className="blue-dot">.</span>
          </Link>
          <p>Thoughtful engineering. Practical solutions.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <ExternalLink href="https://github.com/JasonLewis007">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </ExternalLink>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Jason Lewis</span>
        <span>
          Charlotte, North Carolina <span className="footer-separator">/</span>{" "}
          Built with intention.
        </span>
      </div>
    </footer>
  );
}
