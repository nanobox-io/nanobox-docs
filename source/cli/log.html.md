---
title: log
---

The `log` command provides log output for an application.

### Usage
```shell
# Pattern
$ pagoda log [-c count] [-l]

# Example
$ nanobox log -c 100
$ nanobox log -l
```

### Options

#### -c, --count [count]
The number of lines of the log you wish to view.

#### -l, --live
Enable live stream

#### --level
Specify the log level - emergency, alert, critical, error, warning, notice, informational, debug, log

**Note:** If count or live flags are not passed, it will output the last 100 lines of the log.