// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { plugins } = require('./config/plugins');
const presets = require('./config/presets');
const navbar = require('./config/navbar');

const baseUrl = process.env.BASE_URL || '/';
console.log('baseUrl', baseUrl)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Doc Template',
  tagline: 'Dinosaurs are cool',
  url: 'https://rain120.github.io/docusaurus-doc-template/',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Rain120', // Usually your GitHub org/user name.
  projectName: 'docusaurus-doc-template', // Usually your repo name.

  presets,
  plugins,

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // gtag: {
      //   trackingID: '',
      //   anonymizeIP: true, // 是否匿名化 IP？
      // },
      navbar: {
        title: 'Docusaurus Doc Template',
        logo: {
          alt: 'Docusaurus Doc Template',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          ...navbar,
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rain120/docusaurus-doc-template',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '其他仓库',
            items: [
              {
                label: 'Study Notes',
                href: 'https://github.com/Rain120/study-notes',
              },
              {
                label: 'Typescript Guide',
                href: 'https://github.com/Rain120/typescript-guide',
              },
              {
                label: 'One Utils',
                href: 'https://github.com/tinyfe/one-utils',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rain120/docusaurus-doc-template',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      liveCodeBlock: {
        /**
         * 实时效果显示的位置，可位于编辑器上方或下方。
         * 可为："top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
