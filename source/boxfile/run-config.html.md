---
title: run.config
description: The run.config section of the boxfile.yml allows you to configure the environment in which your app runs.
---

The `run.config` section allows you to configure the environment your app runs within (this includes local and production). An engine will provide all of the necessary configuration, but you can provide custom configuration as well.

#### Overview of Run Config Settings in the boxfile.yml
```yaml
run.config:
  
  # Engine
  engine: my/engine

  # Configuration used by the engine
  engine.config:
    version: 2.2

  # Dependency Management
  lib_dirs:
    - vendor
    - packages

  # Extra Packages (in addition to what the engine installs)
  extra_packages:
    - nodejs-6.2
    - newrelic-6.3

  # Dev Packages
  dev_packages:
    - psutils

  # Additions to $PATH
  paths:
    - vendor/.bin

  # Custom commands to prepare the environment
  extra_steps:
    - npm install
    
  # Enable filesystem watcher
  fs_watch: true
```

## Engine
The `engine` config allows you to specify which engine to use to build your code's environment.

#### engine
```yaml
run.config:
  engine: username/engine-name
```

## Config Options
Engines expose configurable options used to tailor your code's environment to your project's specific needs. What options are available wholly depend on the engine and should be documented in the engine's documentation.

#### config
```yaml
run.config:
  engine.config:
    version: 2.2
```

## Dependency Management
The following option allows you to control where dependencies are loaded/preserved in the build process.

### Library Directories
The `lib_dirs` config tells Nanobox where your dependency manager stores its dependencies. After the dependencies have been downloaded, the library directories are cached and used on subsequent builds. While this configuration is not required, performance is greatly improved. 

#### lib_dirs
```yaml
run.config:
  lib_dirs:
    - vendor
    - packages
 ```

## Extra Packages
In some cases, you may need a package or runtime that your engine does not make available. The `extra_packages` config allows you to specify additional packages that should be loaded into your environment.

```yaml
run.config:
  extra_packages:
    - nodejs-6.2
    - newrelic-6.3
```

**Note:** Only packages available in the [Nanobox pkgsrc](http://pkgsrc.nanobox.io/nanobox/base/Linux/) can be loaded using `extra_packages`.

## Dev Packages
In some cases, you may need a package or runtime that your engine does not make available, but only during development. The `dev_packages` config allows you to specify additional packages that should be available for local development only.

```yaml
run.config:
  dev_packages:
    - psutils
    - pip
```

**Note:** Only packages available in the [Nanobox pkgsrc](http://pkgsrc.nanobox.io/nanobox/base/Linux/) can be loaded using `dev_packages`.

## Add Directories to the $PATH
Some tools you may be using include binaries that need to be added to the system $PATH. The `paths` config allows you to specify these directories. Directories should be relative to the root of your project.

```yaml
run.config:
  paths:
    - vendor/.bin
```

## Extra Steps
You can add custom steps to the process of building the environment in which your app runs.

```yaml
run.config:
  extra_steps:
    - npm install
```

## Live Reload
Many front-end development frameworks rely on a filesystem watcher that tells the OS when a file is modified and triggers some type of event (usually a browser refresh). Nanobox includes a file-watcher that is disabled by default. You can enable the file-watcher for the duration of `run` using the `fs_watch` setting your boxfile.yml.

```yaml
run.config:
  fs_watch: true
```
