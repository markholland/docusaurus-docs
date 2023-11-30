## Create viewpoint

> Example

```http
POST https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints
{
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
        "field_of_view": 50 {
            "guid": "d7b580eb-4f96-401a-b44b-1f0a495222a7",
            "filename": "Myfile.ifx"
        }
    },
    "lines": {
        "line": []
    },
    "clipping_planes": {
        "clipping_plane": []
    }
}
```

Create the viewpoint.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints`

### Parameters

JSON encoded body using the "application/json" content type.

### Request schema

[viewpoint_POST.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Viewpoint/viewpoint_POST.json)

### Response schema

[viewpoint_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Viewpoint/viewpoint_GET.json)
