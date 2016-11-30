---
title: Nanobox config.yml
description: The config.yml defines configuration options for your local Nanobox container.
---

Nanobox configuration settings are stored inside your user home directory inside of `.nanobox/config.yml`. The first time any `nanobox` command is run, Nanobox will walk through each of these settings.

#### .nanobox/config.yml
```yaml
# Default Settings
provider: docker_machine​
mount-type: native
```

## Provider
The `provider` config defines which technology is used to manage Docker containers in your virtual/local host. The following providers are available:

- `docker_machine`

*More coming soon*

```yaml
provider: docker_machine
```

## Mount Type
`mount-type` specifies which technology to use when mounting code on your local machine into Nanobox. The following options are available:

- `native` - Uses the network file system native to your [provider](#provider).
- `netfs` - Uses NFS on OSX and Linux, CIFS on Windows. **Much** better performance, but requires admin permissions.

```yaml
mount-type: native
```

## CPUs
The `cpus` setting defines the number of CPU cores to make available to your virtual/local host.

```yaml
cpus: 2
```

## RAM
The `ram` setting defines the amount of RAM in GB to make available to your virutal/local host.

```yaml
ram: 4
```

## NetFS Mount Options
`netfs_mount_opts` specifies options to include when mounting your local codebase into Nanobox.

- `mfsymlinks` - When running Nanobox in Windows, this option allows symlinks created in Nanobox to function properly with your local filesystem. *There are caveats with this setting that are outlined in the [Symlinks in Windows](/troubleshooting/symlinks-in-win) doc.*

```yaml
netfs_mount_opts: 'mfsymlinks'
```
