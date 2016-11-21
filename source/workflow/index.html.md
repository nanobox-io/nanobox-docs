---
title: Workflow
description: Nanobox streamlines your development-to-production workflow.
---

Developing code locally is a staple of the modern development workflow, but even still, creating a local environment can be tedious and frustrating. Nanobox has simplified this problem by standardizing and automating local environment creation as well as making it easy to deploy an identical production environment to your live servers.

The basic development-to-production workflow looks like this:

## Start Your Local Environment
Get your local environment up and running by `cd`ing into the root of your project and running `nanobox run`.

```bash
# start your local environment
# and open an interactive console
nanobox run
```

This will start up your app's local environment and drop you into an interactive console. You can also pass a command into the `run` command to start your app. More information is available in the [`run` documenation](/cli/run/).

### Start Your App
If you didn't pass a command to start your app when using the `run` command, inside your local nanobox console, you can simply run your app's start command.

```bash
# start command - rails example
rails s
```

## Craft Some Code
Do what you do best, code. Your local codebase is mounted into Nanobox, so any changes will be reflected in your running app. If you make any changes to your boxfile.yml, run `nanobox build-runtime` and `nanobox deploy local` to apply those changes to your local environment.

## Preview Your App
Once you think you're ready to deploy to live servers, Nanobox let's you "dry-run" a deploy with the `dry-run` command. This will spin up a virtualized environment on your local machine and deploy to it just as it would to live servers. If a dry-run works locally, a deploy to production servers will work.

```bash
# preview your app locally
nanobox deploy dry-run
```

## Launch an App
Nanobox will launch your app's infrastructure on your hosting provider of choice. The [Launch an App](/workflow/launch-app) doc walks through how.

## Deploy Your App
With an live app created, you can add it as remote to your local codebase and deploy to it.

```bash
# add your live app as a remote
nanobox remote add app-name

# deploy to your remote server(s)
nanobox deploy
```
