import React from "react";
import "./components.css";

export default function MapPanel({ title = "Map", children, height = 360 }) {
  return (
    <section className="pm-card" style={{ overflow: "hidden" }}>
      <div style={{ padding: "0.9rem 1rem", borderBottom: "1px solid #e5e7eb", fontWeight: 600 }}>{title}</div>
      <div
        style={{
          minHeight: height,
          background: "linear-gradient(160deg, #dbeafe 0%, #f0f9ff 50%, #dcfce7 100%)",
          display: "grid",
          placeItems: "center",
          color: "#4b5563",
          fontWeight: 500,
        }}
      >
        {children || "Embed map provider here"}
      </div>
    </section>
  );
}
