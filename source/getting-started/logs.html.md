---
title: Logs
---

Nanobox pipes all service logs into a unified log stream viewable through the [nanobox CLI's "log" command](/cli/log/).

```shell
$ nanobox log
```

### Including Custom Logs in the Unified Log Stream
If using a framework or CMS that logs to a specific file, you can include that file in the unified log stream by adding it as a `log_watch` in your Boxfile.

A `log_watch` consists of two things:

1. **A Key** - This is prepended to log entries originating from the log_watch'd file.
2. **A Path** - The path to the log file relative to the root of your project.  

#### Log Watches in the Boxfile
```yaml
# Pattern
web1:
  log_watch:
    key: "path/to/log.file"

# Example
web1:
  log_watch:
    app[error]: "app/logs/error.log"
```

#### Things to Know About Custom Logs

###### You Can Only log_watch Individual Files
Log watches only work on individual files. You cannot log_watch a directory.

###### Key Naming Restrictions
Log_watch "keys" can not contain special characters other than brackets `[ ]`. For logs captured by the unified logger, we suggest using the following pattern: `abc123[abc123]`.

###### Keys Must Be Unique
Log_watch keys must be unique. If you have identical keys, only one will be watched and there's no guarantee which one it will be.

###### Log_watch'd Files Are Writable
Any files specified as a log_watch will be given writable permissions. These files do not need to be stored in a [network directory](/getting-started/network-storage/).

