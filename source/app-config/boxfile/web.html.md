---
title: Web Components
---

Web components have ports exposed to the external network making them publicly accessible. These should be used for any public-facing code component.

#### Overview of Web Component Settings in the Boxfile
```yaml
web:
  # Start Command
  start: "ruby app.rb"

  # Routing
  routes:
    - 'sub:/path/'
    - '/admin/'

  # Port Mapping
  ports:
    - 80:8080
    - 443:8080

  # Network Storage
  network_dirs:
    data.files:
      - path/to/directoryA
      - path/to/directoryB
    data.unfs:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: "path/to/error.log"

  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"

  # Deploy Hooks
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.rb"
  before_deploy_all:
    - "scripts/cache_prime.rb"
  after_deploy:
    - "scripts/clear_cache.rb"
  after_deploy_all:
    - "scripts/local_cache_prime.rb"
```

## Start Command
The `start` is the command used to start your web process. **\*\*Required for all web components\*\***

#### start
```yaml
web:
  start: "ruby app.rb"
```

## Routing
In some cases, you may want or need multiple web components within a single application. Web component routing in Nanobox is really flexible, allowing you to route based on subdomains, paths, or both.

### Syntax
A routes can consist of both a subdomain and a path, separated by a colon, `:`. Subdomains aren't required, but a path is. The pattern is as follows:

`'subdomain:path'`

The root domain is detected by Nanobox in both your local environment and in production, however to use custom domains in production, they must be registered in your dashboard. More information is available in the [Using Custom Domains](/networking-domains/custom-domains/) doc.

Below are few examples of routes and how they would work. In these examples, assume the domain being used on the app is "mydomain.com".

#### routes
```yaml
web.site:
  routes:
    - '/'
# mydomain.com would route to web.sites

web.admin:
  routes:
    - '/admin'
# mydomain.com/admin would route to web.admin

web.api:
  routes:
    - 'api:/'
# api.mydomain.com would route to web.api

web.api-auth:
  routes:
    - 'api:/auth/validate'
# api.mydomain.com/auth/validate would route to web.api-auth
```

#### Things to Know
- When using multiple webs, each must have at least one route specified.
- Routes must be unique to each web component.
- Routes only apply to connections over http and https.

## Port Mapping
Nanobox allows to do define on which ports your web component listens.

#### ports
```yaml
# Pattern
web:
  ports:
    - source:destination

# Examples (Default)
web:
  ports:
    - 80:8080
    - 443:8080
```

**Note:** If a single number is provided, Nanobox assumes the source and destination ports are the same. For example, if `80` is specified, it will be interpreted as `80:80`

## Network Directories
These directories are read/write accessible to all the web components's instances. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. Filepaths should be relative to the root of your repo.

In order to use `network_dirs`, you must have one or more Network Storage components (unfs, gluster, etc.) in which to store them. In your Boxfile config, specify which storage component the directories should be stored on.

For more details, view the [Network Storage doc](/app-config/network-storage/).

#### network_dirs
```yaml
web:
  network_dirs:
    data.files:
      - path/to/directoryA
      - path/to/directoryB
    data.unfs:
      - path/to/directoryC
```

**Note:** On deploy, network directories are replaced with network mounts, which connect code instances to your network storage component(s). These mounts obscure anything committed to your repo inside of those directories. If there are files inside network directories in your repo, your app will not be able to access them unless you manually upload them into your storage component.

## Nonpersistent Writable Directories
These directories are read/write accessible and stored in each instance's local filesystem. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. **Filepaths should be relative to the root of your repo**.

#### nonpersistent\_writable\_dirs
```yaml
web:
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB
```

## Custom Logs
Many apps and frameworks log to files stored in the file system. `log_watch`'s allow you to include any entries written to these log files in your unified log stream. More information is available in the [Logs doc](/getting-started/logs).

#### log_watch
```yaml
web:
  log_watch:
    key: "path/to/log.file"
    app[error]: "app/logs/error.log"
```

## Cron Jobs
Cron is a time-based job scheduler that enables you to schedule jobs (commands) to run periodically at certain times or dates. Cronjobs specified in a component's Boxfile config are loaded into the component's crontab.

#### cron
```yaml
# Pattern
web:
  cron:
    - "cron schedule": "command"

# Examples
web:
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"
```

## Deploy Hooks
Deploy Hooks allow you to "hook" into the deploy process and execute scripts or commands. Each type of hook takes place during a specific stage of the deployment process.

### before_deploy
`before_deploy` hooks run after code has been deployed to new instances, but before traffic is routed to the new instances. These are ideal for things such as migrations.

### before\_deploy\_all
`before_deploy_all` run at the same time as `before_deploy` hooks, but run on all instances inside of a multi-instance component, rather than just one. These really come in handy when modifying [nonpersistent writable directories](/getting-started/nonpersistent-writable-dirs/) on deploy.

### after_deploy
`after_deploy` hooks run after the newly deployed instances have begun handling traffic and the old instances have been decommissioned.

### after\_deploy\_all
`after_deploy_all` run at the same time as `after_deploy` hooks, but run on all instances inside of a multi-instance component, rather than just one. These really come in handy when modifying [nonpersistent writable directories](/getting-started/nonpersistent-writable-dirs/) on deploy.

### deploy\_hook\_timeout
`deploy_hook_timeout` defines a timeout for deploy hooks in seconds.

#### Deploy Hooks in the Boxfile
```yaml
web:
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.rb"
  before_deploy_all:
    - "scripts/cache_prime.rb"
  after_deploy:
    - "scripts/clear_cache.rb"
  after_deploy_all:
    - "scripts/local_cache_prime.rb"
```
