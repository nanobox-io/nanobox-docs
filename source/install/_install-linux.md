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
