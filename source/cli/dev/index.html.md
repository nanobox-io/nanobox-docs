---
title: dev
---

The `dev` command starts and interacts with your local Nanobox VM. Running `nanobox dev` will start your local Nanobox VM and drop you into an interactive console.

### Usage
```shell
$ nanobox dev
```

## Subcommands
The `dev` command includes the following subcommands that allow you to interact with and manage your local Nanobox VM.

| Sub-Command          | Summary                                                        |
|:---------------------|:---------------------------------------------------------------|
| [`deploy`](deploy)   | Deploys a generated build package into your Nanobox VM         |
| [`info`](info)       | Displays information about your dev app                        |
| [`console`](console) | Opens an interactive console inside your Nanobox VM            |
| [`exec`](exec)       | Runs a command in your Nanobox VM without having to console in |
| [`evar`](evar)       | Manages environment variables in your Nanobox VM               |
| [`destroy`](destroy) | Destroys the Nanobox VM                                        |
