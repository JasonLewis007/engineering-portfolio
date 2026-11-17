import { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { Home } from "./pages/Home";
import {
  About,
  Projects,
  ProjectDetails,
  Experience,
  Skills,
  Contact,
  NotFound,
} from "./pages/Pages";
import { projects } from "./data/projects";
const pageTitles: Record<string, string> = {
  "/": "Software Engineer",
  "/about": "About",
  "/projects": "Projects",
  "/experience": "Experience",
  "/skills": "Skills",
  "/contact": "Contact",
};
export default function App() {
  const { pathname } = useLocation();
  const main = useRef<HTMLElement>(null);
  const previousPath = useRef(pathname);
  useEffect(() => {
    const title =
      pageTitles[pathname] ??
      projects.find((project) => pathname === `/projects/${project.slug}`)
        ?.title ??
      "Page not found";
    document.title = `${title} | Jason Lewis`;
    window.scrollTo({ top: 0, behavior: "instant" });
    if (previousPath.current !== pathname)
      main.current?.focus({ preventScroll: true });
    previousPath.current = pathname;
  }, [pathname]);
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          main.current?.focus();
        }}
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/enterprise-shipping"
            element={
              <Navigate
                to="/projects/enterprise-shipping-management-suite"
                replace
              />
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
