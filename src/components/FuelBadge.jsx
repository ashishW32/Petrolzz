import React from "react";
import "./components.css";

const fuelPalettes = {
  petrol: { background: "#dbeafe", color: "#1e3a8a" },
  diesel: { background: "#ede9fe", color: "#5b21b6" },
  electric: { background: "#dcfce7", color: "#166534" },
  hybrid: { background: "#fef9c3", color: "#854d0e" },
};

export default function FuelBadge({ type = "petrol" }) {
  const normalized = String(type).toLowerCase();
  const palette = fuelPalettes[normalized] || fuelPalettes.petrol;

  return (
    <span className="pm-badge" style={palette}>
      {normalized}
    </span>
  );
}
