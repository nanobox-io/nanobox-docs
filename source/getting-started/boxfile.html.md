---
title: Boxfile
---

**The Boxfile is King**. It is a small yaml config file housed in the root of your project's repo that contains all configuration related to your app’s deployment and infrastructure. The Boxfile allows you to custom-configure your app's environment to your project's specific needs.

In many ways, the Boxfile acts as a "seed" file for your infrastructure. It gives you the ability to launch services and add things such as environment variables and cron jobs on deploy. On each deploy, all services and settings defined in the your Boxfile are checked against those already existing in your app. If a service or setting in your Boxfile does not already exist, it will automatically be created.

####Sample Boxfile
```yaml
env:
  ENVIRONMENT: production

build:
  engine: 'ruby'
  lib_dir: vendor
  reuse_libs: true
  
web1:
  name: site
  network_dirs:
    storage1:
      - usr/uploads

worker1:
  name: image_processor
  exec: 'ruby workers/image_processor.rb'
  
postgresql1:
  name: app-db
  
nfs1:
  name: app-storage
  
redis1:
  name: queue-and-sessions  
```

For the deep dive into the Boxfile, read through the [Boxfile docs](/boxfile/).