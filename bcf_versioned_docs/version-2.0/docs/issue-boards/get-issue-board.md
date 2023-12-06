## Get issue board

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e
```

```json
{
  "project_id": "3c34c9b3-1b9b-4750-a4f3-0641d58fe48e",
  "name": "My first BCF project",
  "bimsync_project_name": "My bimsync project",
  "bimsync_project_id": "08b7c8adf14a4805a2c34681ab3869af"
}
```

The response includes **bimsync_project_name** and **bimsync_project_id**.

Return the issue board.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id`

### Response schema

[project_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Project/project_GET.json)
