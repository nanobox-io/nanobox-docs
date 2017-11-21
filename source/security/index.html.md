---
title: Security Overview
seo_title: Docker Security with Nanobox
description: Nanobox locks down your Docker-based production infrastructures with strict security practices and protocols.
keywords: nanobox security, docker security, secure docker, secure data, network security
---

It goes without saying – security is of the utmost importance in your production infrastructure. Nanobox was built with strict security protocols in place. The following measures have been put in place to reduce your app's attack plane.

## The Initial Bootstrap
Each and every server provisioned through Nanobox uses a simple Ubuntu bootstrap script (feel free to [view the source](https://github.com/nanobox-io/bootstrap/blob/master/ubuntu.sh)). This bootstrap installs and configures Docker and the Nanobox agent as well as a brutal, default-deny firewall via [iptables](https://en.wikipedia.org/wiki/Iptables) and a [custom overlay network](#custom-overlay-network). It also ensures that the core software is up-to-date.

Once a host is bootstrapped, you essentially have a machine that is fully locked-down, running only Docker, the Nanobox agent, and the virtual network. At this point, not even the other machines within the same network can talk to the machine.

## Updates via the Dashboard
After the initial bootstrap, the only thing that can communicate with the machine is nanobox.io. Nanobox injects a set of security credentials during the bootstrap which it uses to communicate with the Nanobox agent. Nanobox sends commands to the agent over a secure socket layer, using credentials that only it knows about. Only authorized requests from nanobox.io and the Nanobox CLI (which go through nanobox.io) can interact with your servers' internals directly.

From the dashboard, you can [run an update process](https://docs.nanobox.io/live-app-management/server-component-admin/#update) that will connect to each hosts' agents and ensure the agent and installed and software is up-to-date.

## Firewall "Hole-Punching"
After new servers come online and are bootstrapped, Nanobox sends a series of commands to each agent in each machine (if you're using a multi-node infrastructure), informing them to punch an explicit hole in the firewall through which they can communicate. Once they're able to communicate, all machines add each other to the virtual network, which allows containers on each host to communicate. That process repeats each time a new host comes online or gets removed.

## Custom Overlay Network
Part of the bootstrap installs a custom, [virtual network driver](https://github.com/nanopack/red). This essentially provides a fully-encapsulated layer 2 network over a peer-to-peer cluster of all of the host nodes of an app.

## Nanobox-Specific Images & Packages
In order to reduce the attack plane, Nanobox provides slimmed-down versions of Docker images with extra or unnecessary packages stripped out. We also provide [custom-built packages](http://packages.nanobox.io/2017/11/base/index.html) to:

1. Ensure the binaries are safe.
2. Eliminate unnecessary cruft, reducing the attack plane.

## Non-Privileged Users
To reduce potential harm, your app and all processes run with a non-privileged user.

## Read-Only by Default
To eliminate the potential of uploading and running malicious files, all app's filesystems are read-only by default. You can enable writable permissions with [Network Directories](/app-config/network-storage/) and [Writable Directories](/app-config/writable-dirs/), but these should be used sparingly.

## Access Control & Remote Access
Access control for all services as well as server console access is managed by Nanobox. Every access-request must to be authorized through Nanobox before access is allowed.

Remote access is handled through the Nanobox CLI. There are two ways to connect remotely:

### nanobox console
[`nanobox console`](/cli/console/) drops you into a remote console inside a specific container. This acts like a traditional SSH console but doesn't actually use SSH.

```bash
# console into a host server on DigitalOcean
nanobox console do.1

# console into a specific component in your app
nanobox console web.main
```

### nanobox tunnel
[`nanobox tunnel`](/cli/tunnel/) establishes a secure port forward from your localhost to your live container. This is mainly used to manage production data with a local client.

```bash
# tunnel into a database component
nanobox tunnel data.db
```

### Provider Access
When deploying apps with Nanobox, they are deployed to your server(s). You own them and still have all the access granted by your hosting provider. Any means for remote access provided by your service provider are still available. Because of this, it is a good idea to familiarize yourself with your provider's security policies and protocols.
