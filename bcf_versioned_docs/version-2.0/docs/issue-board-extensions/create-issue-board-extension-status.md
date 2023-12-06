## Create issue board extension status

> Example

```http
POST https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions/statuses
{
    "name": "Icebox",
    "color": "#FFFF00",
    "type": "candidate"
}
```

```json
{
  "name": "Icebox",
  "color": "#FFFF00",
  "type": "candidate"
}
```

Create the extension status.

Note: this resource is additional to the BCF-API standard

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>name</td>
        <td>string</td>
        <td>name of the status to create</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>color</td>
        <td>string</td>
        <td>color as a hexadecimal</td>
        <td>Optional, default #000000</td>
    </tr>
    <tr>
        <td>type</td>
        <td>string</td>
        <td>type of the status. open, closed or candidate</td>
        <td>Optional, default open</td>
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions/statuses`
