---
title: External Databases
seo_title: Using External Databases with Nanobox
description: Sometimes you need or want to have your database(s) hosted outside your app. Connecting to external DBs is as simple as connecting to internal ones, though it does take slightly more work.
keywords: external db, remote db, shared db, shared database, remote database, external database, self-hosted database, amazon rds
---

Sometimes you need or want to have your database(s) hosted outside your app:

-   More than one app needs access to the data, and one or more of them are legacy apps
-   You rely on features of a database Nanobox doesn't (yet) support directly
-   You don't own the database itself, and can't feasibly migrate it
-   Among others...

Connecting to external DBs is as simple as connecting to internal ones, though it does take slightly more work. A couple of different approaches exist depending on how you want to set up your development system, but they both have the same basic concepts:

1. Use environment variables to populate the connection credentials.
2. Make sure those environment variables are available in each environment (local, [dry-run](/workflow/deploy-code/#preview-locally), and production).

## Prepare Your Codebase with Environment Variables
To ensure your app is portable across environments and to keep sensitive connection credentials from being hard-coded, update your database connection configuration to use environment variables for all connection credentials.

```javascript
// Node.js/MySQL Example

mysql: {
  client: 'mysql',
  connection: {
    host: process.env.DATA_EXTERNAL_HOST,
    port: process.env.DATA_EXTERNAL_PORT,
    user: process.env.DATA_EXTERNAL_USER,
    password: process.env.DATA_EXTERNAL_PASS,
    database: process.env.DATA_EXTERNAL_NAME
  }
}
```

## Approach 1: Internal Database During Development

The first approach is to create a database component inside your Nanobox app during development, but not allow it to deploy into dry-run or production.

To do this, set up a database component in your `boxfile.yml`, as normal, then add the `local_only: true` option to prevent it from deploying:

```yaml
data.external:
  image: nanobox/mysql:5.6
  local_only: true
```

This will automatically set the `DATA_EXTERNAL_HOST`, `DATA_EXTERNAL_USER`, and `DATA_EXTERNAL_PASS` environment variables as normal during development. You will need to manually set environment variables for the name and port:

```sh
nanobox evar add local DATA_EXTERNAL_NAME=gonano
nanobox evar add local DATA_EXTERNAL_PORT=3306
```

### Add Environment Variables to Your Production App
In dry-run and production, these values will all be empty (since the database is configured to deploy only in local), so you'll have to provide them for deployed app:

```sh
# add environment variables to a production app
# for dry-run, include the `dry-run` context

nanobox evar add DATA_EXTERNAL_HOST="[IP address or hostname]"
nanobox evar add DATA_EXTERNAL_PORT="[port number]"
nanobox evar add DATA_EXTERNAL_USER="[user name]"
nanobox evar add DATA_EXTERNAL_PASS="[password]"
nanobox evar add DATA_EXTERNAL_NAME="[database name]"
```

*__Note:__ These variables can all be added in a single command by passing a comma-separated list of key-value pairs. They're shown as separate commands above for the sake of clarity.*

You'll need to ensure the database image you specify in your `boxfile.yml` matches the external DBMS you'll use in production. An internal MySQL database won't translate well to an external Postgres one.

## Approach 2: Always Use External Database

Sometimes you can't create an internal DB component that uses the same DBMS as the external DB, such as with Microsoft® SQL Server®. Other times you'll have other reasons for not wanting to create an internal DB, even during development.

This basically consists of setting all the DB environment variables manually in all environments.

#### Add Environment Variables to Local App
```sh
nanobox evar add local DATA_EXTERNAL_HOST="[IP address or hostname]"
nanobox evar add local DATA_EXTERNAL_PORT="[port number]"
nanobox evar add local DATA_EXTERNAL_USER="[user name]"
nanobox evar add local DATA_EXTERNAL_PASS="[password]"
nanobox evar add local DATA_EXTERNAL_NAME="[database name]"
```

#### Add Environment Variables to Production App
```sh
nanobox evar add DATA_EXTERNAL_HOST="[IP address or hostname]"
nanobox evar add DATA_EXTERNAL_PORT="[port number]"
nanobox evar add DATA_EXTERNAL_USER="[user name]"
nanobox evar add DATA_EXTERNAL_PASS="[password]"
nanobox evar add DATA_EXTERNAL_NAME="[database name]"
```

*__Note:__ These variables can all be added in a single command by passing a comma-separated list of key-value pairs. They're shown as separate commands above for the sake of clarity.*
