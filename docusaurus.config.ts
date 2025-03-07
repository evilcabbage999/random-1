import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The Bloxstreet Rebellion',  // Update the title to match the new theme
  tagline: 'The Rebellion Has Begun', // Tagline
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config (you can keep this or remove if not needed)
  organizationName: 'facebook', // Can leave this if using GitHub pages
  projectName: 'docusaurus', // Can leave this if using GitHub pages

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // No need for "edit this page" links, so no need to configure this
          routeBasePath: '/', // This makes the docs homepage show on the root
        },
        blog: false, // Disable the blog section
        theme: {
          customCss: './src/css/custom.css', // If you want custom styles, you can add them here
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'The Bloxstreet Rebellion', // Update navbar title to match
      logo: {
        alt: 'Bloxstreet Logo',
        src: 'img/logo.svg',
      },
      items: [], // Remove all navbar items, leaving it clean
    },
    footer: {
      style: 'dark',
      links: [], // Remove footer links
      copyright: `Copyright © ${new Date().getFullYear()} The Bloxstreet Rebellion, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
