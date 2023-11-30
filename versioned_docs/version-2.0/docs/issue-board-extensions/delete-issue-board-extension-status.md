## Delete issue board extension status

> Example

```http
DELETE https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions/statuses
{
    "name": "New"
}
```

Delete the extension status.

Note: this resource is additional to the BCF-API standard. You cannot delete the last open status, or statuses that are in use.

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
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions/statuses`
