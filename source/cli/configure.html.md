---
title: configure
seo_title: "'nanobox configure' Command"
description: The 'configure' command walks prompts that modify your local Nanobox configuration.
keywords: set VM disk, configure nanobox, virtual disk space, VM memory, virtual machine memory, VM cpu, virtual machine cpu, set config options, show configuration
---

The `configure` command walks through a series of question prompts that modify your local Nanobox configuration. This command is automatically run when attempt to run your first nanobox command.

*Configurable options are outlined in the [Configure Nanobox doc](/local-config/configure-nanobox/).*

### Aliases
configure, config

### Usage
```bash
nanobox configure
nanobox config
```

| Subcommand               | Summary                             |
|:-------------------------|:------------------------------------|
| [`set`](#set)            | Sets a configuration key            |
| [`get`](#get)            | Gets a value from the configuration |
| [`show`, `ls`](#show-ls) | Shows the full configuration        |

## set
The `set` subcommand is used to set a specific config setting.

### set Usage
```bash
# Pattern
nanobox config set <config-key> <config-value>

# Examples
nanobox config set provider docker-machine
nanobox config set mount-type netfs
nanobox config set disk 15360
```

## get
The `get` subcommand is used to retrieve the value of a config setting.

### get Usage
```bash
# Pattern
nanobox config get <config-key>

# Examples
nanobox config get provider
nanobox config get mount-type
nanobox config get disk
```

## show, ls
The `show` or `ls` subcommand is used to view all config settings.

### show, ls Usage
```bash
# Pattern
nanobox config show
nanobox config ls
```
