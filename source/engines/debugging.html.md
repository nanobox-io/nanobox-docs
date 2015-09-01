---
title: Debugging
---

By default, deploying an application to Nanobox will only show output relevant to the application's deploy process. Nanobox tries to get out of the way and present information that would be helpful to the developer, while omitting internal processes and verbose information.

Engine developers can toggle verbose output during the deploy output: `nanobox deploy -v`. The `-v` option will inform Nanobox to toggle verbose output. This will include Nanobox internal process information as well as engine-specific data such as generated Boxfile content.
