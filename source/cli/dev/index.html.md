---
title: dev
---

The `dev` is used to create and manage your local development environment inside your Nanobox VM.

## Subcommands
The `dev` command includes the following subcommands that allow you to interact with and manage your dev platform.

| Sub-Command          | Summary                                                         |
|:---------------------|:----------------------------------------------------------------|
| [`start`](start)     | Provisions your dev platform in your Nanobox VM                 |
| [`deploy`](deploy)   | Deploys a generated build package into your dev platform        |
| [`console`](console) | Opens an interactive console inside your dev platform           |
| [`run`](run)         | Runs component 'start' commands specified in boxfile.yml        |
| [`info`](info)       | Displays information about the running dev app & its components |
| [`log`](log)         | View and stream dev application logs                            |
| [`evar`](evar)       | Manages environment variables in your dev platform              |
| [`dns`](dns)         | Adds and removes hostname mappings to your dev platform         |
| [`stop`](stop)       | Stops the running dev platform                                  |
| [`destroy`](destroy) | Destroys the docker machines associated with the current app    |
