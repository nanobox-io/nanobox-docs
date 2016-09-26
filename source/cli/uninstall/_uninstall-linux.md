To uninstall Nanobox from your local machine, there's a few steps you need to go through.

### 1. Implode Your Nanobox Container
The [`nanobox implode`](/cli/implode/) command will destroy the Nanobox container, removing all apps, filesystem mounts, and all associated Nanobox data.

```bash
$ nanobox implode
```

### 2. Remove the Nanobox Executables
Nanobox required two executables installed on your system $PATH - `nanobox` and `nanobox-update`. To find the location of these executables, run the following commands:

#### Finding the Location of Nanobox Executables
```bash
$ which nanobox
$ which nanobox-update
```

Once you know where the Nanobox executables are located, you can use the following commands to remove them.

#### Removing Nanobox Executables
```bash
$ rm -f /path/to/nanobox
$ rm -f /path/to/nanobox-update
```

### Uninstall Virtual Box
Nanobox uses Virtual Box to create and provision your local virtual environments. Virtual Box provides uninstallation instructions in [their documentation](https://www.virtualbox.org/manual/ch02.html#idm1024).
