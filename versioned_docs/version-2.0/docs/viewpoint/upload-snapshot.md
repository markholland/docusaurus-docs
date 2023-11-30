## Upload snapshot

> Example

```http
PUT https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/viewpoints/747f2fe6-b690-471f-8e45-618a4bc9a63c/snapshot

The binary snapshot file.
```

Upload the snapshot.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/viewpoints/{viewpoint_guid}/snapshot`

### Request body

The snapshot to be uploaded. Must be in JPG, PNG or GIF format.
