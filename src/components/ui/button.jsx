import React from "react";

export function Button({ children, onClick, variant = "primary", className = "" }) {
  const base = "px-4 py-2 rounded font-semibold";
  const variants = {
    primary: "bg-blue-600 text-white",
    link: "text-blue-600 underline",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
