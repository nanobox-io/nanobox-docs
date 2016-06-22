---
title: dev deploy
---

The `dev deploy` command deploys a [generated build package](/cli/build/) into your local Nanobox VM. All data services are provisioned and started. Code services are not automatically started when deploying to a dev environment.

### Usage
```bash
$ nanobox dev deploy
```

Once your dev platform is deployed, you can [console in](/cli/dev/console/) and code services by running their start commands.
