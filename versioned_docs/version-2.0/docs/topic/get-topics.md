## Get topics

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics
```

```json
[
  {
    "guid": "6411ce04-5391-40a6-97c2-be0ca45fcc96",
    "topic_type": "Error",
    "topic_status": "Open",
    "title": "Door is misplaced",
    "creation_date": "2017-06-02T09:57:44.438+0000",
    "modified_date": "2017-06-02T09:58:35.511+0000",
    "modified_author": "user1@test.com"
  },
  {
    "guid": "33a62c72-b81d-476d-98c0-662d8775f057",
    "topic_type": "Error",
    "topic_status": "Closed",
    "title": "Wall is misplaced",
    "creation_date": "2017-06-02T09:57:44.438+0000",
    "modified_date": "2017-06-02T09:58:35.511+0000",
    "modified_author": "user1@test.com",
    "assigned_to": "user2@test.com"
  }
]
```

#### Filter, sort, skip and limit using OData

**OData filter parameters**

<table class="table">
  <tr><th>Parameter</th><th>Type</th><th>Description</th><th></th></tr>
  <tr><td>creation_author</td><td>string</td><td>userId of the creation author (value from extensions)</td></tr>
  <tr><td>modified_author</td><td>string</td><td>userId of the modified author (value from extensions)</td></tr>
  <tr><td>assigned_to</td><td>string</td><td>userId of the assigned person (value from extensions)</td></tr>
  <tr><td>topic_status</td><td>string</td><td>status of a topic (value from extensions)</td></tr>
  <tr><td>topic_type</td><td>string</td><td>type of a topic (value from extensions)</td></tr>
  <tr><td>creation_date</td><td>datetime</td><td>creation date of a topic</td></tr>
  <tr><td>modified_date</td><td>datetime</td><td>modification date of a topic</td></tr>
  <tr><td>labels</td><td>array (string)</td><td>labels of a topic (value from extensions)</td></tr>
</table>

**OData sort parameters**

<table class="table">
  <tr><th>parameter</th><th>description</th></tr>
  <tr><td>creation_date</td><td>creation date of a topic</td></tr>
  <tr><td>modified_date</td><td>modification date of a topic</td></tr>
  <tr><td>index</td><td>index of a topic</td></tr>
</table>

> Example requests

> Get topics that are open, assigned to Architect@example.com and created after December 5th 2015. Sort the result on last modified.

```http
GET /bcf/2.1/projects/F445F4F2-4D02-4B2A-B612-5E456BEF9137/topics?$filter=assigned_to eq 'Architect@example.com' and status eq 'Open' and creation_date gt 2015-12-05T00:00:00+01:00&$orderby=modified_date desc
```

> Get topics that have at least one of the labels 'Architecture', 'Structural' or 'Heating'.

```http
GET /bcf/1.0/projects/F445F4F2-4D02-4B2A-B612-5E456BEF9137/topics?$filter=contains(labels, 'Architecture') or contains(labels, 'Structural') or contains(labels, 'Heating')
```

> Get 50 topics and skip the first 100.

```http
GET /bcf/1.0/projects/F445F4F2-4D02-4B2A-B612-5E456BEF9137/topics?$top=50&$skip=100
```

> Return the topics. Default size is 100 items, max size is 500 items.

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics`

### Response schema

List of [topic_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Collaboration/Topic/topic_GET.json)
