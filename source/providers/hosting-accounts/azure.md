---
title: Microsoft Azure
seo_title: Microsoft Azure & Nanobox - Connect your Azure account to Nanobox
description: Deploy apps to Azure using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: microsoft azure, azure deploy, azure, connect to azure, azure auth, connect to cloud provider
---

To deploy apps to [Azure](https://azure.microsoft.com) using Nanobox, you first need to [create a Microsoft Azure account](https://azure.microsoft.com/en-us/free/). In your Azure Portal, click on "More Services" at the bottom of the left nav and filter for "Subscriptions". Click on your Subscription ID.

![Azure Subscription ID](/assets/images/azure-subscription-id.png)

_Copy and store your Subscription ID. You're going to need it [later](#createanewprovideraccount)._

### Register Resource Providers
Inside your Subscription ID options, filter for and select "Resource providers". Register "Microsoft.Compute", "Microsoft.Network", and "Microsoft.Storage" by clicking on the "Register" button to the right of each option. These are the resources necessary for Nanobox to build and provision your application on Azure.

![Select Azure Resource Providers](/assets/images/azure-resource-providers.png)

### Get Your Active Directory ID
In the left nav, select "Azure Active Directory" and go to "Properties". Copy the "Directory ID".

![Active Directory ID](/assets/images/azure-directory-id.png)

_Copy and store your Active Directory ID. You're going to need it [later](#createanewprovideraccount)._

### Create a New Application Registration
Still inside Azure Active Directory, select "App Registrations" and create a new app registration. An "App Registration" is essentially an API integration. You're giving Nanobox access to your Azure resources through a registered "app".

![Create New App Registration](/assets/images/azure-new-app-registration.png)

Enter the required information:

**Name** - This can be whatever you'd like.  
**Application type** - Web app / API  
**Sign-on URL** - This isn't used by Nanobox, so put whatever you'd like.  

![App Registration Credentials](/assets/images/azure-app-registration-details.png)

After saving your new app registration, _Copy and store your Application ID. You're going to need it [later](#createanewprovideraccount)._ Click on your new app registration in your list of registered apps, then select "Keys". Provide a key description and expiration, then save.

![Key Details](/assets/images/azure-app-registration-key.png)

_Copy and store the key value. You won't be able to retrieve it after you navigate away from this section and you're going to need it [later](#createanewprovideraccount)._

![Key Value](/assets/images/azure-app-registration-key-value.png)

## Create a New Provider Account
In your Nanobox dashboard, go to [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select Azure and click "Proceed".

![Add a New Azure Provider](/assets/images/new-provider-azure.png)

Enter the required credentials.

**Subscription ID** - Azure Subscription ID  
**Tenant ID** - Azure Active Directory ID  
**Application ID** - Azure Application ID  
**Authentication Key** - Azure Application Registration Key Value  
**Cloud Environment** - Should be set to `default`

![Enter Azure Auth Credentials](/assets/images/new-provider-azure-auth.png)

Click "Verify & Proceed". Name your provider, select your default region, then click "Finalize/Create".

![Name Your Provider & Select a Default Region](/assets/images/new-provider-azure-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your Azure provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your Azure provider](/assets/images/new-app-azure.png)

Confirm and click "Let's Go!" Nanobox will order an server on Azure under your account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
