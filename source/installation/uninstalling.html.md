---
title: Uninstalling
---

An uninstaller is included with each nanobox installer. The unstinstaller can be used to uninstall nanobox or the entire nanobox bundle (nanobox, Virtual Box, and Vagrant).

#### Mac OSX
When running the uninstaller on OSX, you'll be given a prompt to specify what to uninstall - "nanobox" or "bundle". Typing `nanobox` will uninstall nanobox only. Typing `bundle` will uninstall nanobox, Virtual Box, and Vagrant.

#### Linux
Uninstalling nanobox on Linux is done just as you would any other packaged software. You can either double click the installer file and select the uninstall option or, run the `dpkg` command in your console:

```shell
$ sudo dpkg -i nanobox.deb
```

What gets uninstalled depends on the installer you use to uninstall. The `nanobox.deb` installer will uninstall nanobox only. The `nanobox-bundle.deb` installer will uninstall nanobox, Virtual Box, and Vagrant.

#### Windows
Nanobox can be unistalled in Windows by launching the nanobox installer. It will detect if nanobox is already installed and, if so, will provide an uninstall option. What gets uninstalled depends on which installer you use. The `nanobox.msi` installer will uninstall nanobox only. The `nanobox-bundle.exe` installer will uninstall nanobox, Virtual Box, and Vagrant.
