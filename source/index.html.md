# Nanobox Documentation

Welcome to Nanobox! First off, a little history – We are developers who had to learn infrastructure and knew it could be easier. Nanobox is the result of lessons learned through years of successfully (and unsuccessfully) building, managing, and scaling production application platforms. Our goal is to help you avoid the pitfalls and time-loss that come with building, managing, and scaling yours.

## Why Nanobox?
Let's face it. Building and managing an app platform can be challenging and tedious. You often find yourself spending way too much time setting up local dev environments, building and configuring production servers, setting up monitoring for those servers, etc. Nanobox systematizes and automates these tasks to let you do what you do best – code.

### Dev / Production Parity
A fundamental problem faced in application development is environment consistency. How do you make your local dev environment perfectly match your production environment? An even tougher question - How do you make the environment setup process consistent, repeatable, fast, and most importantly, easy?

The [Nanobox CLI](/cli/) includes a local development tool that creates an isolated virtual environment on your local machine that  matches your production Nanobox environment and allows for active development. The [`nanobox dev`](/cli/dev/) command uses Docker to create isolated, containers inside of a local virtual machine (VM) using settings specified in your [`boxfile.yml`](/app-config/boxfile/). It then mounts your code directory from your local machine into the virtual environment. Any changes to your code are reflected in your locally running app.

Once your code is at a point where it's ready for testing, the [`nanobox sim`](/cli/sim/) command provides and manages a simulated production environment inside your Nanobox VM that emulates your app's production environment on Nanobox. Deploys into a sim environment go through the same process as deploys into a production app. If it works here, it will work in production.

Once the code is tested and ready for production, use the Nanobox CLI to build your code, then deploy your build to your production Nanobox servers. Platform configuration is housed in your `boxfile.yml` and included in your build. Production servers are provisioned and configured identically to your local dev and sim environments.

For the deep dive into developing locally with Nanobox, check out the [Local Development docs](/local-dev/).

### Automated Environment Provisioning & Code Deploys
When deploying your code, Nanobox automatically provisions and builds your production servers along with the supporting services specified in your `boxfile.yml`. Code runtimes and data services are provisioned using [engines and images](/engines-images/). Nanobox then builds, packages, and deploys code into your running platform. You never have to manually provision or configure a server.

### Application Management & Visibility
Once an app is in production and handling real traffic, being able to easily see what's happening to your infrastructure is incredibly important. The Nanobox dashboard provides resource usage statistics for all nodes in your platform, streaming application logs, and other important tools to help you see, diagnose, and fix problems when the happen. The [application management docs](/app-management/) provide more information about the controls provided by the dashboard.

### Simple Scalability
Scaling a production infrastructure can be intimidating and stressful. Uptime is critical and so many things can go wrong. Nanobox automates the process of scaling application components based on best practices and years of experience.

Scaling processes are triggered in your Nanobox dashboard with just a few clicks. Once triggered, Nanobox takes care of provisioning new servers, deploying code, migrating data, etc. For more information about scaling mechanics, check out the [scaling docs](/scaling/).
