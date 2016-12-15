---
title: Nanobox config.yml
description: The config.yml defines configuration options for your local Nanobox container.
---

Nanobox configuration settings are stored inside your user home directory inside of `.nanobox/config.yml`. The first time any `nanobox` command is run, Nanobox will walk through each of these settings.

#### .nanobox/config.yml
```yaml
# Example
provider: docker_machine​
mount-type: netfs
ram: 4
cpu: 2
disk: 15360
netfs_mount_opts: 'mfsymlinks'
```

## Provider
The `provider` config defines which technology is used to manage Docker containers in your virtual/local host. The following providers are available:

- `docker_machine` - Uses VirtualBox for virtualization and Docker Machine to create Docker containers in the VM.
- `native` - Uses native docker containers on your host OS.

```yaml
provider: native
```

## Mount Type
`mount-type` specifies which technology to use when mounting code on your local machine into Nanobox. The following options are available:

- `native` - Uses the network file system native to your [provider](#provider).
- `netfs` - Uses NFS on OSX and Linux, CIFS on Windows. **Much** better performance, but requires admin permissions. *Netfs is only used with the ["docker_machine" provider](#provider).*

```yaml
mount-type: native
```

## CPUs
The `cpus` setting defines the number of CPU cores to make available to your virtualized environment.

```yaml
cpus: 2
```

## RAM
The `ram` setting defines the amount of RAM in GB to make available to your virtualized environment.

```yaml
ram: 4
```

## Disk
The `disk` setting specifies the amount of disk space in MB to allot to your virtualized environment. This setting's default is determined by the image used to create the VM, but it can be changed in your `config.yml`.

```yaml
disk: 15360
```

## NetFS Mount Options
`netfs_mount_opts` specifies options to include when mounting your local codebase into Nanobox.

- `mfsymlinks` - When running Nanobox in Windows, this option allows symlinks created in Nanobox to function properly with your local filesystem. *There are caveats with this setting that are outlined in the [Symlinks in Windows](/trbl/symlinks-in-win) doc.*

```yaml
netfs_mount_opts: 'mfsymlinks'
```
