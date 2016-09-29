---
title: Modifying Your App
---

As you're developing your app, changes to your code, runtime, and infrastructure are expected. This doc walks through things you should now, and in some cases, how to apply those changes to your app.

## Changes to Your boxfile.yml
Your boxfile.yml defines your app's runtime, configuration, and architecture and changes to it are applied through building a new runtime and deploying the runtime into your dev or sim environment.

```bash
# build a new runtime based on updated boxfile.yml
nanobox build

# deploy the new runtime
nanobox dev deploy
```

## Changes to Application Code
While working in a dev environment, your local codebase is mounted into your Nanobox container. Any changes to your application code are immediately applied to your dev app.
