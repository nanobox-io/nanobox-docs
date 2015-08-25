---
title: prepare
---

The prepare script fulfills the [Environment Preparation](/engines/how-engines-work#environment-preparation) phase of the deploy process. The prepare script is responsible for "preparing" the environment that the built codebase will run in. Anything that will be required to build or run the provided codebase needs to be installed and configured within this script.

## Usage

#### script

The prepare script is executed at `$ENGINE_ROOT/bin/prepare`. The prepare script must exist in this location.

#### args

A single argument `$1` is provided, and is a JSON payload. Check [here](/engines/scripts/intro#payload) for a description of the payload.

#### working directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Objectives

#### Install build runtimes and binaries

#### Install production runtimes and binaries

#### Generate configuration files

#### Fetch and build libraries and dependencies

#### Update $PATH

#### Persist environment variables

## Example
