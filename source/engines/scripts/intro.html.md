---
title: Scripts
---

A Nanobox engine is literally the sum of the bin scripts. When an app is deployed, Nanobox attempts to determine an engine. Once the engine has been selected, the deploy process is executed across 4 phases. A script must exist within the engine to properly determine if the engine applies to the app, and to handle each phase. For more details on the overview of the deploy process, refer to the [How Engines Work](/engines/how-engines-work) guide.

## General Guidelines

#### bash

It is **highly** recommended that the scripts be written in bash. Here are a few reasons to consider:

1. Bash is available in every Nanobox image.
2. The [nos](/engines/common-tasks) framework is available to bash, and will greatly simplify engine development.
3. Bash is a common language for server scripting, and assistance across engines can be aided with a unified language.

While it is possible to write scripts in an alternative language, it is highly discouraged. In addition, an alternative language or runtime will need to be installed prior to executing the scripts. This is possible, but since we don't recommend it, the processes will not be documented. If you really need to use a different language, hop in the #nanobox irc to find out how.

#### executable

Don't forget to chmod the scripts to be executable. The scripts are run directly, so the scripts will fail if they aren't executable. This can be done easily with the following command, executed from the engine root:

```bash
chmod +x bin/*
```

#### no extension

The scripts are executed from Nanobox directly, without an extension. Adding an extension will cause Nanobox to fail to find the script.

## Payload

With the exception of the [sniff](/engines/scripts/sniff) script, all of the scripts will be called with a single argument, a JSON payload. A single argument containing a payload is used instead of multiple arguments or even environment variables mostly due to the potential for nested data structures and the dynamic nature of the attributes. JSON is used as it is a simple data structure that most languages can natively encode and decode.

#### JSON in bash?

Right, bash doesn't actually handle JSON. In fact, bash doesn't handle any common structured object notation. The Nanobox team created [SHON](https://github.com/pagodabox/shon) "SHell Object Notation", a nested data structure that bash can work with, and a tool to convert from JSON to SHON. Check out the project and the documentation if you're interested. Though, it's unlikely that you'll need to work with SHON, as the [nos](/engines/common-tasks) framework performs the translation and exposes helpers that access the data vicariously on your behalf.

#### Payload Data

The JSON payload provided as the first argument to the script contains the following keys:

- **code_dir** : Path to the code staging directory. This is a copy of the code, where the transformation, build or compile should happen.
- **build_dir** : Path the the directory where binaries, runtimes, and configuration is stored. (ie: ruby, nginx, apache.conf, etc) This directory is available in the production environment.
- **live_dir** : This is the directory where the final build should be copied into. This directory is also available in the production environment.
- **cache_dir** : A cache store that is persistent between deploys.
- **etc_dir** : A sub-directory within the build_dir. This is where runtime configurations should live. (ie: apache.conf, nginx.conf, unicorn.rb etc).
- **env_dir** : Path to the directory where environment variables to be made available to the production environment live. For more information, see [here](/engines/common-tasks/environment-variables).
- **app** : The name of the app.
- **env** : A list of key/value pairs representing environment variables that can be made available to the build or production environment. For more information, see [here](/engines/common-tasks/environment-variables).
- **dns** : A list of dns aliases that are associated with this app. May be used to generate webserver configurations.
- **port** : The tcp port that this app should bind to, for the app to recieve traffic from the load balancer.
- **boxfile** : The build section of the Boxfile provided by the application.
- **platform** : "local" or "production". Can be used to conditionally tailor the deploy for the specified platform.

## Common Tasks and Workflow

How to use the data from the payload above, as well as common scenarios and workflows are addressed in full in the [Common Tasks](/engines/common-tasks/intro) doc.
