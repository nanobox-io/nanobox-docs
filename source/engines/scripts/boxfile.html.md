---
title: boxfile
---

The boxfile script fulfills the [Infrastructure Definition](/engines/how-engines-work#infrastructure-definition) phase of the deploy process. The boxfile script should print a valid [Boxfile](/boxfile/intro) to stdout. The purpose of boxfile script is to inform Nanobox of how to run the app. This includes instructions for how to start the webs, workers, and even data services.

#### Caution

Without the boxfile script, or with an empty Boxfile printed to stdout, Nanobox will not know how to run the app.

## Usage

#### script

The boxfile script is executed at `$ENGINE_ROOT/bin/boxfile`. The boxfile script must exist in this location.

#### args

A single argument `$1` is provided, and is a JSON payload. Check [here](/engines/scripts/intro#payload) for a description of the payload.

#### working directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Objectives

#### Cached libraries

Many languages and frameworks depend on external libraries or dependencies. The process of fetching, resolving, and building dependencies can take some time. To reduce this overhead between subsequent deploys, these directories can be cached and re-used between deploys. While you **can** manage this yourself in the [prepare](/engines/scripts/prepare) script, Nanobox provides a shortcut for this common scenario: the lib_dirs property within the build section. More detailed information can be found [here](/boxfile/build#dependency-management).

#### Start the app

Though we haven't [prepared the environment](/engines/how-engines-work#environment-preparation) or [built the code yet](/engines/how-engines-work#application-build), we need to tell Nanobox how to run this app after the deploy is complete. This is done by defining the required web and worker services. Detailed information about how to define the app services can be found [here](/boxfile/code-services).

#### Declare dependencies

Often an app will need to connect to services such as a database. The boxfile script can be used to declare those dependencies. This can be as simple or complex as necessary. If the framework will always require a certain set of services, the declaration can be static. Otherwise, a more complex approach may be used which would likely search the codebase for configurations of services. The complete documentation for service configuration can be found [here](/boxfile/data-services/).

## Examples

#### Simple, static site

```bash
#!/bin/bash

cat <<-END
web1:
  exec: nginx

END
```

#### Simple, predictable framework with known dependencies

```bash
#!/bin/bash

cat <<-END
web1:
  exec: apache

mysql1:
  name: catalog

END
```

#### Simple app with cached libraries

```bash
#!/bin/bash

cat <<-END
build:
  lib_dirs:
    - vendor
    - .bundle

web1:
  exec: bundle exec ruby app.rb

END
```

#### General purpose framework with unknown requirements

```bash
#!/bin/bash

# todo: wait for nos render to stdout
```
