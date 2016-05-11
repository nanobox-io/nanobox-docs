---
title: CLI Commands
---

All interaction with Nanobox happens through the `nanobox` CLI. This section of docs walks through each of the CLI commands, their functionality, and options associated with each. Below is a list with a quick summary of each command:

| Command                                | Summary                                                             |
| :------------------------------------- | :------------------------------------------------------------------ |
| [`dev`](/cli/dev/)                     | Starts the nanobox, provisions app, & opens an interactive terminal |
| [`link`](/cli/link/)                   | Links a local code directory to a production app                    |
| [`build`](/cli/build/)                 | Builds your code and prepares a deployable package                  |
| [`deploy`](/cli/deploy)                | Deploys your build package to your production app                   |
| [`info`](/cli/info/)                   | Displays information about the nanobox and your app                 |
| [`console`](/cli/console/)             | Opens an interactive terminal from inside your app on the nanobox   |
| [`exec`](/cli/exec/)                   | Runs a command from inside your app on the nanobox                  |
| [`help`](/cli/help/)                   | Displays CLI help                                                   |
| [`update`](/cli/update/)               | Updates the CLI to the newest available version                     |
| [`update-images`](/cli/update-images/) | Updates the nanobox docker images                                   |
| [`login`](/cli/login/)                 | Authenticates local Nanobox client with a Nanobox account.          |
| [`logout`](/cli/logout/)               | Removes current user authentication from the Nanobox client         |
| [`uninstall`](/cli/uninstall/)         | Uninstalls the nanobox client                                       |

### Subcommands
The Nanobox CLI include subcommands - commands each with their own subset of commands related to a specific task or workflow.

| Subcommand               | Summary                                                       |
| :----------------------- | :------------------------------------------------------------ |
| [`engine`](/cli/engine/) | Provides tools to aid in the creation & management of engines |

### Global Command Options
#### --background
Stops your Nanobox VM from auto-suspending. Only takes affect on commands that require a running VM.

#### -v, --verbose
Increases command output from 'info' to 'debug'.

#### -f, --force
Forces the command to run without any confirmation. **Use responsibly!**

#### --version
Displays the current version of the Nanobox CLI.
