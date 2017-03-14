---
title: remote
seo_title: "'nanobox remote' Command"
description: The 'remote' command manages connections to remote, live applications.
keywords: connect to app, add remote, deploy to app, connect to app, link to app, deploy to remote
---

The `remote` command manages remotes between your local codebase and remote, live apps.

A single codebase can have multiple remotes and each remote has a name. If no name is provided, "default" is assumed.


## Subcommands
The `remote` command included subcommands to help you manage remoteed apps and aliases.

| Subcommand          | Summary                               |
|:--------------------|:--------------------------------------|
| [`add`](#add)       | Adds a remote                         |
| [`rm`](#rm)         | Removes the remote                    |
| [`ls`](#ls)         | Lists all remotes and associated apps |

### add
The `remote add` command adds a new remote.

#### Usage
```bash
# Pattern
nanobox remote add <app-name> <remote-name>

# Example
nanobox remote add my-app-prod production
```

### rm
The `remote rm` command removes the specified remote.

#### Usage
```bash
# Pattern
nanobox remote rm <remote-name>

# Example
nanobox remote rm production
```


### list
The `remote ls` command lists all remotes and associated apps.

#### Usage
```bash
nanobox remote ls
```
