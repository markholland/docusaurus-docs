## Get issue board extension users

> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions/users?include-unlinked=true
```

```json
[
  {
    "name": "User 1",
    "id": "user1@test.com"
  },
  {
    "name": "User 2",
    "id": "user2@test.com"
  },
  {
    "name": "null",
    "id": "user5@test.com",
    "unlinked": true
  }
]
```

Return the extension users. These users have 3 attributes. **name**, **id**, and **unlinked**.
**name** is the name of the user.
**id** is the email-address of the user.
**unlinked** is a boolean, that is only set for users that are unlinked, and the value is true.

Note: this resource is additional to the BCF-API standard

### Query Parameters

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>include-unlinked</td>
        <td>boolean</td>
        <td>Should include unlinked users</td>
        <td>Optional</td>
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions/users`
