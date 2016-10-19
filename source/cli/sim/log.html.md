---
title: sim log
description: The 'sim log' command streams the log output from your local simulated-production app.
---

The `sim log` command streams the log output from your sim app.

### Usage
```bash
$ nanobox sim log
```

### Filtering Logs
To filter your sim app's log stream, you can pipe the stream into `grep` and search with a regular expression.

```bash
# Pattern
$ nanobox sim log | grep <regex>

# Example
$ nanobox sim log | grep 'data.db'
```
