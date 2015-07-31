---
title: Command Line Interface
---

All interaction with Nanobox happens through the `nanobox` CLI. This section of docs walks through each of the CLI commands, their functionality, and options associated with each. Below is a list with a quick summary of each command:

| Command                        | Summary                                                          |
| :----------------------------- | :--------------------------------------------------------------- |
| [`bootstrap`](/cli/bootstrap/) | Runs an engine's bootstrap script - downloads code & launches VM |
| [`build`](/cli/build/)         | Rebuilds/Compiles your project                                   |
| [`console`](/cli/console/)     | Opens an interactive terminal inside your app's context          |
| [`create`](/cli/create/)       | Runs 'nanobox init' then boots the nanobox VM                    |
| [`deploy`](/cli/deploy/)       | Deploys to the nanobox VM                                        |
| [`destroy`](/cli/destroy/)     | Destroys the nanobox VM                                          |
| [`exec`](/cli/exec/)           | Runs a command in your apps context                              |
| [`fetch`](/cli/fetch/)         | Fetches an engine from nanobox.io                                |
| [`halt`](/cli/halt/)           | Halts the nanobox VM                                             |
| [`help`](/cli/help/)           | Displays CLI help                                                |
| [`init`](/cli/init/)           | Creates a nanobox flavored Vagrantfile                           |
| [`log`](/cli/log/)             | Shows/Streams nanobox logs                                       |
| [`new`](/cli/new/)             | Generates a new engine                                           |
| [`publish`](/cli/publish/)     | Publishes an engine to nanobox.io                                |
| [`reload`](/cli/reload/)       | Reloads the nanobox VM                                           |
| [`resume`](/cli/resume/)       | Resumes the halted/suspended nanobox VM                          |
| [`status`](/cli/status/)       | Displays all current nanobox VM's                                |
| [`suspend`](/cli/suspend/)     | Suspends the nanobox VM                                          |
| [`tunnel`](/cli/tunnel/)       | Displays port forward information for your apps running services |
| [`up`](/cli/up/)               | Runs 'nanobox create' and then 'nanobox deploy'                  |
| [`update`](/cli/update/)       | Updates the CLI to the newest available version                  |
| [`upgrade`](/cli/upgrade/)     | Updates the nanobox docker images                                |
| [`watch`](/cli/watch/)         | Watches your app for file changes                                |