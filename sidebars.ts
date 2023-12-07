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
  bcfSidebar: [
    'BCF/index',
    'BCF/Introduction/issue-boards',
    {
      type: 'category',
      label: 'API',
      link: {
        type: 'generated-index',
        slug: 'BCF/API',
      },
      items: [
        'BCF/API/Comment',
        'BCF/API/Document',
      ],
    },
    {
      type: 'category',
      label: 'BCF v2.1',
      link: {
        type: 'generated-index',
        slug: 'BCF/BCF 2.1/API',
      },
      items: [
        'BCF/BCF 2.1/API/Comment',
        'BCF/BCF 2.1/API/Document',
      ],
    },
    {
      type: 'category',
      label: 'BCF v2.0',
      link: {
        type: 'generated-index',
        slug: 'BCF/BCF 2.0/API',
      },
      items: [
        'BCF/BCF 2.0/API/Comment',
        'BCF/BCF 2.0/API/Document',
      ],
    }
  ],
  cdeSidebar: [
    'OpenCDE/index',
    'OpenCDE/authentication',
    {
      type: 'doc',
      id: 'OpenCDE/Swagger UI',
      label: 'API',
    },
    {
      type: 'doc',
      id: 'OpenCDE/Swagger UI Beta',
      label: 'Beta API',
    },
    {
      type: 'doc',
      id: 'OpenCDE/Swagger UI Development',
      label: 'Development API',
    }
  ],
  viewerSidebar: [
    'Viewer 2D/index',
    'Viewer 2D/Dependencies',
    {
      type: 'category',
      label: 'Methods',
      link: {
        type: 'generated-index',
        slug: 'Viewer 2D/Methods',
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
        slug: 'Viewer 2D/Beta/Methods',
      },
      items: [
        'Viewer 2D/Beta/Methods/addImage',
        'Viewer 2D/Beta/Methods/addMarker',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      link: {
        type: 'generated-index',
        slug: 'Viewer 2D/Development/Methods',
      },
      items: [
        'Viewer 2D/Development/Methods/addImage',
        'Viewer 2D/Development/Methods/addMarker',
      ],
    },
  ],
};

export default sidebars;
