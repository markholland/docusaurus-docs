## Create objects

> Example

```http
POST https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/objects
{
    "ifcGuids": ["3BY5alwwL00QXHtY2qmHYZ", "0w1FD2e5L4LOvXHSZSTtLq", "0Arc0R2mf2Ow2ddxcQ40yG"]
}

```

```json
[
  {
    "ifcGuid": "3BY5alwwL00QXHtY2qmHYZ"
  },
  {
    "ifcGuid": "0w1FD2e5L4LOvXHSZSTtLq"
  },
  {
    "ifcGuid": "0Arc0R2mf2Ow2ddxcQ40yG"
  }
]
```

Links objects to a topic. Already linked objects will be ignored

Note: this resource is additional to the BCF-API standard, and may change in the future

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/objects`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>ifcGuids</td>
        <td>List of strings</td>
        <td>Each element is the "ifcGuid" of the object to link to the topic</td>
        <td>Required</td>
    </tr>
</table>
