---
title: Nanobox Dev & Sim
---

Nanobox provides two types of local environments, each with unique purposes and characteristics. One is a development environment designed to streamline active development on a codebase. The other is a simulated production environment that emulates production deploys and functionality.

## nanobox dev
The `dev` command creates and manages your app's local development environment. Your local codebase is mounted directly into your development container, allowing you to update code and have those changes immediately apply to your running dev app. `dev` is designed for active development.

When you deploy to a dev environment, Nanobox provisions and starts all data services specified in your [boxfile.yml](/app-config/boxfile/). You can then [console in](/cli/dev/console/) and start your web and worker processes.

`dev` also provides subcommands that allow you to manage your running dev app. More information can be found in the [dev docs](/cli/dev/).

## nanobox sim
The CLI's `sim` command creates and manages a simulated production environment for your app inside your Nanobox container. Deploys into your sim environment emulate production deploys. All web, worker, and data services specified in your boxfile.yml are provisioned and started just as they would if deployed to a production app. If it works in sim, it will work in production.

`sim` also provides subcommands that allow you to manage your running sim app. More information can be found in the [sim docs](/cli/sim/).
