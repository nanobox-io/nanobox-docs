---
title: CLI Commands
---

All interaction with Nanobox happens through the `nanobox` CLI. This section of docs walks through each of the CLI commands, their functionality, and options associated with each. Below is a list with a quick summary of each command:

| Command                                | Summary                                                                  |
| :------------------------------------- | :----------------------------------------------------------------------- |
| [`dev`](/cli/dev/)                     | Provisions, starts, and interacts your local dev VM                      |
| [`link`](/cli/link/)                   | Links a local code directory to a production app                         |
| [`build`](/cli/build/)                 | Builds your code and prepares a deployable package                       |
| [`deploy`](/cli/deploy)                | Deploys your build package to your production app                        |
| [`console`](/cli/console/)             | Opens an interactive terminal from inside a component in your live app   |
| [`tunnel`](/cli/tunnel/)               | Establishes a secure tunnel from your local machine to a running service |
| [`evar`](/cli/evar/)                   | Used to manage environment variables in your live app                    |
| [`help`](/cli/help/)                   | Displays CLI help                                                        |
| [`login`](/cli/login/)                 | Authenticates your local Nanobox client with a Nanobox account.          |
| [`logout`](/cli/logout/)               | Removes your API token from your local Nanobox client                    |
| [`update`](/cli/update/)               | Updates the CLI to the newest available version                          |
| [`uninstall`](/cli/uninstall/)         | Uninstalls the Nanobox CLI                                               |


### Global Command Options
#### --background
Stops your Nanobox VM from auto-suspending. Only takes affect on commands that require a running VM.

#### -v, --verbose
Increases command output from 'info' to 'debug'.

#### -f, --force
Forces the command to run without any confirmation. **Use responsibly!**

#### --version
Displays the current version of the Nanobox CLI.
