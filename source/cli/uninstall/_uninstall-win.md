To uninstall Nanobox from your local machine, there's a few steps you need to go through.

### 1. Destroy Your Nanobox VM
The [`nanobox destroy`](/cli/destroy/) command will destroy the Nanobox VM, removing all apps, containers, and all associated Nanobox and application data.

```bash
$ nanobox destroy
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
$ where nanobox
```

Once you know where the Nanobox executables are located, you can use the following command to remove them.

#### Removing Nanobox Executables
```txt
$ rmdir "C:\Program Files\Nanobox" /s
```

### Uninstall Virtual Box & Docker Toolbox
Nanobox uses Virtual Box and Docker Toolbox to create and provision your local virtual environments. Each of these tools has their own uninstallation process covered in the following links:

[Uninstalling Virtual Box](https://www.virtualbox.org/manual/ch02.html#idm816)  
[Uninstalling Docker Toolbox](https://docs.docker.com/v1.8/installation/windows/#uninstallation)  
