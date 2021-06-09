/** @type {import('@docusaurus/types').DocusaurusConfig} */
const githubUrl = 'https://github.com/planana/planana.ca';

module.exports = {
  title: 'Planana',
  tagline: 'The monKEY to event planning',
  url: 'https://planana.github.io/planana.ca',
  baseUrl: '/planana.ca',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'planana', // Usually your GitHub org/user name.
  projectName: 'planana.ca', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Planana',
      logo: {
        alt: 'Planana Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: githubUrl, label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [ { label: 'Tutorial', to: '/docs/intro' } ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: githubUrl },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Planana, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            `${githubUrl}/edit/master/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `${githubUrl}/edit/master/blog/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
