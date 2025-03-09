// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Data Structures & Algorithms",
  tagline:
    "Everything about Data Structures & Algorithms, its reference links & technical documentations",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://pravn27.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ds-algo-tech-doc/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pravn27", // Usually your GitHub org/user name.
  projectName: "ds-algo-tech-doc", // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pravn27/ds-algo-tech-doc/tree/master",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/pravn27/ds-algo-tech-doc/tree/master",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: "DS & Algo",
        logo: {
          alt: "Logo",
          src: "/img/logo.png",
        },
        items: [
          {
            to: "/docs/category/data-structure/",
            label: "Data Structures",
            position: "left",
          },
          {
            to: "/docs/category/algorithms/",
            label: "Algorithms",
            position: "left",
          },
          {
            href: "https://github.com/pravn27",
            position: "right",
            className: "header--github-link",
            "aria-label": "GitHub repository",
            title: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/praveen-s-157b365a/",
            position: "right",
            className: "header--linkedin-link",
            "aria-label": "LinkedIn profile",
            title: "LinkedIn",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "DS & Algo",
            items: [
              {
                label: "Data Structures",
                to: "/docs/category/data-structure/ ",
              },
              {
                label: "Algorithms",
                to: "/docs/category/algorithms/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/pravn27",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/praveen-s-157b365a/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DS & Algo tech docs. Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: [
    // ... Your other themes.
    [
      require("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],
};

export default config;
