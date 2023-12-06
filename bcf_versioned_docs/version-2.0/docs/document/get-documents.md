## Get documents

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/documents
```

```json
[
  {
    "guid": "a3aaaee9-f14a-432e-a008-2feec907c2ba",
    "filename": "Myfile.txt"
  },
  {
    "guid": "d7b580eb-4f96-401a-b44b-1f0a495222a7",
    "filename": "Myfile.ifx"
  }
]
```

Return the documents.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/documents`

### Response schema

List of [document_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Document/document_GET.json)
