---
title: dns
description: The 'dns' command lets you manage DNS alias and hostname mappings to local apps.
---

The `dns` command allows you add and remove hostname mappings to your local apps. It modifies
your local hosts file and does require administrative privileges.

| Subcommand          | Summary                                              |
|:--------------------|:-----------------------------------------------------|
| [`add`](#add)       | Adds a hostname map that points to your local app    |
| [`rm`](#rm)         | Removes a hostname map that points to your local app |
| [`ls`](#ls)         | Lists the registered hostnames for your local app    |

## add
The `add` subcommand adds adds a hostname map to your local hosts file that points to the IP of your running app.

### add Usage
```bash
# Pattern
nanobox dns add <local | dry-run> <hostname>

# Example
nanobox dns add local myapp.dev
```

## rm
The `rm` subcommand removes a hostname map from your local hosts file. The provided hostname much be an *exact match* of a hostname in your local hosts file in order for the removal to be successful.

### rm Usage
```bash
# Pattern
nanobox dns rm <hostname>

# Example
nanobox dns rm myapp.dev
```

## ls
The `ls` subcommand lists all the hostnames registered for your local app.

### ls Usage
```bash
nanobox dns ls <local | dry-run>
```
