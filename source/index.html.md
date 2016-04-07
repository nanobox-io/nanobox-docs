# Nanobox Documentation

Welcome to Nanobox! First off, a little history – We are developers who had to learn infrastructure and knew it could be easier. Nanobox is the result of lessons learned through years of successfully and unsuccessfully building, managing, and scaling production application platforms. Our goal is to help you avoid the pitfalls and time-loss that come with building, managing, and scaling your application platform.

## Why Nanobox?
Let's face it. Building and managing an application platform can be challenging and tedious. You often find yourself spending way too much time setting up local dev environments, building and configuring production servers, setting up monitoring for those servers, etc. Nanobox systematizes and automates these tasks to let you do what you do best – code.

### Dev / Production Parity
A fundamental problem faced in application development is environment consistency. How do you make your local dev environment perfectly match your production environment? An even tougher question - How do you make the environment setup process consistent, repeatable, fast, and most importantly, easy?

The [Nanobox CLI](/cli/) includes a local development tool that creates an isolated virtual environment on your local machine that perfectly matches your production Nanobox environment. [`nanobox dev`](/cli/dev/) uses Docker to create isolated, virtualized containers using settings specified in your [`boxfile.yml`](/app-config/boxfile/). It then mounts your code directory from your local machine into the virtual environment. Any changes to your code are reflected in your locally running app.

Once the code is ready for production, you push deploy it to your production Nanobox servers. Environment configuration is housed in your `boxfile.yml` and committed to your repo. Production servers are provisioned and configured identically to your local dev environment.

For the deep dive into developing locally with Nanobox, check out the [Local Development docs](/local-dev/).

### Automated Environment Provisioning & Code Deploys
When deploying your code, Nanobox automatically provisions and builds your production environment along with the supporting services specified in your `boxfile.yml`. Code runtimes and data services are provisioned using [engines and images](/engines-images/). Nanobox then builds, packages, and deploys code into your running environment. You never have to manually provision or configure a server.

### Application Management & Visibility
Once an app is in production under actual load, being able to see what's happening

### Simple Scalability
Scaling a production infrastructure can be intimidating and stressful. Uptime is critical and so many things can go wrong. Nanobox automates the process of scaling application components based on best practices and years of experience.

Scaling processes are triggered in your Nanobox dashboard through a few clicks or automated with [component auto-scaling](/scaling/auto-scaling/). Once triggered, Nanobox takes care of provisioning new servers, deploying code, migrating data, etc. For more information about scaling mechanics, check out the [scaling docs](/scaling/).
