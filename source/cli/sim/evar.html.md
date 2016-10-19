---
title: sim evar
description: The 'sim evar' command is used to manage environment variables in your local simulated-production environment.
---

The `sim evar` command is used to manage environment variables in your sim environment. The following subcommands are available:

| Subcommand    | Summary                                                   |
|:--------------|:----------------------------------------------------------|
| [`add`](#add) | Adds one or more key-value pairs as environment variables |
| [`rm`](#rm)   | Removes one or more environment variables                 |
| [`ls`](#ls)   | Lists environment variables added to your sim environment |

## add
The `add` subcommand adds environment variables to your sim environment. You can add a single key-value pair or a comma-delimited list of key-value pairs.

### add Usage
```bash
# Pattern
$ nanobox sim evar add <key>=<value>
$ nanobox sim evar add <key1>=<value1>,<key2>=<value2>

# Examples
$ nanobox sim evar add ENVIRONMENT=local
$ nanobox sim evar add ENVIRONMENT=local,MY_EVAR='This is mine'
```

## rm
The `rm` subcommand removes environment variables from your sim environment. You can remove a single environment variable or a comma-delimited list of environment variables.

### rm Usage
```bash
# Pattern
$ nanobox sim evar rm <key>
$ nanobox sim evar rm <key1>,<key2>

# Examples
$ nanobox sim evar rm ENVIRONMENT
$ nanobox sim evar rm ENVIRONMENT,MY_EVAR
```

## ls
The `ls` subcommand outputs all environment variables registered in your sim environment.

### ls Usage
```bash
$ nanobox sim evar ls
```
