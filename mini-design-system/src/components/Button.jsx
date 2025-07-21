import React from "react";

export default function Button({
  variant = "primary",
  disabled = false,
  onClick,
  children,
}) {
  const baseStyle =
    "px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2";
  const primaryStyle = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryStyle = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  const classes = `${baseStyle} ${
    variant === "primary" ? primaryStyle : secondaryStyle
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
