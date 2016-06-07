---
title: How Engines Work
---

## App Recognition

When an app is deployed to Nanobox Local or Cloud, a build container is provisioned and the codebase is dropped inside. If an engine isn't directly specified in the app's Boxfile, the library of engines will sniff the codebase one by one until an engine recognizes the codebase. Additional information about the "sniff" script can be found in the [sniff script doc](/engines/scripts/sniff).

## Infrastructure Definition

With a compatible engine selected, the engine has the opportunity to inform Nanobox about the auxiliary requirements of the app, such as a database or cache engine necessary to run the app. Depending on the app and framework, this may be simple and static, or dynamic and involved. For instance, if the engine knows that an app using a particular framework will always need a specific type of database, it can simply return a static definition for that database. Otherwise, the engine may scan the codebase for requirements and dynamically generate the infrastructure definition.

The infrastructure definition is actually just a Boxfile. View the [Boxfile docs](/boxfile/) for specifics on how to define specific infrastructure components. Additional information about the "boxfile" script can be found in the [boxfile script doc](/engines/scripts/boxfile).

## Environment Preparation

The engine is responsible for preparing the environment in which the compiled application will run. This may require installing runtimes like ruby, python, php, or node.js. The application may need to install a webserver like apache or nginx. In addition, these runtimes and webservers will likely need configuration. Software installation and configuration needs to occur at this phase.

With the runtimes installed, application dependencies and libraries (pip, npm, bundler, etc) can and should be fetched. Additional information about the "prepare" script can be found in the [prepare script doc](/engines/scripts/prepare).

## Application Build

With the environment prepared, runtimes installed, and dependencies fetched, the engine needs to build and configure the application. For interpreted languages like php, ruby, node.js, and python, there may not be an explicit build. For compiled languages like c and golang, or even byte-code compiled languages like erlang and java, you will run your code build at this phase.

This phase is also where the engine can transform the codebase, configure databases and other external services, or even patch known issues in underlying frameworks. Ultimately, this is where the application is custom-tailored to fit the environment prepared for it. Additional information about the "build" script can be found in the [build script doc](/engines/scripts/build).

## Cleanup

Anything installed specifically for the build phase that is not necessary for the app in production can be removed here. Additional information about the "cleanup" script can be found in the [cleanup script doc](/engines/scripts/cleanup).
