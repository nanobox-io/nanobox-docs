---
title: Application Logs
description: Nanobox lets you pipe custom application logs into your app's log stream using the 'log_watch' config option.
---

Most application logs are piped to either stdout or stderr, which automatically get streamed to your app's [unified log stream](/production-management/app-logs/). In some cases, your app may log to a file or files. Rather than having to remotely connect to your app to view these logs, Nanobox lets you pipe them into your unified log stream through the use of the `log_watch` boxfile config.

## log_watch
A log_watch conists of the following:

- **Key** - This is prepended to log entries originating from the log_watch'd file. Keys must be unique.  
- **Filepath** - The path to the actual log file.

#### log_watch
```yaml
# Pattern
web.site:
  log_watch:
    key: 'path/to/log.file'

# Example
web.site:
  log_watch:
    admin[error]: 'app/logs/admin_error.log'
    api[auth]: 'app/logs/api_auth.log'
```

### You Can Only log_watch Individual Files
Log watches only work on individual files. You cannot log_watch a directory.

### Log Filepaths Must Be Relative to the Root of Your Repo
When specifying the path to your log file, the filepath should be relative to the root of your app's repo.

### Key Naming Restrictions
Log_watch "keys" cannot contain special characters other than brackets []. For logs captured by Nanobox, we use the following pattern: abc124[abc123], but you're not bound to this.

### Keys Must Be Unique
Log_watch keys must be unique. If you have identical keys, only one will be watched and there's no guarantee which one it will be.

### Log_watch'd Files Are Writable
Any files specified as a log_watch will be given writable permissions. These files do not need to be stored in a network directory.

### Logs Aren't Actually Written to log_watch'd Files
While log_watch'd files have writable permissions, the files themselves don't actually get updated. Log_watch'd files are symlinked to a centralized file that is piped into the unified log stream. If you remotely connect to your component and inspect log_watch'd files, you'll see the contents of the centralized log file.
