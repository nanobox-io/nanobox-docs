---
title: link
description: The 'link' command manages links between your local and production apps.
---

The `link` command manages links between your local and production apps. Links also allow you to create aliases for apps.

A single codebase can be linked to multiple apps, but an alias must be given for each app. If no alias is provided, it assumes the "default" alias.

### Usage
```bash
nanobox link <app-name> -a <alias>
```

### Options
####-a, --alias
Specifies the app alias. If no alias is provided, it assumes the "default" alias.


## Subcommands
The `link` command included subcommands to help you manage linked apps and aliases.

| Subcommand          | Summary                                     |
|:--------------------|:--------------------------------------------|
| [`add`](#add)       | Adds a link between a dev & production app  |
| [`rm`](#rm)         | Removes the alias and link to an app        |
| [`ls`](#ls)         | Lists all linked apps and aliases           |

### add
The `link add` command adds a new link between your local codebase & a production app. *This command is the same as running just* `nanobox link`.

#### Usage
```bash
# Pattern
$ nanobox link add <app-name> -a <alias>

# Example
$ nanobox link add my-app-prod -a production
```

### rm
The `link rm` command removes the alias and link to an app.

#### Usage
```bash
# Pattern
$ nanobox link rm <alias>

# Example
$ nanobox link rm prod
```


### list
The `link ls` command lists all linked apps and aliases.

#### Usage
```bash
$ nanobox link ls
```
