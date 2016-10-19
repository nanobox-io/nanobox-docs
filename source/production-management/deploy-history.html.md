---
title: Deploy History
description: Each time you deploy to an app with Nanobox, an entry is created in your app's deploy history. You can then rollback to previous deploys.
---

Each time you deploy to an app with Nanobox, an entry is created in your app's deploy history. The deploy history is accessed under the "History" tab of your app dashboard.

![Deploy History](/src-images/deploy-history.png)

The deploy history shows the currently deployed command and allows you to rollback to any previous deploy.

### Deploy Messages
Deploy messages are added when using the CLI's `deploy` command with the `-m` flag. More information is available in the [`deploy` command documentation](/cli/deploy/).

```bash
$ nanobox deploy -m 'deploy message'
```

## Rollback to a Previous Deploy
To roll back to a previous deploy, click the "Redeploy" button next to the deploy to which you'd like to roll back.
