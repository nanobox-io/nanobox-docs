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

## Start Your Dev Environment
With your boxfile.yml in place and an engine specified, you're ready to run your app locally. The `nanobox run` command will build a runtime from the settings in your boxfile.yml and create a local environment using that runtime.
 
```bash
# run your app locally
nanobox run
```

#### Add a DNS Alias
While not required, it is recommended that you add a DNS alias to your dev app to provide a convenient way to access your running dev app in your browser.

```bash
# add a dns alias to your dev app
nanobox dev dns add appname.nanobox.dev
```

*More information is available in the* [`dev dns`](/cli/dev/dns/) *documentation.*

## Console Into Your Dev Environment
Running the `nanobox dev console` command will drop you into an interactive console inside your running dev environment.

```bash
# console into your dev environment
nanobox dev console
```

## Develop!
You are now inside of a virtualized isolated development environment with your local codebase mounted in. Any changes to your codebase will be reflected in your dev environment. All the binaries and executables installed by your engine are available. You can inspect the environment, run dependency managers, or start your app. It's up to you.

Before you get too far, there's some things you should do to [configure your app](/getting-started/configure-app/).
