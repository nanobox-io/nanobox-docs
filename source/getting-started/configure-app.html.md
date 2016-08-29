---
title: Configure Your App
---

Getting your app ready to run on Nanobox requires very little. There are just a few things to do to get your project ready.

1. [Create a boxfile.yml](#create-a-boxfile-yml)
2. [Use Environment Variables for Service Connections](#use-environment-variables-for-service-connections)

## Create a boxfile.yml
The `boxfile.yml` is a config file that allows you to custom-build & configure your app's platform to your project's specific needs. It needs to be included in the root of your project.

In many ways, the boxfile acts as a "seed" file for your app. It's where you specify what components your app needs as well as specific configuration options.

#### Sample boxfile.yml
```yaml
code.build:
  engine: ruby
  config:
    ruby_runtime: ruby-2.3

web.site:
  start: 'rails s'

data.db:
  image: nanobox/postgresql
```

The [boxfile documentation](/app-config/boxfile/) covers all the options available in the `boxfile.yml`.

### Engines & Images
Engines and Images define what to use when provisioning your app's web, worker, and/or data services and how they should be configured. Engines define the runtime for **web and worker components**. Images define the service to use in **data components**.

#### Engines & Images in the boxfile.yml
```yaml
code.build:
  engine: ruby

...

data.db:
  image: nanobox/postgresql

data.queue:
  image: nanobox/redis
```

For the deep dive into engines and images, check out the [Engines](/engines) & [Images](/images/) docs.

## Use Environment Variables for Service Connections
When using Nanobox, projects are meant to be both portable and secure. In order for your project to be both, you should use environment variables in your data service connections.

When data components are provisioned, we generate unique connection credentials for the service. If the same codebase is used for two separate apps, the database connection credentials will be different for each each app. This encourages the recommended security practices of not hard-coding connection credentials in your codebase.

### Boxfile & Connection Example
The following `boxfile.yml` specifies a Ruby web service running Ruby on Rails with a Postgres database:

```yaml
code.build:
  engine: ruby

web.site:
  start: 'rails s'

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

By using the environment variables to populate connection credentials, this codebase would work out-of-the-box when deployed to a Nanobox app. It also keeps you have having to commit sensitive information to your codebase. For more information about environment variables, view the [Environment Variables documentation](/app-config/environment-variables/).
