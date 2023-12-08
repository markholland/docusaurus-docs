# Authentication

## Authorization Code Grant

### 1. Obtain an authorization code

Redirect the user the URL `https://api.catenda.com/oauth2/authorize` with the
following query parameters set:

| Name          | Type   | Description                                                                                                                                                                               |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| client_id     | String | The `cliend_id` of the application doing the request.                                                                                                                                     |
| response_type | String | Value must be set to `code`.                                                                                                                                                              |
| response_mode | String | _Optional_ Value can be set to `query` or `fragment`                                                                                                                                      |
| state         | String | _Optional_ Any state which may be useful for you application. The state is returned by the response.                                                                                      |
| redirect_uri  | String | The URL where the response is sent. Must match the registered redirect URI of the application.                                                                                            |
| prompt        | String | _Optional_ If set to `none`, Catenda will remember the app so that the user only has to allow the app on first authorization. If set to `login`, Catenda will always show the login form. |

If the request is valid and the user authorizes your application Catenda will redirect back to
the redirect URI with the following query parameters:

| Name  | Type   | Description                          |
| ----- | ------ | ------------------------------------ |
| code  | String | The authorization code               |
| state | String | If supplied in authorization request |

If the request is valid and the user authorizes your application Catenda will redirect back to
the redirect URI with query parameter `error` set. Values are specified in [section 4.1.2.1 Error Response ](https://tools.ietf.org/html/rfc6749#section-4.1.2.1)

### 2. Obtain an access token

> Example

```shell
curl -X POST \
    --header "Content-Type: application/x-www-form-urlencoded" \
    --data "grant_type=authorization_code&code=dlZE0KFxhM&redirect_uri=http%3A%2F%2Fclient%2eexample%2Ecom&client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET"
    "https://api.catenda.com/oauth2/token"
```

```json
{
    "access_token": "W2Lf11j7ZaVFxDc5CFCYJT",
    "refresh_token": "VQE9buKoozaw8Jtpp9t01W"
    "token_type": "bearer",
    "expires_in": 3599
}
```

After you have received the authorization code you can request an access token.

### Method

`POST`

### URL

`https://api.catenda.com/oauth2/token`

### Request format

`application/x-www-form-urlencoded`

### Request parameters

| Name          | Type   | Description                                                                 |
| ------------- | ------ | --------------------------------------------------------------------------- |
| grant_type    | String | Value must be set to `authorization_code`                                   |
| code          | String | The authorization code                                                      |
| client_id     | String |
| client_secret | String |
| redirect_uri  | String | The URL where the response is sent. Must match the registered redirect URI. |

### Response format

`application/json`

### Response

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| access_token  | String  |
| refresh_token | String  |
| token_type    | String  |
| expires_in    | Integer |

### Errors

Specified in [section 5.2 Error Response ](https://tools.ietf.org/html/rfc6749#section-5.2)

### 3. Refreshing an access token

> Example

```shell
curl -X POST \
    --header "Content-Type: application/x-www-form-urlencoded" \
    --data "grant_type=refresh_token&refresh_token=IDR9ohXbbmnj8Wgcc9g01J&client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET"
    "https://api.catenda.com/oauth2/token"
```

```json
{
    "access_token": "W2Lf11j7ZaVFxDc5CFCYJT",
    "refresh_token": "VQE9buKoozaw8Jtpp9t01W"
    "token_type": "bearer",
    "expires_in": 3599
}
```

### Method

`POST`

### URL

`https://api.catenda.com/oauth2/token`

### Request format

`application/x-www-form-urlencoded`

### Request parameters

| Name          | Type   | Description                          |
| ------------- | ------ | ------------------------------------ |
| grant_type    | String | Value must be set to `refresh_token` |
| refresh_token | String |
| client_id     | String |
| client_secret | String |

### Response format

`application/json`

### Response

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| access_token  | String  |
| refresh_token | String  |
| token_type    | String  |
| expires_in    | Integer |

### Errors

Specified in [section 5.2 Error Response ](https://tools.ietf.org/html/rfc6749#section-5.2)

## PKCE

If you need to access the API from an application where the client secret can not be stored
secretly, like a desktop application or a mobile app, you should use PKCE.

PKCE works by having the app generate a random value at the beginning of the flow called a Code Verifier. The app hashes the Code Verifier and the result is called the Code Challenge.
The Code Challenge is sent in the authorization request and the Code Verifier is sent in the access token request. Now the Authorization Server can hash the Code Verifier and compare it to the Code Challenge. This is an effective, dynamic stand-in for a fixed client secret.

In order to enable PKCE, you can follow the Authorization Code Grant flow above, with the following changes:

### 1. Obtain an authorization code

In this step you need to provide the query parameter code_challenge.

### Request parameters

| Name           | Type   | Description                                                                                                                          |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| code_challenge | String | The code challenge is created by SHA256 hashing the code_verifier. Base64UrlEncode(SHA256Hash(ASCII((code_verifier))). See RFC 7636. |

### 2. Obtain an access token

In this step you must NOT send the client secret.
Instead, you need to provide the query parameter `code_verifier`.

Note that the redirect url must have a defined scheme in the uri, like: `http://`, `https://` or `app://`.
The domain can be either `localhost`, `127.0.0.1` or a scheme that has `app://` as a substring, like `myapp://`.
Example of valid redirect urls: `http://localhost`, `https://127.0.0.1`, `myapp://mydomain.com`.

### Request parameters

| Name          | Type   | Description                                                                                                                             |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| code_verifier | String | A high-entropy cryptographic random string with a minimum length of 43 characters and a maximum length of 128 characters. See RFC 7636. |

## Client Credentials Grant

> Example

```shell
curl -X POST \
    --header "Content-Type: application/x-www-form-urlencoded" \
    --data "grant_type=client_credentials&client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET"
    "https://api.catenda.com/oauth2/token"
```

```json
{
  "access_token": "dJ3nS4CmaWLm95noO8Lfku",
  "token_type": "bearer",
  "expires_in": 3599
}
```

<aside class="info"><strong>Client Credentials Grant is only available to <a href="https://catenda.com/products/bimsync-boost">Catenda Boost customers</a>.</strong></aside>

### Method

`POST`

### URL

`https://api.catenda.com/oauth2/token`

### Request format

`application/x-www-form-urlencoded`

### Request parameters

| Name          | Type   | Description                               |
| ------------- | ------ | ----------------------------------------- |
| grant_type    | String | Value must be set to `client_credentials` |
| client_id     | String |
| client_secret | String |

### Response format

`application/json`

### Response

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| access_token | String  |
| token_type   | String  |
| expires_in   | Integer |

### Errors

Specified in [section 5.2 Error Response ](https://tools.ietf.org/html/rfc6749#section-5.2)
