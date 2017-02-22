---
title: evar
seo_title: nanobox evar Command
description: The 'evar' command manages environment variables in local and production apps.
keywords: environment variables, evars, manage environment variables, manage evars
---

The `evar` command is used to manage environment variables in your live app. It has three subcommands:

| Subcommand    | Summary                                                   |
|:--------------|:----------------------------------------------------------|
| [`add`](#add) | Adds one or more key-value pairs as environment variables |
| [`rm`](#rm)   | Removes one or more environment variables                 |
| [`ls`](#ls)   | Lists environment variables added to your app             |

## add
The `add` subcommand is used to add environment variables to your app. You can add a single key-value pair, a comma-delimited list of key-value pairs.

### add Usage
```bash
# Pattern
nanobox evar add <local | dry-run | remote> <key>=<value>
nanobox evar add -a <local | dry-run | remote> <key1>=<value1>,<key2>=<value2>

# Examples
nanobox evar add live ENVIRONMENT=local
nanobox evar add local ENVIRONMENT=local,MY_EVAR='This is mine'
```

## rm
The `rm` subcommand is used to remove environment variables from app. You can remove a single environment variable, or a comma-delimited list of environment variables.

### rm Usage
```bash
# Pattern
nanobox evar rm <local | dry-run | remote> <key>
nanobox evar rm <local | dry-run | remote> <key1>,<key2>

# Examples
nanobox evar rm -a live ENVIRONMENT
nanobox evar rm -a local ENVIRONMENT,MY_EVAR
```

## ls
The `ls` subcommand outputs all environment variables registered in your app.

### ls Usage
```bash
# Pattern
nanobox evar ls <local | dry-run | remote>

# Example
nanobox evar ls local
```
