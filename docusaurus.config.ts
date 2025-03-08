const config = {
  title: 'The Bloxstreet Rebellion',
  tagline: 'The Rebellion Has Begun',
  favicon: 'img/favicon.ico',

  url: 'https://thebloxrebellion.netlify.app',
  baseUrl: '/',  // Keep this as '/' to serve at the root

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',  // Serve docs at the root URL
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'The Bloxstreet Rebellion',
      logo: {
        alt: 'Bloxstreet Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs', label: 'Docs', position: 'left' }, // Link to /docs in the navbar
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} The Bloxstreet Rebellion, Inc.`,
    },
  },
};

export default config;
