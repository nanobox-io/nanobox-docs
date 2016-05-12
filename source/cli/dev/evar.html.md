---
title: dev evar
---

The `dev evar` command is used to manage environment variables in your local Nanobox VM. It has three subcommands:

| Subcommand          | Summary                                                   |
|:--------------------|:----------------------------------------------------------|
| [`add`](#add)       | Adds one or more key-value pairs as environment variables |
| [`remove`](#remove) | Removes one or more environment variables                 |
| [`list`](#list)     | Lists environment variables added to your VM              |

## add
The `add` subcommand is used to add environment variables to your local Nanobox VM. You can add a single key-value pair, a comma-delimited list of key-value pairs.

### add Usage
```bash
# Pattern
$ nanobox dev evar add <key>:<value>
$ nanobox dev evar add <key1>:<value1>,<key2>:<value2>

# Examples
$ nanobox dev evar add ENVIRONMENT:local
$ nanobox dev evar add ENVIRONMENT:local,MY_EVAR:'This is mine'
```

## remove
The `remove` subcommand is used to remove environment variables from your Nanobox VM. You can remove a single environment variable, or a comma-delimited list of environment variables.

### remove Usage
```bash
# Pattern
$ nanobox dev evar remove <key>
$ nanobox dev evar remove <key1>,<key2>

# Examples
$ nanobox dev evar remove ENVIRONMENT
$ nanobox dev evar remove ENVIRONMENT,MY_EVAR
```

## list
The `list` subcommand outputs all environment variables registered in your Nanobox VM.

### list Usage
```bash
$ nanobox dev evar list
```