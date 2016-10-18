---
title: tunnel
---

The `tunnel` command establishes a secure tunnel between your local machine and a component in your live app. It binds to a local port, through which you can connect to your running service.

### Usage
```bash
# Pattern
$ nanobox tunnel <component> -a <app-name or alias> -p <local-port>

# Example
$ nanobox tunnel data.redis -a prod -p 6379
```

### Options
#### -a, --app
Specifies the app-name or [alias](/cli/link/). If no app-name or alias is provided, it uses the "default" alias.

#### -p, --port
Specifies the local port through which you'd like to establish the secure tunnel.

### Connecting Through an Established Tunnel
Instructions for connecting to data services through an established tunnel are provided in the [Remotely Manageing Data doc](/data-management/remotely-managing-data/#create-a-secure-tunnel).
