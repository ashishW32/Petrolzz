import React from "react";

export default function Footer({ company = "Petrolzz", links = [] }) {
  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1.25rem 1rem",
        borderTop: "1px solid #e5e7eb",
        color: "#6b7280",
        fontSize: "0.9rem",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <span>© {new Date().getFullYear()} {company}. All rights reserved.</span>
      <div style={{ display: "flex", gap: "0.9rem" }}>
        {links.map((link) => (
          <a key={link.href || link.label} href={link.href} style={{ color: "#6b7280", textDecoration: "none" }}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
