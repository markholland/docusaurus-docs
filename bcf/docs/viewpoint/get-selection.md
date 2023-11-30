## Get selection

> Example request

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints/747f2fe6-b690-471f-8e45-618a4bc9a63c/selection
```

> Example response

```json
{
  "selection": [
    {
      "ifc_guid": "3BY5alwwL00QXHtY2qmHYZ",
      "authoring_tool_id": "postman2"
    }
  ]
}
```

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints/{viewpoint_guid}/selection`

### Response schema

[selection_GET.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/Viewpoint/selection_GET.json)
