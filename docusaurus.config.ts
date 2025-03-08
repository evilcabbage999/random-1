const config = {
  title: 'The Bloxstreet Rebellion',
  tagline: 'The Rebellion Has Begun',
  favicon: 'img/favicon.ico',

  url: 'https://thebloxrebellion.netlify.app',
  baseUrl: '/',

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
          sidebarPath: require.resolve('./sidebars.js'), // ✅ Ensure correct path
          routeBasePath: '/docs', // ✅ This makes docs appear under /docs
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
        { to: '/docs', label: 'Docs', position: 'left' }, // ✅ Add link to docs
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
