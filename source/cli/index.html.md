---
title: CLI Commands
description: All interaction with Nanobox happens through the Nanobox CLI. This doc outlines each of the CLI commands, their functionality, and available options.
---

All interaction with Nanobox happens through the Nanobox CLI. This section of docs walks through each of the CLI commands, their functionality, and options associated with each. Below is a list with a quick summary of each command:

| Command                                | Summary                                                                  |
| :------------------------------------- | :----------------------------------------------------------------------- |
| [`dev`](/cli/dev/)                     | Creates & manages a dev environment inside your Nanobox container        |
| [`sim`](/cli/sim/)                     | Creates & manages a simulated production environment inside Nanobox      |
| [`link`](/cli/link/)                   | Manages links between dev & production apps                              |
| [`build`](/cli/build/)                 | Builds your app's runtime                                                |
| [`compile`](/cli/compile/)             | Compiles your code into a deployable code package                        |
| [`deploy`](/cli/deploy)                | Deploys your generated build package to a production app                 |
| [`console`](/cli/console/)             | Opens an interactive terminal from inside a component in your live app   |
| [`tunnel`](/cli/tunnel/)               | Establishes a secure tunnel from your local machine to a running service |
| [`evar`](/cli/evar/)                   | Manages environment variables on your production environment             |
| [`login`](/cli/login/)                 | Authenticates your Nanobox client with your nanobox.io account           |
| [`logout`](/cli/logout/)               | Removes your nanobox.io api token from your local nanobox client         |
| [`start`](/cli/start/)                 | Starts the Nanobox container                                             |
| [`stop`](/cli/stop/)                   | Stops the Nanobox container                                              |
| [`clean`](/cli/clean/)                 | Clean out any environments that no longer exist                          |
| [`destroy`](/cli/destroy/)             | Destroys the current project and removes it from Nanobox                 |
| [`implode`](/cli/implode/)             | Removes all Nanobox-created containers, files, & data                    |


### Global Command Options
#### --help
Displays help information about the CLI and specific commands.

#### --background
Stops your Nanobox container from auto-suspending. Only takes affect on commands that require a running Nanobox container.

#### -v, --verbose
Increases command output from 'info' to 'debug'.

#### -q, --quiet
Silences command output.

#### -f, --force
Forces the command to run without any confirmation. **Use responsibly!**

#### --version
Displays the current version of the Nanobox CLI.
