---
title: Scaleway
seo_title: Scaleway & Nanobox - Connect your Scaleway account to Nanobox
description: Deploy apps to Scaleway using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: scaleway, scaleway deploy, connect to scaleway, scaleway auth, connect to cloud provider
---

To deploy apps to [Scaleway](https://www.scaleway.com/) using Nanobox, you first need to [create a Scaleway account](https://cloud.scaleway.com/#/signup). In your Scaleway dashboard, click on your user in the upper-right corner and go to "Credentials".

![Account Credentials](/assets/images/scaleway-account-credentials.png)

Once there, click the "Create new token" button.

![Create New Token](/assets/images/scaleway-create-new-token.png)

Copy and store your Access Key and your new Token.

![Copy Access Key & Token](/assets/images/scale-way-access-key-token.png)

## Create a New Provider Account
In your Nanobox dashboard, got to [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select Scaleway, and click "Proceed".

![Add a New Scaleway Provider](/assets/images/new-provider-scaleway.png)

Enter your Scaleway access key and API token.

![Enter Scaleway Auth Credentials](/assets/images/new-provider-scaleway-auth.png)

Click "Verify & Proceed". Name your provider, select your default region, then click "Finalize/Create".

![Name Your Provider & Select a Default Region](/assets/images/new-provider-scaleway-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your Scaleway provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your Scaleway provider](/assets/images/new-app-scaleway.png)

Confirm and click "Let's Go!" Nanobox will order an server on Scaleway under your account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
