---
title: Engines & Images
---

Engines and images are used to build and configure services on Nanobox. Nanobox can run any app, assuming a appropriate engines and images exists.

### Engines

Engines build and prepare the runtime environment for code components (webs and workers). They consist of just a handful of scripts that install necessary runtimes, run dependency managers (if applicable), and in some cases, auto-detect the needs of the app.

### Images
Images build and configure supporting data services such as databases, caches, job queues, etc. They are simply Docker images that include scripts unique to Nanobox.

### Finding Engines & Images
The [Nanobox shelf](https://shelf.nanobox.io) is a registry of publicly available engines and images. In addition to the engines and images created by the Nanobox team, anybody can create a custom engines and images and add them to the shelf, allowing you and others to find and use them on Nanobox.
