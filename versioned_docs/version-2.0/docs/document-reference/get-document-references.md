## Get document references

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/document_references
```

```json
[
  {
    "guid": "a3aaaee9-f14a-432e-a008-2feec907c2ba",
    "description": "This is my document reference"
  },
  {
    "guid": "d7b580eb-4f96-401a-b44b-1f0a495222a7",
    "description": "This is another document reference"
  }
]
```

Return the document references. The guid from the response points to the document guid.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/document_references`

### Response schema

List of [document_reference_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/DocumentReference/document_reference_GET.json)
