---
title: Local Development
---

Developing code locally is a staple of the modern development workflow, but even still, creating a local dev environment can be tedious and frustrating. Everything from dealing with system cruft and machine-specific nuances to installing multiple version of runtimes and running into dependency conflicts are all too common problems when setting up a local environment. Throw in team members and the intricacies just multiply.

We set out to simplify this problem.

## Local Virtualized Environments
Nanobox uses Virtual Box and Docker to provision a virtual machine (VM) on your local machine. The [`dev`](/cli/dev/) command creates and manages a development platform inside your Nanobox VM designed for active development. Your local codebase is mounted into your dev platform, so any changes made to your code immediately apply to your dev app running in your VM.

The [`sim`](/cli/sim/) commands creates and manages a simulated production environment in your local VM. All your app's web, worker, and data services a provisioned and run just as they would in a production app. Sim is designed for testing [code builds](/cli/build/) before deploying them into production.

Both dev and sim platforms provision containers for each of your app's components specified in your [`boxfile.yml`](/app-config/boxfile/). Services are built and configured using the same [engines](/engines/) & [images](/images/) used in production Nanobox apps. Engines and images are fully open-source and can be created by anyone.

All the runtimes necessary to run your app are installed inside your app's containers in your VM, leaving your local machine clean of any potential cruft. When you're done with the dev and sim environments, you can destroy them and everything installed in them goes away.
