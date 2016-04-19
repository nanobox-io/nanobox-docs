---
title: Boxfile
---

The boxfile is a yaml config file that allows you to custom-build & configure your app's environment to your project's specific needs. It must be included in the root of your project's repo and named `boxfile.yml`.

In many ways, the boxfile acts as a "seed" file for your infrastructure. It's where you specify what components your app needs as well as  specific configuration options.

#### Sample boxfile.yml
```yaml
code.build:
  engine: nanobox-io/ruby
  config:
    ruby_runtime: ruby-2.2
  lib_dirs:
    - vendor
  reuse_libs: true

web.site:
  start: 'bundle exec puma -c config/puma.conf'
  network_dirs:
    data.storage:
      - usr/uploads

worker.jobs:
  start: 'ruby workers/image_processor.rb'
  network_dirs:
    data.storage:
      - usr/uploads

data.db:
  image: nanobox-io/postgresql

data.storage:
  image: nanobox-io/gluster

data.queue:
  image: nanobox-io/redis  
```

For the deep dive into the boxfile, read through the [Boxfile docs](/app-config/boxfile/).
