---
title: deploy.config
description: The deploy.config section of your boxfile.yml allows you to customize the deploy process.
---

 The `deploy.config` section of your boxfile.yml allows you to customize deploy process.

## Extra Steps
You can add custom steps to the process of building your app, before it is deployed.

```yaml
deploy.config:
  extra_steps:
    - rake assets:precompile
```

## Transform
Once your app is in production, environment variables like where and how to connect to data services are available. If your app can't use environment variables, you can define commands that will inject these values into your static configuration files. These commands will be run just before your web or worker is started.

Additionally, you might also use this phase to shift configuration around for running in production.

```yaml
deploy.config:
  transform:
    web.main:
      - 'sed -i /HOST/$DATA_DB_HOST/g config/database.xml'
      - 'if [ "$ENV" = "prod" ]; then mv config-prod.yml config.yml; fi'
```

## Before & After Hooks
Deploy hooks allow you to run commands before and after new web or worker instances are activated. These are covered in detail in the [Build & Deploy Hooks](/app-config/build-deploy-hooks/) doc. 

In short, you can define hooks to migrate data, prime cache, or run any administrative task automatically on deploy.

```yaml
deploy.config:
  
  # run command on any one instance of web.main component before activation
  before_deploy:
    web.main:
      - 'bundle exec rake clear-cache'

  # run command on all instances of web.main component before activation
  before_deploy_all:
    web.main:
      - 'bundle exec rake register-nodes'

  # run command on any one instance of web.main component after activation
  after_deploy:
    worker.mail:
      - 'bundle exec rake prime-cache'

  # run command on all instances of web.main component after activation
  after_deploy_all:
    worker.mail:
      - 'bundle exec rake prime-local-cache'
```
