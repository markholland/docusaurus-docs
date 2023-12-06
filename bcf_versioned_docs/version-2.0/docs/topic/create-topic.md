## Create topic

> Example

```http
POST https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics
{
    "topic_type": "Error",
    "topic_status": "Open",
    "title": "Furniture is misplaced",
    "assigned_to": "user3@test.com"
}
```

```json
{
  "guid": "9b7cabc3-808e-4477-8f98-2b02c573dbad",
  "topic_type": "Error",
  "topic_status": "Open",
  "title": "Furniture is misplaced",
  "creation_date": "2017-06-02T09:57:44.438+0000",
  "modified_date": "2017-06-02T09:58:35.511+0000",
  "modified_author": "user3@test.com",
  "assigned_to": "user4@test.com"
}
```

Create the topic.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>topic_type</td>
        <td>string</td>
        <td>type of the topic (Valid values from extensions.topic_type)</td>
        <td>Optional, default first type from extensions.topic_type</td>
    </tr>
    <tr>
        <td>topic_status</td>
        <td>string</td>
        <td>status of the topic (Valid values from extensions.topic_status)</td>
        <td>Optional, default first open status from extensions.topic_status</td>
    </tr>
    <tr>
        <td>title</td>
        <td>string</td>
        <td>title of the topic</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>assigned_to</td>
        <td>string</td>
        <td>email of the assigned user (Valid values from extensions.user_id_type)</td>
        <td>Optional, default unassigned</td>
    </tr>
    <tr>
        <td>description</td>
        <td>string</td>
        <td>description of the topic</td>
        <td>Optional</td>
    </tr>
</table>

### Request schema

[topic_POST.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Topic/topic_POST.json)

### Response schema

[topic_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Topic/topic_GET.json)
