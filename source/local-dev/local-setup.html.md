---
title: Local Setup
---

Other than what's outlined in the [Project Setup](/getting-started/project-setup/), there's not much that needs to be done to get your local dev environment ready to go.

### Install the Nanobox CLI
If you haven't already, you'll need to install the [Nanobox CLI](/cli/). The CLI uses Docker and Virtual Box to provision and build a local development virtual machine (VM).

### Navigate Into Your Project Directory
```shell
$ cd app-dir
```

### Run 'nanobox dev'
```shell
$ nanobox dev
```

Running `nanobox dev` inside of your application directory will provision your virtual environment and drop you into an interactive console where you can run dependency managers, start web and worker processes, etc.

### .nanofile
Whenever you run `nanobox dev`, Nanobox will look for file named `.nanofile`. This is a config file that defines what resources to allocate to your Nanobox VM. **The nanofile is optional** and only necessary when you want anything other than the defaults. More information is available in the [.nanofile doc](/local-dev/nanofile/).
