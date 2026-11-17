import {
  ArrowUpRight,
  Truck,
  FileChartColumn,
  Factory,
  Grid3X3,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../types/project";
import { TechBadge } from "./Shared";
const icons = {
  shipping: Truck,
  reporting: FileChartColumn,
  "daily-reporting": FileChartColumn,
  "ar-aging": FileChartColumn,
  manufacturing: Factory,
  formulary: Grid3X3,
};
export function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  return (
    <article
      className={`project-card project-${project.icon}${project.featured ? " project-featured" : ""}`}
    >
      <div className="project-art" aria-hidden="true">
        <span className="project-number">PROJECT / {project.number}</span>
        {project.icon === "formulary" ? (
          <div className="formulary-card-preview">
            <span>ƒ(x)</span>
            <span>
              <Grid3X3 size={34} />
            </span>
            <span>
              <TrendingUp size={34} />
            </span>
          </div>
        ) : (
          <div className="art-orbit">
            <Icon size={52} strokeWidth={1.1} />
          </div>
        )}
        <span className="art-label">
          {project.icon === "shipping"
            ? "CONNECTED OPERATIONS"
            : project.icon === "reporting"
              ? "LEGACY → MODERN"
              : project.icon === "daily-reporting"
                ? "SHIPPING / BUDGET"
                : project.icon === "ar-aging"
                  ? "RECEIVABLES / AGING"
                  : project.icon === "formulary"
                    ? "FORMULAS / INVENTORY / VISIBILITY"
                    : "SYSTEMS IN SYNC"}
        </span>
      </div>
      <div className="project-body">
        <p className="eyebrow">
          {project.featured ? "FLAGSHIP / " : ""}
          {project.category}
        </p>
        {project.status && <p className="project-status">{project.status}</p>}
        <h3>
          <Link to={`/projects/${project.slug}`}>
            {project.title}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </h3>
        <p>{project.summary}</p>
        <div className="badges">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <Link className="text-link case-link" to={`/projects/${project.slug}`}>
          Explore case study <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">: {project.title}</span>
        </Link>
      </div>
    </article>
  );
}
