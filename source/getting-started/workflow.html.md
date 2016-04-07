---
title: Workflow
---

Nanobox is designed to provide a seamless dev-to-production development cycle. [Nanobox dev](/local-dev/) provisions a local virtual machine (VM) using the same engines, images, and configuration that are used in a production Nanobox environment. When you push your codebase to your version control provider (Github, Bitbucket, etc.), it triggers a deploy to your Nanobox app. That app is than managed and scaled through your Nanobox dashboard.

## Develop & Build Locally
The Nanobox CLI's `dev` command creates virtualized local development environment identical to what is or what will be your production Nanobox environment. The dev/production parity . If it works locally, it will work in production.

The [Local Development documentation](/local-dev/) walks through everything you need to know to use `nanobox dev` to develop locally in a Nanobox VM.

## Collaborate
Since all configuration and architectural information is housed in your `boxfile.yml` and committed to your repo, projects can be shared and actively developed by teams of any scale. Collaborators simply need to clone the project to their local machine, run `nanobox dev`, and Nanobox will provision an identical virtual development environment.

## Push & Deploy
When creating an app, you specify a location from which Nanobox can pull and deploy your application code. As code is pushed, Nanobox can either auto-detect and auto-deploy the update, or you can manually deploy the newest update through your Nanobox dashboard. More information is in the [App Deployment doc](#) .

## Manage Your Production App
Once deployed, apps are managed and scaled in your [Nanobox dashboard](https://dashboard.nanobox.io). For the deep dive into application management, read through the [App Management docs](/app-management/).
