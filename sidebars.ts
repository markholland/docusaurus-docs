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
            'Viewer 2D/Beta/Methods/addimage',
            'Viewer 2D/Beta/Methods/addmarker',
            'Viewer 2D/Beta/Methods/clearcolors',
            'Viewer 2D/Beta/Methods/clearimages',
            'Viewer 2D/Beta/Methods/clearmarkers',
            'Viewer 2D/Beta/Methods/getboundingbox',
            'Viewer 2D/Beta/Methods/getoffset',
            'Viewer 2D/Beta/Methods/getspaces',
            'Viewer 2D/Beta/Methods/getstoreys',
            'Viewer 2D/Beta/Methods/getstoreybyelevation',
            'Viewer 2D/Beta/Methods/getstoreysbyelevation',
            'Viewer 2D/Beta/Methods/getviewpoint',
            'Viewer 2D/Beta/Methods/hidestorey',
            'Viewer 2D/Beta/Methods/hideviewpoint',
            'Viewer 2D/Beta/Methods/loadurl',
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
            'Viewer 2D/Development/Methods/addimage',
            'Viewer 2D/Development/Methods/addmarker',
            'Viewer 2D/Development/Methods/clearcolors',
            'Viewer 2D/Development/Methods/clearimages',
            'Viewer 2D/Development/Methods/clearmarkers',
            'Viewer 2D/Development/Methods/getboundingbox',
            'Viewer 2D/Development/Methods/getoffset',
            'Viewer 2D/Development/Methods/getspaces',
            'Viewer 2D/Development/Methods/getstoreys',
            'Viewer 2D/Development/Methods/getstoreybyelevation',
            'Viewer 2D/Development/Methods/getstoreysbyelevation',
            'Viewer 2D/Development/Methods/getviewpoint',
            'Viewer 2D/Development/Methods/hidestorey',
            'Viewer 2D/Development/Methods/hideviewpoint',
            'Viewer 2D/Development/Methods/loadurl',
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
            'Viewer 3D/Beta/Methods/deselect',
            'Viewer 3D/Beta/Methods/deselectAll',
            'Viewer 3D/Beta/Methods/dispose',
            'Viewer 3D/Beta/Methods/hide',
            'Viewer 3D/Beta/Methods/hideAll',
            'Viewer 3D/Beta/Methods/hideModel',
            'Viewer 3D/Beta/Methods/loadUrl',
            'Viewer 3D/Beta/Methods/opaque',
            'Viewer 3D/Beta/Methods/opaqueAll',
            'Viewer 3D/Beta/Methods/select',
            'Viewer 3D/Beta/Methods/show',
            'Viewer 3D/Beta/Methods/showAll',
            'Viewer 3D/Beta/Methods/showModel',
            'Viewer 3D/Beta/Methods/translucent',
            'Viewer 3D/Beta/Methods/translucentAll',
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
            'Viewer 3D/Beta/Events/doubleclick',
            'Viewer 3D/Beta/Events/error',
            'Viewer 3D/Beta/Events/load',
            'Viewer 3D/Beta/Events/select',
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
            'Viewer 3D/Beta/Types/MeasureEnableParameters interface',
            'Viewer 3D/Beta/Types/ShapeParams3D interface',
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
            'Viewer 3D/Development/Methods/deselect',
            'Viewer 3D/Development/Methods/deselectAll',
            'Viewer 3D/Development/Methods/dispose',
            'Viewer 3D/Development/Methods/hide',
            'Viewer 3D/Development/Methods/hideAll',
            'Viewer 3D/Development/Methods/hideModel',
            'Viewer 3D/Development/Methods/loadUrl',
            'Viewer 3D/Development/Methods/opaque',
            'Viewer 3D/Development/Methods/opaqueAll',
            'Viewer 3D/Development/Methods/select',
            'Viewer 3D/Development/Methods/show',
            'Viewer 3D/Development/Methods/showAll',
            'Viewer 3D/Development/Methods/showModel',
            'Viewer 3D/Development/Methods/translucent',
            'Viewer 3D/Development/Methods/translucentAll',
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
            'Viewer 3D/Development/Events/doubleclick',
            'Viewer 3D/Development/Events/error',
            'Viewer 3D/Development/Events/load',
            'Viewer 3D/Development/Events/select',
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
            'Viewer 3D/Development/Types/MeasureEnableParameters interface',
            'Viewer 3D/Development/Types/ShapeParams3D interface',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
