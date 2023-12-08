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
      type: 'doc',
      id: 'BCF/Swagger UI',
      label: 'API Explorer',
    },
    {
      type: 'doc',
      id: 'BCF/Swagger UI Beta',
      label: 'Beta API Explorer',
    },
    {
      type: 'doc',
      id: 'BCF/Swagger UI Development',
      label: 'Development API Explorer',
    }
  ],
  cdeSidebar: [
    'OpenCDE/index',
    'OpenCDE/authentication',
    {
      type: 'doc',
      id: 'OpenCDE/Swagger UI',
      label: 'API Explorer',
    },
    {
      type: 'doc',
      id: 'OpenCDE/Swagger UI Beta',
      label: 'Beta API Explorer',
    },
    {
      type: 'doc',
      id: 'OpenCDE/Swagger UI Development',
      label: 'Development API Explorer',
    }
  ],
  viewer2DSidebar: [
    'Viewer 2D/index',
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
        'Viewer 2D/Methods/getStoreys',
        'Viewer 2D/Methods/getStoreyByElevation',
        'Viewer 2D/Methods/getStoreysByElevation',
        'Viewer 2D/Methods/getViewpoint',
        'Viewer 2D/Methods/hideStorey',
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
        slug: 'Viewer 2D/Beta',
      },
      items: [
        {
          type: 'category',
          label: 'Methods',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Beta/Methods',
          },
          items: [
            'Viewer 2D/Beta/Methods/addImage',
            'Viewer 2D/Beta/Methods/addMarker',
            'Viewer 2D/Beta/Methods/clearColors',
            'Viewer 2D/Beta/Methods/clearImages',
            'Viewer 2D/Beta/Methods/clearMarkers',
            'Viewer 2D/Beta/Methods/getBoundingBox',
            'Viewer 2D/Beta/Methods/getOffset',
            'Viewer 2D/Beta/Methods/getSpaces',
            'Viewer 2D/Beta/Methods/getStoreys',
            'Viewer 2D/Beta/Methods/getStoreyByElevation',
            'Viewer 2D/Beta/Methods/getStoreysByElevation',
            'Viewer 2D/Beta/Methods/getViewpoint',
            'Viewer 2D/Beta/Methods/hideStorey',
            'Viewer 2D/Beta/Methods/hideViewpoint',
            'Viewer 2D/Beta/Methods/loadUrl',
          ],
        },
        {
          type: 'category',
          label: 'Events',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Beta/Events',
          },
          items: [
            'Viewer 2D/Beta/Events/click',
            'Viewer 2D/Beta/Events/contextmenu',
            'Viewer 2D/Beta/Events/dblclick',
            'Viewer 2D/Beta/Events/load',
            'Viewer 2D/Beta/Events/loadfail',
            'Viewer 2D/Beta/Events/loadstart',
            'Viewer 2D/Beta/Events/markerclick',
            'Viewer 2D/Beta/Events/markerhover',
            'Viewer 2D/Beta/Events/select',
            'Viewer 2D/Beta/Events/unload',
            'Viewer 2D/Beta/Events/viewpoint',
          ],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Beta/Types',
          },
          items: [
            'Viewer 2D/Beta/Types/Icon interface',
            'Viewer 2D/Beta/Types/Marker interface',
            'Viewer 2D/Beta/Types/Point interface',
            'Viewer 2D/Beta/Types/Size interface',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      link: {
        type: 'generated-index',
        slug: 'Viewer 2D/Development',
      },
      items: [
        {
          type: 'category',
          label: 'Methods',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Development/Methods',
          },
          items: [
            'Viewer 2D/Development/Methods/addImage',
            'Viewer 2D/Development/Methods/addMarker',
            'Viewer 2D/Development/Methods/clearColors',
            'Viewer 2D/Development/Methods/clearImages',
            'Viewer 2D/Development/Methods/clearMarkers',
            'Viewer 2D/Development/Methods/getBoundingBox',
            'Viewer 2D/Development/Methods/getOffset',
            'Viewer 2D/Development/Methods/getSpaces',
            'Viewer 2D/Development/Methods/getStoreys',
            'Viewer 2D/Development/Methods/getStoreyByElevation',
            'Viewer 2D/Development/Methods/getStoreysByElevation',
            'Viewer 2D/Development/Methods/getViewpoint',
            'Viewer 2D/Development/Methods/hideStorey',
            'Viewer 2D/Development/Methods/hideViewpoint',
            'Viewer 2D/Development/Methods/loadUrl',
          ],
        },
        {
          type: 'category',
          label: 'Events',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Development/Events',
          },
          items: [
            'Viewer 2D/Development/Events/click',
            'Viewer 2D/Development/Events/contextmenu',
            'Viewer 2D/Development/Events/dblclick',
            'Viewer 2D/Development/Events/load',
            'Viewer 2D/Development/Events/loadfail',
            'Viewer 2D/Development/Events/loadstart',
            'Viewer 2D/Development/Events/markerclick',
            'Viewer 2D/Development/Events/markerhover',
            'Viewer 2D/Development/Events/select',
            'Viewer 2D/Development/Events/unload',
            'Viewer 2D/Development/Events/viewpoint',
          ],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Development/Types',
          },
          items: [
            'Viewer 2D/Development/Types/Icon interface',
            'Viewer 2D/Development/Types/Marker interface',
            'Viewer 2D/Development/Types/Point interface',
            'Viewer 2D/Development/Types/Size interface',
          ],
        },
      ],
    },
  ],
  viewer3DSidebar: [
    'Viewer 3D/index',
    {
      type: 'category',
      label: 'Methods',
      link: {
        type: 'generated-index',
        slug: 'Viewer 3D/Methods',
      },
      items: [
        'Viewer 3D/Methods/addImage',
        'Viewer 3D/Methods/addMarker',
        'Viewer 3D/Methods/clearColors',
        'Viewer 3D/Methods/clearImages',
        'Viewer 3D/Methods/clearMarkers',
        'Viewer 3D/Methods/getBoundingBox',
        'Viewer 3D/Methods/getOffset',
        'Viewer 3D/Methods/getSpaces',
        'Viewer 3D/Methods/getStoreys',
        'Viewer 3D/Methods/getStoreyByElevation',
        'Viewer 3D/Methods/getStoreysByElevation',
        'Viewer 3D/Methods/getViewpoint',
        'Viewer 3D/Methods/hideStorey',
        'Viewer 3D/Methods/hideViewpoint',
        'Viewer 3D/Methods/loadUrl',
      ],
    },
    {
      type: 'category',
      label: 'Events',
      link: {
        type: 'generated-index',
        slug: 'Viewer 3D/Events',
      },
      items: [
        'Viewer 3D/Events/click',
        'Viewer 3D/Events/contextmenu',
        'Viewer 3D/Events/dblclick',
        'Viewer 3D/Events/load',
        'Viewer 3D/Events/loadfail',
        'Viewer 3D/Events/loadstart',
        'Viewer 3D/Events/markerclick',
        'Viewer 3D/Events/markerhover',
        'Viewer 3D/Events/select',
        'Viewer 3D/Events/unload',
        'Viewer 3D/Events/viewpoint',
      ],
    },
    {
      type: 'category',
      label: 'Types',
      link: {
        type: 'generated-index',
        slug: 'Viewer 3D/Types',
      },
      items: [
        'Viewer 3D/Types/Icon interface',
        'Viewer 3D/Types/Marker interface',
        'Viewer 3D/Types/Point interface',
        'Viewer 3D/Types/Size interface',
      ],
    },
    {
      type: 'category',
      label: 'Beta',
      link: {
        type: 'generated-index',
        slug: 'Viewer 3D/Beta',
      },
      items: [
        {
          type: 'category',
          label: 'Methods',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Beta/Methods',
          },
          items: [
            'Viewer 3D/Beta/Methods/addImage',
            'Viewer 3D/Beta/Methods/addMarker',
            'Viewer 3D/Beta/Methods/clearColors',
            'Viewer 3D/Beta/Methods/clearImages',
            'Viewer 3D/Beta/Methods/clearMarkers',
            'Viewer 3D/Beta/Methods/getBoundingBox',
            'Viewer 3D/Beta/Methods/getOffset',
            'Viewer 3D/Beta/Methods/getSpaces',
            'Viewer 3D/Beta/Methods/getStoreys',
            'Viewer 3D/Beta/Methods/getStoreyByElevation',
            'Viewer 3D/Beta/Methods/getStoreysByElevation',
            'Viewer 3D/Beta/Methods/getViewpoint',
            'Viewer 3D/Beta/Methods/hideStorey',
            'Viewer 3D/Beta/Methods/hideViewpoint',
            'Viewer 3D/Beta/Methods/loadUrl',
          ],
        },
        {
          type: 'category',
          label: 'Events',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Beta/Events',
          },
          items: [
            'Viewer 3D/Beta/Events/click',
            'Viewer 3D/Beta/Events/contextmenu',
            'Viewer 3D/Beta/Events/dblclick',
            'Viewer 3D/Beta/Events/load',
            'Viewer 3D/Beta/Events/loadfail',
            'Viewer 3D/Beta/Events/loadstart',
            'Viewer 3D/Beta/Events/markerclick',
            'Viewer 3D/Beta/Events/markerhover',
            'Viewer 3D/Beta/Events/select',
            'Viewer 3D/Beta/Events/unload',
            'Viewer 3D/Beta/Events/viewpoint',
          ],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Beta/Types',
          },
          items: [
            'Viewer 3D/Beta/Types/Icon interface',
            'Viewer 3D/Beta/Types/Marker interface',
            'Viewer 3D/Beta/Types/Point interface',
            'Viewer 3D/Beta/Types/Size interface',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      link: {
        type: 'generated-index',
        slug: 'Viewer 3D/Development',
      },
      items: [
        {
          type: 'category',
          label: 'Methods',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Development/Methods',
          },
          items: [
            'Viewer 3D/Development/Methods/addImage',
            'Viewer 3D/Development/Methods/addMarker',
            'Viewer 3D/Development/Methods/clearColors',
            'Viewer 3D/Development/Methods/clearImages',
            'Viewer 3D/Development/Methods/clearMarkers',
            'Viewer 3D/Development/Methods/getBoundingBox',
            'Viewer 3D/Development/Methods/getOffset',
            'Viewer 3D/Development/Methods/getSpaces',
            'Viewer 3D/Development/Methods/getStoreys',
            'Viewer 3D/Development/Methods/getStoreyByElevation',
            'Viewer 3D/Development/Methods/getStoreysByElevation',
            'Viewer 3D/Development/Methods/getViewpoint',
            'Viewer 3D/Development/Methods/hideStorey',
            'Viewer 3D/Development/Methods/hideViewpoint',
            'Viewer 3D/Development/Methods/loadUrl',
          ],
        },
        {
          type: 'category',
          label: 'Events',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Development/Events',
          },
          items: [
            'Viewer 3D/Development/Events/click',
            'Viewer 3D/Development/Events/contextmenu',
            'Viewer 3D/Development/Events/dblclick',
            'Viewer 3D/Development/Events/load',
            'Viewer 3D/Development/Events/loadfail',
            'Viewer 3D/Development/Events/loadstart',
            'Viewer 3D/Development/Events/markerclick',
            'Viewer 3D/Development/Events/markerhover',
            'Viewer 3D/Development/Events/select',
            'Viewer 3D/Development/Events/unload',
            'Viewer 3D/Development/Events/viewpoint',
          ],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Development/Types',
          },
          items: [
            'Viewer 3D/Development/Types/Icon interface',
            'Viewer 3D/Development/Types/Marker interface',
            'Viewer 3D/Development/Types/Point interface',
            'Viewer 3D/Development/Types/Size interface',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
