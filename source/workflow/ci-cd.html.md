---
title: Continuous Integration & Deployment
seo_title: Continuous Integration & Deployment with Nanobox
description: How to use Nanobox in your continuous integration and deployment workflow.
keywords: continuous integration, ci, continuous deployment, cd, ci/cd, continuous delivery
---

Nanobox is a micro-platform that can run anywhere including on continuous integration (CI) and/or continuous deployment (CD) servers. This doc walks through installing and using Nanobox in your CI/CD workflow.

## Workflow Overview
Before getting into the specifics, it's important to have a high-level understanding of the workflow.

1. Install Nanobox on your CI/CD server
2. Use Nanobox to build your app and run your tests on the CI/CD server
3. Define actions based on the exit code of tests

### General Requirements
- **The CI/CD server cannot be a Docker container**. Nanobox builds your app using Docker containers and Docker in Docker doesn't work well. The CI/CD server can't share kernel space.
- A linux distribution and version that supports Docker.

## Install Nanobox on Your CI/CD Server
In your CI/CD server build process, install Nanobox. You can use the Nanobox CI/CD Bootstrap script, or you can install Nanobox manually.

### Using the Nanobox CI Bootstrap
Nanobox provides a bootstrap script that will download and install Nanobox on your CI/CD server.

###### Bootstrap Requirements
- Ubuntu 14.04+
- `sudo` permissions *(Required if Docker is __not__ already installed)*

The following command can be used in your CI/CD server build process to download and run the CI bootstrap script:

```bash
sudo bash -c "$(curl -fsSL https://s3.amazonaws.com/tools.nanobox.io/bootstrap/ci.sh)"
```

### Install Nanobox Manually
To install Nanobox manually, download the Nanobox package appropriate to your Linux distribution and install it on your system $PATH. Depending on where you install it, you may need `sudo` permissions.

###### Nanobox Packages
- [nanobox.x86_64.rpm](https://d1ormdui8qdvue.cloudfront.net/installers/v2/linux/nanobox-2-1.x86_64.rpm)
- [nanobox_amd64.deb](https://d1ormdui8qdvue.cloudfront.net/installers/v2/linux/nanobox_2_amd64.deb)
- [nanobox-x86_64.pkg.tar.xz](https://d1ormdui8qdvue.cloudfront.net/installers/v2/linux/nanobox-2-1-x86_64.pkg.tar.xz)
- [nanobox.tar.gz](https://d1ormdui8qdvue.cloudfront.net/installers/v2/linux/nanobox-2.tar.gz)

#### Enable CI-Mode
After installing Nanobox manually, be sure to enable Nanobox's `ci-mode`. This will disable the output summarizer and avoid conflicts with your CI/CD output summarizer. *This is done automatically if using the CI bootstrap script*.

```bash
nanobox config set ci-mode true
```

## Automate Login
Some functionality in Nanobox requires authentication with your Nanobox account, such as deploying to a live app. To avoid being prompted for account credentials, add the following environment variables to your CI server.

```
NANOBOX_USERNAME
NANOBOX_PASSWORD
```

**Note:** If your CI/CD provider supports it, we recommend encrypting these environment variables to keep sensitive information from being in viewable in plain text in the codebase.

## Use Nanobox to Run Tests
With Nanobox installed in your CI/CD server, you can use it to build your app and run your tests. How tests are configured depends on your CI/CD provider, but you simply use the [`nanobox run`](/cli/run/) command to run your tests.

```bash
nanobox run your-test-script
```

Nanobox will provision your app on your CI/CD server and run your test script(s). Once your testing script(s) finish, Nanobox will return the exit code to your CI/CD provider.

## Automate Deploys
Based on the success or failure of your tests, certain actions can be triggered such as merging into a branch or deploying. How these actions are configured and triggered depends on your CI/CD provider, but to deploy to a Nanobox app, you just add your app as a remote and deploy.

*Be sure to include the [account credential environment variables](#automate-login) to automate the login process.*

```bash
# Add your Nanobox app as a remote
nanobox remote add app-name

# Deploy to your app
nanobox deploy
```
