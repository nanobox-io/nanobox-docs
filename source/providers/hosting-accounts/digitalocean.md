---
title: DigitalOcean
seo_title: DigitalOcean & Nanobox - Connect your DigitalOcean account to Nanobox
description: Deploy apps to DigitalOcean using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: digitalocean, digitalocean deploy, connect to digitalocean, digitalocean auth, connect to cloud provider
---

To deploy apps to [DigitalOcean](https://www.digitalocean.com/) using Nanobox, you first need to [create a DigitalOcean account](https://cloud.digitalocean.com/registrations/new). In your DigitalOcean dashboard, go to the "API" section and generate a new access token with read/write access.

![Generate a new DigitalOcean API token](/assets/images/digitalocean-generate-new-key.png)
![Create the token with read/write access](/assets/images/digitalocean-access-token.png)

Copy your new token and paste into a file on your local machine that you can access later. You won't be able to access it after you close the window for security reasons.

## Add a New Provider
In your Nanobox dashboard, go to your [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select DigitalOcean and click "Proceed."

![Select DigitalOcean](/assets/images/new-provider-digitalocean.png)

Nanobox needs your DigitalOcean access token to authenticate with your DigitalOcean account. Paste in your token and click "Verify & Proceed."

![Enter your DigitalOcean access token](/assets/images/new-provider-digitalocean-auth.png)

Name your provider and choose a default region. The name is arbitrary and only meant to help you identify it in your list of provider accounts.

![Name your provider and select a default region](/assets/images/new-provider-digitalocean-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your DigitalOcean provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your DigitalOcean provider](/assets/images/new-app-digitalocean.png)

Confirm and click "Let's Go!" Nanobox will order a droplet on DigitalOcean under your account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
