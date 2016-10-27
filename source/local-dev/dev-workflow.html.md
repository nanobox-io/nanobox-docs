---
title: Dev Workflow
description: Nanobox streamlines local development workflow letting you get code into production faster.
---

The Nanobox CLI's `dev` command creates and manages a virtual local dev environment identical to what is or what will be your production environment deployed with Nanobox.

### Start Your Dev Environment
To get your local dev environment running, `cd` into the root of your project and run the `dev start` command.

```bash
# start your dev environment
nanobox dev start
```

### Console into Your Dev Environment
With your dev environment up and running, you can console into it with the `dev console` command.

```bash
# console into your dev environment
nanobox dev console
```

### Start Your App
There are two different ways you can start your app inside your dev environment:

#### Start It from the Dev Console
Inside your dev console, you can simply pass your app's start command.

```bash
# start command - rails example
rails s
```

Once in, you can start your web and worker processes.

#### Run All Start Commands
Running the `dev run` command in the root of your project (oustide of a dev console) will run all of the start commands specified in your [boxfile.yml](/boxfile/) for your web and worker components. This is ideal for apps that have complex or multiple start commands.

```bash
nanobox dev run
```

### Craft Some Code & Build Your App
Do what you do best, code. Your local codebase is mounted into your Nanobox container, so any changes will be reflected in your dev environment. If you make any changes to your boxfile.yml, run `nanobox build-runtime` and `nanobox dev deploy` to apply those changes to your dev environment.
