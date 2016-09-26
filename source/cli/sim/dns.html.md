---
title: sim dns
---

The `sim dns` command allows you add and remove hostname mappings to your sim environment.

| Subcommand    | Summary                                                    |
|:--------------|:-----------------------------------------------------------|
| [`add`](#add) | Adds a hostname map that points to your sim environment    |
| [`rm`](#rm)   | Removes a hostname map that points to your sim environment |
| [`ls`](#ls)   | Lists the registered hostnames for your sim environment    |

## add
The `add` subcommand adds adds a hostname map to your local hosts file that points to the IP of your sim environment.

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

## ls
The `ls` subcommand lists all the hostnames registered for your sim environment.

### ls Usage
```bash
$ nanobox sim dns ls
```
