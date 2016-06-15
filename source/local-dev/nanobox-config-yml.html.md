---
title: Nanobox config.yml
---

The first time `nanobox dev` is run, Nanobox creates a `.nanobox` directory in your user home directory. Inside of this directory, you can either find or create a `config.yml` file.  The `.nanobox/config.yml` configuration options for your Nanobox virtual machine (VM).

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
`mount-type` specifies which technology to use when mounting code on your local machine into your Nanobox VM. The following options are available:

- `native` - Uses the network file system native to your [provider](#provider).
- `netfs` - Uses NFS on OSX and Linux, CIFS on Windows. **Much** better performance, but requires admin permissions.

```yaml
mount-type: native
```
