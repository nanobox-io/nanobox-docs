---
title: Add App Components
---

With Nanobox, every app consists of one or more "components" - supporting services that make your app work. These include things such as webservers, databases, caches, etc.

There are three different types of components:

#### web
A code component with publicly accessible ports. Webs use the engine/runtime defined in `code.build` in your boxfile.yml.

#### worker
A backend code component with no publicly accessible ports. Workers use the engine/runtime defined in `code.build` in your boxfile.yml.

#### data
A component that houses data of some sort. These include databases, caches, persistent storage, etc.

## Add Components in your boxfile.yml
Components are added to your app by including them in your boxfile.yml. Each component needs an ID comprised of the component type, and a unique identifier (uid) that is completely up to you.

```yaml
# Component ID Pattern
type.uid

# Component ID Examples
web.site
worker.jobs
data.db
```

### Web & Worker Components
When working in dev, web and worker components are not provisioned, but will be when deployed to a live app. The minimum required information for webs and workers is a `start` command. These tell Nanobox how to start the service.

```yaml
web.site:
  start: 'rails s'

worker.sidekiq:
  start: 'bundle exec sidekiq'
```

### Data Components
Data components house data of some sort. These include databases, caches, persistent storage, etc. Each data component needs an [image](/images) - a docker image used to provision the service. You can view the [official Nanobox images on Docker Hub](https://hub.docker.com/r/nanobox/) as well as guides for each in the [Nanobox Service Guides](https://guides.nanobox.io/#services).

```yaml
data.postgres:
  image: nanobox/postgresql

data.storage:
  image: nanbox/unfs
```

### Build & Deploy to Provision Data Components
In order to provision your data components, you must build a new runtime and deploy it into your dev environment.

```bash
# build an updated runtime
$ nanobox build

# deploy the runtime into dev
# and provision data components
$ nanobox dev deploy
```

## Use Environment Variables to Connect to Data Services
When using Nanobox, projects are meant to be both portable and secure. In order for your project to be both, you should use [environment variables](/app-config/environment-variables/) in your data service connections.

### Auto-Generated Environment Variables
When data components are provisioned with Nanobox, we generate unique connection credentials for the service along with environment variables for each. The keys for the variables a based on the component ID in your boxfile.yml

#### Example
With these two data components in your `boxfile.yml`, the following environment variables would be generated:

```yaml
data.db:
  image: nanobox/postgresql

data.bojangles:
  image: nanobox/redis
```

```conf
DATA_DB_HOST = 192.168.0.1
DATA_DB_USER = nanobox
DATA_DB_PASS = pAssWoRD

DATA_BOJANGLES_HOST = 192.168.0.2
```

What environment variables are required and generated depends on the image you're using.

#### Ports & Database Names
Data component ports will always be the default port used for that service (MySQL is 3306, PostgreSQL is 5432, etc.). For database connections that require a database name, it will always be `gonano`.

#### Connection Example
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
