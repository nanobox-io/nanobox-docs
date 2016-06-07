---
title: Engines & Images
---

Engines and images are used to build and configure services on Nanobox. Nanobox can run any app, assuming a appropriate engines and images exists.

### Engines

Engines build and prepare the runtime environment for code components (webs and workers). They consist of just a handful of scripts that install necessary runtimes, run dependency managers (if applicable), and in some cases, auto-detect the needs of the app.

### Images
Images build and configure supporting data services such as databases, caches, job queues, etc. They are Docker images that include scripts unique to Nanobox.
