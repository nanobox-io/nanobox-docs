---
title: deploy.config
seo_title: Configure Deploys in the boxfile.yml
description: The deploy.config section of your boxfile.yml allows you to customize the deploy process.
keywords: deploy config, deploy process, custom deploy process
---

The `deploy.config` section of your boxfile.yml allows you to customize deploy process.

## Extra Steps
`extra_steps` run locally as your app is prepared and compiled for deploy. Everything is writable, but you do not have access to environment variables or data services. File changes are only made inside the deployable package and will not change your local codebase.

```yaml
deploy.config:
  extra_steps:
    - mv config-prod.yml config.yml
```

## Transform
`transform` hooks run after your code has been deployed to your live app, but before everything is locked down with read-only permissions and distributed into new containers/servers. Your codebase is fully writable and you have access to environment variables associated with your live app. However, you _*cannot*_ access live data components.

`transform` hooks should primarily be used to modify config files or other environment-specific filesystem changes that use environment variables.

```yaml
deploy.config:
  transform:
    - 'sed -i /HOST/$DATA_DB_HOST/g config/database.xml'
    - 'if [ "$ENV" = "prod" ]; then mv config-prod.yml config.yml; fi'
```

## Before & After Live Hooks
Deploy hooks allow you to run commands before and after new web or worker instances begin accepting live requests. These are covered in detail in the [Build & Deploy Hooks](/app-config/build-deploy-hooks/) doc.

In short, you can define hooks to migrate data, prime cache, or run any administrative task automatically on deploy.

```yaml
deploy.config:

  # run command on any one instance of web.main component before activation
  before_live:
    web.main:
      - 'bundle exec rake clear-cache'

  # run command on all instances of web.main component before activation
  before_live_all:
    web.main:
      - 'bundle exec rake register-nodes'

  # run command on any one instance of web.main component after activation
  after_live:
    worker.mail:
      - 'bundle exec rake prime-cache'

  # run command on all instances of web.main component after activation
  after_live_all:
    worker.mail:
      - 'bundle exec rake prime-local-cache'
```

## Hook Timeout
The `hook_timeout` config lets you set a timeout for your deploy hooks. _Hook timeouts are specified in seconds._

If the timeout is reached in a `before_live` or `before_live_all` hook, you will be given the option to cancel or retry. If the timeout is reached in an `after_live` or `after_live_all` hook, you will be given the option to skip the hook in your dashboard.

```yaml
deploy.config:
  hook_timeout: 300
```
