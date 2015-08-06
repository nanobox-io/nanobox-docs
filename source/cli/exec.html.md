---
title: exec
---

The `exec` command Runs a command from inside your app on the nanobox VM.

### Usage
```shell
# Pattern
$ nanobox exec nanobox exec [-t 80:8080] <command>

# Examples
$ nanobox exec ls -la
$ nanobox exec -t 6379:4237 redis-cli flushall
```

### Options
#### -t --tunnel
Creates port forwards for all comma delimeted port:port combos