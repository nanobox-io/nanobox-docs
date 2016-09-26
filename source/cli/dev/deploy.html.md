---
title: dev deploy
---

The `dev deploy` command deploys a [built runtime](/cli/build/) and/or [compiled code](/cli/compile/) into your local Nanobox container. All data services are provisioned and started.

### Usage
```bash
$ nanobox dev deploy
```

Once your dev environment is deployed, you can [console in](/cli/dev/console/) and start web/worker processes by running their start commands.

**Note:** [Deploy hooks](/app-config/build-deploy-hooks/#deploy-hooks) **do not** run when running a `dev deploy`. If you need these hooks run, you can run them from a console after your dev environment is provisioned.
