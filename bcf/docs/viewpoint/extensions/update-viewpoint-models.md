## Update viewpoint models

> Example request

```http
PUT https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints/63fc95fa-0dcc-4e5b-b889-72db4a467113/models
[
    {
        "modelRef": "3a8a62f0226b4a1da994481730de6adf"
    },
    {
        "modelRef": "b8beba1a10fb44c8a67fefb2d182f3e4",
        "revisionRef": "4e8e119a-dbdf-4ce7-bf54-6de38cd171f9"
    }
]
```

> Example response

```json
[
  {
    "modelRef": "3a8a62f0226b4a1da994481730de6adf",
    "revisionRef": "a21ed391-f9e0-46a2-bb2b-c879c48f1d48"
  },
  {
    "modelRef": "b8beba1a10fb44c8a67fefb2d182f3e4",
    "revisionRef": "4e8e119a-dbdf-4ce7-bf54-6de38cd171f9"
  }
]
```

Update the viewpoint models.

The models in the request must exist in the same Catenda project.
If `revisionRef` is omitted, the model must have at least one revision.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints/{viewpoint_guid}/models`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>modelRef</td>
        <td>string</td>
        <td>the model reference</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>revisionRef</td>
        <td>string</td>
        <td>the reference to the model revision</td>
        <td>Optional, default the last revision of the model</td>
    </tr>
</table>
