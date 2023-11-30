## Get viewpoint

> Example request

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints/63fc95fa-0dcc-4e5b-b889-72db4a467113
```

> Example response

```json
{
  "index": 2,
  "guid": "63fc95fa-0dcc-4e5b-b889-72db4a467113",
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
  "bitmaps": [],
  "snapshot": {}
}
```

Return the viewpoint.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints/{viewpoint_guid}`

### Response schema

[viewpoint_GET.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/Viewpoint/viewpoint_GET.json)
