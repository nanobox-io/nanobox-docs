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

### Run 'nanobox dev console'
```shell
$ nanobox dev console
```

Running `nanobox dev console` inside of your application directory will start your Nanobox VM, generate a deployable build package, provision a virtual dev environment, deploy the package into your dev platform, provision all of your app's data components specified in your [boxfile.yml](/app-config/boxfile/), then drop you into an interactive console inside your dev platform.

Once you're consoled in, you can run the commands necessary to start your web and worker processes. Or, you can open up a new terminal window and use the [`dev run`](/cli/dev/run/) command to run all your web and worker start commands specified in your boxfile.yml.

#### Optional Run Command
```bash
# Run outside of a dev console
$ nanobox dev run
```

### Optimize Your Nanobox VM <span class='rec'></span>
Whenever your Nanobox VM is first created, it's configured using default settings that may cause processes running in the VM to be a little slow. Virtual Box allows you to specify what system resources should be made available to the VM and Nanobox allows you to specify which filesystem mounting technology to use when mounting your local codebase. All of the optimizations are covered in the [VM Performance Tuning](/local-dev/vm-performance/) doc. You'll need to [stop](/cli/stop/) your Nanobox VM in order to make these changes.
