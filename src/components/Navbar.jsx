import React from "react";
import Button from "./Button";
import "./components.css";

export default function Navbar({ brand = "Petrolzz", links = [], onCtaClick, ctaLabel = "Get Started" }) {
  return (
    <header
      className="pm-card"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        borderRadius: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: "0.8rem 1.2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <strong style={{ fontSize: "1.1rem", letterSpacing: "0.2px" }}>{brand}</strong>
      <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {links.map((link) => (
          <a
            key={link.href || link.label}
            className="pm-focus-ring"
            href={link.href}
            style={{ color: "#4b5563", textDecoration: "none", fontWeight: 500 }}
          >
            {link.label}
          </a>
        ))}
        <Button variant="secondary" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      </nav>
    </header>
  );
}
