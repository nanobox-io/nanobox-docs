---
title: dev
---

The `dev` is used to create and manage your local development environment inside your Nanobox container.

## Subcommands
The `dev` command includes the following subcommands that allow you to interact with and manage your dev environment.

| Sub-Command          | Summary                                                                |
|:---------------------|:-----------------------------------------------------------------------|
| [`start`](start)     | Starts a dev environment in your Nanobox container                     |
| [`deploy`](deploy)   | Deploys a built runtime and/or compiled code into your dev environment |
| [`console`](console) | Opens an interactive console inside your dev environment               |
| [`run`](run)         | Runs component 'start' commands specified in boxfile.yml               |
| [`info`](info)       | Displays information about the running dev app & its components        |
| [`log`](log)         | View and stream dev application logs                                   |
| [`evar`](evar)       | Manages environment variables in your dev environment                  |
| [`dns`](dns)         | Adds and removes hostname mappings to your dev environment             |
| [`stop`](stop)       | Stops the running dev environment                                      |
| [`destroy`](destroy) | Destroys the docker machines associated with the current app           |
