---
title: build
---

When code is deployed to a nanobox apps, a "build" instance is provisioned in which your code is built and prepped for deploy. The `build` section of the Boxfile allows you to configure your build environment and how your code is built. Engines provide default build settings, but user specified settings will override the defaults.

#### Overview of Build Boxfile Settings

```yaml
build:
  engine: "my/engine"
   
  # Build Hooks
  build_hook_timeout: 600
  before_exec:
    - "mv production/config.rb config.rb"
  exec:
    - "bundle install --deployment"
  after_exec:
    - "curl -O js/jquery.js http://code.jquery.com/jquery-2.1.1.min.js"
   
  # Libary / Package / Dependency Configs
  lib_dir: vendor
  reuse_libs: true
```

## Engine
The `engine` config allows you to specify which [engine](/getting-started/engines/) to use to build your code. If no engine is provided, nanobox will "sniff" your code and determine the best fit.

#### engine
```yaml
build:
  engine: 'username/engine-name'
```

## Build Hooks
Build hooks allow you to customize how your code is built and prepped for deploy.

### before_exec
before_exec hooks run just after your code has been cloned into a build instance and git submodules have been loaded. These can be used to prepare your code for its build process.

### exec
The exec runs build scripts for your app. These are typically used to load dependencies into your code base.

### after_exec
after_exec hooks run after all dependecies have been loaded into your app, but before your code is deployed to read-only instances.

#### Build Hooks in the Boxfile
```yaml
build:
  before_exec:
    - "mv production/config.rb config.rb"
    - "echo Let\'s do this\!"
  exec:
    - "bundle install --deployment"
  after_exec:
    - "curl -O js/jquery.js http://code.jquery.com/jquery-2.1.1.min.js"
```

### Build Hook Timeout
`build_hook_timeout defines a timeout (in seconds) for you app's build hooks. If a build hook times out, it will exit and the build will abort.

#### build\_hook\_timeout
```yaml
build:
  build_hook_timeout: 600
```

## Dependency Management
The following options allow you to control libraries, packages, & dependencies that are loaded during the build process.

### Library Directory
The `lib_dir` config tells nanobox where your dependency manager stores its dependencies. After the dependencies have been downloaded, the `lib_dir` is packaged into a “library archive” and used on subsequent deploys (if [`reuse_libs`](#reuse-libs) is set to 'true').

**Note:** It is possible to have multiple library directories. All directory paths should be relative to the root of your repo.

#### lib_dir
```yaml
# Single lib_dir
build:
  lib_dir: vendor

# Multiple lib_dir's
build:
  lib_dir:
    - vendor
    - packages
```

## Reuse Libs
The `reuse_libs` config allows you to specify whether or not you want a library archive to be stored and reused on subsequent deploys. If set to 'false', libraries and packages will be downloaded on all deploys, increasing build/deploy times.

#### reuse_libs
```yaml
build:
  reuse_libs: true
```

