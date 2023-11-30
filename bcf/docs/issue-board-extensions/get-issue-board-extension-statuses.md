## Get issue board extension statuses

> Example

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions/statuses?include-unlinked=true
```

```json
[
  {
    "name": "Open",
    "color": "#DD7E6B",
    "type": "open"
  },
  {
    "name": "Closed",
    "color": "#6AA84F",
    "type": "closed"
  },
  {
    "name": "In progress",
    "unlinked": true
  }
]
```

Return the extension statuses. These statuses have 3 attributes. **name**, **color**, **type** and **unlinked**.
**name** is the name of the status.
**color** is a hexadecimal string for the status color.
**type** is one of three values: candidate, open, or closed.
**unlinked** is a boolean, that is only set for statuses that are unlinked, and the value is true. These statuses do not have color or type

Note: this resource is additional to the BCF-API standard

### Query Parameters

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>include-unlinked</td>
        <td>boolean</td>
        <td>Should include unlinked statuses</td>
        <td>Optional</td>
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions/statuses`
