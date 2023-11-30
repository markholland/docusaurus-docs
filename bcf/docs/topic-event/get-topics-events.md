## Get all topic events

> Example request

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/5af9e867-659d-4eee-ae56-2370aaf8aabe/topics/events
```

> Example response

```json
[
  {
    "topic_guid": "243a69aa-ef85-4b4e-9b56-d172818a9a37",
    "date": "2020-02-27T13:41:45.442+0000",
    "author": "user1@test.com",
    "actions": [
      {
        "type": "topic_created"
      },
      {
        "type": "title_updated",
        "value": "Hole in the wall"
      },
      {
        "type": "status_updated",
        "value": "Open"
      },
      {
        "type": "type_updated",
        "value": "Error"
      },
      {
        "type": "priority_removed"
      }
    ]
  },
  {
    "topic_guid": "243a69aa-ef85-4b4e-9b56-d172818a9a37",
    "date": "2020-02-27T13:42:01.939+0000",
    "author": "user1@test.com",
    "actions": [
      {
        "type": "type_updated",
        "value": "Info"
      }
    ]
  },
  {
    "topic_guid": "c84392ec-065f-4c89-aa2b-644486ca8e34",
    "date": "2020-02-21T14:59:48.828+0000",
    "author": "user1@test.com",
    "actions": [
      {
        "type": "topic_created"
      },
      {
        "type": "title_updated",
        "value": "new title"
      },
      {
        "type": "status_updated",
        "value": "Open"
      },
      {
        "type": "type_updated",
        "value": "Error"
      },
      {
        "type": "priority_removed"
      }
    ]
  }
]
```

Return all events for all topics for a given project.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/events`

### Response schema

List of [topic_event_GET.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/Events/topic_event_GET.json)
