---
title: deploy
description: The 'deploy' command deploys a generated build package and compiled code package a live app.
---

The `deploy` command deploys a generated build package and compiled code package a live app. If no app-name/alias, is provided, the "default" alias is assumed.

### Usage
```bash
# Pattern
$ nanobox deploy -a <app-name or alias> -m <message>

# Examples
$ nanobox deploy
$ nanobox deploy -a production -m 'updated dependencies'
```

### Options
#### -a, --app
Specifies the app-name or [alias](/cli/link/). If none is provided, it assumes the "default" alias.

#### -m, --message
Allows you to append a message to the deploy. These messages appear in your app's [deploy history](/production-management/deploy-history/) in your dashboard.
