---
title: deploy
seo_title: nanobox deploy Command
description: The 'deploy' command deploys a generated build package and compiled code package a live app.
keywords: php deployment, ruby deployment, elixir deployment, golang deployment, nodejs deployment, python deployment
---

The `deploy` command deploys a generated build package and compiled code package a live app. If no remote, is provided, the "default" remote is assumed.

### Usage
```bash
# Pattern
nanobox deploy <dry-run | remote> -m <message>

# Examples
nanobox deploy
nanobox deploy production -m 'updated dependencies'
```

### Options

#### -m, --message
Allows you to append a message to the deploy. These messages appear in your app's [deploy history](/live-app-management/deploy-history/) in your dashboard.

#### --skip-compile
Skip compiling the application code. In cases, code compilation is not necessary.
