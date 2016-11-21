---
title: Create a Local Environment
description: Nanobox creates a local, isolated development environment, avoiding the normal local 'stack of cards'.
---

## Create a boxfile.yml
In the root of your project, create a file named `boxfile.yml`. The boxfile.yml is a yaml config file defines your runtime, infrastructure, and  configuration.

The bare minimum required in the boxfile.yml is an "engine". [Engines](/engines/) are used to create your app's runtime environment and are specified in the [`run.config`](/boxfile/run-config/) section of your boxfile.yml. You can view [Official Nanobox engines on Github](https://github.com/nanobox-io/?utf8=%E2%9C%93&query=nanobox-engine).

#### Specify an Engine in Your boxfile.yml

```yaml
run.config:
  engine: ruby
```

## Start Your Local Environment & App
With your boxfile.yml in place and an engine specified, you're ready to run your app locally. The `nanobox run` command will build a runtime from the settings in your boxfile.yml and create a local environment using that runtime.

```bash
# run your app locally

# Pattern
nanobox run <app start command>

# Example
nanobox run rails s
```

*More information is available in the [`run` documentation](/cli/run/)

#### Add a DNS Alias
While not required, it is recommended that you add a DNS alias to your dev app to provide a convenient way to access your running local app in your browser. In another terminal, run:

```bash
# add a dns alias to your dev app
nanobox dns add local appname.nanobox.dev
```

*More information is available in the* [`dns`](/cli/dns/) *documentation.*


## Develop!
Your local app is now running in a virtualized isolated environment with your local codebase mounted in. Any changes to  codebase will be reflected in your running environment. All the binaries and executables installed by your engine are available. You can inspect the environment, run dependency managers, or start your app. It's up to you.
