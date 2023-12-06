## Get topic

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96
```

```json
{
  "guid": "6411ce04-5391-40a6-97c2-be0ca45fcc96",
  "topic_type": "Error",
  "topic_status": "Open",
  "title": "Door is misplaced",
  "creation_date": "2017-06-02T09:57:44.438+0000",
  "modified_date": "2017-06-02T09:58:35.511+0000",
  "modified_author": "user1@test.com"
}
```

Return the topic.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}`

### Response schema

[topic_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Topic/topic_GET.json)
