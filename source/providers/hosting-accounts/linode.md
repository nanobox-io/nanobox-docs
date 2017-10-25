---
title: Linode
seo_title: Linode & Nanobox - Connect your Linode account to Nanobox
description: Deploy apps to Linode using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: linode, linode deploy, connect to linode, linode auth, connect to cloud provider
---

To deploy apps to [Linode](https://www.linode.com/) using Nanobox, you first need to [create a Linode account](https://manager.linode.com/session/signup). In your Linode user profile, go to the "API Keys" section and generate a new API key.

![Generate a New Linode API Key](/assets/images/linode-new-api-key.png)

Keep this key handy. You're going to need it in just a bit.

## Add a New Provider
In your Nanobox dashboard, got to [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select Linode and click "Proceed."

![Select Linode](/assets/images/new-provider-linode.png)

Nanobox needs your Linode API key to authenticate with your Linode account. Paste in API key and click "Verify & Proceed."

![Enter your Linode API Key](/assets/images/new-provider-linode-auth.png)

Name your provider and choose a default region. The name is arbitrary and only meant to help you identify it in your list of provider accounts.

![Name your provider and select a default region](/assets/images/new-provider-linode-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your Linode provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your Linode provider](/assets/images/new-app-linode.png)

Confirm and click "Let's Go!" Nanobox will order a server on Linode under your account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
