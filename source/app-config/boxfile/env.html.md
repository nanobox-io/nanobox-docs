---
title: env
---

The `env` section of the Boxfile allows you to configure your runtime environment and how your code is built prepared for deploy. When code is deployed to a nanobox app, a "build" server is provisioned. In the build server, your [engine](#engine) installs the necessary binaries, loads dependencies/packages, and configures the environment. Engines provide default config settings, but also provide user-definable settings. User specified settings override the defaults.

The configuration options and final "code-package" are used in web and worker components.

#### Engines Take Care of Most of the Build
[Engines](/getting-started/engines/) handle the bulk of the build and configuration process, but engine developers may open up configurable options. These can be specified under [`config`](#config-options).

#### Overview of Build Settings in the Boxfile
```yaml
env:
  # Engine
  engine: 'my/engine'

  # Config Options Exposed by the Engine
  config:
    runtime_version: 2.2

  # Dependency Management
  lib_dirs:
    - vendor
    - packages
  reuse_libs: true
```

## Engine
The `engine` config allows you to specify which [engine](/getting-started/engines/) to use to build your code's environment. If no engine is provided, nanobox will "sniff" your code and determine the best fit.

#### engine
```yaml
env:
  engine: 'username/engine-name'
```

## Config Options
Engines expose configurable options used to tailor your code's environment to your project's specific needs. What options are available wholly depend on the engine and should be documented in the engine's documentation.

#### config
```yaml
env:
  engine:'username/engine-name'
  config:
    runtime_version: 2.2
```

## Dependency Management
The following option allow you to control how dependencies are loaded/preserved during the build process.

### Library Directories
The `lib_dirs` config tells Nanobox where your dependency manager stores its dependencies. After the dependencies have been downloaded, the library directories are packaged into a “library archive”, which is used on subsequent deploys.

#### lib_dirs
```yaml
build:
  lib_dirs:
    - vendor
    - packages
```

### Reuse Libs
During the build process, dependencies are downloaded then stored in a "library archive". The `reuse_libs` config allows you to specify whether or not you want to use the library archive from the previous deploy. If set to 'false', libraries and packages will be downloaded on all deploys, increasing build/deploy times.

#### reuse_libs
```yaml
build:
  reuse_libs: true
```
