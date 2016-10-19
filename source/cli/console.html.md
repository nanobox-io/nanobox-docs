---
title: console
description: The 'console' command opens an interactive console inside a specified live component.
---

The `console` command opens an interactive console inside a specified live component.

### Usage
```shell
# Pattern
$ nanobox console <component> -a <app-name or alias>

#Example
$ nanobox console web.site -a app-name
```

### Options

#### -a, --app
Specifies the app-name or [alias](/cli/link/). If none is provided, it assumes the "default" alias.
