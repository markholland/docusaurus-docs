## Get Catenda project topics

> Example request

```http
GET https://api.catenda.com/opencde/bcf/3.0/bimsync-projects/71b7cefda7574e73beb80f23496f18b8/topics/?$filter=bimsync_issue_board in ('c0784b27505743f6bdb33607f4da86b0')
```

> Example response

```json
[
  {
    "guid": "44405b7c-7bc1-4ea7-813b-e0ef156eb6db",
    "topic_type": "Error",
    "topic_status": "Open",
    "reference_links": [],
    "title": "issue title",
    "labels": ["Arkitekt3"],
    "creation_date": "2020-03-03T08:06:39.264+0000",
    "creation_author": "king@test.com",
    "modified_date": "2020-03-03T13:16:48.333+0000",
    "modified_author": "king@test.com",
    "assigned_to": "king@test.com",
    "bimsync_issue_number": 12,
    "bimsync_assigned_to": {
      "user": {
        "ref": "e4d94d45f7194f1f9f7b29ed994d01e4",
        "email": "king@test.com",
        "name": "King"
      },
      "team": null
    },
    "bimsync_issue_board": {
      "name": "My issue board",
      "id": "c0784b27-5057-43f6-bdb3-3607f4da86b0"
    },
    "bimsync_creation_author": {
      "user": {
        "ref": "e4d94d45f7194f1f9f7b29ed994d01e4",
        "email": "king@test.com",
        "name": "King Kong"
      },
      "importedBy": null
    },
    "bimsync_imported_at": "2020-03-03T11:10:46.986+0000"
  },
  {
    "guid": "c720fd87-75ad-4ba6-ac26-9296b4f6ff73",
    "topic_type": "Error",
    "topic_status": "Open",
    "reference_links": [],
    "title": "title",
    "index": 2,
    "labels": ["Arkitekt3"],
    "creation_date": "2020-03-03T08:06:39.264+0000",
    "creation_author": "king@test.com",
    "modified_date": "2020-03-03T08:06:39.264+0000",
    "assigned_to": "king@test.com",
    "bimsync_issue_number": 11,
    "bimsync_assigned_to": {
      "user": {
        "ref": "e4d94d45f7194f1f9f7b29ed994d01e4",
        "email": "king@test.com",
        "name": "King"
      },
      "team": null
    },
    "bimsync_issue_board": {
      "name": "My issue board",
      "id": "c0784b27-5057-43f6-bdb3-3607f4da86b0"
    },
    "bimsync_creation_author": {
      "user": {
        "ref": "e4d94d45f7194f1f9f7b29ed994d01e4",
        "email": "king@test.com",
        "name": "King Kong"
      },
      "importedBy": null
    },
    "bimsync_imported_at": "2020-03-03T11:10:23.158+0000"
  }
]
```

#### Filter, sort, skip and limit using OData

**Odata filter parameters**

<table class="table">
  <tr><th>Parameter</th><th>Type</th><th>Description</th><th></th></tr>
  <tr><td>bimsync_creation_author</td><td>string</td><td>userRef of the creation author</td></tr>
  <tr><td>creation_author</td><td>string</td><td>email of the creation author (value from extensions)</td></tr>
  <tr><td>modified_author</td><td>string</td><td>email of the modified author (value from extensions)</td></tr>
  <tr><td>assigned_to</td><td>string</td><td>email of the assigned person (value from extensions)</td></tr>
  <tr><td>stage</td><td>string</td><td>stage this topic is part of (value from extensions)</td></tr>
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
    
> Odata example requests

> Get topics that are open, assigned to Architect@example.com and created after December 5th 2015. Sort the result on last modified.

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/F445F4F2-4D02-4B2A-B612-5E456BEF9137/topics?$filter=assigned_to eq 'Architect@example.com' and status eq 'Open' and creation_date gt 2015-12-05T00:00:00+01:00&$orderby=modified_date desc
```

> Get topics that have at least one of the labels 'Architecture', 'Structural' or 'Heating'.

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/F445F4F2-4D02-4B2A-B612-5E456BEF9137/topics?$filter=contains(labels, 'Architecture') or contains(labels, 'Structural') or contains(labels, 'Heating')
```

> Get 50 topics and skip the first 100.

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/F445F4F2-4D02-4B2A-B612-5E456BEF9137/topics?$top=50&$skip=100
```

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/topics`

### Select

> Example request with select

```http
GET https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/topics?$select=creation_date,modified_date,assigned_to
```

> Example response with select

```json
[
  {
    "guid": "44405b7c-7bc1-4ea7-813b-e0ef156eb6db",
    "creation_date": "2020-03-03T08:06:39.264+0000",
    "modified_date": "2020-03-06T12:31:58.018+0000",
    "assigned_to": "king@test.com",
    "bimsync_issue_number": 12,
    "bimsync_assigned_to": {
      "user": {
        "ref": "e4d94d45f7194f1f9f7b29ed994d01e4",
        "email": "king@test.com",
        "name": "King"
      },
      "team": null
    },
    "bimsync_imported_at": "2020-03-03T11:10:46.986+0000"
  },
  {
    "guid": "c720fd87-75ad-4ba6-ac26-9296b4f6ff73",
    "creation_date": "2020-03-03T08:06:39.264+0000",
    "modified_date": "2020-03-03T08:06:39.264+0000",
    "assigned_to": "king@test.com",
    "bimsync_issue_number": 11,
    "bimsync_assigned_to": {
      "user": {
        "ref": "e4d94d45f7194f1f9f7b29ed994d01e4",
        "email": "king@test.com",
        "name": "King"
      },
      "team": null
    },
    "bimsync_imported_at": "2020-03-03T11:10:23.158+0000"
  }
]
```

Use **$select** as a query parameter to choose which properties to include in the response. **guid** and **bimsync_issue_number** are always returned in addition.

<table class="table">
  <tr><th>Parameter</th><th>Returns</th></tr>
  <tr><td>*</td><td>all default fields</td></tr>
  <tr><td>title</td><td>title</td></tr>
  <tr><td>description</td><td>description</td></tr>
  <tr><td>index</td><td>index</td></tr>
  <tr><td>labels</td><td>labels</td></tr>
  <tr><td>due_date</td><td>due_date</td></tr>
  <tr><td>stage</td><td>stage</td></tr>
  <tr><td>creation_author</td><td>creation_author, bimsync_creation_author</td></tr>
  <tr><td>creation_date</td><td>creation_date, bimsync_imported_at</td></tr>
  <tr><td>modified_date</td><td>modified_date</td></tr>
  <tr><td>modified_author</td><td>modified_author</td></tr>
  <tr><td>assigned_to, bimsync_assigned_to</td><td>assigned_to, bimsync_assigned_to</td></tr>
  <tr><td>topic_status</td><td>topic_status</td></tr>
  <tr><td>topic_type</td><td>topic_type</td></tr>
  <tr><td>topic_priority</td><td>topic_priority</td></tr>
  <tr><td>reference_links</td><td>reference_links</td></tr>
  <tr><td>bim_snippet</td><td>bim_snippet</td></tr>
  <tr><td>bimsync_comments_size</td><td>bimsync_comments_size</td></tr>
  <tr><td>bimsync_custom_fields</td><td>bimsync_custom_fields</td></tr>
  <tr><td>bimsync_requester</td><td>bimsync_requester</td></tr>
</table>

### Response schema

List of [topic_GET.json](https://github.com/buildingSMART/BCF-API/blob/release_3_0/Schemas_draft-03/Collaboration/Topic/topic_GET.json)
