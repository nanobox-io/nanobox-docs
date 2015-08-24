---
title: build
---

The build script fulfills the [Application Build](/engines/how-engines-work#application-build) phase of the deploy process. The purpose of the build script is to "build" your codebase to be run in an isolated container. Generally, this means compiling the code if necessary, and generating configuration files to allow the application to connect to services.

#### Caution

The build script can be run independent of a full deploy. As such, it is important that the build script not be used to prepare the environment or re-install dependencies. Otherwise, an iterative build may take much longer than necessary.

## Usage

#### script

The build script is executed at `$ENGINE_ROOT/bin/build`. The build script must exist in this location.

#### args

A single argument `$1` is provided, and is a JSON payload. Check [here](/engines/scripts/intro#payload) for a description of the payload.

#### working directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Objectives

#### Apply patches

#### Compile or build the codebase

#### Generate application configuration

#### Move the final build into place

## Example
