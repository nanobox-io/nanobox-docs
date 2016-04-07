---
title: Introduction to Engines & Images
---

### What Exactly are Engines & Images?
Engines and Images build and configure the runtimes and supporting services necessary to run your app.

#### Engines
Engines are simply a collection of scripts that build and prepare your **code's runtime environment**. They install required binaries, are able to run dependency managers, implement configuration options specified in your `boxfile.yml`, even detect the language framework being used.

#### Images
Images are used to provision and configure **data components** for your app. They are essentially Docker images that include "hooks" that tell Nanobox how the service should be configured, started, and function.

### Register, View, Search Engines & Images
All engines and images can be registered, viewed, and searched on [shelf.nanobox.io](https://shelf.nanobox.io).

### Build & Use Your Own
If you can't find an engine or image that suits your needs, you can build and use your own. Anybody can build engines and images. You may be the engineer of a new language and want to make it available to Nanobox users, or you may want to use your own custom database. Or you may just have an app with very specific needs. Either way, anybody can build custom engines and images.

The following docs provide more information about building custom engines and images:

[Creating an Engine](/engines-images/create-engine/)  
[Creating an Image](/engines-images/create-image/)
