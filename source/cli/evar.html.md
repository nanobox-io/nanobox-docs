---
title: evar
seo_title: "'nanobox evar' Command"
description: The 'evar' command manages environment variables in local and production apps.
keywords: environment variables, evars, manage environment variables, manage evars
---

The `evar` command is used to manage environment variables in your live app. It has three subcommands:

| Subcommand      | Summary                                                   |
|:----------------|:----------------------------------------------------------|
| [`add`](#add)   | Adds one or more key-value pairs as environment variables |
| [`load`](#load) | Adds environment variables from a file                    |
| [`rm`](#rm)     | Removes one or more environment variables                 |
| [`ls`](#ls)     | Lists environment variables added to your app             |

## add
The `add` subcommand is used to add environment variables to your app. You can add a single key-value pair, a comma or space-delimited list of key-value pairs.

### add Usage
```bash
# Pattern
nanobox evar add <local | dry-run | remote> <key>=<value>
nanobox evar add <local | dry-run | remote> <key1>=<value1>,<key2>=<value2>

# Examples
nanobox evar add remote ENVIRONMENT=local
nanobox evar add local ENVIRONMENT=local,MY_EVAR='This is mine'
```

## load
The `load` subcommand is used to add environment variables to your app from a file. You can add a single file, or a space-delimited list of files/filepaths.

### load Usage
```bash
# Pattern
nanobox evar load <local | dry-run | remote> path/to/file

# Examples
nanobox evar load remote config/evars
nanobox evar load local config/evars1 config/evars2 .env
```

**Note:** _For file paths with spaces in directory names, wrap the path in quotes or escape the space(s)._

#### Environment Variable Files
Loaded files should consist of key value pairs. Values containing spaces or special characters should be wrapped in double quotes `""`. Below is an example file showing supported key-value formats.

```bash
key=value
key="value"
key="this
is
a
multiline
value"

key="
another multiline
value surrounded
by whitespace
"

key="yes, even spaces and = are allowed as values"
export key=value
export key="you're welcome ;)"
```

**Note:** _Variable_ `export`_s and whitespace between key-value pairs don't matter. They'll get stripped out._

## rm
The `rm` subcommand is used to remove environment variables from app. You can remove a single environment variable, or a comma-delimited list of environment variables.

### rm Usage
```bash
# Pattern
nanobox evar rm <local | dry-run | remote> <key>
nanobox evar rm <local | dry-run | remote> <key1>,<key2>

# Examples
nanobox evar rm live ENVIRONMENT
nanobox evar rm local ENVIRONMENT,MY_EVAR
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
