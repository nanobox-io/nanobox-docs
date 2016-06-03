---
title: Dev Workflow
---

Nanobox is designed to provide a seamless dev-to-production development cycle. [`nanobox dev`](/local-dev/) provisions a local virtual machine (VM) using the same engines, images, and configuration that are used in a production Nanobox app. When your code is tested and ready for production, build and deploy it your live Nanobox app.

## Develop & Build Locally
The Nanobox CLI's `dev` command creates a virtual local dev environment identical to what is or what will be your production Nanobox environment. Develop in confidence knowing that if it works locally, it will work in production.

Once you're at a point where you'd like to push your code into production, the `build` command will prepare and build your code into a deployable package.

The [Local Development documentation](/local-dev/) walks through the entire local development workflow.

## Deploy
With a build prepared, the `deploy` command will push and deploy the generated build into your production environment. More information about deploying to Nanobox is available in the [Deploying Code](/getting-started/deploy-code/) doc.

## Manage & Scale Your Production App
Once deployed, apps are managed and scaled in your [Nanobox dashboard](https://dashboard.nanobox.io). For the deep dive into application management, read through the [App Management docs](/app-management/).

## Collaborate
Since all configuration and architectural information is housed in your `boxfile.yml`, apps can be easily shared and actively developed by teams of any scale without having to worry about the nuances of different machines. Collaborators simply need a copy of the project on their local machine and run `nanobox dev`. Nanobox will provision an identical virtual dev environments on all machines.
