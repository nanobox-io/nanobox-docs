To install Nanobox on Linux distributions, you'll need to download the Nanobox executables and install Virtual Box and Docker.

## Download & Install Nanobox Executables
Nanobox requires two executables:

`nanobox` - The Nanobox CLI  
`nanobox-update` - The Nanobox CLI update manager

These can be downloaded using `wget`:

```bash
$ wget https://s3.amazonaws.com/tools.nanobox.io/nanobox/v1/linux/amd64/nanobox
$ wget https://s3.amazonaws.com/tools.nanobox.io/nanobox/v1/linux/amd64/nanobox-update
```

### Make the Downloaded Files Executable
Run the following to grant the downloaded files executable permissions required to run on your system.

```bash
$ chmod +x nanobox
$ chmod +x nanobox-update
```

### Install the Executables on Your $PATH
Install the Nanobox executables on your system $PATH. $PATH's vary by distribution, but below are basic examples.

```bash
$ mv nanobox /usr/local/bin/nanobox
$ mv nanobox-update /usr/local/bin/nanobox-update
```

## Install Virtual Box & Docker Toolbox
Nanobox utilizes [Virtual Box](https://www.virtualbox.org/) & [Docker](https://www.docker.com) to provision virtual environments on your local machine. If you already have these installed locally, you're all set. If not, the following links will help:

[Download & Install Virtual Box](https://www.virtualbox.org/wiki/Linux_Downloads)  
[Download & Install Docker (Select Your Distribution)](https://docs.docker.com/engine/installation/linux/ubuntulinux/)
