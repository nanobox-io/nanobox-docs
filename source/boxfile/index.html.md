---
title: Boxfile
---

The Boxfile is yaml config file housed in the root of your project's repo that defines all configuration related to your app’s deployment and infrastructure. It allows you to custom-configure your app's environment to your project's specific needs.

#### Important Things to Know About the Boxfile
- Your Boxfile must be named "Boxfile" (capital B and no file extension) in order to be recognized.
- The Boxfile must be placed at the root of your project's repo.
- The Boxfile must be valid yaml markup. You can brush up on your yaml at [yaml.org](http://yaml.org/start.html) or check your syntax at [yamllint.com](http://www.yamllint.com/).
- Boxfiles are not required. If not included in your project, Nanobox will attempt to auto-detect the needs of your app.
- Build config options available in the Boxfile are defined by the [engine](/engines/) you're using.

####Sample Boxfile
```yaml
env:
  ENVIRONMENT: production

build:
  engine: "ruby"
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

## The Boxfile Structure

Your app is made up of services. Simply put, a service is a piece of your app's infrastructure tasked with a specific function. Each service is configured separately in the Boxfile.

Every service in your app has a service id. For example: web1, web2, mysql1, postgresql1, nfs1, redis1, worker1, etc. Service IDs consist of the service type and a number (web1, web2, postgresql1, mongodb2, ect.). **Service IDs are not arbitrary**. They define the type of the service and tie service-specific configs to actual running instances.

All configuration is unique to a service ID. Anything specified under a service ID will only apply to that specific service. For example, configs defined in web1 will not apply to web2. 

#### Boxfile Structure

```yaml
web1: #<---------------------- Service ID
  name: site              #|
  network-dirs:           #|-- Service Settings
    - usr/uploads         #|
  
  
postgresql1: #<--------------- Service ID
  name: site-db           #|
  version: 9.4            #|-- Service Settings
                          #|
```

#### Things to Note About yaml
- **Yaml is very picky about indentation**. Indentation is what is used to define the relationship structure of information in your Boxfile.
- **Tabs are not valid yaml**. All indendation should be done using double spaces.

## The Boxfile Can Be Used as an Infrastructure "Seed" File
In many ways, the Boxfile acts as a "seed" file for your infrastructure. It gives you the ability to launch services and add things like environment variables and cron jobs on deploy, simply by including them in the Boxfile. On each deploy, all services and settings defined in the your Boxfile are checked against those already existing in your app. If a service or setting in your Boxfile does not already exist, it will automatically be created.

## Sections of the Boxfile
Boxfiles consist of a handful of sections or "nodes": env, build, code services (webs & workers), and data services (mysql, postgresql, redis, etc). These are covered in detail in the next few docs, but here are some quick descriptions:

[`env`](/boxfile/env/) - Defines environment variables for your application.  

[`build`](/boxfile/build/) - Defines the build environment for the app and what commands should run to prep the code for deploy.  

[`web#, worker#`](/boxfile/code-services/) - Defines settings unique to each code service.  

[`postgresql#`, `redis#`, etc.](/boxfile/data-services/) - Defines settings unique to a specific data service.  


