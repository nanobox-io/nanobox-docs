---
title: .nanofile
---

The `.nanofile` is a yaml config file used to define what resources are allocated from your local machine to your nanobox virtual environment. A `.nanofile` is only necessary when you need/want to deviate from the defaults.

####.nanofile Defaults
```yaml
ram: 1024
cpus: 2
cpu_cap: 50
domain: "appname.dev"
```
#### RAM
`ram` defines the amount of RAM (in megabytes) allocated to your virtual environment.

#### CPUs
`cpus` defines the number of CPU cores allocated to your virtual environment.

#### CPU Cap
`cpu_cap` defines the maximum percentage (out of 100) of the CPU allocated to your virtual environment that can be used.

#### Domain
`domain` specifies the domain where your locally running app is accessed. During the provisioning process, nanobox writes an entry into your local hosts file using a provided IP (172.16.x.x) and assigns it the domain of *appname*.dev, or whatever domain is specified.

### .nanofile Handling
All users' machines are different and the settings defined in the .nanofile may not work on others' machines. As a general practice, we recommend ignoring the .nanofile in whatever version control tool you use. However, if you have a minimum requirement for your project and/or you're confident all machines used by your team will be able to support the settings defined in your .nanofile, feel free to commit it.