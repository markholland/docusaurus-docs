## Update issue board extension type

> Example

```http
PUT https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions/types
{
    "existingName": "Info",
    "name": "Information",
    "color": "#FFFF00"
}
```

```json
{
  "name": "Information",
  "color": "#FFFF00"
}
```

Update the extension type.

Note: this resource is additional to the BCF-API standard.

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>existingName</td>
        <td>string</td>
        <td>existing name of the type</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
        <td>new name of the type</td>
        <td>Optional, default current name</td>
    </tr>
    <tr>
        <td>color</td>
        <td>string</td>
        <td>new color as a hexadecimal</td>
        <td>Optional, default current value</td>
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions/types`
