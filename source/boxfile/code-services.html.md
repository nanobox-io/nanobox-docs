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
######### WEB SETTINGS #########

web1:
  name: public-site

  # Deploy Hooks
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.rb"
  after_deploy:
    - "scripts/clear_cache.sh"
  
  # Network Storage
  network_dirs:
    storage1:
      - path/to/directoryA
      - path/to/directoryB
    storage2:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB
  
  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"


######## WORKER SETTINGS ########

worker1:
  name: backend-worker

  # Worker Exec
  exec: "ruby worker.rb"

  # Deploy Hooks
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.rb"
  after_deploy:
    - "scripts/clear_cache.sh"
  
  # Network Storage
  network_dirs:
    storage1:
      - path/to/directoryA
      - path/to/directoryB
    storage2:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB
  
  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"
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
**\* Workers Only \*** - The `exec` allows you to specify the command used to start your worker script.

#### exec
```yaml
worker1:
  exec: "ruby worker.rb"
```


## Network Directories
These directories are read/write accessible to all the code service's instances. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. Filepaths should be relative to the root of your repo.

In order to use `network_dirs`, you must have one or more storage services in which to store them. In your Boxfile config, specify which storage service the directories should be stored on. If no storage service is specified, we assume storage1.

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

**Note:** On deploy, network directories are replaced with network mounts, which connect code instances to your storage service(s). These mounts obscure anything committed to your repo inside of those directories. If there are files inside network directories in your repo, your app will not be able to access them unless you manually upload them into your storage service.

## Nonpersistent Writable Directories
These directories are read/write accessible and stored in each instance's local filesystem. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. **Filepaths should be relative to the root of your repo**.

#### nonpersistent\_writable\_dirs
```yaml
web1:
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB
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
Deploy Hooks allow you to "hook" into thedeploy process and execute scripts or commands. Each type of hook takes place during a specific stage of the deployment process.

### before_deploy
`before_deploy` hooks run after code has been deployed to new instances, but before traffic is routed to the new instances. These are ideal for things such as migrations.

### after_deploy
`after_deploy` hooks run after the newly deployed instances have begun handling traffic and the old instances have been decommissioned.

### deploy\_hook\_timeout
`deploy_hook_timeout` defines a timeout for deploy hooks in seconds.

#### Deploy Hooks in the Boxfile
```yaml
web1:
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.php"
  after_deploy:
    - "scripts/clear_cache.sh"
```

