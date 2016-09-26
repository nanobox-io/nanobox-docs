---
title: evar
---

The `evar` command is used to manage environment variables in your live app. It has three subcommands:

| Subcommand          | Summary                                                           |
|:--------------------|:------------------------------------------------------------------|
| [`add`](#add)       | Adds one or more key-value pairs as environment variables         |
| [`remove`](#remove) | Removes one or more environment variables                         |
| [`list`](#list)     | Lists environment variables added to your production environment  |

### Options
#### -a, --app
Specifies the app-name or [alias](/cli/link/). If none is provided, it assumes the "default" alias.

## add
The `add` subcommand is used to add environment variables to your live app. You can add a single key-value pair, a comma-delimited list of key-value pairs.

### add Usage
```bash
# Pattern
$ nanobox evar add -a <app-name or alias> <key>=<value>
$ nanobox evar add -a <app-name or alias> <key1>=<value1>,<key2>=<value2>

# Examples
$ nanobox evar add -a myapp ENVIRONMENT=local
$ nanobox evar add -a myapp ENVIRONMENT=local,MY_EVAR='This is mine'
```

## remove
The `remove` subcommand is used to remove environment variables from your live app. You can remove a single environment variable, or a comma-delimited list of environment variables.

### remove Usage
```bash
# Pattern
$ nanobox evar remove -a <app-name or alias> <key>
$ nanobox evar remove -a <app-name or alias> <key1>,<key2>

# Examples
$ nanobox evar remove -a myapp ENVIRONMENT
$ nanobox evar remove -a myapp ENVIRONMENT,MY_EVAR
```

## list
The `list` subcommand outputs all environment variables registered in your live app.

### list Usage
```bash
# Pattern
$ nanobox evar list -a <app-name or alias>

# Example
$ nanobox evar list -a myapp
```
