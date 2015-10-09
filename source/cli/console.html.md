---
title: console
---

The `console` opens an interactive terminal from inside your app on the nanobox.

### Usage
```shell
# Pattern
$ nanobox console [-t 80:8080]

#Examples
$ nanobox console
$ nanobox console -t 80:8080,3306:1234
```

### Options
#### -t, --tunnel
Creates port forwards for all comma delimeted port:port combos