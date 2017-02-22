---
title: log
seo_title: nanobox log Command
description: The 'log' command allows you to view and stream logs from app.
keywords: view logs, stream app logs, view app logs, custom application logging
---

The `log` command allows you to view logs from your app. If no context/remote is provided, the "default" remote is assumed.

### Usage
```bash
# Patterns

# Viewing Historical Stats
nanobox log <local | dry-run | remote> -c <count>
# Streaming Logs
nanobox log <local | dry-run | remote> -l

# Examples

# Viewing Historical Stats
nanobox log production -c 1000
# Streaming Logs
nanobox log local -l
```

### Options
#### -a, --app
Specifies the app-name or [remote](/cli/remote/). If no app-name or remote is provided, it uses the "default" remote.

#### -c, --count
Specifies the number of historical log entries to output.

#### -l, --live
Opens a live output stream of your app's logs.
