---
title: sim
---

The `sim` command is used to create and manage a simulated production platform inside your Nanobox VM.

## Subcommands
The `sim` command includes the following subcommands that allow you to interact with and manage your sim platform.

| Sub-Command          | Summary                                                                |
|:---------------------|:-----------------------------------------------------------------------|
| [`up`](up)           | Shortcut for `build`, `sim start`, `sim deploy`                        |
| [`start`](start)     | Provisions your sim platform in your Nanobox VM                        |
| [`deploy`](deploy)   | Deploys a generated build package into your sim platform               |
| [`info`](info)       | Displays information about the running sim app & its components        |
| [`console`](console) | Opens an interactive console inside your sim platform                  |
| [`evar`](evar)       | Manages environment variables in your sim platform                     |
| [`destroy`](destroy) | Destroys the docker machines associated with the current simulated app |
