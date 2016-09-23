---
title: Local Setup
---

Other than what's outlined in the [Configure Your App doc](/getting-started/configure-app/), there's not much that needs to be done to get your local dev environment ready to go.

### Install Nanobox
If you haven't already, you'll need to [download and install the Nanobox](/getting-started/install-nanobox/). Nanobox uses Docker Toolbox and Virtual Box to provision and build a local development environment.

### Navigate Into Your Project Directory
```shell
$ cd app-dir
```

### Create a boxfile.yml
In order to create a local dev environment, Nanobox needs to know which [engine](/engines/) to use. Engines are specified in the `code.build` section of your [boxfile.yml](/app-config/boxfile/). Your `boxfile.yml` needs to be placed in the root of your project.

```yaml
code.build:
  engine: ruby
```

**Note:** *Specifying your engine as "none" will generate a bare dev environment with no runtimes.*

### Run 'nanobox dev deploy'
```shell
$ nanobox dev deploy
```

The first time you run `nanobox dev deploy`, it will start your Nanobox virtual container, build a runtime using the specified engine, provision your dev environment, deploy the built runtime into your dev environment, and provision all of your app's data components specified in your boxfile.yml.


### Start Your App
With a runtime deployed to your dev environment, you're ready to start your app. You have the following two options:

#### Console In & Start Your App
The `dev console` command will drop you into an interactive console inside your dev environment where you can run the commands necessary to start your app.

```bash
$ nanobox dev console
```

Once in, you can start your web and worker processes.

#### Run All Start Commands
The `dev run` command will run all of the start commands specified in your [boxfile.yml](/app-config/boxfile/) for your web and worker components.

```bash
$ nanobox dev run
```

### Optimize Your Nanobox VM <span class='rec'></span>
Whenever your Nanobox container is first created, it's configured using default settings which may cause processes running in the container to be a little slow. Virtual Box allows you to specify what system resources should be made available and Nanobox allows you to specify which filesystem mounting technology to use when mounting your local codebase. All of the optimizations are covered in the [VM Performance Tuning](/local-dev/vm-performance/) doc. You'll need to [stop](/cli/stop/) your Nanobox VM in order to make these changes.
