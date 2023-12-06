## Upload document

> Example

```http
POST https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/documents
–header ‘Content-Disposition: attachment; filename="Myfile.xlxs"’

```

```json
{
  "guid": "cfd79b46-a394-48a9-ba45-75fe3719e173",
  "filename": "Myfile.xlsx"
}
```

Uploads the document.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/documents`

### Request body

The document to be uploaded.

### Response schema

[document_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Document/document_GET.json)
