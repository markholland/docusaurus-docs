## Update points

> Example

```http
PUT https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/points
[
    {
        "id": "7c34c9b3-1b9b-4750-a4f3-0641d58fe48e",
        "x": 0,
        "y": 0,
        "z": 0
    },
    {
        "id": "2a34c9b3-1b9b-4750-a4f3-0641d58fe48e",
        "x": 10.2,
        "y": -4.2,
        "z": -20.5
    }
]

```

```json
[
  {
    "id": "7c34c9b3-1b9b-4750-a4f3-0641d58fe48e",
    "x": 0,
    "y": 0,
    "z": 0
  },
  {
    "id": "2a34c9b3-1b9b-4750-a4f3-0641d58fe48e",
    "x": 10.2,
    "y": -4.2,
    "z": -20.5
  }
]
```

Updates points in a topic.

Note: this resource is additional to the BCF-API standard, and may change in the future

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/points`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>id</td>
        <td>string</td>
        <td>The id of the point</td>
        <td>Required</td>
    </tr>
    <tr>
        <td>x</td>
        <td>number</td>
        <td>The x axis</td>
        <td>Required</td>
    </tr>
    <tr>
        <td>y</td>
        <td>number</td>
        <td>The y axis</td>
        <td>Required</td>
    </tr>
    <tr>
        <td>z</td>
        <td>number</td>
        <td>The z axis</td>
        <td>Required</td>
    </tr>
</table>
