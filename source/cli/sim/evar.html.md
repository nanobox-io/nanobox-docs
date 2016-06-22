---
title: sim evar
---

The `sim evar` command is used to manage environment variables in your sim platform. The following subcommands are available:

| Subcommand          | Summary                                                   |
|:--------------------|:----------------------------------------------------------|
| [`add`](#add)       | Adds one or more key-value pairs as environment variables |
| [`remove`](#remove) | Removes one or more environment variables                 |
| [`list`](#list)     | Lists environment variables added to your VM              |

## add
The `add` subcommand adds environment variables to your sim platform. You can add a single key-value pair or a comma-delimited list of key-value pairs.

### add Usage
```bash
# Pattern
$ nanobox sim evar add <key>:<value>
$ nanobox sim evar add <key1>:<value1>,<key2>:<value2>

# Examples
$ nanobox sim evar add ENVIRONMENT:local
$ nanobox sim evar add ENVIRONMENT:local,MY_EVAR:'This is mine'
```

## remove
The `remove` subcommand removes environment variables from your sim platform. You can remove a single environment variable or a comma-delimited list of environment variables.

### remove Usage
```bash
# Pattern
$ nanobox sim evar remove <key>
$ nanobox sim evar remove <key1>,<key2>

# Examples
$ nanobox sim evar remove ENVIRONMENT
$ nanobox sim evar remove ENVIRONMENT,MY_EVAR
```

## list
The `list` subcommand outputs all environment variables registered in your sim platform.

### list Usage
```bash
$ nanobox sim evar list
```
