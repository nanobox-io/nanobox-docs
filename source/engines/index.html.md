---
title: Engines
---

Engines are responsible for configuring the app's environment and compiling or building the app's codebase. Nanobox can run any app, assuming a compatible engine exists.

Nanobox engines are not proprietary, and the source code is available for public consumption on [Github](https://github.com/nanobox-io?utf8=%E2%9C%93&query=nanobox-engine). In addition to the engines created by the Nanobox team, anybody can create a custom engine to be used on Nanobox.

### What is an Engine, Literally?

An engine is just a handful of bash scripts and an Enginefile. The engine will need a corresponding script for each phase of the build process inside the engine's bin directory. Further specifics about each script can be found [here](/engines/scripts/) and additional information regarding the Enginefile can be found in the [Enginefile doc](/engines/enginefile).
