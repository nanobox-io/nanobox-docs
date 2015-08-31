---
title: prepare
---

The prepare script fulfills the [Environment Preparation](/engines/how-engines-work#environment-preparation) phase of the deploy process. It is responsible for "preparing" the environment in which the built codebase will run. Anything required to build or run the provided codebase needs to be installed and configured within this script.

## Usage

#### Script

The prepare script is executed at `$ENGINE_ROOT/bin/prepare`. The prepare script must exist in this location.

#### Args

A single argument `$1` is provided, and is a JSON payload. Check [here](/engines/scripts/#payload) for a description of the payload.

#### Working Directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Objectives

#### Install Build Runtimes & Binaries

Determine which runtimes, binaries, or custom build tools will be necessary for the build process, but not required in the live environment. Once this has been determined, follow the [Installing Binaries](/engines/common-tasks/installing-binaries/) guide on how to install them.

#### Install Production Runtimes & Binaries

Determine which runtimes and binaries are required for the application to run. Once this has been determined, follow the [Installing Binaries](/engines/common-tasks/installing-binaries/) guide on how to install them.

#### Generate Configuration Files

For any of the binaries or runtimes installed, determine if configuration is required. If Apache and Nginx are required, configuration files must be generated for them to work properly. Once the proper configuration has been determined, follow the [Configuration Templates](/engines/common-tasks/template-generation/) guide on how to accomplish this.

#### Fetch & Build Libraries & Dependencies

Many applications and frameworks depend on libraries or other dependencies. Most languages have a dependency management solution baked in or available easily. For ruby, this would be rubygems. For node.js, this would be npm. For python, this would be pip. Any so on and so forth. The prepare script should fetch and build these dependencies.

After determining the recommended approach to install libraries and dependencies, please refer to the [Running Commands](/engines/common-tasks/running-commands/) guide for how to run the command to fetch and build libraries.

#### Update $PATH

Often times a dependency manager will install tools that the application requires to run. These tools may need to available on the `$PATH`. Once you have determined which directory needs to be added to the path, the PATH can be manipulated.

##### Warning!

To properly manipulate the `$PATH`, you will need to consider both the build and live environments. The build environment will have access to the codebase from the [code_dir](/engines/the-environment/#code) whereas the live directory will have access to the codebase from the [live_dir](/engines/the-environment/#live). The most likely approach is to simply re-export the `$PATH` variable in the prepare and build scripts, and persist the path variable for the live environment.

Example:

```bash
# add node_modules/.bin to our $PATH

# re-export for this script
export PATH=$(payload 'code_dir')/node_modules/.bin:$PATH
# persist the new value for the live environment
persist_evar 'PATH' $(payload 'live_dir')/node_modules/.bin:$PATH
```

For more information on how to handle environment variables, please consult the [Environment Variables](/engines/common-tasks/environment-variables/) guide.

#### Persist Environment Variables

Each engine will need to determine how to persist environment variables. An [exhaustive guide](/engines/common-tasks/environment-variables/) has been provided to address this concern.

## Example

coming
