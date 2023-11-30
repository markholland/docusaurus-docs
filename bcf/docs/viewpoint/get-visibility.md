## Get visibility

> Example request

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints/747f2fe6-b690-471f-8e45-618a4bc9a63c/visibility
```

> Example response

```json
{
  "visibility": {
    "default_visibility": true,
    "exceptions": [
      {
        "ifc_guid": "0pQa7h_GLBZfPdI0XNo8Ru",
        "authoring_tool_id": "postman1"
      }
    ],
    "view_setup_hints": {
      "spaces_visible": true,
      "space_boundaries_visible": true,
      "openings_visible": true
    }
  }
}
```

Return the snapshot file.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints/{viewpoint_guid}/visibility`

### Response schema

[visibility_GET.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/Viewpoint/visibility_GET.json)
