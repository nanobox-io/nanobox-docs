---
title: link
---

The `link` command links a local code directory with a live Nanobox app. It also allows you to specify an alias for apps.

A single codebase can be linked to multiple apps, but an alias must be given for each app. If no alias is provided, it assumes the "default" alias.

### Usage
```bash
# Pattern
$ nanobox link <app-name> <alias>

# Example
$ nanobox link my-app-prod production
```

## Subcommands
The `link` command included subcommands to help you manage linked apps and aliases.

| Subcommand          | Summary                                     |
|:--------------------|:--------------------------------------------|
| [`list`](#list)     | Lists all linked apps and aliases           |
| [`update`](#update) | Updates the app to which an alias is linked |
| [`rename`](#rename) | Renames a currently existing alias          |
| [`remove`](#remove) | Removes the alias and link to an app        |

### list
The `link list` command lists all linked apps and aliases.

#### Usage
```bash
$ nanobox link list
```

### update
The `link update` command updates the app to which an alias is linked.

#### Usage
```bash
# Pattern
$ nanobox link update <alias> <app-name>

# Example
$ nanobox link update production myapp-v2
```

### rename
The link `rename` command renames a currently existing alias.

#### Usage
```bash
# Pattern
$ nanobox link rename <current-alias> <new-alias>

# Example
$ nanobox link rename production prod
```

### remove
The `link remove` command removes the alias and link to an app.

#### Usage
```bash
# Pattern
$ nanobox link remove <alias>

# Example
$ nanobox link remove prod
```
