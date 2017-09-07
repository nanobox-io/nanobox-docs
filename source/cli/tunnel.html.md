---
title: tunnel
seo_title: "'nanobox tunnel' Command"
description: The 'tunnel' command establishes a secure tunnel between your local machine and a data component in your live app.
keywords: remote access, manage live database, manage production database, remote access to database, manage live data, manage production data
---

The `tunnel` command establishes a secure tunnel between your local machine and a data component in remote app. It binds to a local port, through which you can connect to your running service.

### Usage
```bash
# Pattern
nanobox tunnel [<remote-alias>] <component.id> [-p <local-port>[:[<remote-port>]]]

# Examples
nanobox tunnel data.db

## Forwards local port 1234 to default component port
nanobox tunnel staging data.redis -p 1234

## Forwards local port 1234 to remote port 1234
nanobox tunnel staging data.redis -p 1234:

## Forwards local port 1234 to remote port 5678 port
nanobox tunnel staging data.redis -p 1234:5678
```

### Options

#### -p, --port
Specifies the local port and remote port through which you'd like to establish the secure tunnel. Connections to the local port are forwarded to the remote-port on your data component.

### Connecting Through an Established Tunnel
Instructions for connecting to data services through an established tunnel are provided in the [Managing Live Data doc](/data-management/managing-live-data/#create-a-secure-tunnel).
