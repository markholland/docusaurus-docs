## Link issue board extension user

> Example

```http
PUT https://api.catenda.com/opencde/bcf/3.0/projects/3c34c9b3-1b9b-4750-a4f3-0641d58fe48e/extensions/users/link
{
    "unlinkedUser": "user5@test.com",
    "existingUserId": "user1@test.com"
}
```

```json
{
  "name": "User 1",
  "id": "user1@test.com"
}
```

Link the extension user. As described earlier, a user may be unlinked. This resource allows you to merge an unlinked user with a linked user.

Note: this resource is additional to the BCF-API standard.

### Parameters

JSON encoded body using the "application/json" content type.

<table class="table">
    <tr><th>Name</th><th>Type</th><th>Description</th><th></th></tr>
    <tr>
        <td>existingUserId</td>
        <td>string</td>
        <td>id of the user</td>
        <td>Mandatory</td>
    </tr>
    <tr>
        <td>unlinkedUser</td>
        <td>string</td>
        <td>id of the unlinked user</td>
        <td>Mandatory</td>
    </tr>
</table>

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/projects/project_id/extensions/users/link`
