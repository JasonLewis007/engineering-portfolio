import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
const navigation = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/skills", "Skills"],
  ["/contact", "Contact"],
] as const;
export function MobileNavigation({ onClose }: { onClose: () => void }) {
  return (
    <nav
      id="mobile-navigation"
      className="mobile-navigation"
      aria-label="Mobile navigation"
    >
      {navigation.map(([to, label]) => (
        <NavLink key={to} to={to} end={to === "/"} onClick={onClose}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function handlePointer(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handlePointer);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handlePointer);
    };
  }, [open]);
  return (
    <header className="site-header" ref={container}>
      <div className="container header-inner">
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
          <span className="monogram">
            JL<span>.</span>
          </span>
          <span>
            Jason Lewis<span className="sr-only"> home</span>
          </span>
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="header-contact" to="/contact">
          Let’s connect <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        {open && <MobileNavigation onClose={() => setOpen(false)} />}
      </div>
    </header>
  );
}
