---
title: web
---

Web components have ports exposed to the external network making them publicly accessible. These should be used for any public-facing code component.

#### Overview of Web Component Settings in the Boxfile
```yaml
web.site:
  # Start Command
  start: "ruby app.rb"

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

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: "path/to/error.log"

  # Cron
  cron:
    - id: flush_cache
      schedule: '0 0 * * *'
      command: 'rm -rf app/cache/*'
    - id: echo_msg
      schedule: "*/3 */2 1-3 2,6,7 2"
      command: "echo 'im a little teapot'"

```

## Start Command
The `start` is the command used to start your web process. **\*\*Required for all web components\*\***

#### start
```yaml
web.site:
  start: "ruby app.rb"
```

## Routing
In some cases, you may want or need multiple web components within a single application. Web component routing in Nanobox is really flexible, allowing you to route based on subdomains, paths, or both.

### Syntax
A route can consist of both a subdomain and a path, separated by a colon, `:`. Subdomains aren't required, but a path is. The pattern is as follows:

`'subdomain:path'`

The root domain is detected by Nanobox in both your local environment and in production, however to use custom domains in production, they must be registered in your dashboard. More information is available in the [Using Custom Domains](/domains-networking/custom-domains/) doc.

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
Nanobox allows to do define on which ports your web component listens for connections over tcp and udp protocols.

#### HTTP/HTTPS Ports
Custom http/https ports cannot be specified. All http requests connect on port 80 and all https requests on port 443. Both forward to your app on port 8080. **Your app must listen on port 8080 to connect to the public network over http/https.**

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

**Note:** If a single number is provided, Nanobox assumes the source and destination ports are the same. For example, if `80` is specified, it will be interpreted as `80:80`

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

## Nonpersistent Writable Directories
These directories are read/write accessible and stored in each instance's local filesystem. These directories are mounted at runtime, and should not be created at the same location as a directory containing source code in your repo. **Filepaths should be relative to the root of your repo**.

#### nonpersistent\_writable\_dirs
```yaml
web.site:
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB
```

For more details, view the [Nonpersistent Writable Directories doc](/app-config/nonpersistent-writable-dirs/).

## Custom Logs
Many apps and frameworks log to files stored in the file system. `log_watch`'s allow you to include any entries written to these log files in your unified log stream. More information is available in the [Application Logs doc](/app-config/app-logs).

#### log_watch
```yaml
web.site:
  log_watch:
    key: "path/to/log.file"
    app[error]: "app/logs/error.log"
```

## Cron Jobs
Cron is a time-based job scheduler that enables you to schedule jobs (commands) to run periodically at certain times or dates. Cron jobs specified in a component's boxfile config are loaded into the component's crontab. More information is available in the [Cron Jobs](/app-config/cron-jobs/) doc.

#### cron
```yaml
# Pattern
web.site:
  cron:
    - id: unique-identifier
      schedule: "cron schedule"
      command: "command"

# Examples
web.site:
  cron:
    - id: flush_cache
      schedule: '0 0 * * *'
      command: 'rm -rf app/cache/*'
    - id: echo_msg
      schedule: "*/3 */2 1-3 2,6,7 2"
      command: "echo 'im a little teapot'"
```
