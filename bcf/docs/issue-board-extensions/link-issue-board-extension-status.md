## Link issue board extension status

> Example

```http
PUT https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions/statuses/link
{
    "name": "Open",
    "unlinkedName": "reopened"
}
```

```json
{
  "name": "Open",
  "color": "#DD7E6B",
  "type": "open"
}
```

Link the extension status. As described earlier, a status may be unlinked. This resource allows you to merge an unlinked status with a linked status.

Note: this resource is additional to the BCF-API standard.

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>name</td>
        <td>string</td>
        <td>name of the status</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>unlinkedName</td>
        <td>string</td>
        <td>name of the unlinked status</td>
        <td>Mandatory</td>
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions/statuses/link`
