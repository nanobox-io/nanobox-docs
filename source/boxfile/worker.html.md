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
  start: ruby worker.rb

  # Stop Config
  stop: stop-command
  stop_force: false
  stop_timeout: 30

  # Current Working Directory
  cwd: directory

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
      command: rm -rf app/cache/*
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: echo i\'m a little teapot

  # Only provision component locally
  local_only: true
```

## Start Command
The `start` is the command used to start your worker. **\*\*Required for all worker components\*\*** If you need to create a worker component which doesn't have a long-running process to start, here, you can use `sleep 365d` here.

#### start
```yaml
worker.jobs:
  start: ruby worker.rb
```

Multiple start commands can be provided. The following formats are accepted:

##### A string

```yaml
worker.jobs:
  start: ruby worker.rb
```

##### An array of strings

```yaml
worker.jobs:
  start:
    - ruby worker.rb
    - ruby monitor.rb
```

##### An array of hashes

```yaml
worker.jobs:
  start:
    jobs: ruby worker.rb
    monitor: ruby monitor.rb
```

When using an array of hashes, the key is appended to the log output of the command, providing helpful context to log output. ***This format is recommended when using multiple start commands***.

## Stop Configuration
In some cases, a process may need a graceful shutdown process. The following config options allow you to specify how your component's process(es) is | are shut down.

### Stop Command
The `stop` is the command used to stop your worker process.

_If you have multiple start commands, you must use an [array of hashes](#an-array-of-hashes) matching each_ `stop` _command to a_ `start` _command. If a_ `start` _command doesn't need a graceful shutdown, you don't need to list a_ `stop` _command for it._

#### stop
```yaml
# Stop command for a single start
worker.jobs:
  start: start-command
  stop: stop-command

# Stop commands for a multiple starts
worker.jobs:
  start:
    process1: start-command-1
    process2: start-command-2
  stop:
    process1: stop-command-1
    process2: stop-command-2
```

### Stop Force
The `stop_force` config tells Nanobox whether or not for force stop your worker process after the [`stop_timeout`](#stop-timeout) is reached. **The default is** `false`.

When set to `false`, the server sends a `SIGTERM` to the running process. When set to `true`, the server will send a `SIGKILL` to the running process after the `stop_timeout` is reached.

_If you have multiple stop commands, you must use an array of hashes matching each_ `stop` _command to a_ `stop_force`_. If a_ `stop` _command doesn't need_ `stop_force: true`_, you don't need to list a_ `force_stop` _for it._

#### stop_force
```yaml
# force_stop for a single stop command
worker.jobs:
  start: start-command
  stop: stop-command
  stop_force: true

# force_stops for a multiple stops
worker.jobs:
  start:
    process1: start-command-1
    process2: start-command-2
  stop:
    process1: stop-command-1
    process2: stop-command-2
  stop_force:
    process1: true
    process2: true
```

### Stop Timeout
The `stop_timeout` config defines the how long (in seconds) Nanobox should wait for the stop command to complete before sending either a `SIGTERM` or `SIGKILL` signal (as defined by the [`stop_force` option](#stop-force)). **The Default is 7 seconds**.

_If you have multiple stop commands, you must use an array of hashes matching each_ `stop` _command to a_ `stop_timeout`_. If a_ `stop` _command can use the default timeout of 7 seconds, you don't need to list a_ `stop_timeout` _for it._

**Note:** Having a high `stop-timeout` will affect the time it takes for procedures that require stopping processes (such as deploys and repairs) to complete as it defines the amount of time Nanobox will wait for old processes to shut down.

#### stop_timeout
```yaml
# Stop command for a single stop
worker.jobs:
  start: start-command
  stop: stop-command
  stop_timeout: 30

# Stop timeouts for a multiple stop commands
worker.jobs:
  start:
    process1: start-command-1
    process2: start-command-2
  stop:
    process1: stop-command-1
    process2: stop-command-2
  stop_timeout:
    process1: 30
    process2: 60
```

## Current Working Directory
The `cwd` config defines the directory in which your worker process' `start` and `stop` commands should run. This is only necessary if your `start`/`stop` commands need to be run in a subdirectory of your project. **The** `cwd` **path is relative to the root of your project.**

_If you have multiple start/stop commands, you must use an [array of hashes](#an-array-of-hashes) matching each to a_ `cwd`_. If a process' start/stop command(s) run in the root of your project, you don't need to list a_ `cwd`.

#### cwd
```yaml
# cwd for a single worker process
worker.jobs:
  start: start-command
  cwd: directory

# cwd for a multiple worker processes
worker.jobs:
  start:
    process1: start-command-1
    process2: start-command-2
  cwd:
    process1: dirA
    process2: dirB
```

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

**Note:** Worker components are only provisioned and started locally in a [dry-run envrionment](/workflow/deploy-code/#preview-locally).

#### local_only
```yaml
worker.jobs:
  # ...
  local_only: true
```
