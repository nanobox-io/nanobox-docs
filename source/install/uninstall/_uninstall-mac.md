To uninstall Nanobox from your local machine, there's a few steps you need to go through.

### 1. Implode Your Nanobox Container
The [`nanobox implode`](/cli/implode/) command will destroy the Nanobox container, removing all apps, filesystem mounts, and all associated Nanobox data.

```bash
nanobox implode
```

### 2. Remove the Nanobox Executables
Nanobox installs two executables on your system $PATH - `nanobox` and `nanobox-update`. The default locations of these executables are listed below, however it's possible the executables are installed in a non-default location.

#### Default Nanobox Executable Locations
```bash
/usr/local/bin/nanobox
/usr/local/bin/nanobox-machine
/usr/local/bin/nanobox-update
/usr/local/bin/nanobox-vpn
```

If the Nanobox executables are installed at a non-default location, you can use the following commands to find where they are installed.

#### Finding the Location of Nanobox Executables
```bash
which nanobox
which nanobox-machine
which nanobox-update
which nanobox-vpn
```

Once you know where the Nanobox executables are located, you can use the following commands to remove them.

#### Removing Nanobox Executables
```bash
rm -f /path/to/nanobox
rm -f /path/to/nanobox-machine
rm -f /path/to/nanobox-update
rm -f /path/to/nanobox-vpn
```

### Uninstall Virtual Box
Nanobox uses Virtual Box to create and provision your local virtual environments. Virtual Box provides uninstallation instructions in [their documentation](https://www.virtualbox.org/manual/ch02.html#idm856).
