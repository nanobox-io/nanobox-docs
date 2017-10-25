---
title: Google Cloud Platform
seo_title: Google Cloud Platform & Nanobox - Connect your GCP account to Nanobox
description: Deploy apps to Google Cloud Platform's Compute Engine using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: google compute, google cloud platform, gcp, google compute deploy, connect to google compute, google compute auth, connect to cloud provider
---

To deploy apps to [Google Cloud Platform's Compute Engine](https://cloud.google.com/compute/) using Nanobox, you first need to [create a GCP account](https://console.cloud.google.com/freetrial). In your admin panel's left-nav, go to "IAM & admin" > "Service Accounts" section.

![GCP IAM & Admin > Service Accounts](/assets/images/gcp-service-accounts.png)

Create a new service account with at least the following roles enabled:

- Compute Instance Admin (v1)
- Compute Network Admin
- Compute Security Admin
- Service Account Actor

![GCP Service Account Roles](/assets/images/gcp-roles.png)

Select the "Furnish a new private key" option, save, and download the private key.

## Add a New Provider
In your Nanobox dashboard, got to [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select Google Compute and click "Proceed."

![Select Google Compute](/assets/images/new-provider-gcp.png)

Nanobox needs your GCP service email, service key, and project ID to authenticate with your GCP account and provision compute instances on your behalf. Paste in your key and click "Verify & Proceed."

![Enter your GCP auth credentials](/assets/images/new-provider-gcp-auth.png)

Name your provider and choose a default region. The name is arbitrary and only meant to help you identify it in your list of provider accounts.

![Name your provider and select a default region](/assets/images/new-provider-gcp-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your GCP provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your GCP provider](/assets/images/new-app-gcp.png)

Confirm and click "Let's Go!" Nanobox will order a Compute instance under your GPC account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
