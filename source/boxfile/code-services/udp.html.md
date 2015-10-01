---
title: UDP
---

UDP services handle incoming traffic through an external network connection over the UDP protocol.

#### Overview of Code Service Settings in the Boxfile
```yaml
udp1:
  name: dns-server

  # Exec
  exec: "ruby server.rb"

  # Port Mapping
  ports:
    - 53:3000
  
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
Adding a custom name to your UDP service is simply a way to identify/differentiate your service.

#### name
```yaml
udp1:
  name: dns-server
```

## Exec
The `exec` is the command used to start your UDP process.

#### exec
```yaml
udp1:
  exec: "ruby server.rb"
```

## Port Mapping
Nanobox allows to do define on which ports your UDP service listens. **No default port mapping is provided for UDP services. In order for your UDP service to function properly, you must provide the port mapping.**

#### ports
```yaml
# Pattern
udp1:
  ports:
    - source:destination

# Example
udp1:
  ports:
    - 53:3000
```

**Note:** If a single number is provided, Nanobox assumes the source and desination ports are the same. For example, if `53` is specified, it will be interepreted as `53:53`

## Network Directories
These directories are read/write accessible to all the code service's instances. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. Filepaths should be relative to the root of your repo.

In order to use `network_dirs`, you must have one or more Network Storage services (NFS) in which to store them. In your Boxfile config, specify which NFS service the directories should be stored on. If no service is specified, we assume nfs1.

For more details, view the [Network Storage doc](/getting-started/network-storage/).

#### network_dirs
```yaml
udp1:
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
udp1:
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB
```

## Custom Logs
Many apps and frameworks log to files stored in the file system. `log_watch`'s allow you to include any entries written to these log files in your unified log stream. More information is available in the [Logs doc](/getting-started/logs).

#### log_watch
```yaml
udp1:
  log_watch:
    key: "path/to/log.file"
    app[error]: "app/logs/error.log"
```

## Cron Jobs
Cron is a time-based job scheduler that enables you to schedule jobs (commands) to run periodically at certain times or dates. Cronjobs specified in a service's Boxfile config are loaded into the services crontab.

#### cron
```yaml
# Pattern
udp1:
  cron:
    - "cron schedule": "command"

# Examples
udp1:
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
udp1:
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