---
title: Local Development
---

Developing code locally is a staple of the modern development workflow, but even still, creating a local dev environment can be tedious and frustrating. Everything from dealing with system cruft and machine-specific nuances to installing multiple version of runtimes and running into dependency conflicts are all too common problems when setting up a local environment. Throw in team members and the intricacies just multiply.

We set out to simplify this problem.

## nanobox dev
The Nanobox CLI includes functionality that provisions a virtual machine (VM) on your local machine, that we lovingly refer to as a "nanobox". The environment inside your nanobox is identical to the environment your app will use in production.

All the runtimes necessary to run your app are installed inside the VM, leaving your local machine clean of any potential cruft. When you're done with the local environment, you can destroy it and everything installed in it goes away.

Environment configuration is specified in your [`boxfile.yml`](/app-config/boxfile/) and is part of your codebase. To spin up an identical dev environment, all you need to do is run `nanobox dev`. The same goes for any of your team members.

## Local Virtualization
Nanobox uses Virtual Box and Docker to provision your nanobox VM and containers for each of your app's components. Services are built and configured using [engines & images](/engines-images/) which are fully open-source and can be created by anyone.
