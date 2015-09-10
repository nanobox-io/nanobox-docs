---
title: Going from Local to Production
layout: prod
---

Differences between development and production environments has always been a challenge when managing applications. Nanobox provides perfect parity between local Nanobox environments and Nanobox production environments.

### Infrastructure
Both Nanobox and Nanobox Production provision infrastructures and deploy code using [engines](/getting-started/engines/) and [Boxfile](/getting-started/boxfile/) configuration options. All the information necessary to configure and provision your app's infrastructure is committed to your repo. This means that by simply deploying code developed in a local Nanobox environment to a Nanobox Production app, an identical infrastructure will be provisioned.

### Data
Production data will still need to be migrated to your production database (unless seeded through a [deploy hook](/boxfile/code-services/#deploy-hooks)). The Nanobox CLI provides a way for remotely connecting to and managing your production databases through the [`nanobox prod tunnel`](/production/cli/tunnel/) command. Production data can be migrated into your database through the established tunnel.
