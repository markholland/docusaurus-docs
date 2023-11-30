## Get comments

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/comments
```

```json
[
  {
    "guid": "d13fd9fa-2f54-4bbd-b37d-15a975077cd3",
    "verbal_status": "Open",
    "status": "Warning",
    "date": "2017-06-02T09:57:44.438+0000",
    "author": "user2@test.com",
    "comment": "Check this",
    "topic_guid": "6411ce04-5391-40a6-97c2-be0ca45fcc96",
    "viewpoint_guid": "9d3b9d8e-68a8-4f15-bf1e-37fb6bbaf0d5"
  },
  {
    "guid": "d896a960-63db-496e-8ce7-0c062e9f23c1",
    "verbal_status": "Open",
    "status": "Error",
    "date": "2017-07-02T09:54:44.438+0000",
    "author": "user1@test.com",
    "comment": "Yes, this is misplaced",
    "topic_guid": "6411ce04-5391-40a6-97c2-be0ca45fcc96"
  }
]
```

Return the comments.

Note: Comment.verbal_status maps to Topic.topic_status, Comment.status maps to Topic.topic_type

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/comments`

### Response schema

List of [comment_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Comment/comment_GET.json)
