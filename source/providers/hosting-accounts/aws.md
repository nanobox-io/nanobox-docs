---
title: AWS
seo_title: AWS & Nanobox - Connect your AWS account to Nanobox
description: Deploy apps to AWS using Nanobox by authorizing Nanobox to order and provision servers on your behalf. This doc walks through the authorization process.
keywords: amazon web services, aws deploy, aws, connect to aws, aws auth, connect to cloud provider
---

To deploy apps to [AWS](https://aws.amazon.com/) using Nanobox, you first need to [create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html). In your AWS Management Console, [create an IAM account](https://console.aws.amazon.com/iam/home#/home) that has read/write access to EC2 instances, security groups, and ssh keys. You can also [setup a custom EC2 policy and user for Nanobox](https://content.nanobox.io/creating-a-custom-ec2-policy-user-for-nanobox-deploys/) if you'd like.

Once the new account is created, [create a new Access Key](http://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html) and download the key file. You'll need this and the key ID later.

## Add a New Provider
In your Nanobox dashboard, go to your [Account Admin > Hosting Accounts](https://dashboard.nanobox.io/provider_accounts) and add a new account. Select AWS and click "Proceed."

![Select AWS](/assets/images/new-provider-aws.png)

Nanobox needs your AWS Access Key ID and the Access Key token to authenticate with your AWS account. Paste those in and click "Verify & Proceed."

![Enter your AWS auth credentials](/assets/images/new-provider-aws-auth.png)

Name your provider and choose a default region. The name is arbitrary and only meant to help you identify it in your list of provider accounts.

![Name your provider and select a default region](/assets/images/new-provider-aws-name.png)

## Launch a New App
Go to the home page of your [Nanobox dashboard](https://dashboard.nanobox.io) and click the "Launch New App" button. Select your AWS provider from the dropdown and choose the region in which you'd like to deploy your app.

![Select your AWS provider](/assets/images/new-app-aws.png)

Confirm and click "Let's Go!" Nanobox will order an EC2 server on AWS under your account, provision the [Nanobox platform components](/live-app-management/platform-components/), and prepare for your [first deploy](/workflow/deploy-code/).
