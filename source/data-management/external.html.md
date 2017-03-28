---
title: External Databases
description: Sometimes you need or want to have your database(s) hosted outside your app. Connecting to external DBs is as simple as connecting to internal ones, though it does take slightly more work.
---

Sometimes you need or want to have your database(s) hosted outside your app:

-   More than one app needs access to the data, and one or more of them are legacy apps
-   You rely on features of a DB Nanobox doesn't (yet) support directly
-   You don't own the database itself, and can't feasibly migrate it
-   Among others...

Connecting to external DBs is as simple as connecting to internal ones, though it does take slightly more work. A couple of different approaches to this exist, depending on how you want to set up your development system, but they both have the same basic concepts.

## Internal During Development

The first approach is to create a database component inside your Nanobox app during development, but not allow it to deploy into dry-run or production. To do this, set up a database component in your Boxfile, as normal, then add the `local_only: true` option to prevent it from deploying:

```yaml
db.external
  image: nanobox/mysql:5.6
  local_only: true
```

This will automatically set the `DATA_EXTERNAL_*` environment variables as normal during development. If your external DB uses a DB name other than `gonano` (this is probably the case) and/or a port other than the default for your DBMS of choice (this happens less often), you'll probably want to manually set environment variables for those as well:

```sh
nanobox evar add local DATA_EXTERNAL_PORT="3306"
nanobox evar add local DATA_EXTERNAL_NAME="gonano"
```

In dry-run and production, these values will all be empty, so you'll have to provide them yourself for deployed apps:

```sh
nanobox evar add DATA_EXTERNAL_HOST="[IP address or hostname]"
nanobox evar add DATA_EXTERNAL_PORT="[port number]"
nanobox evar add DATA_EXTERNAL_USER="[user name]"
nanobox evar add DATA_EXTERNAL_PASS="[password]"
nanobox evar add DATA_EXTERNAL_NAME="[database name]"
```

Of course, you'll need to ensure the database image you specify in your Boxfile matches the external DBMS you'll use in production. An internal MySQL database won't translate well to an external Postgres one.

## Always External

Of course, sometimes you can't create an internal DB component that uses the same DBMS as the external DB, such as with Microsoft® SQL Server®. Other times you'll have other reasons for not wanting to create an internal DB, even during development. You may have guessed this basically consists of setting all the DB environment variables manually in development as well - and you'd be correct:

```sh
nanobox evar add local DATA_EXTERNAL_HOST="[IP address or hostname]"
nanobox evar add local DATA_EXTERNAL_PORT="[port number]"
nanobox evar add local DATA_EXTERNAL_USER="[user name]"
nanobox evar add local DATA_EXTERNAL_PASS="[password]"
nanobox evar add local DATA_EXTERNAL_NAME="[database name]"
```

Setup in production is, of course, identical to the [Internal During Development](#internal-during-development) approach, above.
