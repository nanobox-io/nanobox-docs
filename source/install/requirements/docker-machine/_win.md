## VirtualBox
[VirtualBox](https://www.virtualbox.org/) needs to be installed. It can be downloaded and installed with Nanobox.

### vboxmanage in your $PATH
The vboxmanage binary needs to be included in your system $PATH. The VirtualBox installation process should do this automatically, but it some cases, it won't install correctly.

## VT-x Enabled in Your BIOS
Virtualization must be enabled for your machine. This setting is found under ‘Advanced Chipset settings’ in BIOS and will be different for each motherboard. These days, most motherboards come with virtualization enabled by default, but it is disabled, you will need to enable it.

#### Important
If you're using docker-machine and switch to docker native, you won't be able to use VirtualBox again until Hyper-V is disabled.
