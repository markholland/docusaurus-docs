## Create document references

> Example

```http
PUT https://api.catenda.com/opencde/bcf/projects
{
    "guid": "a8375c77-4b26-47df-be1a-495609f37439",
    "description": "My new document reference"
}
```

```json
{
  "guid": "a8375c77-4b26-47df-be1a-495609f37439",
  "description": "My new document reference"
}
```

Create the document reference between a topic and a document.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/document_references`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>guid</td>
        <td>string</td>
        <td>guid of the existing document</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>description</td>
        <td>string</td>
        <td>description the reference to create</td>
        <td>Optional</td>
    </tr>
</table>

### Request schema

[document_reference_PUT.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/DocumentReference/document_reference_PUT.json)

### Response schema

[document_reference_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/DocumentReference/document_reference_GET.json)
