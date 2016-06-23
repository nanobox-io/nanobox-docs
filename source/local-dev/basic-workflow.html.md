---
title: Basic Workflow
---

## Develop
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
Do what you do best, code. Your local codebase is mounted into your Nanobox VM, so any changes you make will be reflected in your dev environment.

#### Applying boxfile.yml Changes
If you make any changes to your boxfile.yml, you'll have to create a new build and deploy it into your dev platform. This can all be done while your dev platform is running, by opening another terminal and running:

```bash
$ nanobox build
$ nanobox dev deploy
```

## Test
Once your code is at a point we're you're ready to fully test it, run `nanobox sim up`. This will generate a new deployable build package, provision a simulated production environment in your Nanobox VM, deploy the build into simulated environment, then provision and start all of your app's components. This is a true simulation of a production deploy.

```bash
$ nanobox sim up
```

#### Changing Code in a Sim Platform
If you make any code changes while running a sim environment, you'll need to create a new build and deploy that build into your sim platform. To do this, open another terminal, and run:

```bash
$ nanobox build
$ nanobox sim deploy
```

## Deploy to Production
With your code tested locally and with a build prepared, the `deploy` command will push and deploy the generated build to your production platform. More information about deploying to Nanobox is available in the [Deploying Code](/getting-started/deploy-code/) doc.

```bash
$ nanobox deploy
```
