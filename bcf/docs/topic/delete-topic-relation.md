## Delete topic relation

> Example request

```http
DELETE https://api.catenda.com/opencde/bcf/3.0/projects/c0784b27-5057-43f6-bdb3-3607f4da86b0/topics/44405b7c-7bc1-4ea7-813b-e0ef156eb6db/related_topics/19d10dec-44dc-41f1-b63c-c6cd91c6037d
```

Delete relation between two topics. Note that if a topic is linked through a comment, this will not delete the actual comment. Does not return the deleted topic.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/related_topics/{related_topic_guid}`
