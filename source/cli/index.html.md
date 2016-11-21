---
title: CLI Commands
description: All interaction with Nanobox happens through the Nanobox CLI. This doc outlines each of the CLI commands, their functionality, and available options.
---

All interaction with Nanobox happens through the Nanobox CLI. This section of docs walks through each of the CLI commands, their functionality, and options associated with each. Below is a list with a quick summary of each command:

| Command                                | Summary                                                                  |
| :------------------------------------- | :----------------------------------------------------------------------- |
| [`run`](/cli/run/)                     | Starts your local environment, allowing you to run your app              |
| [`build-runtime`](/cli/build-runtime/) | Builds your app's runtime                                                |
| [`compile-app`](/cli/compile-app/)     | Compiles your app's code into a deployable package                       |
| [`remote`](/cli/remote/)               | Manages connections to remote applications                               |
| [`deploy`](/cli/deploy/)               | Deploys your app to a live app                                           |
| [`console`](/cli/console/)             | Opens an interactive terminal from inside a component in your live app   |
| [`info`](/cli/info/)                   | Displays information about the app and its components                    |
| [`tunnel`](/cli/tunnel/)               | Establishes a secure tunnel from your local machine to a running service |
| [`evar`](/cli/evar/)                   | Manages environment variables on your production environment             |
| [`dns`](/cli/dns/)                     | Manage DNS aliases for local applications                                |
| [`log`](/cli/log/)                     | View and streams application logs                                        |
| [`configure`](/cli/configure)          | Walks through prompts to configure Nanobox                               |
| [`update-images`](/cli/update-images/) | Downloads the most recent versions of Nanobox docker images              |
| [`login`](/cli/login/)                 | Authenticates your Nanobox client with your nanobox.io account           |
| [`logout`](/cli/logout/)               | Removes your nanobox.io api token from your local nanobox client         |
| [`start`](/cli/start/)                 | Starts the Nanobox container                                             |
| [`stop`](/cli/stop/)                   | Stops the Nanobox container                                              |
| [`status`](/cli/status/)               | Display the status of Nanobox & apps                                     |
| [`destroy`](/cli/destroy/)             | Destroys the current project and removes it from Nanobox                 |
| [`clean`](/cli/clean/)                 | Clean out any environments that no longer exist                          |
| [`implode`](/cli/implode/)             | Removes all Nanobox-created containers, files, & data                    |
| [`version`](/cli/version/)             | Show the current Nanobox version                                         |

### Global Command Options
#### --help
Displays help information about the CLI and specific commands.

#### --debug
In the event of a failure, drop into a debug context.

#### -t, --trace
Increases display output and sets level to 'trace'.

#### -v, --verbose
Increases display output and sets level to 'debug'.

#### -f, --force
Forces the command to run without any confirmation. **Use responsibly!**
