## Get viewpoint

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints/747f2fe6-b690-471f-8e45-618a4bc9a63c
```

```json
{
  "guid": "747f2fe6-b690-471f-8e45-618a4bc9a63c",
  "perspective_camera": {
    "camera_view_point": {
      "x": 35.73251238472605,
      "y": -0.905690071460695,
      "z": 4.455638963509504
    },
    "camera_direction": {
      "x": -0.9994595558906173,
      "y": -0.013604037024209679,
      "z": -0.02992534570517132
    },
    "camera_up_vector": {
      "x": -0.029922573955527068,
      "y": -0.00040728792030799566,
      "z": 0.9995521365513788
    },
    "field_of_view": 60
  },
  "lines": {
    "line": []
  },
  "clipping_planes": {
    "clipping_plane": []
  }
}
```

Return the viewpoint.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints/{viewpoint_guid}`

### Response schema

[viewpoint_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Viewpoint/viewpoint_GET.json)
