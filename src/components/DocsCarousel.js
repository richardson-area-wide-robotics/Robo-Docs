import React, { useMemo } from "react";
import useGlobalData from "@docusaurus/useGlobalData";

function getTextColor(bgColor) {
  const hex = bgColor.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminance > 186 ? "#000000" : "#FFFFFF";
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const colors = [
  "#2563EB",
  "#16A34A",
  "#DC2626",
  "#9333EA",
  "#EA580C",
  "#0891B2",
];

export default function DocsCarousel() {
  const globalData = useGlobalData();

  // Pull docs data from Docusaurus
  const docsPlugin =
    globalData["docusaurus-plugin-content-docs"]?.default;

  const docs = docsPlugin?.versions?.[0]?.docs || [];

  const randomPages = useMemo(() => {
    return shuffleArray(docs)
      .slice(0, 4)
      .map((doc, index) => ({
        title: doc.title,
        description:
          doc.description ||
          "Click to read more about this topic.",
        link: doc.path,
        color: colors[index % colors.length],
      }));
  }, [docs]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "16px",
        marginTop: "24px",
      }}
    >
      {randomPages.map((page) => {
        const textColor = getTextColor(page.color);

        return (
          <a
            key={page.link}
            href={page.link}
            style={{
              backgroundColor: page.color,
              color: textColor,
              padding: "20px",
              borderRadius: "12px",
              textDecoration: "none",
              minHeight: "160px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  marginBottom: "10px",
                  fontSize: "1.25rem",
                }}
              >
                {page.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  opacity: 0.9,
                  lineHeight: 1.5,
                }}
              >
                {page.description}
              </p>
            </div>

            <span
              style={{
                marginTop: "16px",
                fontWeight: "bold",
              }}
            >
              Read More →
            </span>
          </a>
        );
      })}
    </div>
  );
}