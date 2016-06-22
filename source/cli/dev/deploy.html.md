---
title: dev deploy
---

The `dev deploy` command deploys a [generated build package](/cli/build/) into your local Nanobox VM. All data services are provisioned and started.

### Usage
```bash
$ nanobox dev deploy
```

Once your dev platform is deployed, you can [console in](/cli/dev/console/) and start web/worker processes by running their start commands.

**Note:** [Deploy hooks](/app-config/build-deploy-hooks/#deploy-hooks) **do not** run when running a `dev deploy`. If you need these hooks run, you can run them from a console after your dev platform is provisioned.
