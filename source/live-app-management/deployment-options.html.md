---
title: Deployment Options
description: Specific deployment options are available in your app dashboard.
---

Specific deployment options are available in your app dashboard under Admin > Deploy. These actions only apply when deploying to your live app.

## Rebuild Data Components on Deploy
Whenever configuration changes are made to data components in your boxfile.yml, in order for those changes to be applied, Nanobox must rebuild the component. By default, components are not automatically rebuilt when config changes are detected. This is done to prevent possible downtime as new node(s) is/are being provisioned and [data is migrated](/data-management/data-migrations-scaling/) (when applicable).

To automatically rebuild data components when boxfile.yml config changes are detected, enable the following option in your dashboard.

![Rebuild Data Components on Deploy](/assets/images/deploy-options-rebuild-data.png)

#### Alternative
The alternative method of applying boxfile.yml config changes to a data components is to [manually rebuild the component](/live-app-management/server-component-admin/#component-options).
