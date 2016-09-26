---
title: sim
---

The `sim` command is used to create and manage a simulated production environment inside your Nanobox container.

## Subcommands
The `sim` command includes the following subcommands that allow you to interact with and manage your sim environment.

| Sub-Command          | Summary                                                                |
|:---------------------|:-----------------------------------------------------------------------|
| [`start`](start)     | Starts a sim environment in your Nanobox container                     |
| [`deploy`](deploy)   | Deploys a built runtime and/or compiled code into your sim environment |
| [`console`](console) | Opens an interactive console inside your sim environment               |
| [`info`](info)       | Displays information about the running sim app & its components        |
| [`log`](log)         | View and stream sim application logs                                   |
| [`evar`](evar)       | Manages environment variables in your sim environment                  |
| [`dns`](dns)         | Adds and removes hostname mappings to your sim environment             |
| [`stop`](stop)       | Stops the running sim environment                                      |
| [`destroy`](destroy) | Destroys the docker machines associated with the current simulated app |
