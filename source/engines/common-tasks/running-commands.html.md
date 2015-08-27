---
title: Running Commands
---

Technically, an engine can run whatever command it needs to, as the environment is just bash. However, we strongly discourage running commands without informing the user of what is happening. Nos helps the engine provide visibility to the application developer by exposing a handful of helpers:

#### run_process

`run_process` is a Nos helper function that will run a command, and provide all of the styling according to [main section](/engines/style-guide/#main-section-with-child-process-output) style guide. This function accepts two arguments: a title and a command. The title will be used to display the header, and the command will be run.

Example:

```bash
run_process 'bundle install', 'bundle install --deployment'
```

#### run_subprocess

`run_subprocess` is a Nos helper function that will run a command, and provide all of the styling according to the [sub task](/engines/style-guide/#sub-tasks-with-success-failure-status) styleguide. This function accepts two arguments: a title and a command. The title will be used to display the header, and the command will be run. In addition, this function will display the command being run before the command output starts, and will also display a footer indicating a success or footer. This function is recommended as the preferred helper function for running commands, as it provides more visibility to the application developer.

Example:

```bash
run_subprocess 'bundle install', 'bundle install --deployment'
```

#### Generic mask

Often times the engine may need to run a series of commands, which would be confusing to the application developer. In such cases, it is recommended to simply print a header, and then run the commands directly.

Example:

```bash

print_process_start "copying a bunch of stuff..."

rsync -a /here/ /there
rsync -a /and/here /over/there

print_process_end

```
