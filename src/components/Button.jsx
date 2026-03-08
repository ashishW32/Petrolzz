import React from "react";
import "./components.css";

const variantMap = {
  primary: "pm-button--primary",
  secondary: "pm-button--secondary",
  ghost: "pm-button--ghost",
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const variantClass = variantMap[variant] || variantMap.primary;

  return (
    <button
      type={type}
      className={`pm-button ${variantClass} pm-focus-ring ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
