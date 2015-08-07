---
title: Deploys
---

Deploys with nanobox allow you to apply changes to both code and your app's environment on the fly. When deploying to your nanobox VM, the following happens.

### Sniff & Prepare
Nanobox "sniffs" your apps code to check if an [engine](/getting-started/engines/) has been specified in your [Boxfile](/getting-started/boxfile/). It one hasn't, it will run through the standard libraries of engines to find the best match (which all happens very quickly). Once the engine is loaded, it will generate a Boxfile by merging the Boxfile included in the project with an engine-generated Boxfile. Nanobox then begins to prepare the environment.

### Build
In the build phase of the deploy process, nanobox loads your code's runtime environment based on settings specified in the generated Boxfile, then prepares your code for deploy. This includes loading project dependenecies, code modifaction specified by the engine, etc. The build is where engines really apply their magic.

### Cleanup & Package
Once build is complete, nanobox will remove anything from the build runtime not necessary in live runtime (defined by the engine), then package your code into a read-only deployable package.

### Provision Services
Nanobox then provisions all services included in the generated Boxfile with their specified configuration options. On the first deploy, all code and data services are provisioned. On susequent deploys, only data services (databases, caches, storage, etc.) that are new in the Boxfile are provisioned. All existing data services are unnaffected by deploys once provisioned, unless a configuration change for the data service is detected in the Boxfile. In this case, a new data service is provisioned with the updated configuration and replaces the existing service.

**Note:** When a new data service is provisioned, all data is wiped, so you'll either need to re-seed or re-import the data.

### Deploy Packaged Code to Code Services
Once all services have been provisioned, the packaged code is deployed to code services and any updates to the runtime configuration are applied to the running app.