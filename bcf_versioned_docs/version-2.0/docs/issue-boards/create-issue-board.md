## Create issue board 
> Example

```http
POST https://api.catenda.com/opencde/bcf/projects
{
    "name": "My third BCF project",
    "bimsync_project_id": "08b7c8adf14a4805a2c34681ab3869af"
}
```
```json
{
    "project_id": "485aa69d-8e25-4f68-9a97-04901b2288a7",
    "name": "My third BCF project",
    "bimsync_project_name": "My bimsync project",
    "bimsync_project_id": "08b7c8adf14a4805a2c34681ab3869af"
}
```

Note: A new Catenda project will be created, and the new issue board will be created in that project. In order to create a new issue board in an existing Catenda project, specify the bimsync project id.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>name</td>
        <td>string</td>
        <td>name of the issue board to create</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>bimsync_project_id</td>
        <td>string</td>
        <td>bimsync project id</td>
        <td>Optional</td>
    </tr>
</table>

### Request schema
[project_POST.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Project/project_POST.json)

### Response schema
[project_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Project/project_GET.json)


