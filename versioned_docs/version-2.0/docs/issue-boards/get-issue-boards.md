## Get issue boards 
> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects?bimsync_project_id=08b7c8adf14a4805a2c34681ab3869af
```
```json
[
    {
        "project_id": "3c34c9b3-1b9b-4750-a4f3-0641d58fe48e",
        "name": "My first BCF project",
        "bimsync_project_name": "My bimsync project",
        "bimsync_project_id": "08b7c8adf14a4805a2c34681ab3869af"
    },
    {
        "project_id": "887df203-a736-429e-a46f-0c8f55384eaa",
        "name": "My second BCF project",
        "bimsync_project_name": "My bimsync project",
        "bimsync_project_id": "08b7c8adf14a4805a2c34681ab3869af"
    }
]
```

The response includes **bimsync\_project\_name** and **bimsync\_project\_id**. 

Return the issue boards you have access to.

Note: In a bimsync project you may have multiple issue boards. To filter issue boards from a given bimsync project you may use the **bimsync\_project\_id** query parameter.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects`

### Query Parameters

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>bimsync_project_id</td>
        <td>string</td>
        <td>bimsync project id</td>
        <td>Optional</td>
    </tr>
</table>

### Response schema
List of [project_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Project/project_GET.json)


