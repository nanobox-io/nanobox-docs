---
title: worker
seo_title: Create & Configure Worker Components in the boxfile.yml
description: Worker components are meant for running background processes and do not have a public endpoint. They are configured in your boxfile.yml.
---

Worker components are meant for running background processes and cannot be directly accessed from the external network.

#### Overview of Worker Component Settings in the Boxfile
```yaml
worker.jobs:
  # Start Command
  start: 'ruby worker.rb'

  # Network Storage
  network_dirs:
    data.storage1:
      - path/to/directoryA
      - path/to/directoryB
    data.storage2:
      - path/to/directoryC

  # Writable Dirs
  writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    job[error]: /app/path/to/error.log

  # Cron
  cron:
    - id: flush_cache
      schedule: '0 0 * * *'
      command: 'rm -rf app/cache/*'
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: 'echo i\'m a little teapot'

  # Only provision component locally
  local_only: true
```

## Start Command
The `start` is the command used to start your worker.

#### start
```yaml
worker.jobs:
  start: 'ruby worker.rb'
```

Multiple start commands can be provided. The following formats are accepted:

##### A string

```yaml
worker.jobs:
  start: 'ruby worker.rb'
```

##### An array of strings

```yaml
worker.jobs:
  start:
    - 'ruby worker.rb'
    - 'ruby monitor.rb'
```

##### An array of hashes

```yaml
worker.jobs:
  start:
    jobs: 'ruby worker.rb'
    monitor: 'ruby monitor.rb'
```

When using an array of hashes, the key is appended to the log output of the command, providing helpful context to log output. ***This format is recommended when using multiple start commands***.

## Network Directories
These directories are read/write accessible to all the code component's instances. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. Filepaths should be relative to the root of your repo.

In order to use `network_dirs`, you must have one or more network storage components (unfs, gluster, etc.) in which to store them. In your Boxfile config, specify which storage component the directories should be stored on.

For more details, view the [Network Storage doc](/app-config/network-storage/).

#### network_dirs
```yaml
worker.jobs:
  network_dirs:
    data.storage1:
      - path/to/directoryA
      - path/to/directoryB
    data.storage2:
      - path/to/directoryC
```

**Note:** On deploy, network directories are replaced with network mounts, which connect code instances to your storage component(s). These mounts obscure anything committed to your repo inside of those directories. If there are files inside network directories in your repo, your app will not be able to access them unless you manually upload them into your storage component.

## Writable Directories
These directories are read/write accessible and stored in each instance's local filesystem. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. **Filepaths should be relative to the root of your repo**.

#### writable\_dirs
```yaml
worker.jobs:
  writable_dirs:
    - path/to/dirA
    - path/to/dirB
```

For more details, view the [Writable Directories doc](/app-config/writable-dirs/).

## Custom Logs
Many apps and frameworks log to files stored in the file system. `log_watch`'s allow you to include any entries written to these log files in your unified log stream. More information is available in the [Application Logs doc](/app-config/app-logs/). *You must use the absolute path for the log file. Your app lives in `/app`.*

#### log_watch
```yaml
worker.jobs:
  log_watch:
    key: /app/path/to/log.file
    job[error]: /app/app/logs/error.log
```

## Cron Jobs
Cron is a time-based job scheduler that enables you to schedule jobs (commands) to run periodically at certain times or dates. Cron jobs specified in a component's boxfile config are loaded into the component's crontab. More information is available in the [Cron Jobs](/app-config/cron-jobs/) doc.

#### cron
```yaml
# Pattern
worker.jobs:
  cron:
    - id: unique-identifier
      schedule: "cron schedule"
      command: "command"

# Examples
worker.jobs:
  cron:
    - id: flush_cache
      schedule: '0 0 * * *'
      command: 'rm -rf app/cache/*'
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: 'echo i\'m a little teapot'
```

## Local Only
In some cases, you may only want to provision a component when developing and testing locally. The `local_only` config will provision the component when working locally (local and dry-run), but not when deploying to a live server.

**Note:** Web components are only provisioned and started locally in a [dry-run envrionment](/workflow/deploy-code/#preview-locally).

#### local_only
```
worker.jobs:
  # ...
  local_only: true
```
