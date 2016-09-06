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

### Run 'nanobox dev deploy'
```shell
$ nanobox dev deploy
```

Running `nanobox dev deploy` inside of your application directory will start your Nanobox VM, generate a deployable build package, provision a virtual dev environment, deploy the package into your dev platform, and provision all of your app's data components specified in your [boxfile.yml](/app-config/boxfile/).


### Start Your App
With a build deployed to your dev platform, you need to start your app. You have the following two options:

#### Console In & Start Your App
The `dev console` command will drop you into an interactive console where you can run the commands necessary to start your app. This comes in handy for projects that need to run differently while under active development.

```bash
$ nanobox dev console
```

Once in, you can start your web and worker processes.

#### Run All Start Commands
The `dev run` command will run all of the start commands specified in your [boxfile.yml](/app-config/boxfile/) for your web and worker components. This is ideal for apps that run the same when in development as they do in production.

```bash
$ nanobox dev run
```

### Optimize Your Nanobox VM <span class='rec'></span>
Whenever your Nanobox VM is first created, it's configured using default settings that may cause processes running in the VM to be a little slow. Virtual Box allows you to specify what system resources should be made available to the VM and Nanobox allows you to specify which filesystem mounting technology to use when mounting your local codebase. All of the optimizations are covered in the [VM Performance Tuning](/local-dev/vm-performance/) doc. You'll need to [stop](/cli/stop/) your Nanobox VM in order to make these changes.
