/** @type {import('@docusaurus/types').DocusaurusConfig} */
const githubUrl = "https://github.com/planana/planana.ca";

module.exports = {
  title: "Planana",
  tagline: "The monKEY to event planning",
  url: "https://planana.ca",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "planana",
  projectName: "planana.ca",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      switchConfig: {
        darkIcon: "🍓",
        lightIcon: "🍌",
      },
    },
    navbar: {
      logo: {
        alt: "Planana Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/about", label: "About", position: "left" },
        { to: "/blog", label: "Our Team", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { href: githubUrl, label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Planana. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `${githubUrl}/edit/master/`,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${githubUrl}/edit/master/blog/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
