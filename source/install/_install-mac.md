**Note:** _There are known issues with installing and running Nanobox on MacOS 10.13 - High Sierra. Installation instructions are coming. For now, feel free to drop into the [Nanobox Slack Channel](https://nanoboxio.slack.com) and ask._

## System Requirements
System requirements depend on how you're going to run Nanobox. You can either use a lightweight VM (VirtualBox) or Native Docker.

_**For MacOS, we recommend using the lightweight VM option. Docker's MacOS filesystem driver is slow.**_

### Lightweight VM (VirtualBox)
- MacOS 10.10+
- VirtualBox - _A version of the [Nanobox installer](#download-amp-run-nanobox-installer) includes VirtualBox._

#### netfs Requirements
During the intitial setup process, you'll specify how code is mounted into VM. "netfs" is the more performant option.

- `nfsd` enabled and running

### Native Docker
- MacOS 10.11+
- [Docker for Mac](https://docs.docker.com/docker-for-mac/)

## Download & Run the Nanobox Installer
Download the Nanobox installer from the [Nanobox downloads page](https://dashboard.nanobox.io/download). Run it and it will walk you through the entire installation process.

_**Note:** If you plan on going with the lightweight VM option and already have VirtualBox installed, you can select the "Use Docker Native" option. This will download an installer that only includes the Nanobox binary._

## Run & Setup Nanobox
The first time you run any [Nanobox command](/cli/), it will walk you through an initial setup process to configure things like RAM, CPU, and other things related to your local environment.

## Start Hacking!
With Nanobox installed, the [Getting Started Guides](https://guides.nanobox.io) walk you through getting popular languages and frameworks up and running with Nanobox.
