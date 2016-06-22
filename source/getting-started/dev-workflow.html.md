---
title: Dev Workflow
---

Nanobox facilitates a seamless dev-to-production development cycle by providing a development environment for active development and a simulated production environment for testing. Each is provisioned and managed in a local virtual machine (VM) using the same engines, images, and configuration that are used in a production Nanobox app. When your code is tested and ready for production, build and deploy it to your live Nanobox app.

## Develop Locally
The Nanobox CLI's `dev` command creates and manages a virtual local dev environment identical to what is or what will be your production Nanobox environment. Develop in confidence knowing that if it works locally, it will work in production.

### Start Your Nanobox VM
In the root of your project, run `nanobox dev up` command to provision a development platform, create and deploy a build, and start your data components inside your Nanobox (VM).

```bash
$ nanobox dev up
```

### Console In
With the dev platform running, open a new terminal and console in.

```bash
$ nanobox dev console
```

Once in, you can run the commands necessary to start your web and worker processes.

### Craft Some Code
Do what you do best, code. Your local codebase is mounted into your Nanobox VM, so any changes you make will be reflected in your dev environment. If you make any changes to your boxfile.yml, run `nanobox build` and `nanbox dev deploy` to apply those changes to your dev platform.


## Test Locally
Once your code is at a point we're you're ready to fully test it, run `nanobox sim up`. This will generate a new deployable build package, provision a simulated production environment in your Nanobox VM, deploy the build into simulated environment, then provision and start all of your app's components. This is a true simulation of a production deploy.

```bash
$ nanobox sim up
```

If you make any code changes while running a sim environment, you can open another terminal, generate a new build with `nanobox build`, and deploy the new build into your running sim environment with `nanobox sim deploy`.

## Deploy to Production
With your code tested locally and with a build prepared, the `deploy` command will push and deploy the generated build to your production platform. More information about deploying to Nanobox is available in the [Deploying Code](/getting-started/deploy-code/) doc.

```bash
$ nanobox deploy
```

## Manage & Scale Your Production App
Once deployed, apps are managed and scaled in your [Nanobox dashboard](https://dashboard.nanobox.io). For the deep dive into application management, read through the [App Management docs](/app-management/).

## Collaborate
Since all configuration and architectural information is housed in your `boxfile.yml`, apps can be easily shared and actively developed by teams of any scale without having to worry about the nuances of different machines. Collaborators simply need a copy of the project on their local machine and run `nanobox dev up`. Nanobox will provision an identical virtual dev environment on all machines.
