---
title: web
seo_title: Create & Configure Web Components in the boxfile.yml
description: Web components are publicly accessible servers and are configured in your boxfile.yml.
---

Web components have ports exposed to the external network making them publicly accessible. These should be used for any public-facing code component.

#### Overview of Web Component Settings in the Boxfile
```yaml
web.site:
  # Start Command
  start: start-command

  # Stop Config
  stop: stop-command
  stop_force: false
  stop_timeout: 60  

  # Current Working Directory
  cwd: directory

  # Routing
  routes:
    - 'sub:/path/'
    - '/admin/'

  # Port Mapping
  ports:
    - tcp:21:3420
    - udp:53:3000

  # Network Storage
  network_dirs:
    data.files:
      - path/to/directoryA
      - path/to/directoryB
    data.unfs:
      - path/to/directoryC

  # Writable Dirs
  writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: /app/path/to/error.log

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
The `start` is the command used to start your web process. **\*\*Required for all web components\*\***

#### start
```yaml
web.site:
  start: rails s
```

Multiple start commands can be provided. The following formats are accepted:

##### A string

```yaml
web.site:
  start: rails s
```

##### An array of strings

```yaml
web.site:
  start:
    - rails s
    - ruby monitor.rb
```

##### An array of hashes

```yaml
web.site:
  start:
    rails: rails s
    monitor: ruby monitor.rb
```

When using an array of hashes, the key is appended to the log output of the command, providing helpful context to log output. ***This format is recommended when using multiple start commands***.

## Stop Configuration
In some cases, a process may need a graceful shutdown process. The following config options allow you to specify how your component's process(es) is | are shut down.

### Stop Command
The `stop` is the command used to stop your web process.

_If you have multiple start commands, you must use an [array of hashes](#an-array-of-hashes) matching each_ `stop` _command to a_ `start` _command. If a_ `start` _command doesn't need a graceful shutdown, you don't need to list a_ `stop` _command for it._

#### stop
```yaml
# Stop command for a single start
web.site:
  start: start-command
  stop: stop-command

# Stop commands for a multiple starts
web.site:
  start:
    process1: start-command-1
    process2: start-command-2
  stop:
    process1: stop-command-1
    process2: stop-command-2
```

### Stop Force
The `stop_force` config tells Nanobox whether or not for force stop your web process after the [`stop_timeout`](#stop-timeout) is reached. **The default is** `false`.

When set to `false`, the server sends a `SIGTERM` to the running process. When set to `true`, the server will send a `SIGKILL` to the running process after the `stop_timeout` is reached.

_If you have multiple stop commands, you must use an array of hashes matching each_ `stop` _command to a_ `stop_force`_. If a_ `stop` _command doesn't need_ `stop_force: true`_, you don't need to list a_ `force_stop` _for it._

#### stop_force
```yaml
# force_stop for a single stop command
web.site:
  start: start-command
  stop: stop-command
  stop_force: true

# force_stops for a multiple stops
web.site:
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
web.site:
  start: start-command
  stop: stop-command
  stop_timeout: 30

# Stop timeouts for a multiple stop commands
web.site:
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
The `cwd` config defines the directory in which your web process' `start` and `stop` commands should run. This is only necessary if your `start`/`stop` commands need to be run in a subdirectory of your project. **The** `cwd` **path is relative to the root of your project.**

_If you have multiple start/stop commands, you must use an [array of hashes](#an-array-of-hashes) matching each to a_ `cwd`_. If a process' start/stop command(s) run in the root of your project, you don't need to list a_ `cwd`.

#### cwd
```yaml
# cwd for a single web process
web.site:
  start: start-command
  cwd: directory

# cwd for a multiple web processes
web.site:
  start:
    process1: start-command-1
    process2: start-command-2
  cwd:
    process1: dirA
    process2: dirB
```

## Routing
In some cases, you may want or need multiple web components within a single application. This allows you to isolate requests to specific subdomain or path in your application to an individual web component.

Web component routing in Nanobox is really flexible, allowing you to route based on subdomains, paths, or both. This feature is fully documented in the [Routing to Web Components](/domains-networking/routing-web-components/) doc, but examples are shown below.


#### routes
```yaml
web.site:
  routes:
    - /
# mydomain.com would route to web.sites

web.admin:
  routes:
    - /admin
# mydomain.com/admin would route to web.admin

web.api:
  routes:
    - api:/
# api.mydomain.com would route to web.api

web.api-auth:
  routes:
    - api:/auth/validate
# api.mydomain.com/auth/validate would route to web.api-auth
```

## Port Mapping
Nanobox allows to do define on which ports your web component listens for connections over tcp and udp protocols. More information is available in the [Port Mapping](/domains-networking/port-mapping/) doc.

**Note:** Your app must listen on port 8080 to connect to the public network over http/https.

#### ports
```yaml
# Pattern
web.site:
  ports:
    - protocol:source:destination

# Examples (Default)
web.site:
  ports:
    - tcp:21:3420
    - udp:53:3000
```

## Network Directories
These directories are read/write accessible to all the web components's instances. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. Filepaths should be relative to the root of your repo.

In order to use `network_dirs`, you must have one or more Network Storage components (unfs, gluster, etc.) in which to store them. In your Boxfile config, specify which storage component the directories should be stored on.

For more details, view the [Network Storage doc](/app-config/network-storage/).

#### network_dirs
```yaml
web.site:
  network_dirs:
    data.files:
      - path/to/directoryA
      - path/to/directoryB
    data.unfs:
      - path/to/directoryC
```

**Note:** On deploy, network directories are replaced with network mounts, which connect code instances to your network storage component(s). These mounts obscure anything committed to your repo inside of those directories. If there are files inside network directories in your repo, your app will not be able to access them unless you manually upload them into your storage component.

## Writable Directories
These directories are read/write accessible and stored in each instance's local filesystem. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. **Filepaths should be relative to the root of your repo**.

#### writable\_dirs
```yaml
web.site:
  writable_dirs:
    - path/to/dirA
    - path/to/dirB
```

For more details, view the [Writable Directories doc](/app-config/writable-dirs/).

## Custom Logs
Many apps and frameworks log to files stored in the file system. `log_watch`'s allow you to include any entries written to these log files in your unified log stream. More information is available in the [Application Logs doc](/app-config/app-logs). *You must use the absolute path for the log file. Your app lives in `/app`.*

#### log_watch
```yaml
web.site:
  log_watch:
    key: /app/path/to/log.file
    app[error]: /app/logs/error.log
```

## Cron Jobs
Cron is a time-based job scheduler that enables you to schedule jobs (commands) to run periodically at certain times or dates. Cron jobs specified in a component's boxfile config are loaded into the component's crontab. More information is available in the [Cron Jobs](/app-config/cron-jobs/) doc.

#### cron
```yaml
# Pattern
web.site:
  cron:
    - id: unique-identifier
      schedule: 'cron schedule'
      command: command

# Examples
web.site:
  cron:
    - id: flush_cache
      schedule: '0 0 * * *'
      command: rm -rf app/cache/*
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: echo i\'m a little teapot
```

## Local Only
In some cases, you may only want to provision a component when developing and testing locally. The `local_only` config will provision the component when working locally (local and dry-run), but not when deploying to a live server.

**Note:** Web components are only provisioned and started locally in a [dry-run envrionment](/workflow/deploy-code/#preview-locally).

#### local_only
```yaml
web.site:
  # ...
  local_only: true
```
