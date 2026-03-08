import React from "react";

export default function SectionHeader({ title, subtitle, action }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "1.25rem", color: "#111827" }}>{title}</h2>
        {subtitle ? (
          <p style={{ margin: "0.2rem 0 0", color: "#6b7280", fontSize: "0.95rem" }}>
            {subtitle}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
