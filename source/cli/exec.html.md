---
title: exec
---

The `exec` command runs a command on an application's service.

### Usage
```shell
# Pattern
$ nanobox exec <COMMAND>
$ nanobox exec -t local-port:remote-port,local-port:remote-port <COMMAND>

# Examples
$ nanobox exec ls -la
$ nanobox exec -t 6379:4237 redis-cli flushall
```

### Options
#### -t --tunnel
Establishes a port forward for each comma delimited local:remote port combo