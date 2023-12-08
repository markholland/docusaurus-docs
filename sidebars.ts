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
        'Viewer 2D/Methods/addimage',
        'Viewer 2D/Methods/addmarker',
        'Viewer 2D/Methods/clearcolors',
        'Viewer 2D/Methods/clearimages',
        'Viewer 2D/Methods/clearmarkers',
        'Viewer 2D/Methods/getboundingbox',
        'Viewer 2D/Methods/getoffset',
        'Viewer 2D/Methods/getspaces',
        'Viewer 2D/Methods/getstoreys',
        'Viewer 2D/Methods/getstoreybyelevation',
        'Viewer 2D/Methods/getstoreysbyelevation',
        'Viewer 2D/Methods/getviewpoint',
        'Viewer 2D/Methods/hidestorey',
        'Viewer 2D/Methods/hideviewpoint',
        'Viewer 2D/Methods/loadurl',
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
        'Viewer 3D/Methods/addimage',
        'Viewer 3D/Methods/addmarker',
        'Viewer 3D/Methods/clearcolors',
        'Viewer 3D/Methods/clearimages',
        'Viewer 3D/Methods/clearmarkers',
        'Viewer 3D/Methods/getboundingbox',
        'Viewer 3D/Methods/getoffset',
        'Viewer 3D/Methods/getspaces',
        'Viewer 3D/Methods/getstoreys',
        'Viewer 3D/Methods/getstoreybyelevation',
        'Viewer 3D/Methods/getstoreysbyelevation',
        'Viewer 3D/Methods/getviewpoint',
        'Viewer 3D/Methods/hidestorey',
        'Viewer 3D/Methods/hideviewpoint',
        'Viewer 3D/Methods/loadurl',
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
            'Viewer 3D/Beta/Methods/addimage',
            'Viewer 3D/Beta/Methods/addmarker',
            'Viewer 3D/Beta/Methods/clearcolors',
            'Viewer 3D/Beta/Methods/clearimages',
            'Viewer 3D/Beta/Methods/clearmarkers',
            'Viewer 3D/Beta/Methods/getboundingbox',
            'Viewer 3D/Beta/Methods/getoffset',
            'Viewer 3D/Beta/Methods/getspaces',
            'Viewer 3D/Beta/Methods/getstoreys',
            'Viewer 3D/Beta/Methods/getstoreybyelevation',
            'Viewer 3D/Beta/Methods/getstoreysbyelevation',
            'Viewer 3D/Beta/Methods/getviewpoint',
            'Viewer 3D/Beta/Methods/hidestorey',
            'Viewer 3D/Beta/Methods/hideviewpoint',
            'Viewer 3D/Beta/Methods/loadurl',
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
            'Viewer 3D/Development/Methods/addimage',
            'Viewer 3D/Development/Methods/addmarker',
            'Viewer 3D/Development/Methods/clearcolors',
            'Viewer 3D/Development/Methods/clearimages',
            'Viewer 3D/Development/Methods/clearmarkers',
            'Viewer 3D/Development/Methods/getboundingbox',
            'Viewer 3D/Development/Methods/getoffset',
            'Viewer 3D/Development/Methods/getspaces',
            'Viewer 3D/Development/Methods/getstoreys',
            'Viewer 3D/Development/Methods/getstoreybyelevation',
            'Viewer 3D/Development/Methods/getstoreysbyelevation',
            'Viewer 3D/Development/Methods/getviewpoint',
            'Viewer 3D/Development/Methods/hidestorey',
            'Viewer 3D/Development/Methods/hideviewpoint',
            'Viewer 3D/Development/Methods/loadurl',
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
