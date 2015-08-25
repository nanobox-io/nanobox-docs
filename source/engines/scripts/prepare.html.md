---
title: prepare
---

The prepare script fulfills the [Environment Preparation](/engines/how-engines-work#environment-preparation) phase of the deploy process. It is responsible for "preparing" the environment in which the built codebase will run. Anything required to build or run the provided codebase needs to be installed and configured within this script.

## Usage

#### Script

The prepare script is executed at `$ENGINE_ROOT/bin/prepare`. The prepare script must exist in this location.

#### Args

A single argument `$1` is provided, and is a JSON payload. Check [here](/engines/scripts/intro#payload) for a description of the payload.

#### Working Directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Objectives

#### Install Build Runtimes & Binaries

#### Install Production Runtimes & Binaries

#### Generate Configuration Files

#### Fetch & Build Libraries & Dependencies

#### Update $PATH

#### Persist Environment Variables

## Example
