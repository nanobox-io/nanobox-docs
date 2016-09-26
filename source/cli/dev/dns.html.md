---
title: dev dns
---

The `dev dns` command allows you add and remove hostname mappings to your dev environment.

| Subcommand          | Summary                                                    |
|:--------------------|:-----------------------------------------------------------|
| [`add`](#add)       | Adds a hostname map that points to your dev environment    |
| [`rm`](#rm)         | Removes a hostname map that points to your dev environment |
| [`ls`](#ls)         | Lists the registered hostnames for your dev environment    |

## add
The `add` subcommand adds adds a hostname map to your local hosts file that points to the IP of your dev environment.

### add Usage
```bash
# Pattern
$ nanobox dev dns add <hostname>

# Example
$ nanobox dev dns add myapp.dev
```

## rm
The `rm` subcommand removes a hostname map from your local hosts file. The provided hostname much be an *exact match* of a hostname in your local hosts file in order for the removal to be successful.

### rm Usage
```bash
# Pattern
$ nanobox dev dns rm <hostname>

# Example
$ nanobox dev dns rm myapp.dev
```

## ls
The `ls` subcommand lists all the hostnames registered for your dev environment.

### ls Usage
```bash
$ nanobox dev dns ls
```
