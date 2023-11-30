## Create viewpoint

> Example request

```http
POST https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints
{
    "index": 2,
    "components": {
        "selection": [{
            "ifc_guid": "3BY5alwwL00QXHtY2qmHYZ",
            "authoring_tool_id": "postman2"
        }],
        "coloring": [{
            "color": "#dddddd",
            "components": [{
                "ifc_guid": "3BY5alwwL00QXHtY2qmHYZ"
            }]
        }],
        "visibility": {
            "default_visibility": true,
            "exceptions": [{
                "ifc_guid": "0pQa7h_GLBZfPdI0XNo8Ru",
                "authoring_tool_id": "postman1"
            }],
            "view_setup_hints": {
                "spaces_visible": true,
                "space_boundaries_visible": true,
                "openings_visible": true
            }
        }
    },
    "perspective_camera": {
        "camera_view_point": {
            "x": -1.3757544290857453,
            "y": -14.084548687547457,
            "z": 15.77535220227417
        },
        "camera_direction": {
            "x": 0.48836276817323054,
            "y": 0.6442499485024906,
            "z": -0.5885947761547989
        },
        "camera_up_vector": {
            "x": 0.3555637551166773,
            "y": 0.4690610051624899,
            "z": 0.808428221602439
        },
        "field_of_view": 60.0
    },
    "lines": [],
    "clipping_planes": [],
    "bitmaps": [{
        "location": {
                "x": 21.97304764097038,
                "y": -24.86912390497038,
                "z": 19.66912390497035
        },
        "normal": {
            "x": -0.5773502691896258,
            "y": 0.5773502691896258,
            "z": -0.5773502691896258
        },
        "up": {
            "x": -0.4082482904638631,
            "y": 0.4082482904638631,
            "z": 0.8164965809277261
        },
        "bitmap_data": "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"
    }],
    "snapshot": {
        "snapshot_data": "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"
    }
}
```

> Example response

```json
{
  "index": 2,
  "guid": "fb7354fc-3ddf-4bb6-92d0-30ede4ee1718",
  "perspective_camera": {
    "camera_view_point": {
      "x": -1.3757544290857453,
      "y": -14.084548687547457,
      "z": 15.77535220227417
    },
    "camera_direction": {
      "x": 0.48836276817323054,
      "y": 0.6442499485024906,
      "z": -0.5885947761547989
    },
    "camera_up_vector": {
      "x": 0.3555637551166773,
      "y": 0.4690610051624899,
      "z": 0.808428221602439
    },
    "field_of_view": 60.0
  },
  "lines": [],
  "clipping_planes": [],
  "bitmaps": [
    {
      "guid": "1d819f39-4ee4-4b6d-96e3-de2078df10b3",
      "location": {
        "x": 21.97304764097038,
        "y": -24.86912390497038,
        "z": 19.66912390497035
      },
      "normal": {
        "x": -0.5773502691896258,
        "y": 0.5773502691896258,
        "z": -0.5773502691896258
      },
      "up": {
        "x": -0.4082482904638631,
        "y": 0.4082482904638631,
        "z": 0.8164965809277261
      },
      "height": -1.0
    }
  ],
  "snapshot": {}
}
```

Create the viewpoint.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>guid</td>
        <td>string</td>
        <td>the guid of the viewpoint</td>
        <td>Optional, if set: requires the guid not to exist in the project</td>
    </tr>
    <tr>
        <td>index</td>
        <td>integer</td>
        <td>parameter for sorting</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>orthogonal camera</td>
        <td>Orthogonal camera</td>
        <td>orthogonal camera view</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>perspective camera</td>
        <td>Perspective camera</td>
        <td>perspective view of the camera</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>lines</td>
        <td>array of Line</td>
        <td>graphical line</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>clipping_planes</td>
        <td>array of Clipping Plane	</td>
        <td>clipping planes for the model view</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>bitmaps</td>
        <td>array of Bitmap</td>
        <td>embedded pictures in the viewpoint</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>snapshot</td>
        <td>Snapshot</td>
        <td>snapshot image of the viewpoint</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>components</td>
        <td>Components</td>
        <td>Components in the viewpoint	</td>
        <td>Optional</td>
    </tr>
</table>

### Point

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>x</td>
        <td>number</td>
        <td>x point</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>y</td>
        <td>number</td>
        <td>y point</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>z</td>
        <td>number</td>
        <td>z point</td>
        <td>Mandatory</td>
    </tr>
</table>

### Direction

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>x</td>
        <td>number</td>
        <td>x direction</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>y</td>
        <td>number</td>
        <td>y direction</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>z</td>
        <td>number</td>
        <td>z direction</td>
        <td>Mandatory</td>
    </tr>
</table>

### Orthogonal camera

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>camera_view_point</td>
        <td>Direction</td>
        <td>viewpoint of the camera</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>camera_direction</td>
        <td>Direction</td>
        <td>direction of the camera</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>camera_up_vector</td>
        <td>Direction</td>
        <td>direction of camera up</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>view_to_world_scale</td>
        <td>number</td>
        <td>proportion of camera view to model (vertical)</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>aspect_ratio</td>
        <td>number</td>
        <td>proportional relationship between the width and the height of the view (w/h)</td>
        <td>Mandatory</td>
    </tr>
</table>

### Perspective camera

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>camera_view_point</td>
        <td>Point</td>
        <td>viewpoint of the camera</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>camera_direction</td>
        <td>Direction</td>
        <td>direction of the camera</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>camera_up_vector</td>
        <td>Direction</td>
        <td>direction of camera up</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>field_of_view</td>
        <td>number</td>
        <td>field of view (vertical)</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>aspect_ratio</td>
        <td>number</td>
        <td>proportional relationship between the width and the height of the view (w/h)</td>
        <td>Mandatory</td>
    </tr>
</table>

### Line

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>start_point</td>
        <td>Point</td>
        <td>start point of the line</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>end_point</td>
        <td>Point</td>
        <td>end point of the line (Treated as point if start_point and end_point is the same)</td>
        <td>Mandatory</td>
    </tr>
</table>

### Clipping plane

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>location</td>
        <td>Point</td>
        <td>origin of the clipping plane</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>direction</td>
        <td>Direction</td>
        <td>direction of the clipping plane	</td>
        <td>Mandatory</td>
    </tr>
</table>

### Bitmap

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>bitmap_type</td>
        <td>enum (string)</td>
        <td>format of the bitmap. Predefined values png or jpg</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>bitmap_data</td>
        <td>base64 encoded string</td>
        <td>The bitmap image data</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>location</td>
        <td>Point</td>
        <td>location of the center of the bitmap in world coordinates (point)</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>normal</td>
        <td>Direction</td>
        <td>normal vector of the bitmap (vector)</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>up</td>
        <td>Direction</td>
        <td>up vector of the bitmap (vector)</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>height</td>
        <td>number</td>
        <td>height of bitmap in the scene</td>
        <td>Mandatory</td>
    </tr>
</table>

### Snapshot

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>snapshot_type</td>
        <td>enum (string)</td>
        <td>format of the snapshot. Predefined values png or jpg</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>snapshot_data</td>
        <td>base64 encoded string</td>
        <td>The snapshot image data</td>
        <td>Mandatory</td>
    </tr>
</table>

### Components

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>selection</td>
        <td>array of Component</td>
        <td>Selected components</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>coloring</td>
        <td>array of Coloring</td>
        <td>Colored components</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>visibility</td>
        <td>Visibility</td>
        <td>Visibility of components</td>
        <td>Mandatory</td>
    </tr>
</table>

### Component

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>ifc_guid</td>
        <td>string</td>
        <td>IFC guid of the component</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>originating_system</td>
        <td>string</td>
        <td>originating system of the component</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>authoring_tool_id</td>
        <td>string</td>
        <td>internal id for the authoring tool of the component</td>
        <td>Optional</td>
    </tr>
</table>

### Coloring

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>color</td>
        <td>string</td>
        <td>Color of the components</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>components</td>
        <td>array of Component</td>
        <td>Colored components</td>
        <td>Mandatory</td>
    </tr>
</table>
The color is given in ARGB format. Colors are represented as 6 or 8 hexadecimal digits. If 8 digits are present, the first two represent the alpha (transparency) channel. For example, 40E0D0 would be the color Turquoise.

### Visibility

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>default_visibility</td>
        <td>boolean</td>
        <td>If true: Show all components, and hide the exceptions. If false: Hide all components and show exceptions</td>
        <td>Optional, default false</td>
    </tr>
    <tr>
        <td>exceptions</td>
        <td>array of Component</td>
        <td>Components to hide/show determined by default_visibility</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>view_setup_hints</td>
        <td>View setup hints</td>
        <td>Hints about the setup of the viewer</td>
        <td>Optional</td>
    </tr>
</table>

### View setup hints

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>spaces_visible</td>
        <td>boolean</td>
        <td>If true: Show all components, and hide the exceptions. If false: Hide all components and show exceptions</td>
        <td>Optional, default false</td>
    </tr>
    <tr>
        <td>space_boundaries_visible</td>
        <td>boolean</td>
        <td>Visibility of space_boundaries</td>
        <td>Optional, default false	</td>
    </tr>
    <tr>
        <td>openings_visible</td>
        <td>boolean</td>
        <td>Hints about the setup of the viewer</td>
        <td>Optional</td>
    </tr>
</table>

### Request schema

[viewpoint_POST.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/Viewpoint/viewpoint_POST.json)

### Response schema

[viewpoint_GET.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/Viewpoint/viewpoint_GET.json)
