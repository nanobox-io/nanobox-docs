---
title: Remotely Managing Data
---

**Note:** *This doc only pertains to managing data on production servers. For information about managing data in your local dev environment, check out the [Managing Local Data](/local-dev/managing-local-data/) doc.*

Nanobox gives allows you to securely connect to your live data component(s) and manage them using your tool of choice. You have two options for remotely managing your data.

## Console In
The `nanobox console` command drops you into a native prompt inside of the specified component. With the native prompt, you can use any binary or client installed with your component's [image](/eninges-images/#images).

```bash
# Pattern
$ nanobox console -a <app-name> <component>

# Example
$ nanobox console -a myapp data.postgres
```

For more information on the `console` command, read through the [console](/cli/commands/console/) doc.

## Create a Secure Tunnel
The `nanobox tunnel` command creates a secure tunnel between your local machine and your production data service. This allows you to use your local client of choice, if managing data from a command line isn't your cup of tea.

```bash
# Pattern
$ nanobox tunnel -a <app-name> -p <local port> <component>

# Example
$ nanobox tunnel -a myapp -p 5432 data.postgres 
```

The command will output the credentials necessary to connect to your data service through the secure tunnel. Any local client or GUI can be used to connect through the tunnel.

For more information about the `tunnel` command, read through the [tunnel](/cli/commands/tunnel/) doc.
