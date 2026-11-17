import { ArrowDown, Braces, Database, Layers3, Check } from "lucide-react";
export function EngineeringVisual() {
  return (
    <div
      className="engineering-visual"
      role="img"
      aria-label="Conceptual illustration connecting an application layer, business logic, and data workflows; not an actual system architecture."
    >
      <div className="visual-top">
        <span className="status-dot" /> ENGINEERING / A SYSTEMS PERSPECTIVE
        <span className="visual-cross">+</span>
      </div>
      <div className="visual-grid">
        <div className="system-card layer-one">
          <span className="system-icon">
            <Layers3 size={22} />
          </span>
          <div>
            <small>01 / EXPERIENCE</small>
            <strong>Application layer</strong>
            <span>Clear interfaces. Practical workflows.</span>
          </div>
          <span className="system-check">
            <Check size={14} />
          </span>
        </div>
        <div className="connector">
          <ArrowDown size={16} />
          <span>purposeful interactions</span>
        </div>
        <div className="system-card layer-two">
          <span className="system-icon">
            <Braces size={23} />
          </span>
          <div>
            <small>02 / ENGINEERING</small>
            <strong>Business logic</strong>
            <span>Reliable rules. Maintainable systems.</span>
          </div>
          <span className="system-check">
            <Check size={14} />
          </span>
        </div>
        <div className="connector">
          <ArrowDown size={16} />
          <span>consistent information</span>
        </div>
        <div className="system-card layer-three">
          <span className="system-icon">
            <Database size={23} />
          </span>
          <div>
            <small>03 / FOUNDATION</small>
            <strong>Data & integrations</strong>
            <span>Connected systems. Trusted workflows.</span>
          </div>
          <span className="system-check">
            <Check size={14} />
          </span>
        </div>
      </div>
      <div className="visual-bottom">
        <span>BUILT AROUND THE BUSINESS</span>
        <span>CONCEPT / 001</span>
      </div>
    </div>
  );
}
