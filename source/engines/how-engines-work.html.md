---
title: How Engines Work
---

## App recognition

When an app is deployed to Nanobox local or production, a build container is provisioned and the codebase is dropped inside. If an engine isn't directly specified in the app's Boxfile, the library of engines will sniff the codebase one by one, until an engine recognizes the codebase. Additional information about the "sniff" script can be found [here](/engines/scripts/sniff)

## Infrastructure Definition

With a compatible engine selected, the engine now has the opportunity to inform Nanobox about the auxiliary requirements of the app. This would be external services like a database or a cache engine that this particular app requires to run. Depending on the app and framework, this may be simple and static, or it may be dynamic and very involved. For instance, if the engine knows that an app using a particular framework will always need a specific type of database, it can simply return a static definition for that database. Otherwise, the engine may scan the codebase for requirements and dynamically generate the infrastructure definition. The infrastructure definition is actually just a Boxfile, so you can [check here](/boxfile/intro) for specifics on how to define specific infrastructure components. Additional information about the "boxfile" script can be found [here](/engines/scripts/boxfile)

## Environment Preparation

The engine is responsible for preparing the environment that the compiled application will run within. This may require installing runtimes like ruby, python, php, or node.js. The application may need to install a webserver like apache or nginx. In addition, these runtimes and webservers will likely need configuration. Software installation and configuration will need to occur at this phase. Finally, with the runtimes installed, application dependencies and libraries (pip, npm, bundler, etc) should be fetched here. Additional information about the "prepare" script can be found [here](/engines/scripts/prepare)

## Application Build

With the environment prepared, runtimes installed, and dependencies fetched, the engine will need to build and configure the application. For interpreted languages like php, ruby, node.js, and python there may not need to be an explicit build. For compiled languages like c and golang, or even byte-code compiled languages like erlang and java, you will run your code build at this phase. This phase is also where the engine can transform the codebase, configure databases and other external services, or even patch known issues in underlying frameworks. Ultimately, this phase is where the application is custom-tailored to fit the environment that was previously prepared. Additional information about the "build" script can be found [here](/engines/scripts/build)

## Cleanup

Anything that was installed specifically for the build phase and is not needed to run the app in production can be removed here. Additional information about the "cleanup" script can be found [here](/engines/scripts/cleanup)
