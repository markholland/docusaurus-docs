## Get issue board extensions

> Example request

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions
```

> Example response

```json
{
  "topic_type": ["Error", "Warning", "Info", "Unknown"],
  "topic_status": ["Open", "Closed", "Test status"],
  "topic_label": ["Arkitekt3"],
  "snippet_type": [],
  "priority": [],
  "user_id_type": ["king@test.com", "pawn@test.com", "Chess mates"],
  "stage": [],
  "project_actions": ["createTopic", "createDocument"],
  "topic_actions": [
    "createComment",
    "createViewpoint",
    "update",
    "delete",
    "updateBimSnippet",
    "updateRelatedTopics",
    "updateDocumentReferences"
  ],
  "comment_actions": ["update"]
}
```

Return the extensions.

For an issue board, the extensions provides valid values for topic types, topic statuses and users.

Note: the field **user_id_type** is a list of email addresses for users in the Catenda project.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions`

### Response schema

[extensions_GET.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Project/extensions_GET.json)
