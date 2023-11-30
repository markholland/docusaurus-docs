## Create comment

> Example

```http
POST https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/comments
{
    "status": "Error",
    "verbal_status": "Closed",
    "comment": "Furniture has been repositioned",
    "viewpont_guid": "9d3b9d8e-68a8-4f15-bf1e-37fb6bbaf0d5"
}
```

```json
{
  "guid": "e5acdb08-7a37-479c-b0d8-459219a59c73",
  "verbal_status": "Closed",
  "status": "Error",
  "date": "2017-06-02T09:57:44.438+0000",
  "author": "user1@test.com",
  "comment": "Furniture has been repositioned",
  "topic_guid": "6411ce04-5391-40a6-97c2-be0ca45fcc96",
  "viewpoint_guid": "9d3b9d8e-68a8-4f15-bf1e-37fb6bbaf0d5"
}
```

Create the comment.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/comments`

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>status</td>
        <td>string</td>
        <td>new type of the topic (Valid values from extensions.topic_type)</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>verbal_status</td>
        <td>string</td>
        <td>new status of the topic (Valid values from extensions.topic_status)</td>
        <td>Optional</td>
    </tr>
    <tr>
        <td>comment</td>
        <td>string</td>
        <td>the comment</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>viewpoint_guid</td>
        <td>string</td>
        <td>guid of an existing viewpoint</td>
        <td>Optional</td>
    </tr>
</table>

### Request schema

[comment_POST.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Comment/comment_POST.json)

### Response schema

[comment_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Comment/comment_GET.json)
