## Download Issue export

This REST API is currently under development, and might change. Do NOT build production application based on this API's.

This endpoint allows you to download a successful Issue export

> Example

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/exports/0e5bb88467814beb862cec07853c1284/download
```

### Parameters

This endpoint requires the following parameter in the URL path:

### Response

- File: The exported file with the specified format.
- Content-Disposition: Attachment with a filename in the format "issue_board_name.fileExtension".

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/exports/{export_id}/download`
