---
title: Modifying Your App
description: As you're developing your app, changes to your code, runtime, and infrastructure are expected. Nanobox makes applying these changes simple.
---

As you're developing locally, changes to your code, runtime, and infrastructure are expected. This doc walks through things you should now, and in some cases, how to apply those changes to your app.

## Changes to Your boxfile.yml
Your boxfile.yml defines your app's runtime, configuration, and architecture and changes to it are applied through building a new runtime and deploying the runtime into your local environment. The `nanobox run` command will detect any changes to your boxfile.yml and automatically rebuild your runtime. So to apply changes made in your boxfile.yml, simply stop and re-`run` your app.

```bash
# start your local app using the new runtime
nanobox run
```

## Changes to Application Code
While working locally, your codebase is mounted into Nanobox. Any changes to your application code are immediately applied to your running app.
