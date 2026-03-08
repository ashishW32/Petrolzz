import React from "react";
import Button from "./Button";
import FuelBadge from "./FuelBadge";
import StatusBadge from "./StatusBadge";
import "./components.css";

export default function StationCard({
  name,
  address,
  distance,
  eta,
  fuels = [],
  status = "open",
  onNavigate,
}) {
  return (
    <article
      className="pm-card"
      style={{
        padding: "1rem",
        display: "grid",
        gap: "0.85rem",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "var(--pm-shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--pm-shadow-sm)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem" }}>
        <div>
          <h3 style={{ margin: 0, color: "#111827", fontSize: "1.05rem" }}>{name}</h3>
          <p style={{ margin: "0.2rem 0 0", color: "#6b7280", fontSize: "0.9rem" }}>{address}</p>
        </div>
        <StatusBadge status={status} />
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {fuels.map((fuel) => (
          <FuelBadge key={fuel} type={fuel} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", color: "#4b5563", fontSize: "0.9rem" }}>
        <span>{distance} away</span>
        <span>ETA {eta}</span>
      </div>

      <Button onClick={onNavigate}>Navigate</Button>
    </article>
  );
}
