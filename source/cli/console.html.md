---
title: console
seo_title: "'nanobox console' Command"
description: The 'console' command opens an interactive console inside a specified live component.
keywords: console, remote access, command line access, ssh access, remote ssh access
---

The `console` command opens an interactive console inside a specified component and context. If no context/remote is provided, the "default" remote will be assumed.

### Usage
```shell
# Pattern
nanobox console [<local | dry-run | {remote-alias}>] <component.id>

#Examples
nanobox console web.site
nanobox console web.site -u root
nanobox console dry-run web.site
```

### Options

#### -u --user
Specifies the user used to create the session when logged into the container/server. The default is user is `gonano`.
