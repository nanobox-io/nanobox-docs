---
title: sim dns
---

The `sim dns` command allows you add and remove hostname mappings to your sim platform.

| Subcommand          | Summary                                                   |
|:--------------------|:----------------------------------------------------------|
| [`add`](#add)       | Adds a hostname map that points to your sim platform      |
| [`remove`](#remove) | Removes a hostname map that points to your sim platform   |

## add
The `add` subcommand adds adds a hostname map to your local hosts file that points to the IP of your sim platform.

### add Usage
```bash
# Pattern
$ nanobox sim dns add <hostname>

# Example
$ nanobox sim dns add myapp.sim
```

## remove
The `remove` subcommand removes a hostname map from your local hosts file.

### remove Usage
```bash
# Pattern
$ nanobox sim dns remove <hostname>

# Example
$ nanobox sim dns remove myapp.sim
```
