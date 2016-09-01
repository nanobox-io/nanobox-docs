---
title: sim
---

The `sim` command is used to create and manage a simulated production platform inside your Nanobox VM.

## Subcommands
The `sim` command includes the following subcommands that allow you to interact with and manage your sim platform.

| Sub-Command          | Summary                                                                |
|:---------------------|:-----------------------------------------------------------------------|
| [`start`](start)     | Provisions your sim platform in your Nanobox VM                        |
| [`deploy`](deploy)   | Deploys a generated build package into your sim platform               |
| [`console`](console) | Opens an interactive console inside your sim platform                  |
| [`info`](info)       | Displays information about the running sim app & its components        |
| [`log`](log)         | View and stream sim application logs                                   |
| [`evar`](evar)       | Manages environment variables in your sim platform                     |
| [`dns`](dns)         | Adds and removes hostname mappings to your sim platform                |
| [`stop`](stop)       | Stops the running sim platform                                         |
| [`destroy`](destroy) | Destroys the docker machines associated with the current simulated app |
