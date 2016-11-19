---
title: tunnel
description: The 'tunnel' command establishes a secure tunnel between your local machine and a data component in your live app.
---

The `tunnel` command establishes a secure tunnel between your local machine and a data component in remote app. It binds to a local port, through which you can connect to your running service.

### Usage
```bash
# Pattern
nanobox tunnel <remote> <component> -p <local-port>

# Example
nanobox tunnel production data.redis -p 6379
```

### Options

#### -p, --port
Specifies the local port through which you'd like to establish the secure tunnel.

### Connecting Through an Established Tunnel
Instructions for connecting to data services through an established tunnel are provided in the [Remotely Managing Data doc](/data-management/remotely-managing-data/#create-a-secure-tunnel).
