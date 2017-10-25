---
title: Vultr
seo_title: Vultr & Nanobox - Connect your Vultr account to Nanobox
description: Deploy apps to Vultr using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: vultr, vultr deploy, connect to vultr, vultr auth, connect to cloud provider
---

To deploy apps to [Vultr](https://www.vultr.com/) using Nanobox, you first need to [create a Vultr account](https://www.vultr.com/register/). In your Vultr admin, select "Account" in the left-nav and open the "API" section. By default, Vultr API access is disabled. When you enable it, they will provide you with an API key.

![Vultr Access Token](/assets/images/vultr-access-token.png)

Vultr lets you whitelist subnets that can access the Vultr API using the generated key. To use the Nanobox Vultr integration, go ahead and click "Allow All IPv4".

![Vultr IP Whitelist](/assets/images/vultr-ip-whitelist.png)

_**Note:** If you're uncomfortable whitelisting all IPv4 addresses, you can whitelist_ `138.197.215.155/32`_. This is the subnet on which the Nanobox Vultr adapter is hosted, but this subnet is subject to change. If/when it changes, you will need to manually update your Vultr account with the new subnet._

## Add a New Provider
In your Nanobox dashboard, got to [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select Vultr and click "Proceed."

![Select Vultr](/assets/images/new-provider-vultr.png)

Nanobox needs your Vultr access token to authenticate with your Vultr account. Paste in your token and click "Verify & Proceed."

![Enter your Vultr access token](/assets/images/new-provider-vultr-auth.png)

Name your provider and choose a default region. The name is arbitrary and only meant to help you identify it in your list of provider accounts.

![Name your provider and select a default region](/assets/images/new-provider-vultr-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your Vultr provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your Vultr provider](/assets/images/new-app-vultr.png)

Confirm and click "Let's Go!" Nanobox will order a VC2 instance under your Vultr account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
