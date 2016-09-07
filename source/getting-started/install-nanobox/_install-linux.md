Because the distributions of Linux are so numerous and varied, there aren't Nanobox installers available for Linux. However, you can download and install all the necessary executables manually.

## Download & Install Nanobox Executables
Nanobox comes with two executables:

`nanobox` - The Nanobox CLI  
`nanobox-update` - The Nanobox CLI update manager

These can be downloaded using the following commands:

```bash
$ wget https://s3.amazonaws.com/tools.nanobox.io/nanobox/v1/linux/amd64/nanobox
$ wget https://s3.amazonaws.com/tools.nanobox.io/nanobox/v1/linux/amd64/nanobox-update
```

### Make the Downloaded Files Executable
In order for these files to be executable, they must have executable permissions. Run to following to give them executable permissions.

```bash
$ chmod +x nanobox
$ chmod +x nanobox-update
```

### Install the Executables on Your $PATH
To be able to use these executables from the command line, they must be installed on your system $PATH. $PATH's vary by distribution, but below are basic examples.

```bash
$ mv nanobox /usr/local/bin/nanobox
$ mv nanobox-update /usr/local/bin/nanobox-update
```

## Install Virtual Box & Docker Toolbox
Nanobox utilizes [Virtual Box](https://www.virtualbox.org/) & [Docker](https://www.docker.com) to provision virtual environments on your local machine. If you already have these installed locally, you're all set. If not, the following links will help:

[Download & Install Virtual Box](https://www.virtualbox.org/wiki/Linux_Downloads)  
[Download & Install Docker (Select Your Distribution)](https://docs.docker.com/engine/installation/linux/ubuntulinux/)
