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

  console.log("[DocsCarousel] allDocsData:", allDocsData);

  const pages = useMemo(() => {
    console.log("[DocsCarousel] useMemo triggered");

    if (!allDocsData || typeof allDocsData !== "object") {
      console.warn("[DocsCarousel] Invalid allDocsData");
      return [];
    }

    const pluginIds = Object.keys(allDocsData);
    const pluginId = pluginIds[0];

    console.log("[DocsCarousel] pluginIds:", pluginIds);
    console.log("[DocsCarousel] selected pluginId:", pluginId);

    const pluginData = allDocsData?.[pluginId];
    console.log("[DocsCarousel] pluginData:", pluginData);

    const docsArray =
      pluginData?.versions?.[0]?.docs;

    console.log("[DocsCarousel] docsArray:", docsArray);

    if (!Array.isArray(docsArray)) {
      console.warn("[DocsCarousel] docsArray is missing or not an array");
      return [];
    }

    console.log("[DocsCarousel] docsArray length:", docsArray.length);
    console.log("[DocsCarousel] sample doc:", docsArray[0]);

    const pages = shuffle(docsArray)
      .filter((doc) => doc?.id && doc?.path)
      .slice(0, 4)
      .map((doc) => ({
        title:
          doc?.frontMatter?.title ||
          doc?.title ||
          doc?.sidebar_label ||
          doc?.id,
        link: doc.path,
      }));


    return pages;
  }, [allDocsData]);

  if (!pages.length) {
    return (
      <p style={{ marginTop: "24px", opacity: 0.7 }}>
        No docs found.
      </p>
    );
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
      {pages.map((page, i) => {
        const color = colors[i % colors.length];
        const textColor = getTextColor(color);

        return (
          <a
            key={page.link}
            href={page.link}
            style={{
              backgroundColor: color,
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
                Open documentation page
              </p>
            </div>

            <strong>Read →</strong>
          </a>
        );
      })}
    </div>
  );
}