---
title: Deploy History
seo_title: View Deploy Histories & Rollback to Previous Deploys
description: Each time you deploy to an app with Nanobox, an entry is created in your app's deploy history and a build stored. You can then rollback to previous deploys.
keywords: rollback to previous deploy, emergency rollback, docker deploy history
---

Each time you deploy to an app with Nanobox, an entry is created in your app's deploy history. The deploy history is accessed under the "History" tab of your app dashboard.

![Deploy History](/assets/images/deploy-history.png)

The deploy history shows the currently deployed command and allows you to rollback to any previous deploy.

## Number of Builds to Store
Each time you deploy with Nanobox, your built runtime is stored in your app's [warehouse](/live-app-management/platform-components/). This allows you to easily rollback to previous deploys, however they also require disk space. Setting the number of builds to store purges old builds as new builds are deployed, preventing too much diskspace from being used. Once a build is purged, you can no longer roll back to that build.

![Number of Builds to Store](deploy-history-build-count.png)

## Deploy Messages
Deploy messages are added when using the CLI's `deploy` command with the `-m` flag. More information is available in the [`deploy` command documentation](/cli/deploy/).

```bash
nanobox deploy -m 'deploy message'
```

## Rollback to a Previous Deploy
To roll back to a previous deploy, click the "Redeploy" button next to the deploy to which you'd like to roll back.
