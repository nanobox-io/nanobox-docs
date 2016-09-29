---
title: Dev Workflow
---

The Nanobox CLI's `dev` command creates and manages a virtual local dev environment identical to what is or what will be your production environment deployed with Nanobox.

### Start Your Dev Environment, Deploy to Dev
To get your local dev environment running, your Nanobox container needs to be started, a runtime built, your dev environment provisioned, and the runtime deployed into your dev environment.

```bash
# build your runtime
$ nanobox build

# start and deploy your runtime to your dev environment
$ nanobox dev deploy
```

### Start Your App
With a built runtime deployed to your dev environment, you can start your app. You have the following two options:

#### Console In & Start Your App
The `dev console` command will drop you into an interactive console where you can run the commands necessary to start your app. This comes in handy for projects that need to run differently while under active development or if you want to see the output of your app's start command.

```bash
$ nanobox dev console
```

Once in, you can start your web and worker processes.

#### Run All Start Commands
The `dev run` command will run all of the start commands specified in your [boxfile.yml](/app-config/boxfile/) for your web and worker components. This is ideal for apps that have web and worker components with multiple start commands.

```bash
$ nanobox dev run
```

### Craft Some Code & Build Your App
Do what you do best, code. Your local codebase is mounted into your Nanobox container, so any changes you make will be reflected in your dev environment. If you make any changes to your boxfile.yml, run `nanobox build` and `nanobox dev deploy` to apply those changes to your dev environment.
