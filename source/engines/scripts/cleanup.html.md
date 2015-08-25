---
title: cleanup
---

The cleanup script fulfills the [Cleanup](/engines/how-engines-work#cleanup) phase of the deploy process. Essentially, the cleanup script allows the engine to remove any particles or cruft that are unnecessary in the final environment. This may consist of build particles, binaries, or anything that will cause a production build to be larger than necessary.

#### Note

This script is not run in the local environment. The local environment can run the [build](/engines/scripts/build) script independent of a full deploy, thus a "clean" build environment would likely cause an isolated build to fail. This script is relevant to a production deploy.

## Usage

#### Script

The cleanup script is executed at `$ENGINE_ROOT/bin/cleanup`. The cleanup script must exist in this location.

#### Args

A single argument `$1` is provided, and is a JSON payload. Check [here](/engines/scripts/intro#payload) for a description of the payload.

#### Working Directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Objectives

#### Remove Unecessary Binaries

#### Remove Cruft

## Example
