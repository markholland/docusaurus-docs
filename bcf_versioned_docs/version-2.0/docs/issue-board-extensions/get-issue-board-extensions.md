## Get issue board extensions

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions
```

```json
{
  "topic_type": ["Error", "Warning", "Info", "Unknown"],
  "topic_status": ["Open", "Closed"],
  "user_id_type": [
    "user1@test.com",
    "user2@test.com",
    "user3@test.com",
    "user4@test.com"
  ]
}
```

Return the extensions.

For an issue board, the extensions provides valid values for topic types, topic statuses and users.

Note: the field **user_id_type** is a list of email addresses for users in the bimsync project.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions`

### Response schema

[extensions_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Project/extensions_GET.json)
