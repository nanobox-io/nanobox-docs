---
title: Custom Provider
description: Creating a custom cloud provider integration.
---

Creating an integration with Nanobox can be done entirely outside of Nanobox. In fact, the entire integration will live outside of Nanobox. Essentially, a provider integration is just an API endpoint that standardizes the interaction between Nanobox and a cloud provider, acting as a bridge or proxy to facilitate communication between the the two.

The integration can be written in any language and run anywhere. As long as the API conforms to the specification as detailed here, the endpoint can be added into Nanobox and users can launch apps on your provider.

###### General Requirements

There are only a few requirements that a provider must satisfy in order to integrate with Nanobox:

1. Must implement the API spec as outlined here

2. Must be able to launch servers running a base ubuntu OS

3. Servers must have both a public and private network (2 nics).

## API

* [Gathering Metadata](#meta)
* [Requesting the Catalog](#catalog)
* [Verify the account credentials](#verify)
* [Creating an SSH Key](#create-ssh-key)
* [Querying an SSH Key](#query-ssh-key)
* [Deleting an SSH Key](#delete-ssh-key)
* [Ordering a Server](#order-server)
* [Querying a Server](#query-server)
* [Canceling a Server](#cancel-server)
* [Rebooting a Server](#reboot-server)
* [Renaming a Server](#rename-server)


### Meta

The `/meta` route provides Nanobox with various pieces of metadata that are used for displaying information in the dashboard and for requesting authentication information from users.

###### Path:
`/meta`

###### Method:
GET

###### Headers:
none

###### Body:
empty

###### Response:

* `id`: some unique identifier
* `name`: display name used in the dashboard
* `server_nick_name`: what this provider calls their servers
* `default_region`: the default region to launch servers when not specified
* `default_size`: default server size to use when creating an app
* `default_plan`: the [id of the default plan](#catalog) in which the default size is ordered
* `can_reboot`: boolean to determine if we can reboot the server through the api
* `can_rename`: boolean to determine if we can rename the server through the api
* `ssh_auth_method`: will either be key or password
* `credential_fields`: array of hashes that includes field keys and labels necessary to authenticate with the provider.
* `instructions`: string that contains instructions for how to setup authentication with the provider.

Example using the Digital Ocean integration:

```json
{
  "id":                "do",
  "name":              "Digital Ocean",
  "server_nick_name":  "Droplet",
  "default_region":    "sfo1",
  "default_size":      "512mb",
  "default_plan":      "standard",
  "can_reboot":        true,
  "can_rename":        true,
  "credential_fields": [
    { "key": "access_token", "label": "Access Token" }
  ],
  "instructions": "<a href='//cloud.digitalocean.com/settings/api/tokens' target='_blank'>Create a Personal Access Token</a> in your Digital Ocean Account that has read/write access, then add the token here or view the <a href='//www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-api-v2#how-to-generate-a-personal-access-token' target='_blank'>full guide</a>"
}
```

#### Catalog
The `/catalog` route provides nanobox with a catalog of server sizes and options, within the available geographic regions.

###### Path:
`/catalog`

###### Method:
GET

###### Headers:
none

###### Body:
empty

###### Response:

The response data should be a list (array) of regions. Each region should contain a list of plans. It is not necessary to have multiple regions, however the structure is the same regardless. Additionally, your integration may only have one classification of server types, or you may have high-cpu, high-ram, or high-IO options. A plan is a grouping of server sizes within a classification.

Each region in the catalog consists of the following:

* `id`: unique region identifier to be used when ordering a server.
* `name`: the visual identifier for the customer.
* `plans`: A grouping of server sizes within a classification. Each plan consists of the following:

  * `title`: the classification of the server options within this plan.  The title should indicate to the user what kinds of workloads these server options are ideal for. For instance: "Standard" or "High CPU".
  * `specs`: the list of server options within this plan. Each spec should have the following fields:

    * `id`: a unique identifier that will be used when ordering a server
    * `ram`: a visual indication to the user informing the amount of RAM is provided.
    * `cpu`: a visual indication to the user informing the amount of CPUs or CPU cores.
    * `disk`: a visual indication to the user informing the amount or size of disk.
    * `transfer`: a visual indication to the user informing the amount of data transfer allowed per month for this server.
    * `dollars_per_hr`: a visual indication to the user informing the cost of running this server per hour.
    * `dollars_per_mo`: a visual indication to the user informing the cost of running this server per month.

Simplified example using a single plan with only 2 server sizes:

```json
[
  {
    "id":    "sfo1",
    "name":  "San Francisco 1",
    "plans": [
      {
        "title": "Standard Configuration",
        "specs": [
          {"id": "a1", "ram": 1000, "cpu": 1, "disk": 24, "transfer": 1, "dollars_per_hr": 0.1, "dollars_per_mo": 10},
          {"id": "a2", "ram": 2000, "cpu": 2, "disk": 48, "transfer": 1, "dollars_per_hr": 0.1, "dollars_per_mo": 10}
        ]
      }
    ]
  }
]

```

#### Verify

The `/verify` route is used to verify a user's account credentials. The `credential_fields` specified in the metadata will be provided in the dashboard and required to be filled before the user can use this provider. After the credentials are provided, Nanobox will call this route to verify that the account credentials provided by the user are valid.

###### Path:
`/verify`

###### Method:
POST

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This provides the necessary values to authorize the user within the provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:
empty

###### Response:

**On Success:** Should return an empty body with a `200` response code.

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Create SSH Key

The `/keys` route is used to authorize nanobox with the user's account that will be ordering servers. After ordering a server, nanobox needs to SSH into the server to provision it. Nanobox will pre-generate an SSH key for the user's account and the authorization route allows Nanobox to register the key with the user's account on the provider so Nanobox can access the server after it is ordered.

*NOTE*: This route is **not** required if your provider uses passwords for SSH instead of SSH keys, assuming the password to access the server is returned in the order server payload.

###### Path:
`/keys`

###### Method:
POST

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:

* `name`: the user-friendly name of the key.
* `key`: the public key to register with the user's account. It is assumed that this public key will be installed on every server launched by this integration.

Example:

```json
{
  "name": "nanobox-provider-account-ID",
  "key":  "CONTENTS OF PUBLIC KEY"
}
```

###### Response:

**On Success:** Should return a `201` code with the following json data:
* `id`: fingerprint or key identifier to use when ordering servers

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Query SSH Key

The `/keys/:id` route is used by Nanobox to query the existence of previously created key.

###### Path:
`/keys/:id`

###### Method:
GET

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:
empty

###### Response

**On Success:** Should return a `201` code with the following json data:

* `id`: fingerprint or key identifier to use when ordering servers
* `name`: the user-friendly name of the key.
* `public_key`: "CONTENTS OF PUBLIC KEY"

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Delete SSH Key

The `/keys/:id` route is used to cancel a key that was previously created via nanobox.

###### Path:
`/keys/:id`

###### Method:
DELETE

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:
empty

###### Response

**On Success:** Should return an empty body with a status code of `200`

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Order Server

The `/servers` route is how nanobox submits a request to order a new server. This route **SHOULD NOT** hold open the request until the server is ready. The request should return immediately once the order has been submitted with an identifier that Nanobox can use to followup on the order status.

###### Path:
`/servers`

###### Method:
POST

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:

* `name`: nanobox-generated name used to identify the machine visually as ordered by nanobox.
* `region`: the region wherein to launch the server, which will match the region id from the catalog.
* `size`: the size of server to provision, which will match an `id` provided in the aforementioned catalog.
* `ssh_key`: id of the SSH key created during the `/keys` request.

Example:

```json
{
  "name":    "nanobox.io-cool-app-do.1.1",
  "region":  "sfo1",
  "size":    "a1",
  "ssh_key": "12345"
}
```

##### Response:

**On Success:** Should return a `201` code with the following json data:
* `id`: unique id of the server

Should return a json body with only `id` and a `201` status code.

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Query Server

The `/servers/:id` route is used by nanobox to query state about a previously ordered server. This state is used to inform nanobox when the server is ready to be provisioned and also how to connect to the server.

###### Path:
`/servers/:id`

###### Method:
GET

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:
empty

###### Response

**On Success:** Should return a `201` code with the following json data:

* `id`: the server id
* `status`: the status or availability of the server. (active indicates server is ready)
* `name`: name of the server
* `external_ip`: external or public IP of the server
* `internal_ip`: internal or private IP of the server
* `password`: the ssh password to use (if ssh_auth_method is password)

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Cancel Server

The `/servers/:id` route is used to cancel a server that was previously ordered via nanobox. This route **SHOULD NOT** hold open the request until the server is completely canceled. It should return immediately once the order to cancel has been submitted.

###### Path:
`/servers/:id`

###### Method:
DELETE

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:

* `auth`: key/value pairs containing the credential_fields and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

###### Response

**On Success:** Should return an empty body with a status code of `200`

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Reboot Server

The `/servers/:id/reboot` route is used to reboot a server that was previously ordered via nanobox. This route **SHOULD NOT** hold open the request until the server is completely rebooted. It should return immediately once the order to reboot has been submitted.

###### Path:
`/servers/:id/reboot`

###### Method:
PATCH

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This provides the necessary values to authorize the user within this provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:
empty

###### Response

**On Success:** Should return an empty body with a status code of `200`

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Rename Server

The `/servers/:id/rename` route is used to rename a server that was previously ordered via nanobox. This route **SHOULD NOT** hold open the request until the server is completely renamed. It should return immediately once the order to rename has been submitted.

###### Path:
`/servers/:id/reboot`

###### Method:
PATCH

###### Headers:
* `HTTP_AUTH_` prefixed credential field keys and their corresponding values as populated by the user. This provides the necessary values to authorize the user within this provider.

Example:

```
HTTP_AUTH_ACCESS_TOKEN: 123abc
```

###### Body:

* `name`: the new name of the server

Example:

```json
{
  "name": "nanobox.io-cool-app-do.1.1"
}
```

###### Response

**On Success:** Should return an empty body with a status code of `200`

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.
