---
title: Dev Workflow
---

Nanobox facilitates a seamless dev-to-production development cycle by providing a development environment for active development and a simulated production environment for testing. Each is provisioned and managed in a local virtual Nanobox container using the same engines, images, and configuration that are used in a production app. When your code is tested and ready for production, build and deploy it to your live app.

## Develop Locally
The Nanobox CLI's `dev` command creates and manages a virtual local dev environment identical to what is or what will be your production Nanobox environment. Develop in confidence knowing that if it works locally, it will work in production.

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
The `dev run` command will run all of the start commands specified in your [boxfile.yml](/app-config/boxfile/) for your web and worker components. This is ideal for apps that run the same when in development as they do in production.

```bash
$ nanobox dev run
```

### Craft Some Code
Do what you do best, code. Your local codebase is mounted into your Nanobox container, so any changes you make will be reflected in your dev environment. If you make any changes to your boxfile.yml, run `nanobox build` and `nanobox dev deploy` to apply those changes to your dev platform.


## Test Locally
Once your code is at a point we're you're ready to fully test it, you can compile it into a deployable package using the `nanobox compile` command. The `nanobox sim deploy` will provision a simulated production environment in your Nanobox container, deploy both your built runtime and compiled code into a sim environment, then provision and start all of your app's components - a true simulation of a production deploy.

```bash
# compile your code
$ nanobox compile

# deploy the built runtime & compiled code into a sim environment
$ nanobox sim deploy
```

If you make any code changes while running a sim environment, simply repeat the compile/deploy process to deploy those changes into your sim app.

## Deploy to Production
With your code tested locally, the `deploy` command will push and deploy the built runtime and compiled code to your production platform. More information about deploying with Nanobox is available in the [Deploying Code](/getting-started/deploy-code/) doc.

```bash
$ nanobox deploy
```

## Manage & Scale Your Production App
Once deployed, apps are managed and scaled in your [Nanobox dashboard](https://dashboard.nanobox.io). For the deep dive into application management, read through the [App Management docs](/app-management/).

## Collaborate
Since all configuration and architectural information is housed in your `boxfile.yml`, apps can be easily shared and actively developed by teams of any scale without having to worry about the nuances of different machines. Collaborators simply need a copy of the project on their local machine and run `nanobox dev deploy`. Nanobox will provision an identical virtual dev environment on their machine(s).
