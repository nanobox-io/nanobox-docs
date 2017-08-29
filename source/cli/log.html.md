---
title: log
seo_title: "'nanobox log' Command"
description: The 'log' command allows you to view and stream logs from app.
keywords: view logs, stream app logs, view app logs, custom application logging
---

The `log` command allows you to view logs from your app. If no context/remote is provided, the "default" remote is assumed.

### Usage
```bash
# Patterns

# Streaming Logs
nanobox log [<dry-run | {remote-alias}>]
nanobox log [<dry-run | {remote-alias}>] -f

# Viewing Historical Logs
nanobox log [<dry-run | {remote-alias}>] -n <number>

# Examples

# Streaming Logs
nanobox log
nanobox log staging -f

# Viewing Historical Logs
nanobox log production -n 1000
```

### Options
#### -n, --number
Specifies the number of historical log entries to output.

#### -f, --follow
Opens a live output stream of your app's logs and follows them.
