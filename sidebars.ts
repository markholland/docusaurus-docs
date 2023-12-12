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
            'Viewer 2D/Beta/Methods/getStoreyByElevation',
            'Viewer 2D/Beta/Methods/getStoreysByElevation',
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
            'Viewer 2D/Beta/Events/markerclick',
            'Viewer 2D/Beta/Events/markerhover',
          ],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Beta/Types',
          },
          items: [],
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
          items: [],
        },
        {
          type: 'category',
          label: 'Events',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Development/Events',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'generated-index',
            slug: 'Viewer 2D/Development/Types',
          },
          items: [],
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
        'Viewer 3D/Methods/deselect',
        'Viewer 3D/Methods/deselectAll',
        'Viewer 3D/Methods/dispose',
        'Viewer 3D/Methods/hide',
        'Viewer 3D/Methods/hideAll',
        'Viewer 3D/Methods/hideModel',
        'Viewer 3D/Methods/loadUrl',
        'Viewer 3D/Methods/opaque',
        'Viewer 3D/Methods/opaqueAll',
        'Viewer 3D/Methods/select',
        'Viewer 3D/Methods/show',
        'Viewer 3D/Methods/showAll',
        'Viewer 3D/Methods/showModel',
        'Viewer 3D/Methods/translucent',
        'Viewer 3D/Methods/translucentAll',
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
        'Viewer 3D/Events/doubleclick',
        'Viewer 3D/Events/error',
        'Viewer 3D/Events/load',
        'Viewer 3D/Events/select',
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
        'Viewer 3D/Types/MeasureEnableParameters interface',
        'Viewer 3D/Types/ShapeParams3D interface',
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
            'Viewer 3D/Beta/Methods/selectAll',
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
           'Viewer 3D/Beta/Events/unload',
          ],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Beta/Types',
          },
          items: [],
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
          items: [],
        },
        {
          type: 'category',
          label: 'Events',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Development/Events',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'Types',
          link: {
            type: 'generated-index',
            slug: 'Viewer 3D/Development/Types',
          },
          items: [],
        },
      ],
    },
  ],
};

export default sidebars;
