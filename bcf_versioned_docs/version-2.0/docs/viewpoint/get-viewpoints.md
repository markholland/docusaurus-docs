## Get viewpoints

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints
```

```json
[
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
            "field_of_view": 50
        },
        "lines": {
            "line": []
        },
        "clipping_planes": {
            "clipping_plane": []
        }
    },
    {
        "guid": "55f15946-8432-46dd-a754-29ee1834cbfa",
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
        }
        "lines": {
            "line": [
                {
                    "start_point": {
                        "x": 14.081214128865833,
                        "y": -15.361069061775849,
                        "z": 8.124594766348617
                    },
                    "end_point": {
                        "x": 14.069056488704259,
                        "y": -15.546558805373634,
                        "z": 12.340820025706794
                    }
                },
                {
                    "start_point": {
                        "x": 14.069056488704259,
                        "y": -15.546558805373634,
                        "z": 12.340820025706794
                    },
                    "end_point": {
                        "x": 14.097847685270528,
                        "y": -15.107290031270399,
                        "z": 11.937786274123868
                    }
                }
            ]
        },
        "clipping_planes": {
            "clipping_plane": [
                {
                    "location": {
                        "x": 7.423618869853075,
                        "y": 1.546760144471543,
                        "z": 2.1204867944187327
                },
                    "direction": {
                        "x": 0,
                        "y": -1,
                        "z": 0
                    }
                }
            ]
        }
    }
]
```

Return the view points.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints`

### Response schema

List of [viewpoint_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Viewpoint/viewpoint_GET.json)
