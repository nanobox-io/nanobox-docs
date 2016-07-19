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

### Run 'nanobox dev up'
```shell
$ nanobox dev up
```

Running `nanobox dev up` inside of your application directory will generate a deployable build package, provision a virtual dev environment, deploy the package into your dev platform, and provision all of your app's data components specified in your [boxfile.yml](/app-config/boxfile/).

### Console In & Start Your App
With your dev platform running, open an new terminal and console in.

```bash
$ nanobox dev console
```

Once you're consoled in, you can run the commands necessary to start your web and worker processes.

### .nanobox/config.yml
Whenever you run `nanobox dev up` or `nanobox dev start`, Nanobox will look for or create a file at `~/.nanobox/.config.yml`. This file houses configuration options for your Nanobox VM. **The config.yml is optional** and only necessary when you want anything other than the defaults. More information is available in the [Nanobox config.yml doc](/local-dev/nanobox-config-yml/).
