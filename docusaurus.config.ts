import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { ProvidePlugin } from "webpack";

const config: Config = {
  title: 'Catenda Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          blogTitle: 'Articles',
          path: 'articles',
          routeBasePath: 'articles',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bcf',
        path: 'bcf',
        routeBasePath: 'bcf',
        sidebarPath: './sidebars-plugins.ts',
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v3.0',
            banner: 'none',
          },
          '2.0': {
            label: 'v2.0',
            banner: 'none',
          },
          '1.0': {
            label: 'v1.0',
            banner: 'none',
          }
        }
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cde',
        path: 'cde',
        routeBasePath: 'cde',
        sidebarPath: './sidebars-plugins.ts',
        lastVersion: 'current',
        versions: {
          current: {
            label: 'Stable',
            banner: 'none',
          },
          'beta': {
            label: 'Beta',
            banner: 'none',
          },
          'development': {
            label: 'Development',
            banner: 'none',
          }
        }
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'viewer-2d',
        path: 'viewer-2d',
        routeBasePath: 'viewer-2d',
        sidebarPath: './sidebars-plugins.ts',
        lastVersion: 'current',
        versions: {
          current: {
            label: 'Stable',
            banner: 'none',
          },
          'beta': {
            label: 'Beta',
            banner: 'none',
          },
          'development': {
            label: 'Development',
            banner: 'none',
          }
        }
      },
    ],
    'docusaurus-plugin-sass',
    // Add custom webpack config to make @stoplight/elements work
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve("process/browser"),
            }),
          ],
          resolve: {
            fallback: {
              buffer: require.resolve("buffer"),
              stream: false,
              path: false,
              process: false,
              url: false,
            },
          },
        };
      },
    }),
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Catenda Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          docId: 'docs/index',
          type: 'doc',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'BCF',
          docsPluginId: 'bcf',
        },
        {
          docId: 'docs/index',
          type: 'doc',
          position: 'left',
          label: 'OpenCDE',
          docsPluginId: 'cde',
        },
        {
          docId: 'docs/index',
          type: 'doc',
          position: 'left',
          label: 'Viewer 2D',
          docsPluginId: 'viewer-2d',
        },
        // {to: '/articles', label: 'Articles', position: 'left'},
        {to: 'api', label: 'OpenAPI', position: 'left'},
        // {to: 'docs', label: 'Root', position: 'left'},
        {
          position: 'right',
          docsPluginId: 'bcf',
          type: 'docsVersionDropdown',
        },
        {
          position: 'right',
          docsPluginId: 'cde',
          type: 'docsVersionDropdown',
        },
        {
          position: 'right',
          docsPluginId: 'viewer-2d',
          type: 'docsVersionDropdown',
          
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
              label: 'BCF',
              to: '/bcf/docs',
            },
            {
              label: 'OpenCDE',
              to: '/cde/docs',
            },
            {
              label: 'Viewer 2D',
              to: '/viewer-2d/docs',
            },
          ],
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
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        blogRouteBasePath: "/articles",
        blogDir: "articles",
        docsDir: [
          "bcf/docs",
          "cde/docs",
          "viewer-2d/docs"
        ],
        docsRouteBasePath: [
          "bcf",
          "cde",
          "viewer-2d"
        ],
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
      }),
    ],
  ],
};

export default config;
