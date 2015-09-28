---
title: Development Workflow
---

While it may seem daunting to write an engine, Nanobox makes engine development and iteration quick and hassle-free.

## The Vision

Nanobox can mount an engine from your local workstation into an application's Nanobox environment. Its not necessary and **not recommended to publish an engine to test functionality**. Instead, develop your engine locally and incrementally.

## Process

### Test Application

In order to iterate and test your engine locally, create a sample application your engine can deploy. Within that app's Boxfile, specify the absolute or relative path to your engine in the build section.

#### Example Local Engine Path in the Boxfile:

```yaml
build:
  engine: '../nanobox-engine-rails'
```

#### Then launch the app:

```bash
$ nanobox dev
```

You will see in the deploy output that Nanobox has mounted your engine into the Nanobox VM, and the engine was selected for the deploy process. Once provisioned, you'll be dropped into an interactive console.
