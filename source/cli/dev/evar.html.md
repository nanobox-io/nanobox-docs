---
title: dev evar
---

The `dev evar` command is used to manage environment variables in your dev platform. The following subcommands are available:

| Subcommand          | Summary                                                   |
|:--------------------|:----------------------------------------------------------|
| [`add`](#add)       | Adds one or more key-value pairs as environment variables |
| [`rm`](#rm) | Removes one or more environment variables                 |
| [`ls`](#ls)     | Lists environment variables added to your dev platform    |

## add
The `add` subcommand adds environment variables to your dev platform. You can add a single key-value pair or a comma-delimited list of key-value pairs.

### add Usage
```bash
# Pattern
$ nanobox dev evar add <key>=<value>
$ nanobox dev evar add <key1>=<value1>,<key2>=<value2>

# Examples
$ nanobox dev evar add ENVIRONMENT=local
$ nanobox dev evar add ENVIRONMENT=local,MY_EVAR='This is mine'
```

## rm
The `rm` subcommand removes environment variables from your dev platform. You can remove a single environment variable or a comma-delimited list of environment variables.

### rm Usage
```bash
# Pattern
$ nanobox dev evar rm <key>
$ nanobox dev evar rm <key1>,<key2>

# Examples
$ nanobox dev evar rm ENVIRONMENT
$ nanobox dev evar rm ENVIRONMENT,MY_EVAR
```

## ls
The `ls` subcommand outputs all environment variables registered in your dev platform.

### ls Usage
```bash
$ nanobox dev evar ls
```
