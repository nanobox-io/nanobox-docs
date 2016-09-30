---
title: Create a Dev Environment
---

## Create a boxfile.yml
In the root of your project, create a file named `boxfile.yml`. The boxfile.yml is a yaml config file defines your runtime, infrastructure, and  configuration.

The bare minimum required in the boxfile.yml is an "engine". [Engines](/engines/) are used to create your app's runtime environment and are specified in the [`code.build`](/boxfile/code-build/) section of your boxfile.yml. You can view [Official Nanobox engines on Github](https://github.com/nanobox-io/?utf8=%E2%9C%93&query=nanobox-engine).

#### Specify an Engine in Your boxfile.yml

```yaml
code.build:
  engine: ruby
```

## Build Your Runtime
With your boxfile.yml in place and an engine specified, you're ready to build your runtime.

```bash
# build your runtime
$ nanobox build
```

## Start Your Dev Environment, Deploy Your Runtime, & Console Into It
The Nanobox CLI includes functionality that will run any prerequisite commands for you when running a command. You need to start your dev environment, deploy your built runtime into your dev environment, then console in. Running the `nanobox dev console` command will do all of this for you.

```bash
# create a dev environment, deploy
# your runtime, and console in
$ nanobox dev console
```

## Develop!
You are now inside of a virtualized isolated development environment with your local codebase mounted in. Any changes to your codebase will be reflected in your dev environment. All the binaries and executables installed by your engine are available. You can inspect the environment, run dependency managers, or start your app. It's up to you.

Before you get too far, there's some things you should do to [configure your app](/getting-started/configure-app/).
