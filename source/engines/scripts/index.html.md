---
title: Scripts
---

A Nanobox engine is literally a collection of scripts. When an app is deployed, Nanobox attempts to determine the most appropriate engine to use. Once the engine has been selected, the deploy process is executed across 4 phases. A script must exist within the engine to properly determine if the engine applies to the app and to handle each phase. For more details on the overview of the deploy process, refer to the [How Engines Work doc](/engines/how-engines-work/).

## General Guidelines

#### Bash

It is ***highly*** recommended that engine scripts be written in bash. Here are a few reasons to consider:

1. Bash is available in every Nanobox image.
2. The [nos](/engines/common-tasks/) framework is available to bash, and will greatly simplify engine development.
3. Bash is a common language for server scripting, and assistance across engines can be aided with a unified language.

While it is possible to write scripts in an alternative language, it is highly discouraged. In addition, an alternative language or runtime will need to be installed prior to executing the scripts. This is possible, but since we don't recommend it, the processes will not be documented. If you really need to use a different language, hop in the [#nanobox irc](http://webchat.freenode.net/?channels=nanobox&uio=d4) to find out how.

#### Executable

**Don't forget to chmod the scripts to be executable.** The scripts are run directly, so the scripts will fail if they aren't executable. This can be done easily with the following command, executed from the engine root:

```bash
$ chmod +x bin/*
```

#### No Extension

The scripts are executed from Nanobox directly, without an extension. Adding an extension will prevent Nanobox from finding the script.

## Payload

With the exception of the [sniff](/engines/scripts/sniff) script, all engine scripts are called with a single argument – a JSON payload. This is done because of the potential for nested data structures and the dynamic nature of attributes. JSON is used because of its simple data structure which most languages can natively encode and decode.

#### JSON in bash?

Right, bash doesn't actually handle JSON. In fact, bash doesn't handle any common structured object notation. The Nanobox team created [SHON](https://github.com/nanopack/shon) ("SHell Object Notation"), a nested data structure that bash can work with, and a tool to convert from JSON to SHON. Check out the project and the documentation if you're interested. Though, it's unlikely that you'll need to work with SHON, as the [nos](/engines/common-tasks/) framework performs the translation and exposes helpers that access the data for you.

#### Payload Data

The JSON payload provided as the first argument to the script contains the following keys:

- **code_dir** : Path to the code staging directory. This is a copy of the code, where the transformation, build or compile should happen.

- **deploy_dir** : Path the the directory where binaries, runtimes, and configuration is stored. (ie: ruby, nginx, apache.conf, etc) This directory is available in the production environment.

- **live_dir** : This is the directory into which the final build will be copied. This directory is also available in the production environment.

- **cache_dir** : A cache store that is persistent between deploys.

- **etc_dir** : A sub-directory within the build_dir. This is where runtime configurations should live. (ie: apache.conf, nginx.conf, unicorn.rb etc).

- **env_dir** : Path to the directory where environment variables available to the production environment are stored. For more information, see [here](/engines/common-tasks/environment-variables/).

- **app** : The name of the app.

- **env** : A list of key/value pairs representing environment variables available to the build or production environment. For more information, see [here](/engines/common-tasks/environment-variables/).

- **dns** : A list of dns aliases associated with the app. May be used to generate webserver configurations.

- **port** : The tcp port to which the app should bind in order to receive traffic from the load balancer.

- **boxfile** : The build section of the Boxfile provided by the application.

- **platform** : "desktop" or "cloud". Can be used to conditionally tailor the deploy for the specified platform.

- **newrelic_key** : When deploying to Nanobox Cloud, users are able to provide their New Relic License Key in their dashboard. This key is required for the New Relic agent to function. `newrelic_key` is the user-provided license key.

## Common Tasks & Workflow

How to use the data from the payload above, as well as common scenarios and workflows are addressed in full in the [Common Tasks](/engines/common-tasks/) docs.
