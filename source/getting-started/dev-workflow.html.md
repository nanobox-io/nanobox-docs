---
title: Dev Workflow
---

Nanobox is designed to provide a seamless dev-to-production development cycle. [`nanobox dev`](/local-dev/) provisions a local virtual machine (VM) using the same engines, images, and configuration that are used in a production Nanobox app. When your code is tested and ready for production, build and deploy it your live Nanobox app.

## Develop & Build Locally
The Nanobox CLI's `dev` command creates a virtual local dev environment identical to what is or what will be your production Nanobox environment. Develop in confidence knowing that if it works locally, it will work in production.

### Start Your Nanobox VM
In the root of your project, run the `dev` command to provision your Nanobox virtual machine (VM) and dev environment.

```bash
$ nanobox dev
```

Once your Nanobox is running and data services are provisioned, you'll be dropped you into an interactive console inside your VM which is mounted to your local codebase. You can then run dependency managers and start your app.

### Craft Some Code
Do what you do best, code. Your local codebase is mounted into your Nanobox VM, so any changes you make will be reflected in your dev environment.

### Create a Build
Once your code is at a point we're you're ready to fully test it, create a build. This build package can be deployed into both your local and production platforms. To generate a build, run the `build` command in the root of your project.

```bash
$ nanobox build
```

### Deploy to Your Local VM
With a build created, you're ready to preview your app locally. The `dev deploy` command deploys your generated build into your local dev environment then provisions and starts all web, worker, and data components.

```bash
$ nanobox dev deploy
```

## Deploy
With your code tested locally and with a build prepared, the `deploy` command will push and deploy the generated build to your production platform. More information about deploying to Nanobox is available in the [Deploying Code](/getting-started/deploy-code/) doc.

```bash
$ nanobox deploy
```

## Manage & Scale Your Production App
Once deployed, apps are managed and scaled in your [Nanobox dashboard](https://dashboard.nanobox.io). For the deep dive into application management, read through the [App Management docs](/app-management/).

## Collaborate
Since all configuration and architectural information is housed in your `boxfile.yml`, apps can be easily shared and actively developed by teams of any scale without having to worry about the nuances of different machines. Collaborators simply need a copy of the project on their local machine and run `nanobox dev`. Nanobox will provision an identical virtual dev environments on all machines.
