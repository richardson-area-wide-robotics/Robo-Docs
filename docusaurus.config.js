// @ts-check
// Docusaurus config for Robo Docs

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Robo Docs",
  tagline: "Official documentation for Richardson Area Wide Robotics.",
  favicon: "img/favicon.ico",

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "darkreader-lock",
      },
    },
  ],

  future: {
    experimental_faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
    },
  },

  // --- GitHub Pages Config ---
  url: "https://richardson-area-wide-robotics.github.io",
  baseUrl: "/Robo-Docs/",
  organizationName: "richardson-area-wide-robotics",
  projectName: "Robo-Docs",

  onBrokenLinks: "warn",

  // --- Docs Plugin ---
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        routeBasePath: "/",
        editUrl:
          "https://github.com/richardson-area-wide-robotics/Robo-Docs/edit/main/",
      },
    ],
  ],

  // --- Themes ---
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: "./src/css/custom.css",
      },
    ],
  ],

  // --- Theme Config ---
  themeConfig: {
    navbar: {
      title: "Robo Docs",
      hideOnScroll: true,
      logo: {
        alt: "Robotics Logo",
        src: "img/logo.webp",
      },
      style: "dark",
      // 🔵🔴 Blue & Red theme for navbar
      items: [
        {
          href: "https://github.com/richardson-area-wide-robotics",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      // 🔵🔴 Footer color scheme handled by custom CSS
      links: [
        {
          title: "Documentation",
          items: [{ label: "Get Started", to: "/" }],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub Org",
              href: "https://github.com/richardson-area-wide-robotics",
            },
            {
              label: "Robo Docs Repo",
              href: "https://github.com/richardson-area-wide-robotics/Robo-Docs",
            },
          ],
        },
      ],
      logo: {
        alt: "Robotics Logo",
        src: "img/logo.webp",
        width: 64,
        height: 64,
      },
      copyright:
        "© " +
        new Date().getFullYear() +
        " Richardson Area Wide Robotics — Built with Docusaurus",
    },

    // Prism (code block theme)
    prism: {
      theme: prismThemes.github, // Light
      darkTheme: prismThemes.dracula, // Dark
      additionalLanguages: [
        "java",
        "javastacktrace",
        "javadoclike",
        "javadoc",
        "groovy",
      ],
    },

    colorMode: {
      respectPrefersColorScheme: true,
    },

    // 🔵🔴 Blue/Red Announcement Bar
    announcementBar: {
      id: "alphaNotice",
      content:
        "🚧 Robo Docs is currently in early development. Content may be incomplete.",
      backgroundColor: "#1e3a8a", // deep blue
      textColor: "#ffffff",
      isCloseable: true,
    },
  },
};

export default config;
