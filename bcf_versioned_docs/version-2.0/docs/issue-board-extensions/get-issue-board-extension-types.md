## Get issue board extension types

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions/types?include-unlinked=true
```

```json
[
  {
    "name": "Error",
    "color": "#DD7E6B"
  },
  {
    "name": "Warning",
    "color": "#FFFF00"
  },
  {
    "name": "Unknown",
    "unlinked": true
  }
]
```

Return the extension types. These types have 3 attributes. **name**, **color**, and **unlinked**.
**name** is the name of the type.
**color** is a hexadecimal string for the type color.
**unlinked** is a boolean, that is only set for types that are unlinked, and the value is true. These types do not have color.

Note: this resource is additional to the BCF-API standard

### Query Parameters

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>include-unlinked</td>
        <td>boolean</td>
        <td>Should include unlinked types</td>
        <td>Optional</td>
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions/types`
