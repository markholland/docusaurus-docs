## Create topic relations

> Example request

```http
PUT https://api.catenda.com/opencde/bcf/3.0/projects/c0784b27-5057-43f6-bdb3-3607f4da86b0/topics/44405b7c-7bc1-4ea7-813b-e0ef156eb6db/related_topics
[
    {
        "related_topic_guid": "c720fd87-75ad-4ba6-ac26-9296b4f6ff73"
    },
    {
        "related_topic_guid": "19d10dec-44dc-41f1-b63c-c6cd91c6037d"
    }
]
```

> Example response

```json
[
  {
    "related_topic_guid": "042bb22d-e5b3-4b8b-929c-0efa324c3655"
  },
  {
    "related_topic_guid": "83a4a803-b985-498b-8405-53a12ea85fd7"
  }
]
```

Create relation between the topic and all the supplied topics in the body

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/related_topics`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th>Required</th></tr>
    <tr>
        <td>related_topic_guid</td>
        <td>string</td>
        <td>the guid of the related topic</td>
        <td>Mandatory</td>
    </tr>
</table>

### Request schema

List of [related_topic_PUT.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/RelatedTopic/related_topic_PUT.json)

### Response schema

List of [related_topic_GET.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/RelatedTopic/related_topic_GET.json)
