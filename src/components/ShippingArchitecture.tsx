import {
  ArrowLeft,
  ArrowRight,
  Database,
  Monitor,
  Touchpad,
  Truck,
  Users,
} from "lucide-react";
export function ShippingArchitecture() {
  return (
    <figure className="shipping-architecture">
      <div
        className="architecture-flow"
        role="img"
        aria-label="Conceptual integration: Driver to WPF Driver Check-In Kiosk to SQL Server. Shipping Employees to WPF Shipping Dashboard to the same SQL Server."
      >
        <div className="architecture-node actor">
          <Truck size={27} aria-hidden="true" />
          <strong>Driver</strong>
          <span>Arriving for pickup</span>
        </div>
        <ArrowRight className="architecture-arrow" aria-hidden="true" />
        <div className="architecture-node">
          <Touchpad size={28} aria-hidden="true" />
          <strong>Driver Check-In Kiosk</strong>
          <span>WPF / XAML</span>
        </div>
        <ArrowRight className="architecture-arrow" aria-hidden="true" />
        <div className="architecture-node database-node">
          <Database size={30} aria-hidden="true" />
          <strong>SQL Server</strong>
          <span>Shared shipping information</span>
        </div>
        <ArrowLeft className="architecture-arrow" aria-hidden="true" />
        <div className="architecture-node">
          <Monitor size={28} aria-hidden="true" />
          <strong>Shipping Dashboard</strong>
          <span>WPF / XAML</span>
        </div>
        <ArrowLeft className="architecture-arrow" aria-hidden="true" />
        <div className="architecture-node actor">
          <Users size={27} aria-hidden="true" />
          <strong>Shipping employees</strong>
          <span>Operational coordination</span>
        </div>
      </div>
      <figcaption>
        Conceptual application integration diagram—not an exact infrastructure
        topology. Both desktop applications coordinate shipping information
        through SQL Server.
      </figcaption>
    </figure>
  );
}
