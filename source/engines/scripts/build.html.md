---
title: build
---

The build script fulfills the [Application Build](/engines/how-engines-work#application-build) phase of the deploy process. The purpose of the build script is to "build" your codebase to be run in an isolated container. Generally, this means compiling the code if necessary, and generating configuration files to allow the application to connect to services.

#### Caution

The build script can be run independent of a full deploy. As such, it is important that the build script not be used to prepare the environment or re-install dependencies. Otherwise, an iterative build may take much longer than necessary.

## Usage

#### Script

The build script is executed at `$ENGINE_ROOT/bin/build`. The build script must exist in this location.

#### Args

A single argument `$1` is provided, and is a JSON payload. Check [here](/engines/scripts/#payload) for a description of the payload.

#### Working Directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Objectives

#### Apply Patches

At times the underlying framework may need to be modified or fixed. If, for instance, the underlying framework was designed to work only in a LAMP stack and not with distributed microservices, the framework may need a few adjustments. This can be done by replacing entire files, or just modifying a few lines. You can refer to the [Configuration Templates](/engines/common-tasks/template-generation/) guide for details on how to do this.

#### Compile or Build the Codebase

Build the code. If your application runs in a vm like php, node.js, ruby, or python, this step may not be required. For running commands that build your codebase, refer to the [Running Commands](/engines/common-tasks/running-commands/) guide.

#### Generate Application Configuration

Any configuration that your application requires to run will need to be generated. Database drivers, third-party integrations, etc will need to be configured. You can refer to the [Configuration Templates]() guide for details on how to do this.

##### Tip

Environment variables contain the relevant connection data. When generating configuration files from a template, the script payload can be used as the template payload. Doing so will allow the mustache template to use the environment variables provided in the payload without needing to export or persist them.

#### Move the Final Build into Place

Finally, the engine must move the compiled code into the [live_dir](). Here is an example of how to do this:

```bash
print_bullet "Copying release into live code directory..."
rsync -a $(payload 'code_dir')/rel/ $(payload 'live_dir')
```

## Example

Coming
