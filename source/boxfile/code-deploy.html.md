---
title: code.deploy
description: The code.deploy section of your boxfile.yml allows you to modify code run hooks during the deploy process.
---

The `code.deploy` section of your boxfile.yml allows you to transform your code before being being pushed into a live environment, as well as define hooks that run before and after deploy.

## Transform
The `transform` option allows to modify the code before being pushed into a live environment. At this point of the deploy process, your codebase is fully writable. This is the first step of the build/deploy process that environment variables are made available. If code in your repo needs to be modified based on an environment variable, it needs to be done as a transform.

#### transform in the boxfile.yml
```yaml
code.deploy:
  transform:
    - 'if [ "$ENV" = "prod" ]; then mv config-prod.yml config.yml; fi'
```

## Before & After Deploy Hooks
Deploy hooks allow you to run commands before and after new nodes begin handling requests. These are covered in detail in the [Build & Deploy Hooks](/app-config/build-deploy-hooks/) doc.

#### Deploy Hooks in the boxfile.yml
```yaml
code.deploy:
  before_deploy:
    - 'bundle exec rake clear-cache'

  before_deploy_all:
    - 'bundle exec rake register-nodes'

  after_deploy:
    - 'bundle exec rake prime-cache'

  after_deploy_all:
    - 'bundle exec rake prime-local-cache'
```
