## Get BCF Import Information

This REST API is currently under development, and might change. Do NOT build production application based on this API's.

This enpoint allows you to get status of an already started import

> Example

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/imports/abf9832a7e094d8dbecfdd6db67ea835
```

### Response

The response will include detailed information about the specified import process.

```json
{
  "id": "abf9832a7e094d8dbecfdd6db67ea835",
  "createdAt": "2023-07-27T12:34:56Z",
  "status": "processing"
}
```

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th></tr>
    <tr>
        <td>id</td>
        <td>string</td>
        <td>The unique identifier of the import process.</td>
    </tr>
    <tr>
        <td>createdAt</td>
        <td>string</td>
        <td>The timestamp when the import process was initiated (in ISO 8601 format).</td>
    </tr>
    <tr>
        <td>status</td>
        <td>string</td>
        <!-- <td>The current status of the import process. Possible values are:
            <ul>
                <li><code>processing</code> - The import is in progress.</li>
                <li><code>success</code> - The import was successful.</li>
                <li><code>failed</code> - The import has failed.</li>
            </ul>
        </td> -->
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/imports/{import_id}`
