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

# Viewing Historical Logs
nanobox log <dry-run | {remote-alias}> -n <number>
# Streaming Logs
nanobox log <dry-run | {remote-alias}> -f

# Examples

# Viewing Historical Stats
nanobox log production -n 1000
# Streaming Logs
nanobox log dry-run -f
```

### Options
#### -n, --number
Specifies the number of historical log entries to output.

#### -f, --follow
Opens a live output stream of your app's logs and follows them.
