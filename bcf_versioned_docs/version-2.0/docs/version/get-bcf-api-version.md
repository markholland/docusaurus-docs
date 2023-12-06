## Get BCF API version 
> Example

```http
GET https://api.catenda.com/opencde/bcf/version
```
```json
{
    "version_id": "2.0",
    "detailed_version": "Catenda BCF API 2.0 version. BCF-xml schema version: 2.0. Documentation: https://api.catenda.com/developers/reference/bcf/2.0"
}
```
 
Returns the current BCF REST API version. The version\_id must be added to underlying resource URLs. If version\_id equals 2.0, then the project's URL will be https://api.catenda.com/opencde/bcf/2.0/projects.

This resource does not require any authorization.

### Resource URL

`https://api.catenda.com/opencde/bcf/version`

### Response schema
[version_GET.json](https://github.com/BuildingSMART/BCF-API/tree/release_1_0/Schemas_draft-03/Public/version_GET.json)


