---
title: Nanobox Dev & Sim
---

Nanobox provides two types of local "environments", each with a unique purpose and characteristics. One is a development environment designed to streamline active development on a codebase. The other is a simulated production environment that emulates production deploys and functionality.

## nanobox dev
The CLI's `dev` command creates and manages your app's local development platform. Your local codebase is mounted directly into your Nanobox VM, allowing you to update code and have those changes immediately apply to your running dev app. `dev` is designed for active development.

When you deploy to a dev platform, Nanobox provisions and starts all data services specified in your [boxfile.yml](/app-config/boxfile/). You can then [console in](/cli/dev/console/) and start your web and worker processes.

`dev` also provides subcommands that allow you to manage your running dev app. More information can be found in the [CLI dev docs](/cli/dev/).

## nanobox sim
The CLI's `sim` command creates and manages a simulated production platform for your app inside your Nanobox VM. Deploys into your sim environment emulate production deploys. All web, worker, and data services specified in your boxfile.yml are provisioned and started. How your app deploys to and runs in your sim platform is how it will deploy to and run in your production platform.

`sim` also provides subcommands that allow you to manage your running sim app. More information can be found in the [CLI sim docs](/cli/sim/).
