---
title: log
---

The `log` command provides log output for an application. By default, it will show the last 100 lines of the logs.

### Usage
```shell
# Pattern
$ nanobox log [-c] [-s] [-l]

# Example
$ nanobox log -c 100
$ nanobox log -s -l warn
```

### Options

#### -c, --count [count]
Specifies the number of lines to output from the historical log.

#### -s, --stream
Streams logs live

#### -l, --level
Specify the log level - debug, info, warn, error, fatal.  
**Note:** that each level will display logs from all levels below it