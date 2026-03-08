import React from "react";
import "./components.css";

export default function InfoCard({ title, value, caption, icon }) {
  return (
    <article
      className="pm-card"
      style={{
        padding: "1rem",
        display: "grid",
        gap: "0.45rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.85rem", fontWeight: 500 }}>{title}</p>
        {icon ? <span aria-hidden>{icon}</span> : null}
      </div>
      <strong style={{ fontSize: "1.35rem", color: "#111827" }}>{value}</strong>
      {caption ? <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>{caption}</span> : null}
    </article>
  );
}
