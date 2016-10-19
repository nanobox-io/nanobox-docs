---
title: log
description: The 'log' command allows you to view logs from your production app.
---

The `log` command allows you to view logs from your production app.

### Usage
```yaml
# Patterns

# Viewing Historical Stats
$ nanobox log -a <app-name or alias> -c <count>
# Streaming Logs
$ nanobox log -a <app-name or alias> -l

# Examples

# Viewing Historical Stats
$ nanobox log -a prod -c 1000
# Streaming Logs
$ nanobox log -a prod -l
```

### Options
#### -a, --app
Specifies the app-name or [alias](/cli/link/). If no app-name or alias is provided, it uses the "default" alias.

#### -c, --count
Specifies the number of historical log entries to output.

#### -l, --live
Opens a live output stream of your app's logs.
