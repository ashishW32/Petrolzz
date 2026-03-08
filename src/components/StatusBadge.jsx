import React from "react";
import "./components.css";

const styles = {
  open: { background: "#dcfce7", color: "#166534" },
  busy: { background: "#ffedd5", color: "#9a3412" },
  closed: { background: "#fee2e2", color: "#991b1b" },
};

export default function StatusBadge({ status = "open", label }) {
  const normalized = String(status).toLowerCase();
  const palette = styles[normalized] || styles.open;

  return (
    <span className="pm-badge" style={palette}>
      {label || normalized}
    </span>
  );
}
