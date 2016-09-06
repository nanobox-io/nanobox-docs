---
title: Basic Workflow
---

## Develop
The Nanobox CLI's `dev` command creates and manages a virtual local dev environment identical to what is or what will be your production Nanobox environment. Develop in confidence knowing that if it works locally, it will work in production.

### Start Your VM & Dev Platform, Deploy to Dev
In the root of your project, run `nanobox dev deploy` command to provision a development platform, create and deploy a build, and start your data components inside your Nanobox VM.

```bash
$ nanobox dev console
```

### Start Your App
With a build deployed to your dev platform, you can start your app. You have the following two options:

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

### Craft Some Code
Do what you do best, code. Your local codebase is mounted into your Nanobox VM, so any changes you make will be reflected in your dev environment.

#### Applying boxfile.yml Changes
If you make any changes to your boxfile.yml, you'll have to create a new build and deploy it into your dev platform. This can all be done while your dev platform is running, by opening another terminal and running:

```bash
$ nanobox build
$ nanobox dev deploy
```

## Test
Once your code is at a point we're you're ready to fully test it, generate a new build with `nanobox build`, then run `nanobox sim deploy`. This will provision a simulated production environment in your Nanobox VM, deploy the build into simulated environment, then provision and start all of your app's components. This is a true simulation of a production deploy.

```bash
# Generate a new build
$ nanobox build

# Start & deploy to your sim environment
$ nanobox sim deploy
```

#### Changing Code in a Sim Platform
If you make any code changes while running a sim environment, you'll can apply these changes by running the build/deploy process again.

## Deploy to Production
With your code tested locally and with a build prepared, the `deploy` command will push and deploy the generated build to your production platform. More information about deploying to Nanobox is available in the [Deploying Code](/getting-started/deploy-code/) doc.

```bash
$ nanobox deploy
```
