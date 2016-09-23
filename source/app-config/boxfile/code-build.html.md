---
title: code.build
---

The `code.build` section of the boxfile.yml allows you to configure how your code and its runtime environment are built and prepared for deploy. In the [build process](/cli/build/), your [engine](#engine) installs the necessary binaries, loads dependencies/packages, and configures the environment. Engines provide default config settings, but also provide user-definable settings. User specified settings override the defaults.

The configuration options and final "build-package" are used in web and worker components.

#### Engines Take Care of Most of the Build
[Engines](/engines/) handle the bulk of the build and configuration process, but engine developers may open up configurable options. These can be specified under [`config`](#config-options).

#### Overview of Build Settings in the Boxfile
```yaml
code.build:
  # Engine
  engine: my/engine

  # Config Options Exposed by the Engine
  config:
    version: 2.2

  # Dependency Management
  lib_dirs:
    - vendor
    - packages
  reuse_libs: true

  # Extra Packages
  extra_packages:
    - nodejs-6.2
    - newrelic-6.3

  # Dev Packages
  dev_packages:
    - psutils

  # Build Hooks
  before_build:
    - 'echo I am getting ready'
  after_prepare:
    - 'echo I am ready'
  before_compile:
    - 'echo I'm getting ready to build'
  after_compile:
    - 'echo I'm built and ready to go'
```

## Engine
The `engine` config allows you to specify which engine to use to build your code's environment.

#### engine
```yaml
code.build:
  engine: username/engine-name
```

## Config Options
Engines expose configurable options used to tailor your code's environment to your project's specific needs. What options are available wholly depend on the engine and should be documented in the engine's documentation.

#### config
```yaml
code.build:
  engine: username/engine-name
  config:
    version: 2.2
```

## Dependency Management
The following options allow you to control how dependencies are loaded/preserved during the build process.

### Library Directories
The `lib_dirs` config tells Nanobox where your dependency manager stores its dependencies. After the dependencies have been downloaded, the library directories are packaged into a “library archive”, which is used on subsequent deploys.

#### lib_dirs
```yaml
code.build:
  lib_dirs:
    - vendor
    - packages
```

### Reuse Libs
During the build process, dependencies are downloaded then stored in a "library archive". The `reuse_libs` config allows you to specify whether or not you want to use the library archive from the previous deploy. If set to 'false', libraries and packages will be downloaded on all deploys, increasing build/deploy times.

#### reuse_libs
```yaml
code.build:
  reuse_libs: true
```

## Extra Packages
In some cases, you may need a package or runtime that your engine does not make available. The `extra_packages` config allows you to specify additional packages that should be loaded into your build.

```yaml
code.build:
  extra_packages:
    - nodejs-6.2
    - newrelic-6.3
```

## Dev Packages
In some cases, you may need a package or runtime that your engine does not make available, but only while [developing locally](/local-dev/) in your Nanobox VM. The `dev_packages` config allows you to specify additional packages that should be available while working in your [dev environment](/cli/dev/).

```yaml
code.build:
  dev_packages:
    - psutils
    - pip
```

**Note:** Only packages available in the [Nanobox pkgsrc](http://pkgsrc.nanobox.io/nanobox/base/Linux/) can be loaded using `dev_packages`.

## Build Hooks
Build hooks allow you to "hook into" specific phases of the build process and run commands. These are covered in detail in the [Build & Deploy Hooks](/app-config/build-deploy-hooks/) doc.

#### Build Hooks in the boxfile.yml
```yaml
code.build:
  before_build:
    - 'curl -sSf https://static.rust-lang.org/rustup.sh | sh'
  after_prepare:
    - 'echo good to go'
  before_compile:
    - 'cargo build --release'
  after_compile:
    - 'echo built and ready for deploy'
```
