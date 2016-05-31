---
title: Project Setup
---

Getting your app ready to run on Nanobox requires very little. There are just a few things to do to get your project ready.

Getting a project ready for Nanobox requires very little. There are just a few things to do to get your project ready.

## Create a boxfile.yml
The `boxfile.yml` defines what [engine and images](engines-images) to use when provisioning your app's web, worker, and/or data services and how they should be configured. It should be included in the root of your project. For the deep dive into the boxfile, read through the [boxfile documentation](/app-config/boxfile/).

## Use Environment Variables for Service Connections
When using Nanobox, projects are meant to be both portable and secure. In order for your project to be both, you should use environment variables in your data service connections.

When data components are provisioned, we generate unique connection credentials for the service. If the same codebase is used for two separate apps, the database connection credentials will be different for each each app. This encourages the recommended security practices of not hard-coding connection credentials in your codebase.

### Boxfile & Connection Example
The following `boxfile.yml` specifies a Ruby web service running Ruby on Rails with a Postgres database:

```yaml
code.build:
  engine: nanobox-io/ruby

web.site:
  start: 'rails -s'

data.db:
  image: nanobox/postgresql
```

The following `config/database.yml` uses the [auto-generated environment variables](/app-config/environment-variables/#auto-generated-environment-variables) to populate the connection credentials.

```yaml
production:
  adapter: postgresql
  encoding: unicode
  database: <%= ENV['DATA_DB_NAME'] %>
  pool: 5
  username: <%= ENV['DATA_DB_USER'] %>
  password: <%= ENV['DATA_DB_PASS'] %>
```

By using the environment variables to populate connection credentials, this codebase would work out-of-the-box when creating any Nanobox app. It also keeps you have having to commit sensitive information to your codebase. For more information about environment variables, view the [Environment Variables documentation](/app-config/environment-variables/).
