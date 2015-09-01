---
title: Development Workflow
---

While it may seem daunting to write an engine, Nanobox makes engine development and iteration quick and hassle-free.

## The Vision

Nanobox can mount an engine from your local workstation into an application's Nanobox environment. Meaning, it is not necessary and not recommended to publish an engine to test functionality. Instead, develop your engine locally and incrementally.

## Process

#### Test application

In order to iterate and test your engine locally, create a sample application that your engine can deploy. Within that app's Boxfile, specify the absolute or relative path to your engine in the build section.

Example Boxfile:

```yaml
build:
  engine: '../nanobox-engine-rails'
```

Then launch the app:

```bash
nanobox up
```

You will see in the deploy output that Nanobox has mounted your engine into the Nanobox vm, and that the engine was selected for the deploy process.

#### Iterate

With each change to the engine, simply trigger another deploy from within the sample application's directory:

```bash
nanobox deploy
```
