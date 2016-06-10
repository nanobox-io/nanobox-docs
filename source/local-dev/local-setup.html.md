---
title: Local Setup
---

Other than what's outlined in the [Configure Your App doc](/getting-started/configure-app/), there's not much that needs to be done to get your local dev environment ready to go.

### Install the Nanobox CLI
If you haven't already, you'll need to [download and install the Nanobox CLI](/getting-started/install-nanobox/). The CLI uses Docker Toolbox and Virtual Box to provision and build a local development virtual machine (VM).

### Navigate Into Your Project Directory
```shell
$ cd app-dir
```

### Run 'nanobox dev'
```shell
$ nanobox dev
```

Running `nanobox dev` inside of your application directory will provision your virtual environment and drop you into an interactive console where you can run dependency managers, start web and worker processes, etc.

### .nanobox/config.yml
Whenever you run `nanobox dev`, Nanobox will look for or create a file at `~/.nanobox/.config.yml`. This config file defines what resources to allocate to your Nanobox VM. **The config.yml is optional** and only necessary when you want anything other than the defaults. More information is available in the [Nanobox config.yml doc](/local-dev/nanobox-config-yml/).
