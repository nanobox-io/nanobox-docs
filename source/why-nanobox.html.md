---
title: Why Nanobox?
description: Developers are expected to be full-stack experts, but you shouldn't have to be. Nanobox lets you focus on code and not worry about everything else.
---

These days, developers are expected to be full-stack experts, but you shouldn't have to be. Nanobox lets you focus on the code and not worry about everything else.

First off, a little history – We are developers who had to learn infrastructure and knew it could be easier. Nanobox is the result of lessons learned through years of successfully (and unsuccessfully) building, managing, and scaling production application platforms. Our goal is to help you avoid the pitfalls and time-loss that come with building, managing, and scaling yours.

### Infrastructure is Hard
Let's face it. Building and managing an app platform can be challenging and tedious. You often find yourself spending way too much time setting up local dev environments, building and configuring production servers, setting up monitoring for those servers, etc. Nanobox systematizes and automates these tasks to let you do what you do best – code.

### Dev / Production Parity
A fundamental problem faced in application development is environment consistency. How do you make your local development environment perfectly match your production environment? An even tougher question - How do you make the environment setup process consistent, repeatable, fast, and most importantly, easy?

The [Nanobox CLI](/cli/) creates an isolated virtual environment on your local machine that  matches your production Nanobox environment and allows for active development. The [`nanobox run`](/cli/run/) command uses Docker to create isolated, containers inside of a local virtual Nanobox container using settings specified in your [`boxfile.yml`](/boxfile/). It then mounts your code directory from your local machine into the Nanobox container. Any changes to your code are reflected in your locally running app.

Once the code is tested and ready for production, you can use Nanobox to deploy your app to your production servers. Production servers are provisioned and configured identically to your local environment.

For the deep dive into the Nanobox workflow, check out the [Workflow docs](/workflow/).

### Automated Environment Provisioning & Code Deploys
When deploying your code, Nanobox automatically provisions and builds your production servers along with the supporting services specified in your `boxfile.yml`. Code runtimes and data services are provisioned using [engines](/engines/) and [images](/images/). Nanobox then builds, packages, and deploys your runtime and code into your running environment. You never have to manually provision or configure a server.

### Application Management & Visibility
Once an app is live, being able to easily see what's happening to your infrastructure is incredibly important. The Nanobox dashboard provides resource usage statistics for all nodes in your platform, streaming application logs, and other important tools to help you see, diagnose, and fix problems when the happen. The [Live App Management docs](/live-app-management/) provide more information about the controls provided by the dashboard.

### Simple Scalability
Scaling a production infrastructure can be intimidating and stressful. Uptime is critical and so many things can go wrong. Nanobox automates the process of scaling application components based on best practices and years of experience.

Scaling processes are triggered in your Nanobox dashboard with just a few clicks. Once triggered, Nanobox takes care of provisioning new servers, deploying code, migrating data, etc. For more information about scaling mechanics, check out the [Scaling docs](/scaling/).
