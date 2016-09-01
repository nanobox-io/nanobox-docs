---
title: Basic Workflow
---

## Develop
The Nanobox CLI's `dev` command creates and manages a virtual local dev environment identical to what is or what will be your production Nanobox environment. Develop in confidence knowing that if it works locally, it will work in production.

### Start Your Nanobox VM
In the root of your project, run `nanobox dev console` command to provision a development platform, create and deploy a build, start your data components inside your Nanobox VM, then drop you into an interactive console inside your dev platform.

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
