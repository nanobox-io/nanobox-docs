---
title: sim up
---

The `sim up` command is the quickest way to get a simulated production platform up and running in your Nanobox VM. It will generate a deployable build package, create and start a sim environment inside your Nanobox VM, deploy your build package into the sim environment, then provision and start web, worker, and data services specified in your [boxfile.yml](/app-config/boxfile/).

### Usage
```bash
$ nanobox sim up
```

Once the 'up' process completes, all your app's code and data services will be running in an isolated environment in your Nanobox VM.

#### Behind the Scenes
`sim up` is a shortcut that runs the following commands:

[`nanobox build`](/cli/build/) - Generates a deployable build package  
[`nanobox sim start`](/cli/sim/start/) - Starts a simulated production platform in your Nanobox VM  
[`nanobox sim deploy`](/cli/sim/deploy/) - Deploys the generated build into your sim platform
