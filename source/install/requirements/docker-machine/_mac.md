## VirtualBox
[VirtualBox](https://www.virtualbox.org/) needs to be installed. It can be downloaded and installed with Nanobox.

### vboxmanage in your $PATH
The vboxmanage binary needs to be included in your system $PATH. The VirtualBox installation process should do this automatically, but it some cases, it won't install correctly.

## VT-x Enabled in Your BIOS
Virtualization must be enabled for your machine. This setting is found under ‘Advanced Chipset settings’ in BIOS and will be different for each motherboard. These days, most motherboards come with virtualization enabled by default, but it is disabled, you will need to enable it.

## Requirements for netfs
If using the ['netfs' mount-type](/local-config/configure-nanobox/#mount-type) for filesystem mounting, you will need to make sure the `nfsd` executable is available and that the nfs server is running.

### nfsd
The `nfsd` executable is used by OSX to manage the NFS (Network File System) server on your machine.

```bash
# Make sure nfsd is available. It ships with OSX,
# so unless you've deleted it, it should be available.
which nfsd
```

```bash
# check the status of your nfs server
nfsd status
```

```bash
# If disabled, enable and start the nfs server
nfsd enable
nfsd start
```
