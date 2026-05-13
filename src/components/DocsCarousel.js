import React, { useMemo } from "react";
import { useAllDocsData } from "@docusaurus/plugin-content-docs/client";

function getTextColor(bgColor) {
  const hex = bgColor.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminance > 186 ? "#000000" : "#FFFFFF";
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const colors = ["#2563EB", "#16A34A", "#DC2626", "#9333EA"];

export default function DocsCarousel() {
  const allDocsData = useAllDocsData();

  // Get docs from the first docs plugin instance
  const docsPlugin = Object.values(allDocsData)[0];

  const allDocs = useMemo(() => {
    const versions = docsPlugin?.versions || [];

    // take latest version
    const latestVersion = versions[0];

    const docs = latestVersion?.docs || [];

    return docs
      .filter((d) => d?.permalink && d?.title)
      .map((d) => ({
        title: d.title,
        link: d.permalink,
        description: d.description || "Open documentation page",
      }));
  }, [docsPlugin]);

  const randomPages = useMemo(() => {
    return shuffle(allDocs)
      .slice(0, 4)
      .map((page, i) => ({
        ...page,
        color: colors[i % colors.length],
      }));
  }, [allDocs]);

  if (!randomPages.length) {
    return <p>No docs found.</p>;
  }

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
              minHeight: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>{page.title}</h3>
              <p style={{ marginTop: 8, opacity: 0.9 }}>
                {page.description}
              </p>
            </div>

            <strong>Read →</strong>
          </a>
        );
      })}
    </div>
  );
}