import React from "react";

function getTextColor(bgColor) {
  // Remove "#" if present
  const hex = bgColor.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Return black or white
  return luminance > 186 ? "#000000" : "#FFFFFF";
}

export default function ColorBox({ color }) {
  const textColor = getTextColor(color);

  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: color,
        color: textColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        borderRadius: "8px",
      }}
    >
      {color}
    </div>
  );
}