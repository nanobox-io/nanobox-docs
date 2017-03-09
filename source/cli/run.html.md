---
title: run
seo_title: 'nanobox run' Command
description: The 'run' command runs all the web and worker start commands specified in your boxfile.yml.
keywords: start local environment, start virtual machine, run VM, run virtual machine, run my app locally, development environment
---

The `run` is the primary command used for running your app locally. By running the `run` command, Nanobox will provision a local environment using the codebase in the current working directory. Once provisioned, it will drop you into an interactive console inside the isolated environment.

You can also pass a command into the `run` command. This will run the specified command inside your running local environment and stream output to your console.

### Usage
```bash
# Pattern
nanobox run <command>

# Example
nanobox run rails s
```
