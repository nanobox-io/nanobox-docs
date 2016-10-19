---
title: dev log
description: The 'dev log' command streams the log output from your dev app.
---

The `dev log` command streams the log output from your dev app.

### Usage
```bash
$ nanobox dev log
```

### Filtering Logs
To filter your dev app's log stream, you can pipe the stream into `grep` and search with a regular expression.

```bash
# Pattern
$ nanobox dev log | grep <regex>

# Example
$ nanobox dev log | grep 'data.db'
```
