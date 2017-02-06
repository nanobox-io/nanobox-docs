---
title: Configure Nanobox
description: The 'configure' command defines configuration options for your local Nanobox container.
---

Nanobox configuration settings can be modified using the [`nanobox config` command](/cli/configure/). The first time any `nanobox` command is run, Nanobox will walk automatically walk you through this process.

```bash
# View config settings
nanobox config ls

# Set a specific setting
nanobox config set ram 4

# Get the value of a specific setting
nanobox config get cpu
```

#### Important
Changes to config settings require you to restart your Nanobox VM in order to be applied.

#### Configuration Example
```yaml
provider: docker-machine
mount-type: native
ram: 4
cpu: 2
disk: 15360
netfs_mount_opts: 'mfsymlinks'

# Advanced
external-network-space: 192.168.99.50/24,
docker-machine-network-space: 172.19.0.1/16,
native-network-space: 172.18.0.1/16,
lock-port: 12345
```

### Provider
The `provider` config defines which technology is used to manage Docker containers in your virtual/local host. The following providers are available:

- `docker_machine` - Uses VirtualBox for virtualization and Docker Machine to create Docker containers in the VM.
- `native` - Uses native docker containers on your host OS.


### Mount Type
`mount-type` specifies which technology to use when mounting code on your local machine into Nanobox. The following options are available:

- `native` - Uses the network file system native to your [provider](#provider).
- `netfs` - Uses NFS on OSX and Linux, CIFS on Windows. **Much** better performance, but requires admin permissions. *Netfs is only used with the ["docker_machine" provider](#provider).*

### CPU
The `cpu` setting defines the number of CPU cores to make available to your virtualized environment.


### RAM
The `ram` setting defines the amount of RAM (in GB) to make available to your virtualized environment.


### Disk
The `disk` setting specifies the amount of disk space *in MB* to allot to your virtualized environment.

**Note:** The disk available to the VM cannot be changed on the fly. To modify the size of your Nanobox VM, you will need to [implode](/cli/implode/) the existing VM and recreate it after changing the disk setting in your config.


### NetFS Mount Options
`netfs_mount_opts` specifies options to include when mounting your local codebase into Nanobox.

- `mfsymlinks` - When running Nanobox in Windows, this option allows symlinks created in Nanobox to function properly with your local filesystem. *There are caveats with this setting that are outlined in the [Symlinks in Windows](/trbl/symlinks-in-win) doc.*

## Advanced

### External Network Space
`external-network-space` defines the network that Nanobox creates to communicate with the containers from the outside, through a Virtual Private Network (VPN).

### Docker Machine Network Space
`docker-machine-network-space` defines the network Nanobox uses to facilitate communication between Docker containers when using the ["docker-machine" provider](#provider).

### Native Network Space
`native-network-space` defines the network Nanobox uses to facility communication between Docker containers when using the ["native" provider](#provider).

### Lock Port
`lock-port` defines which port will be locked by tcp. This is necessary to prevent race conditions within Nanobox. If the specified port is already in use, it needs to be updated.
