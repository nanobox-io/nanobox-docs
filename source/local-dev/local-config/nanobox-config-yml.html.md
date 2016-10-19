---
title: Nanobox config.yml
description: The config.yml defines configuration options for your local Nanobox container.
---

The first time a `nanobox dev` or `nanobox sim` command is run, Nanobox creates a `.nanobox` directory in your user home directory. Inside of this directory, you can either find or create a `config.yml` file.  The `.nanobox/config.yml` defines configuration options for your Nanobox container.

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
`mount-type` specifies which technology to use when mounting code on your local machine into a dev environment in your Nanobox container. The following options are available:

- `native` - Uses the network file system native to your [provider](#provider).
- `netfs` - Uses NFS on OSX and Linux, CIFS on Windows. **Much** better performance, but requires admin permissions.

```yaml
mount-type: native
```
