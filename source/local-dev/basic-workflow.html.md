---
title: Basic Workflow
---

### Start Your Nanobox VM
In the root of your project, run the `dev` command to provision your Nanobox virtual machine (VM) and dev environment.

```bash
$ nanobox dev
```

Once your Nanobox is running and data services are provisioned, you'll be dropped you into an interactive console inside your VM which is mounted to your local codebase. You can then run dependency managers and start your app.

### Craft Some Code
Do what you do best, code. Your local codebase is mounted into your Nanobox VM, so any changes you make will be reflected in your dev environment.

### Create a Build
Once your code is at a point we're you're ready to fully test it, create a build. This build package can be deployed into both a local and production environments. To generate a build, run the `build` command in the root of your project.

```bash
$ nanobox build
```

### Deploy to Your Local VM
With a build created, you're ready to preview your app locally. The `dev deploy` command deploys your generated build into your local dev environment then provisions and starts all web, worker, and data components.

```bash
$ nanobox dev deploy
```

### Deploy to Your Production App
If everything looks good in your local environment, you're ready to deploy the build into your production app. This process is covered in the [Deploying to an App](/getting-started/deploy/) doc.
