*First, make sure all [installation requirements](/install/requirements/) are met.*

Nanobox provides a Windows installer to make installation as simple as possible.

## Download the Nanobox Installer
The Nanobox installer can be downloaded from the [Nanobox download page in your dashboard](https://dashboard.nanobox.io/download).

### Installer Options
When running Nanobox, you can either use native Docker containers or run containers in a light-weight virtual machine (VM) ([Virtual Box](https://www.virtualbox.org/)). If you plan to use the light-weight VM, you can download Nanobox bundled with Virtual Box. If Virtual Box is already installed on your machine or you plan to use native docker containers, you can just download the Nanobox package.

**Note:** For MacOS, we recommend using Nanobox with a light-weight VM.

## Run the Nanobox Installer
Once you've downloaded the Nanobox installer, run it and it will walk you through the entire installation process.

## Configure Nanobox _(Optional)_
Before you fire up your first project with Nanobox, there are some config options you need or may want to set. The [`nanobox configure`/ `nanobox config`](/cli/configure/) command will walk you through a setup process that gathers required information for your [local Nanobox configuration](/local-config/configure-nanobox/). This process gets triggered automatically the first time you try to start Nanobox.

There are important configuration that aren't part of the required setup steps. One in particular is `disk`, the amount of hard-drive space allotted to your Nanobox VM. The default disk allotment is 15GB. If you want this to be different, use the following command to set the disk allotment (in MB) _before you start Nanobox for the first time_:

```bash
# set the disk allotment to 20GB
nanobox config set disk 20480
```

## Start Hacking!
With Nanobox installed, our [Getting Started Guides](https://guides.nanobox.io) walk you through getting popular languages and frameworks up and running with Nanobox. Each provides a [`boxfile.yml`](/boxfile/) that tells Nanobox how to build and prepare your app's runtime. A `boxfile.yml` is required in your project directory in order for Nanobox to start.
