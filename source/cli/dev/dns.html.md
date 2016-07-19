---
title: dev dns
---

The `dev dns` command allows you add and remove hostname mappings to your dev platform.

| Subcommand          | Summary                                                   |
|:--------------------|:----------------------------------------------------------|
| [`add`](#add)       | Adds a hostname map that points to your dev platform      |
| [`remove`](#remove) | Removes a hostname map that points to your dev platform   |

## add
The `add` subcommand adds adds a hostname map to your local hosts file that points to the IP of your dev platform.

### add Usage
```bash
# Pattern
$ nanobox dev dns add <hostname>

# Example
$ nanobox dev dns add myapp.dev
```

## remove
The `remove` subcommand removes a hostname map from your local hosts file.

### remove Usage
```bash
# Pattern
$ nanobox dev dns remove <hostname>

# Example
$ nanobox dev dns remove myapp.dev
```
