---
title: Code Services
---

Code services house and run your application's source code. There are two types of code services - webs and workers.

#### Webs
Web services come packaged with a web server of some kind which handles incoming traffic through an external network connection.

#### Workers
Worker services are meant for running background processes and do not connect with the external network.

#### Overview of Code Service Settings in the Boxfile
```yaml
# The service ID defines whether the code service
# is a web or a worker. 'web1' will create a web
# service. 'worker 1' will create a worker service.

web1:
  name: app-server

  # Exec
  exec: "ruby app.rb"

  # Routing (Webs Only)
  routes:
    - 'sub:/path/'
    - '/admin/'
  
  # Network Storage
  network_dirs:
    nfs1:
      - path/to/directoryA
      - path/to/directoryB
    nfs2:
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

## Name
Adding a custom name to your web or worker service is simply a way to identify/differentiate your service.

#### name
```yaml
web1:
  name: public-site
  
worker1:
  name: background-worker
```

## Exec
The `exec` is the command used to start your web or worker.

#### exec
```yaml
web1:
  exec: "ruby worker.rb"
```

## Routing
In some cases, you may want or need multiple web services within a single application. Web service routing in Nanobox is really flexible, allowing you to route based on subdomains, paths, or both. ***Routes are available only to web services***.

### Syntax
A routes can consist of both a subdomain and a path, separated by a colon, `:`. Subdomains aren't required, but a path is. The pattern is as follows:

`'subdomain:path'`

The root domain is detected by Nanobox in both your local environment and in Nanobox Production, however Nanobox production does require you to register custom domains in your dashboard. More information is available in the [Production Using Custom Domains](/production/networking-domains/custom-domains/) doc.

Below are few examples of routes and how they would work. In these examples, assume the domain being used on the app is "mydomain.com".

#### routes
```yaml
web1:
  routes:
    - '/'
# mydomain.com would route to web1

web2:
  routes:
    - '/admin'
# mydomain.com/admin would route to web2

web3:
  routes:
    - 'api:/'
# api.mydomain.com would route to web3

web4:
  routes:
    - 'api:/auth/validate'
# api.mydomain.com/auth/validate would route to web4
```

#### Things to Know
- When using multiple webs, each must at least one route specified.
- Routes must be unique to each web service.


## Network Directories
These directories are read/write accessible to all the code service's instances. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. Filepaths should be relative to the root of your repo.

In order to use `network_dirs`, you must have one or more Network Storage services (NFS) in which to store them. In your Boxfile config, specify which NFS service the directories should be stored on. If no service is specified, we assume nfs1.

For more details, view the [Network Storage doc](/getting-started/network-storage/).

#### network_dirs
```yaml
web1:
  network_dirs:
    nfs1:
      - path/to/directoryA
      - path/to/directoryB
    nfs2:
      - path/to/directoryC
```

**Note:** On deploy, network directories are replaced with network mounts, which connect code instances to your NFS service(s). These mounts obscure anything committed to your repo inside of those directories. If there are files inside network directories in your repo, your app will not be able to access them unless you manually upload them into your NFS service.

## Nonpersistent Writable Directories
These directories are read/write accessible and stored in each instance's local filesystem. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. **Filepaths should be relative to the root of your repo**.

#### nonpersistent\_writable\_dirs
```yaml
web1:
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB
```

## Custom Logs
Many apss and frameworks log to files stored in the file system. `log_watch`'s allow you to include any entries written to these log files in your unified log stream. More information is available in the [Logs doc](/getting-started/logs).

#### log_watch
```yaml
web1:
  log_watch:
    key: "path/to/log.file"
    app[error]: "app/logs/error.log"
```

## Cron Jobs
Cron is a time-based job scheduler that enables you to schedule jobs (commands) to run periodically at certain times or dates. Cronjobs specified in a service's Boxfile config are loaded into the services crontab.

#### cron
```yaml
# Pattern
web1:
  cron:
    - "cron schedule": "command"

# Examples
web1:
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"
```

## Deploy Hooks
Deploy Hooks allow you to "hook" into the deploy process and execute scripts or commands. Each type of hook takes place during a specific stage of the deployment process.

### before_deploy
`before_deploy` hooks run after code has been deployed to new instances, but before traffic is routed to the new instances. These are ideal for things such as migrations.

### before\_deploy\_all
`before_deploy_all` run at the same time as `before_deploy` hooks, but run on all instances inside of a multi-instance service, rather than just one. These really come in handy when modifying [nonpersistent writable directories](/getting-started/nonpersistent-writable-dirs/) on deploy.

### after_deploy
`after_deploy` hooks run after the newly deployed instances have begun handling traffic and the old instances have been decommissioned.

### after\_deploy\_all
`after_deploy_all` run at the same time as `after_deploy` hooks, but run on all instances inside of a multi-instance service, rather than just one. These really come in handy when modifying [nonpersistent writable directories](/getting-started/nonpersistent-writable-dirs/) on deploy.

### deploy\_hook\_timeout
`deploy_hook_timeout` defines a timeout for deploy hooks in seconds.

#### Deploy Hooks in the Boxfile
```yaml
web1:
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

