---
title: Hosting Providers
---

Nanobox allows you to easily deploy apps into a production environments on the following cloud infrastructures:

<div id="providers">
  <a href="https://www.digitalocean.com/" target="_blank" id="digital-ocean">
    <%= partial "svgs/prov-digital-ocean" %><br>
    Digital Ocean
  </a>
  <a href="https://aws.amazon.com/" target="_blank" id="aws" class="coming">
    <%= partial "svgs/prov-aws" %><br>
    Amazon Web Services (AWS)
  </a>
  <a href="https://www.joyent.com/" target="_blank" id="joyent" class="coming">
    <%= partial "svgs/prov-joyent" %><br>
    Joyent
  </a>
  <a href="https://www.linode.com/" target="_blank" id="linode" class="coming">
    <%= partial "svgs/prov-linode" %><br>
    Linode
  </a>
</div>

In order to deploy your app(s) to a hosting provider, you will need to [link your Nanobox account to their service](#linking-your-account-to-a-provider).

## Linking Your Account to a Provider
In order to link your Nanobox account to a hosting provider, you must first have an account on that provider. Once done, click on your user avatar in the upper right corner of your Nanobox dashboard and go to "Account Admin". Then click on "Hosting Accounts" in the left navigation. Click "Add" under the hosting provider(s) to which you'd like to connect your account.

![Add a Hosting Provider to Your Nanobox Account](/images/providers-add.png)

When linking to a provider, the following information is required:

#### Account Name
This is simply a name that will let you easily identify the account in a list of accounts. It can be whatever you'd like it to be.

#### Default Region
This is the region that is assumed when a new app is created. You can still select other regions when creating an app, but by default, this region will be selected.

#### API Key & Secret Key
Both of these keys are provided by your hosting provider and should be accessible through their dashboard.

#### Allow Nanobox to Create Images on Your Behalf
In order to provision servers on a hosting provider, Nanobox needs permission to generate a base Ubuntu image. Some hosting providers charge for storing base images, so you'll need to check with them regarding costs, but it is necessary in order for Nanobox to provisions servers. An image is required for each region in which you have apps.

Once all the necessary information is filled in, click "Save".
