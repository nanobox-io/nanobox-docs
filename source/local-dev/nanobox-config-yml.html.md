---
title: Nanobox config.yml
---

The first time `nanobox dev` is run, Nanobox creates a `.nanobox` directory in your user home directory. Inside of this directory, you can either find or create a `config.yml` file.  The `.nanobox/config.yml` defines what how your Nanobox virtual machine (VM) is run and what resources are allocated to it.

#### .nanobox/config.yml
```yaml
# Default Settings
provider: docker_machine​
vm:
  ram: 1024
  cpus: 2
  cpu-cap: 50
  mount: native
```

## Provider
The `provider` config defines which technology is used to manage Docker containers in your virtual/local host. The following providers are available:

- `docker_machine`

*More coming soon*

## Virtual Machine
These options allow you configure what resources are allocated to your Nanobox VM as well as what technology is used to mount the code on your local machine into your VM. These configs should all be nested under `vm`.

```yaml
vm:
  ram: 1024
  cpus: 2
  cpu-cap: 50
  mount: native
```

### RAM
`ram` defines the amount of RAM (in megabytes) allocated to your virtual environment.

### CPUs
`cpus` defines the number of CPU cores allocated to your virtual environment.

### CPU Cap
`cpu_cap` defines the maximum percentage (out of 100) of the CPU allocated to your virtual environment that can be used.

### Mount
`mount` specifies which technology to use when mounting code on your local machine into your Nanobox VM. The following options are available:

- `native` - Uses the network file system native to your [provider](#provider)
- `netfs` - Much better performance, but only available for Nanobox running on OSX.

**We highly recommend anybody using OSX to set their mount to** `netfs`**.**
