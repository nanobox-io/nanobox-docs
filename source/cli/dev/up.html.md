---
title: dev up
---

The `dev up` command is the quickest way to get a development platform up and running. It will start the Nanobox VM if it's not running, generate a deployable build package, create and start a dev environment inside your Nanobox VM, deploy your build package into the dev environment, and provision data services specified in your boxfile.yml.

### Usage
```bash
$ nanobox dev up
```

Once the 'up' process completes, all your app's data services will be running and your local codebase will be mounted into your dev platform. You can then [console in](/cli/dev/console/) and start your web and worker processes. Because your local codebase is mounted into your dev platform, any changes you make will be reflected in your running dev app.

#### Behind the Scenes
`dev up` is a shortcut that runs the following commands:

[`nanobox start`](/cli/start) - Starts the Nanobox VM if it's not running  
[`nanobox build`](/cli/build/) - Generates a deployable build package  
[`nanobox dev start`](/cli/dev/start/) - Starts a development platform in your Nanobox VM  
[`nanobox dev deploy`](/cli/dev/deploy/) - Deploys the generated build into your dev platform
