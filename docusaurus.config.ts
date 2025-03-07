const config = {
  title: 'The Bloxstreet Rebellion',
  tagline: 'The Rebellion Has Begun',
  favicon: 'img/favicon.ico',

  url: 'https://thebloxrebellion.netlify.app',
  baseUrl: '/',

  // Ignore broken links to prevent build failures
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
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', 
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} The Bloxstreet Rebellion, Inc.`,
    },
  },
};

export default config;
