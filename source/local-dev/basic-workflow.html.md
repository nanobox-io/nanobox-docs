---
title: Basic Workflow
---

### Development
Nanobox is designed to make provisioning local, distributed dev environment incredibly simple. To jump right into development, just run `nanobox dev`.

Nanobox will create a virtual machine (a "nano-box"), auto-detect your application type and provision the environment necessary to run it. Once provisioned, you'll be dropped into an interactive console where you can run and/or develop your app.

### Application Preview
If you're looking to preview your app and don't need an interactive console, you can use the `nanobox run` command. This will create a VM, provision the necessary infrastructure, then start your app. This method, in some cases, may require you to specify an [`exec` in your Boxfile](/boxfile/code-services/#exec). For more information about the Boxfile, check out the [Boxfile](/boxfile/) docs.
