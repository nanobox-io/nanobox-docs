---
title: Packet
seo_title: Packet & Nanobox - Connect your Packet account to Nanobox
description: Deploy apps to Packet using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: packet, packet deploy, connect to packet, packet auth, connect to cloud provider
---

To deploy apps to [Packet](https://www.packet.net/) using Nanobox, you first need to [create a Packet account](https://app.packet.net/#/registration/).

### Add a New API Key
In your Packet portal, click on "API Keys" in the left nav and add a new API key.

![Add an API Key](/assets/images/packet-add-api-key.png)

Give your key a description, Read/write privileges, and click "Generate".

![API Key Details](/assets/images/packet-generate-api-key.png)

Copy your API Key's Token. You'll need this [later](#createanewprovideraccount).

![API Key Token](/assets/images/packet-copy-key-token.png)

### Create a New Project
"Projects" are Packet's way of grouping ordered servers under a single payment method. Go to the "Manage" tab in your left nav and create a new project.

![Create a New Project](/assets/images/packet-create-new-project.png)

Give it a name and assign it a payment method, then click "Create Project".

![Project Name & Payment Method](/assets/images/packet-project-details.png)

Click on the "Settings" tab inside your new Project, and copy your Project ID. You will need it.

## Create a New Provider Account
In your Nanobox dashboard, got to [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select Packet, and click "Proceed".

![Add a New Packet Provider](/assets/images/new-provider-packet.png)

Enter the required credentials.

![Enter Packet Auth Credentials](/assets/images/new-provider-packet-auth.png)

Click "Verify & Proceed". Name your provider, select your default region, then click "Finalize/Create".

![Name Your Provider & Select a Default Region](/assets/images/new-provider-packet-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your Packet provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your Packet provider](/assets/images/new-app-packet.png)

Confirm and click "Let's Go!" Nanobox will order an server on Packet under your account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
