---
title: Remotely Managing Data
description: Nanobox allows you to securely connect to live data components and manage data using your tool of choice.
---

**Note:** *This doc only pertains to managing data on production servers. For information about managing data in your local dev environment, check out the [Managing Local Data](/local-dev/managing-local-data/) doc.*

Nanobox allows you to securely connect to your live data component(s) and manage them using your tool of choice. You have two options for remotely managing your data.

## Console In
The `nanobox console` command drops you into a native prompt inside of the specified component. With the native prompt, you can use any binary or client installed with your component's [image](/images/).

```bash
# Pattern
$ nanobox console -a <app-name> <component>

# Example
$ nanobox console -a myapp data.postgres
```

For more information on the `console` command, read through the [console](/cli/console/) doc.

## Create a Secure Tunnel
The `nanobox tunnel` command creates a secure tunnel between your local machine and your production data service. It binds to a port on your local machine and forwards any connections to that port to your live server. This allows you to use your local client of choice to managing your production data.

```bash
# Pattern
$ nanobox tunnel -a <app-name> -p <local port> <component>

# Example
$ nanobox tunnel -a myapp -p 5432 data.postgres
```

Tunnel connection credentials are provided in your dashboard under the "Connect" section of the component to which you're trying to tunnel.

![Tunnel Connection Credentials](/src-images/tunnel-connection-creds.png)

For more information about the `tunnel` command, read through the [tunnel](/cli/tunnel/) doc.

### Connecting with a Local Client
With a tunnel open, you can then use your local client of choice to connect to your component. For example, with a tunnel open, you could manage a MySQL database with [Sequel Pro](https://www.sequelpro.com/).

![Tunnel Connection with Sequel Pro](/src-images/remote-manage-data-sequel-pro.png)

### Uploading Files to a Storage Component
Nanobox allows you to provision [network storage components](/app-config/network-storage/) that act as centralized, persistent filestores for your app. Opening a tunnel allows you to manage files in your storage components using tools such as `scp` or SFTP GUIs.

With a tunnel open, you could `scp` files on your local machine to your live storage component.

```bash
$ nanobox tunnel data.storage -p 1234

# In a different terminal
$ scp -P 1235 -r uploads/* nanobox@127.0.0.1:/app/uploads/
```
