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
| [`info`](info)       | Displays information about the running app and its components  |
| [`console`](console) | Opens an interactive console inside your Nanobox VM            |
| [`exec`](exec)       | Executes a command inside your local dev app                   |
| [`evar`](evar)       | Manages environment variables in your local dev app            |
| [`destroy`](destroy) | Destroys the docker machines associated with the current app   |
| [`reset`](reset)     | Resets the dev VM registry                                     |
