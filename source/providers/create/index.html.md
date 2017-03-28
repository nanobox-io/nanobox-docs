---
title: Custom Provider
seo_title: Integrate with any Cloud Provider
description: Open specification for creating a integrations with any cloud provider.
keywords: custom hosting provider, cloud provider integration, integration, using local vm
---

Creating an integration with Nanobox can be done entirely outside of Nanobox. In fact, the entire integration will live outside of Nanobox. Essentially, a provider integration is just an API endpoint that standardizes the interaction between Nanobox and a cloud provider, acting as a bridge or proxy to facilitate communication between the the two.

The integration can be written in any language and run anywhere. As long as the API conforms to the specification as detailed here, the endpoint can be added into Nanobox and users can launch apps on your provider.

###### General Requirements

There are only a few requirements that a provider must satisfy in order to integrate with Nanobox:

1. Must implement the API spec as outlined here.

2. Must be able to launch servers running a base Ubuntu OS (12.04+ *without Systemd*).

3. Servers must have both a public and private network (2 NICs). NICs can be hardware-backed or virtual as long as the OS is able to see them. Nanobox uses these to build a virtual network (layer 2/3 vxlan) for each app.

4. Servers must have at least of 128MB of RAM, but the recommended minimum is 512MB. Nanobox [platform components](/live-app-management/platform-components/) require approximately 50MB of RAM.

5. Both virtual machines and bare metal machine work as long as the OS isn't sharing a kernel (The host can't be a docker container).

###### OpenAPI Specification

The API documented below is also formalized in [an OpenAPI spec](openapi-spec.json) which you can develop and test against. There are some things to keep in mind if you decide to use it:

1. *This document* is the authoritative source. If the spec file disagrees with anything below, the *spec file* is out of date. Please [let us know](https://github.com/nanobox-io/nanobox-docs/issues) if you find any inconsistencies!

2. Since an adapter is an API, the spec file was designed so you can host it alongside the adapter itself, as a reference for your specific implementation. This means some parts of the spec file should be updated to reflect your own implementation:

    1. The `info` block. Update everything in this section to match your adapter's actual values for each property.

    2. The `basePath` should contain your adapter's URI, relative to the server root.

    3. If your adapter will not or cannot support SSH keys, you can remove the `/keys` and `/keys/{id}` entries from the `paths` collection. *SSH keys are strongly recommended for security, though.*

    4. If the default [credential field](#meta) (`Auth-Token`) doesn't suit your adapter's needs (you want to use a diffrerent name, or more than one field, etc), update the `parameters` section, using `parameters.Auth-Token` as a base. If you just want to change the name of the header, you can simply adjust the `name` property; you don't have to change the key or update any references. If you have more than one credential field, be sure to also add the new field references to the array in any occurence of:
        ```json
        "parameters": [
            {
                "$ref": "#/parameters/Auth-Token"
            }
        ],
        ```

    5. Validate your changes using a tool such as the [online Swagger Editor](http://editor.swagger.io/) (use File → Import File... to upload your spec file) before you publish and/or develop/test against it.

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
    { "key": "access-token", "label": "Access Token" }
  ],
  "instructions": "<a href='//cloud.digitalocean.com/settings/api/tokens' target='_blank'>Create a Personal Access Token</a> in your Digital Ocean Account that has read/write access, then add the token here or view the <a href='//www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-api-v2#how-to-generate-a-personal-access-token' target='_blank'>full guide</a>"
}
```

#### Catalog
The `/catalog` route provides Nanobox with a catalog of server sizes and options, within the available geographic regions.

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

**Note:** *For multiple regions with with identical plans/server-sizes, plans/server-sizes must be duplicated for each region.*

Each region in the catalog consists of the following:

* `id`: unique region identifier to be used when ordering a server.
* `name`: the visual identifier for the customer.
* `plans`: A grouping of server sizes within a classification. Each plan consists of the following:

    * `id`: unique plan identifier.
    * `name`: the classification of the server options within this plan.  The name should indicate to the user what kinds of workloads these server options are ideal for. For instance: "Standard" or "High CPU".
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
        "id": "standard",
        "name": "Standard Configuration",
        "specs": [
          {"id": "512mb", "ram": 512, "cpu": 1, "disk": 20, "transfer": 1.0, "dollars_per_hr": 0.00744, "dollars_per_mo": 5.0},
          {"id": "1gb", "ram": 1024, "cpu": 1, "disk": 30, "transfer": 2.0, "dollars_per_hr": 0.01488, "dollars_per_mo": 10.0}
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
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This provides the necessary values to authorize the user within the provider.

Example:

```
Auth-Access-Token: 123abc
```

###### Body:
empty

###### Response:

**On Success:** Should return an empty body with a `200` response code.

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Create SSH Key

The `/keys` route is used to authorize Nanobox with the user's account that will be ordering servers. After ordering a server, Nanobox needs to SSH into the server to provision it. Nanobox will pre-generate an SSH key for the user's account and the authorization route allows Nanobox to register the key with the user's account on the provider so Nanobox can access the server after it is ordered.

*NOTE*: This route is **not** required if your provider uses passwords for SSH instead of SSH keys, assuming the password to access the server is returned in the order server payload.

###### Path:
`/keys`

###### Method:
POST

###### Headers:
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
Auth-Access-Token: 123abc
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

The `GET /keys/:id` route is used by Nanobox to query the existence of previously created key.

*NOTE*: This route is **not** required if your provider uses passwords for SSH instead of SSH keys, assuming the password to access the server is returned in the order server payload.

###### Path:
`/keys/:id`

###### Method:
GET

###### Headers:
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
Auth-Access-Token: 123abc
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

The `DELETE /keys/:id` route is used to cancel a key that was previously created via Nanobox.

*NOTE*: This route is **not** required if your provider uses passwords for SSH instead of SSH keys, assuming the password to access the server is returned in the order server payload.

###### Path:
`/keys/:id`

###### Method:
DELETE

###### Headers:
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
Auth-Access-Token: 123abc
```

###### Body:
empty

###### Response

**On Success:** Should return an empty body with a status code of `200`

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Order Server

The `/servers` route is how Nanobox submits a request to order a new server. This route **SHOULD NOT** hold open the request until the server is ready. The request should return immediately once the order has been submitted with an identifier that Nanobox can use to followup on the order status.

###### Path:
`/servers`

###### Method:
POST

###### Headers:
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
Auth-Access-Token: 123abc
```

###### Body:

* `name`: Nanobox-generated name used to identify the machine visually as ordered by Nanobox.
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

The `GET /servers/:id` route is used by Nanobox to query state about a previously ordered server. This state is used to inform Nanobox when the server is ready to be provisioned and also how to connect to the server.

###### Path:
`/servers/:id`

###### Method:
GET

###### Headers:
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
Auth-Access-Token: 123abc
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

The `DELETE /servers/:id` route is used to cancel a server that was previously ordered via Nanobox. This route **SHOULD NOT** hold open the request until the server is completely canceled. It should return immediately once the order to cancel has been submitted.

###### Path:
`/servers/:id`

###### Method:
DELETE

###### Headers:
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This will provide the necessary values to authorize the user within this provider.

Example:

```
Auth-Access-Token: 123abc
```

###### Body:
empty

###### Response

**On Success:** Should return an empty body with a status code of `200`

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Reboot Server

The `/servers/:id/reboot` route is used to reboot a server that was previously ordered via Nanobox. This route **SHOULD NOT** hold open the request until the server is completely rebooted. It should return immediately once the order to reboot has been submitted.

###### Path:
`/servers/:id/reboot`

###### Method:
PATCH

###### Headers:
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This provides the necessary values to authorize the user within this provider.

Example:

```
Auth-Access-Token: 123abc
```

###### Body:
empty

###### Response

**On Success:** Should return an empty body with a status code of `200`

**On Failure:** Should return a json body with an `errors` node and a non 2xx status code.

#### Rename Server

The `/servers/:id/rename` route is used to rename a server that was previously ordered via Nanobox. This route **SHOULD NOT** hold open the request until the server is completely renamed. It should return immediately once the order to rename has been submitted.

###### Path:
`/servers/:id/rename`

###### Method:
PATCH

###### Headers:
* `Auth-` prefixed credential field keys and their corresponding values as populated by the user. This provides the necessary values to authorize the user within this provider.

Example:

```
Auth-Access-Token: 123abc
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
