import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: [
    'index',
    {
      type: 'category',
      label: 'BCF',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Introduction',
          link: {
            type: 'generated-index',
          },
          items: [
            'BCF/Introduction/introduction',
            'BCF/Introduction/issue-boards',
          ],
        },
        {
          type: 'category',
          label: 'API',
          link: {
            type: 'generated-index',
          },
          items: [
            'BCF/API/Comment',
            'BCF/API/Document',
          ],
        },
        {
          type: 'category',
          label: 'BCF v2.2',
          collapsed: false,
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Introduction',
              link: {
                type: 'generated-index',
              },
              items: [
                'BCF/Introduction/introduction',
                'BCF/Introduction/issue-boards',
              ],
            },
            {
              type: 'category',
              label: 'API',
              link: {
                type: 'generated-index',
              },
              items: [
                'BCF/API/Comment',
                'BCF/API/Document',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'BCF v2.1',
          collapsed: false,
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Introduction',
              link: {
                type: 'generated-index',
              },
              items: [
                'BCF/Introduction/introduction',
                'BCF/Introduction/issue-boards',
              ],
            },
            {
              type: 'category',
              label: 'API',
              link: {
                type: 'generated-index',
              },
              items: [
                'BCF/API/Comment',
                'BCF/API/Document',
              ],
            },
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'OpenCDE',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Introduction',
          link: {
            type: 'generated-index',
          },
          items: [
            'OpenCDE/introduction',
            'OpenCDE/authentication',
          ],
        },
        {
          type: 'category',
          label: 'API',
          link: {
            type: 'generated-index',
          },
          items: [
            'OpenCDE/API/Labels',
            'OpenCDE/API/Members',
          ],
        },
        {
          type: 'category',
          label: 'Beta',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Introduction',
              link: {
                type: 'generated-index',
              },
              items: [
                'OpenCDE/introduction',
                'OpenCDE/authentication',
              ],
            },
            {
              type: 'category',
              label: 'API',
              link: {
                type: 'generated-index',
              },
              items: [
                'OpenCDE/API/Labels',
                'OpenCDE/API/Members',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Development',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Introduction',
              link: {
                type: 'generated-index',
              },
              items: [
                'OpenCDE/introduction',
                'OpenCDE/authentication',
              ],
            },
            {
              type: 'category',
              label: 'API',
              link: {
                type: 'generated-index',
              },
              items: [
                'OpenCDE/API/Labels',
                'OpenCDE/API/Members',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Viewer 2D',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Introduction',
          link: {
            type: 'generated-index',
          },
          items: [
            'Viewer 2D/Getting Started',
            'Viewer 2D/Dependencies',
          ],
        },
        {
          type: 'category',
          label: 'Methods',
          link: {
            type: 'generated-index',
          },
          items: [
            'Viewer 2D/Methods/addImage',
            'Viewer 2D/Methods/addMarker',
          ],
        },
        {
          type: 'category',
          label: 'Beta',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Introduction',
              link: {
                type: 'generated-index',
              },
              items: [
                'Viewer 2D/Getting Started',
                'Viewer 2D/Dependencies',
              ],
            },
            {
              type: 'category',
              label: 'Methods',
              link: {
                type: 'generated-index',
              },
              items: [
                'Viewer 2D/Methods/addImage',
                'Viewer 2D/Methods/addMarker',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Development',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Introduction',
              link: {
                type: 'generated-index',
              },
              items: [
                'Viewer 2D/Getting Started',
                'Viewer 2D/Dependencies',
              ],
            },
            {
              type: 'category',
              label: 'Methods',
              link: {
                type: 'generated-index',
              },
              items: [
                'Viewer 2D/Methods/addImage',
                'Viewer 2D/Methods/addMarker',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'link',
      label: 'API Explorer', // The link label
      href: '/api', // The internal path
    }
  ],
};

export default sidebars;
