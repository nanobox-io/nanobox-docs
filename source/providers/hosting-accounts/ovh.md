---
title: OVH
seo_title: OVH & Nanobox - Connect your OVH account to Nanobox
description: Deploy apps to OVH using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: ovh, ovh deploy, connect to ovh, ovh auth, connect to cloud provider
---

To deploy apps to [OVH](https://www.ovh.com/us/) using Nanobox, you first need to [create a OVH account](https://www.ovh.com/us/support/new_nic.xml).

### Generate API Credentials
Generate API credentials by visiting one of OVH's token creation pages. Which page you visit depends on your location.

<a href="https://api.ovh.com/createToken/index.cgi?GET=/*&PUT=/*&POST=/*&DELETE=/*" target="\_blank">Europe & Africa</a>  
<a href="https://ca.api.ovh.com/createToken/index.cgi?GET=/*&PUT=/*&POST=/*&DELETE=/*" target="\_blank">Everywhere Else</a>

Input the email and password associated with your OVH account. Give your API key a name, description, validity timeframe, and full rights on each HTTP method by specifying `/*` as the allowed path for each. Then click "Create Keys".

![Create an API Key](/assets/images/ovh-create-api-key.png)

Copy and store your Application Key, Application Secret, and Consumer Key. You'll need these [later](#createanewprovideraccount).

![Copy Key Credentials](/assets/images/ovh-copy-key-creds.png)

### Order a New Cloud Project
Visit your OVH control panel and, under the "Cloud" section, click "Order" and select "Cloud Project." Agree to OVH's terms and conditions, enter a project name, provide a payment method, and click "Activate My Cloud Account".

![Activate Cloud Account](/assets/images/ovh-activate-cloud-account.png)

Go to the home page of your new project, and copy the project ID from the URL. It's just after `project/`. You will need this.

![Project ID](/assets/images/ovh-project-id.png)


## Create a New Provider Account
In your Nanobox dashboard, go to [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select OVH and click "Proceed".

![Add a New OVH Provider](/assets/images/new-provider-ovh.png)

Enter the required credentials. **If located in Europe or Africa, specify the Region as** `.`**. If located anywhere else, specify `ca` as the region.**

![Enter OVH Auth Credentials](/assets/images/new-provider-ovh-auth.png)

Click "Verify & Proceed". Name your provider, select your default region, then click "Finalize/Create".

![Name Your Provider & Select a Default Region](/assets/images/new-provider-ovh-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your OVH provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your OVH provider](/assets/images/new-app-ovh.png)

Confirm and click "Let's Go!" Nanobox will order an server on OVH under your account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
