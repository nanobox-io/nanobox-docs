---
title: sim dns
---

The `sim dns` command allows you add and remove hostname mappings to your sim platform.

| Subcommand          | Summary                                                   |
|:--------------------|:----------------------------------------------------------|
| [`add`](#add)       | Adds a hostname map that points to your sim platform      |
| [`rm`](#rm) | Removes a hostname map that points to your sim platform   |

## add
The `add` subcommand adds adds a hostname map to your local hosts file that points to the IP of your sim platform.

### add Usage
```bash
# Pattern
$ nanobox sim dns add <hostname>

# Example
$ nanobox sim dns add myapp.sim
```

## rm
The `rm` subcommand removes a hostname map from your local hosts file.

### rm Usage
```bash
# Pattern
$ nanobox sim dns rm <hostname>

# Example
$ nanobox sim dns rm myapp.sim
```
