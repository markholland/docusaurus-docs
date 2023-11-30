## Get Export Information

This REST API is currently under development, and might change. Do NOT build production application based on this API's.

This endpoint allows you to get status of an already started export

> Example

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/exports/0e5bb88467814beb862cec07853c1284
```

### Response

The response will include detailed information about the specified export process.

```json
{
  "id": "0e5bb88467814beb862cec07853c1284",
  "createdAt": "2023-07-27T12:34:56Z",
  "status": "success"
}
```

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th></tr>
    <tr>
        <td>id</td>
        <td>string</td>
        <td>The unique identifier of the export process.</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>string</td>
        <td>The timestamp when the export process was initiated (in ISO 8601 format).</td>
    </tr>
    <tr>
        <td>status</td>
        <td>string</td>
        <!-- <td>The current status of the export process. Possible values are:
            <ul>
                <li><code>processing</code> - The export is in progress.</li>
                <li><code>success</code> - The export was successful.</li>
                <li><code>failed</code> - The export has failed.</li>
            </ul>
        </td> -->
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/exports/{export_id}`
