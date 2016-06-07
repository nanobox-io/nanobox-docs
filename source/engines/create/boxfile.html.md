---
title: Boxfile
---

The boxfile script fulfills the [Infrastructure Definition](/engines/how-engines-work#infrastructure-definition) phase of the deploy process. The boxfile script should print a valid [Boxfile](/boxfile/) to stdout. The purpose of the boxfile script is to inform Nanobox of how to run the app. This includes instructions for how to start the webs, workers, and even data services.

#### Caution

Without the boxfile script, or with an empty Boxfile printed to stdout, Nanobox will not know how to run the app.

## Usage

#### Script

The boxfile script is executed at `$ENGINE_ROOT/bin/boxfile`. The boxfile script must exist in this location.

#### Args

A single argument `$1` is provided, and is a JSON payload. Check [here](/engines/scripts/#payload) for a description of the payload.

#### Working Directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Objectives

#### Start the App

Although [the environment hasn't been prepared](/engines/how-engines-work#environment-preparation) or [code built](/engines/how-engines-work/#application-build), Nanobox needs to know how to run the app after the deploy is complete. This is done by defining the required web and worker services. Detailed information about how to define the app services can be found in the [Code Services](/boxfile/code-services/) doc.

#### Declare Dependencies

Often an app needs to connect to services such as a database or cache. These dependencies can be declared in the boxfile script and can be as simple or complex as necessary. If the framework always requires a certain set of services, the declaration can be static. Otherwise, a more complex approach may be used which would likely search the codebase for configurations of services. The complete documentation for service configuration can be found in the [Data Services](/boxfile/data-services/) docs.

#### Log Watches

For each file to which an application logs, you should configure a "log watch". Log watches ensure application logs are aggregated and piped into the centralized logger, which can be viewed and consumed via the dashboard and CLI. More information can be found in the [Logs](/getting-started/logs/#including-custom-logs-in-the-unified-log-stream) doc.

#### Cached Libraries

Many languages and frameworks depend on external libraries or dependencies. The process of fetching, resolving, and building dependencies can take some time. To reduce this overhead between subsequent deploys, these directories can be cached and re-used between deploys. While you **can** manage this yourself in the [prepare](/engines/scripts/prepare/) script, Nanobox provides a shortcut for this common scenario: the `lib_dirs` property within the build section of the Boxfile. More detailed information can be found in [Dependency Management Section of the Boxfile build](/boxfile/build#dependency-management) doc.

## Examples

#### Simple Static Site

```bash
#!/bin/bash

cat <<-END
web.site:
  exec: nginx

END
```

#### Simple, Predictable Framework with Known Dependencies

```bash
#!/bin/bash

cat <<-END
web.site:
  exec: apache

mysql1:
  name: catalog

END
```

#### Simple App with Cached Libraries

```bash
#!/bin/bash

cat <<-END
build:
  lib_dirs:
    - vendor
    - .bundle

web.site:
  exec: bundle exec ruby app.rb

END
```

#### General Purpose Framework with Unknown Requirements

```bash
#!/bin/bash

# todo: wait for nos render to stdout
```
