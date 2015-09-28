---
title: Command Line Interface
---

All interaction with Nanobox happens through the `nanobox` CLI. This section of docs walks through each of the CLI commands, their functionality, and options associated with each. Below is a list with a quick summary of each command:

| Command                        | Summary                                                          |
| :----------------------------- | :--------------------------------------------------------------- |
| [`bootstrap`](/cli/bootstrap/) | Runs an engine's bootstrap script - downloads code & launches VM |
| [`console`](/cli/console/)     | Opens an interactive terminal inside your app's context          |
| [`destroy`](/cli/destroy/)     | Destroys the nanobox VM                                          |
| [`dev`](/cli/dev/)             | Starts the Nanobox VM & drops you into a console                 |
| [`down`](/cli/down/)           | Suspends the nanobox VM                                          |
| [`exec`](/cli/exec/)           | Runs a command in your apps context                              |
| [`help`](/cli/help/)           | Displays CLI help                                                |
| [`info`](/cli/info/)           | Displays inforamtion about the Nanobox VM & running services     |
| [`publish`](/cli/publish/)     | Publishes an engine to nanobox.io                                |
| [`run`](/cli/run/)             | Starts the Nanobox VM and runs your application                  |
| [`update`](/cli/update/)       | Updates the CLI to the newest available version                  |

### Global Command Options
#### -v, --verbose
Increases command output from 'info' to 'debug'.

#### -f, --force
Forces the command to run without any confirmation. **Use responsibly!**