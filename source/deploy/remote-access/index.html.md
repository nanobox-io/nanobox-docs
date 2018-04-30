---
title: Remote Access
seo_title: Remote Access to Production Applications
description: There are a few different methods for remotely accessing apps deployed with Nanobox.
keywords: docker remote access, secure remote connection, docker ssh access, docker remote console, docker ssh tunnel
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

![Tunnel Connection Credentials](/assets/images/tunnel-connection-creds.png)

Tunnels are primarily used for managing data components. More information is available in the [Managing Live Data](/data-management/managing-live-data/#create-a-secure-tunnel) and [`tunnel`](/cli/tunnel/) docs.

### Console & Tunnel Security
Whenever servers are accessed remotely using the `console` or `tunnel` commands, there are three levels of authorization each request goes through:

1. Your are an authorized Nanobox user.
2. Your are an authorized team member on the app.
3. Your are authorized to access the component.

If any of these authorizations fail, the remote connection is rejected.

## Direct SSH Access
For direct SSH access to your app's server(s) and container(s) you can copy and save your [app's private SSH key](/live-app-management/remote-access/app-ssh-keys/) on your local machine and pass it into the `ssh` command with the identity\_file argument (`-i`). The IP(s) and user necessary to SSH in are provided under "Admin" > "Security" in your application dashboard. More information is available in the [App SSH keys](/live-app-management/remote-access/app-ssh-keys/) doc.

```bash
ssh root@123.45.67.89 -i /path/to/private_key
```

_**Note:** You will need to set the permissions of your key file to_ `600` _(owner read/write). More info [here](/live-app-management/remote-access/app-ssh-keys/#private-ssh-key-permissions)._

#### Important Note
_With SSH access and the user permissions granted, you have the ability to manipulate your live servers and containers. Please know that any damage or dataloss caused in error or with intent is your responsibility and Nanobox will not be held liable._
