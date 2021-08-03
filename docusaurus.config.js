const docsVersions = require('./versions.json');

(module.exports = {
  title: 'Tgrade Documentation',
  tagline: 'Tgrade documentation',
  url: 'https://confio.github.io',
  baseUrl: '/tgrade-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.svg',
  organizationName: 'confio',
  projectName: 'tgrade-docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'tgrade',
        src: 'img/logo.svg',
        href: 'https://confio.github.io/',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
          docsPluginId: 'docs',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Wiki',
          docsPluginId: 'wiki',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Related Documentation',
          items: [
            {
              label: 'Cosmos SDK',
              href: 'https://cosmos.network/docs',
            },
            {
              label: 'Cosmos Hub',
              href: 'https://hub.cosmos.network/',
            },
            {
              label: 'Tendermint Core',
              href: 'https://docs.tendermint.com/',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'CosmWasm/cosmwasm',
              href: 'https://github.com/CosmWasm/cosmwasm',
            },
            {
              label: 'CosmWasm/wasmd',
              href: 'https://github.com/CosmWasm/wasmd',
            },
            {
              label: 'CosmWasm/cosmwasm-plus',
              href: 'https://github.com/CosmWasm/cosmwasm-plus',
            },
            {
              label: 'CosmWasm/cawesome-wasm',
              href: 'https://github.com/CosmWasm/cawesome-wasm',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/tgradefinance',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/WDbZwFZMuM',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TgradeFinance',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Confio GmbH`,
    },
    prism: {
      additionalLanguages: ['rust'],
    },
    announcementBar: {
      id: 'docs_here',
      content:
        'Welcome to Tgrade docs',
      backgroundColor: '#7691FE',
      textColor: '#F5F6F7',
    },
    /*
    algolia: {
      apiKey: 'abeca9781b806ca955a7e0f1ee95d003',
      indexName: 'cosmwasm_docs',
      contextualSearch: true,
      appId: 'BH4D9OD16A',
    },
     */
    hideableSidebar: true
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true,
        docs: {
          editUrl: 'https://github.com/tgrade-docs/docs/edit/main',
          id: 'docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        sidebarPath: require.resolve('./sidebars/sidebarsWiki.js'),
      },
    ],
  ],
});
