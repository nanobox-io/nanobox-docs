---
title: Boxfile Quick Reference
---

This doc is meant to act as a quick reference to all available base Boxfile settings for web, worker, and data components. These settings are those made available by Nanobox, but [engines and images](/engines-images/) may make more available. Config options made available by engines & images should be outlined in their documentation.

#### Quick Links
[Code Build Settings](#code-build-settings-in-the-boxfile)  
[Code Deploy Settings](#code-deploy-settings-in-the-boxfile)  
[Dev Settings](#dev-settings-in-the-boxfile)

***Component Settings Per Type***  
[Web Component Settings](#web-component-settings-in-the-boxfile)  
[Worker Component Settings](#worker-component-settings-in-the-boxfile)  
[Data Component Settings](#data-component-settings-in-the-boxfile)  

---

### Code Build Settings in the Boxfile
```yaml
code.build:
  # Engine
  engine: 'my/engine'

  # Config Options Exposed by the Engine
  config:
    my_version: 2.2

  # Dependency Management
  lib_dirs:
    - vendor
    - packages
  reuse_libs: true
```

###### Full Doc
[Boxfile code.build](/app-config/boxfile/code-build/)

---

### Code Deploy Settings in the boxfile
```yaml
code.deploy:
  web.site:
    transform:
      - 'if [ "$ENV" = "prod" ]; then mv config-prod.yml config.yml; fi'
    before_deploy:
      - 'bundle exec rake clear-cache'
    before_deploy_all:
      - 'bundle exec rake register-nodes'
    after_deploy:
      - 'bundle exec rake prime-cache'
    after_deploy_all:
      - 'bundle exec rake prime-local-cache'
```
[Boxfile code.deploy](/app-config/boxfile/code-deploy/)

---

### Dev Settings in the Boxfile
```yaml
dev:
  ignore_lib_dirs: false
```

###### Full Doc
[Boxfile dev](/app-config/boxfile/dev/)

---

### Web Component Settings in the Boxfile
```yaml
web.site:
  # Start Command
  start: "ruby app.rb"

  # Routing
  routes:
    - 'sub:/path/'
    - '/admin/'

  # Port Mapping
  ports:
    - tcp:21:3420
    - udp:53:3000

  # Network Storage
  network_dirs:
    data.storage1:
      - path/to/directoryA
      - path/to/directoryB
    data.storage2:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: "path/to/error.log"

  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"
```
###### Full Doc
[Web Boxfile Settings](/app-config/boxfile/web)

---

### Worker Component Settings in the Boxfile
```yaml
worker.jobs:
  # Start Command
  start: "ruby worker.rb"

  # Network Storage
  network_dirs:
    data.storage1:
      - path/to/directoryA
      - path/to/directoryB
    data.storage2:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: "path/to/error.log"

  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"
```
###### Full Doc
[Worker Boxfile Settings](/app-config/boxfile/worker)  

---

### Data Component Settings in the Boxfile
```yaml
data:
  # Image
  image: nanobox-io/postgresql

  # Config Options Exposed by the Image
  config:
    version: 9.4

```
[Data Component Boxfile Settings](/app-config/boxfile/data)
