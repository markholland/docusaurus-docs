## Get current user 
> Example

```http
GET https://api.catenda.com/opencde/bcf/2.0/current-user
```
```json
{
    "name": "User 1",
    "id": "user1@test.com"
}
```

Returns the current user.

The users have 2 attributes. **name** and **id**.
**name** is the name of the user.
**id** is the email-address of the user.

Note: this resource is additional to the BCF-API standard

### Resource URL

`https://api.catenda.com/opencde/bcf/{version_id}/current-user`

### Response schema
[user_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Public/version_GET.json)


