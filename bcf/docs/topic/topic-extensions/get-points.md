## Get points

> Example

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics/6411ce04-5391-40a6-97c2-be0ca45fcc96/points
```

```json
[
  {
    "id": "7c34c9b3-1b9b-4750-a4f3-0641d58fe48e",
    "x": 0,
    "y": 0,
    "z": 0
  },
  {
    "id": "2a34c9b3-1b9b-4750-a4f3-0641d58fe48e",
    "x": 10.2,
    "y": -4.2,
    "z": -20.5
  }
]
```

Return a list of points in a topic. Each point has 4 attribute. **id**, **x**, **y** and **z**.

**id** the id of the point.
**x** the x axis.
**y** the y axis.
**z** the z axis.

Note: this resource is additional to the BCF-API standard, and may change in the future

### Resource URL

https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics/{topic_guid}/points
