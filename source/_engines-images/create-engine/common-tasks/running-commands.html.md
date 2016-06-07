---
title: Running Commands
---

Technically, an engine can run whatever command it needs to since it runs in bash environment. However, we *strongly discourage* running commands without informing the user of what is happening. Nos helps the engine provide visibility to the application developer by exposing a handful of helpers:

#### run_process

`run_process` is a Nos helper function that runs a command and provides all of the styling according to [main section](/engines/style-guide/#main-section-with-child-process-output) style guide. This function accepts two arguments: a title and a command. The title is used to display the header, and the command is what will actually run.

###### Example:
```bash
run_process 'bundle install', 'bundle install --deployment'
```

#### run_subprocess

`run_subprocess` is a Nos helper function that runs a command and provides all of the styling according to the [sub task](/engines/style-guide/#sub-tasks-with-success-failure-status) style guide. This function accepts two arguments: a title and a command. The title is used to display the header and the command is what actually runs.

This function also displays the command being run before the command output starts and a footer indicating a success or footer. **We recommend using this helper function for running commands**, as it provides more visibility to the application developer.

###### Example:
```bash
run_subprocess 'bundle install', 'bundle install --deployment'
```

#### Generic Mask

Often times an engine may need to run a series of commands, which may be confusing to the application developer. In such cases, it is recommended to simply print a header, then run the commands directly.

###### Example:
```bash

print_process_start "Copying a bunch of stuff..."

rsync -a /here/ /there
rsync -a /and/here /over/there

print_process_end

```
