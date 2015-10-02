---
title: Why Nanobox?
---

A fundamental problem faced in application development is environment consistency. How does one make their local dev environment perfectly match their production environment? And this opens up an even tougher question - How do I make the environment setup process consistent, repeatable, fast, and most importantly, easy?

**Enter Nanobox**.

### Isolated Virtual Environment on Your Local Machine
Nanobox uses Vagrant and Docker to create an isolated virtual environment on your local machine. This environment is completely self-contained and has no connection to or interaction with your local operating system, mitigating any potential issues stemming from OS nuances. All environment and service configuration is completely isolated inside of the virtualized environment.

Nanobox mounts your code directory from your local machine into the virtual environment. Any changes to your code are reflected in your running Nanobox app.

### Automated Environment Provisioning & Deploys
Nanobox provisions and builds both the virtual environment and application-level code & data services automatically and quickly. Nanobox Engines can auto-detect what services are needed, then automatically create them within the app's virtual network.

### Reusable & Customizable
[Engines](/getting-started/engines) are the beating heart of Nanobox. They provide the runtimes for your app's services, include auto-detection scripts ("[sniff](/engines/scripts/sniff)"), and make available configuration options. Engines can be built, published, and used by anyone.

Provisioning identical local environments across your entire dev team's machines is as simple as installing Nanobox, including a Boxfile in your repo (optional), and running `nanobox dev`.