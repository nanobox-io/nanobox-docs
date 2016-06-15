---
title: link
---

The `link` command allows you to manage links between your local and production apps. Links also allow you to create aliases for apps.

A single codebase can be linked to multiple apps, but an alias must be given for each app. If no alias is provided, it assumes the "default" alias.

## Subcommands
The `link` command included subcommands to help you manage linked apps and aliases.

| Subcommand          | Summary                                     |
|:--------------------|:--------------------------------------------|
| [`add`](#add)       | Adds a link between a dev & production app  |
| [`remove`](#remove) | Removes the alias and link to an app        |
| [`list`](#list)     | Lists all linked apps and aliases           |

### add
The `link add` command adds a new link between a dev & production app.

### Usage
```bash
# Pattern
$ nanobox link add <app-name> <alias>

# Example
$ nanobox link add my-app-prod production
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


### list
The `link list` command lists all linked apps and aliases.

#### Usage
```bash
$ nanobox link list
```
