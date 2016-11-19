---
title: Remote Access
description: There are a few different methods for remotely accessing apps deployed with Nanobox.
---

There are a few different methods for remotely connecting to components and services in apps managed with Nanobox. Which method you use depends on the type of component to which you're connecting as well as what you're trying to do.

## Nanobox Console
The `nanobox console` command allows you to securely access your production servers from your local machine. It drops you into an interactive console inside a component or even a specific component node.

```bash
# Pattern
nanobox console <component>

# Examples
nanobox console web.site

# console into a specific node in web.site
nanobox console web.site.1.3
```

The console is primarily used for managing and troubleshooting web and worker components. More information about the `console` command is available in the [`console` documentation](/cli/console/).

## Nanobox Tunnel
The `nanobox tunnel` command creates a secure tunnel between your local machine and a production server. This tunnel allows you to use local clients to remotely manage production services. When creating a tunnel, Nanobox binds to and listens on a local port. Connections to that port are forwarded to your remote server.

```bash
nanobox tunnel data.db
```

Once the tunnel is open, you can use the tunnel connection credentials provided in your dashboard under the "Connect" section of each component.

![Tunnel Connection Credentials](/src-images/tunnel-connection-creds.png)

Tunnels are primarily used for managing data components. More information is available in the [Remotely Managing Data](/data-management/remotely-managing-data/#create-a-secure-tunnel) and [`tunnel`](/cli/tunnel/) docs.

## Security
Whenever servers are accessed remotely or tunnels created, there are three levels of authorization each request goes through:

1. Your are an authorized Nanobox user.
2. Your are an authorized team member on the app.
3. Your are authorized to access the component.

If any of these authorizations fail, the remote connection is rejected.
