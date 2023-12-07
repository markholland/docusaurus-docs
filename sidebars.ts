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
        'Viewer 2D/Methods/clearColors',
        'Viewer 2D/Methods/clearImages',
        'Viewer 2D/Methods/clearMarkers',
        'Viewer 2D/Methods/getBoundingBox',
        'Viewer 2D/Methods/getOffset',
        'Viewer 2D/Methods/getSpaces',
        'Viewer 2D/Methods/getStoreyByElevation',
        'Viewer 2D/Methods/getViewpoint',
        'Viewer 2D/Methods/hideStorey',
        'Viewer 2D/Methods/hideStoreys',
        'Viewer 2D/Methods/hideViewpoint',
        'Viewer 2D/Methods/loadUrl',
      ],
    },
    {
      type: 'category',
      label: 'Events',
      link: {
        type: 'generated-index',
        slug: 'Viewer 2D/Events',
      },
      items: [
        'Viewer 2D/Events/click',
        'Viewer 2D/Events/contextmenu',
        'Viewer 2D/Events/dblclick',
        'Viewer 2D/Events/load',
        'Viewer 2D/Events/loadfail',
        'Viewer 2D/Events/loadstart',
        'Viewer 2D/Events/markerclick',
        'Viewer 2D/Events/markerhover',
        'Viewer 2D/Events/select',
        'Viewer 2D/Events/unload',
        'Viewer 2D/Events/viewpoint',
      ],
    },
    {
      type: 'category',
      label: 'Types',
      link: {
        type: 'generated-index',
        slug: 'Viewer 2D/Types',
      },
      items: [
        'Viewer 2D/Types/Icon interface',
        'Viewer 2D/Types/Marker interface',
        'Viewer 2D/Types/Point interface',
        'Viewer 2D/Types/Size interface',
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
