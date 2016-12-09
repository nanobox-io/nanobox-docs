To uninstall Nanobox from your local machine, there's a few steps you need to go through.

### 1. Implode Your Nanobox Container
The [`nanobox implode`](/cli/implode/) command will destroy the Nanobox container, removing all apps, filesystem mounts, and all associated Nanobox data.

```bash
nanobox implode
```

### 2. Remove the Nanobox Executables
Nanobox installs two executables on your system - `nanobox` and `nanobox-update`. The default location of these executables is in the following directory,  however it's possible the executables are installed in a non-default location.

#### Default Nanobox Executables Location
```txt
C:\Program Files\Nanobox\
```

If the Nanobox executables are installed at a non-default location, you can use the following command to find where they are installed.

#### Finding the Location of Nanobox Executable
```bash
where nanobox
```

Once you know where the Nanobox executables are located, you can use the following command to remove them.

#### Removing Nanobox Executables
```txt
rmdir "C:\Program Files\Nanobox" /s
```

### Uninstall Virtual Box
Nanobox uses Virtual Box to create and provision your local virtual environments. Virtual Box provides uninstallation instructions in [their documentation](https://www.virtualbox.org/manual/ch02.html#idm816).
