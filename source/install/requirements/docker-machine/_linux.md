## Install Virtual Box
If using the [`docker-machine` provider](/local-config/configure-nanobox/#provider), Nanobox utilizes [Virtual Box](https://www.virtualbox.org/) to provision then Nanobox virtual environment on your local machine. If you already have it installed locally, you're all set. If not, [Download & Install Virtual Box](https://www.virtualbox.org/wiki/Linux_Downloads).

### vboxmanage in your $PATH
The vboxmanage binary needs to be included in your system $PATH. The VirtualBox installation process should do this automatically, but it some cases, it won't install correctly.

## VT-x Enabled in Your BIOS
Virtualization must be enabled for your machine. This setting is found under ‘Advanced Chipset settings’ in BIOS and will be different for each motherboard. These days, most motherboards come with virtualization enabled by default, but it is disabled, you will need to enable it.

## Requirements for netfs
If using the ['netfs' mount-type](/local-config/configure-nanobox/#mount-type) for filesystem mounting, you will need to make sure the following requirements are met

### nfs
`nfs` is used to manage the NFS (Network File System) on your local machine. It must be installed and the NFS server must be running in order for your local code to be mounted into the virtual machine. Installing and running nfs depends on your Linux distribution.

#### NFS Must Listen on Port 2049
`2049` is the default port for the NFS server, but if it's set to something else, you will need to change it. The process of changing the NFS port depend on your Linux distribution.

### exportfs
`exportfs` maintains the table of exported directories for the nfs server. It must be installed in order for your local code to be mounted into the virtual machine. Installation instructions depend your Linux distribution.
