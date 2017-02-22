---
title: tunnel
seo_title: nanobox tunnel Command
description: The 'tunnel' command establishes a secure tunnel between your local machine and a data component in your live app.
keywords: remote access, manage live database, manage production database, remote access to database, manage live data, manage production data
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
Instructions for connecting to data services through an established tunnel are provided in the [Managing Live Data doc](/data-management/managing-live-data/#create-a-secure-tunnel).
