If you notice Nanobox and your apps running a little slowly, there are changes you can make that can drastically improve performance.

## Use netfs for Filesystem Mounting
Whenever you run `nanobox dev start`, Nanobox mounts the current working directory into your Nanobox VM. This allows changes made to code on your local machine to immediately appear in your VM. The default `native` method used to mount code can be slow. Switching to `netfs` will greatly improve code read/write speeds in your VM.

*"netfs" is a generic term for "network filesystem". The actual technology used in MacOS is [NFS](https://en.wikipedia.org/wiki/Network_File_System).*

### Using netfs
To use netfs, you'll need to modify your [`config.yml`](/local-dev/nanobox-config-yml). This file can be found at `~/.nanobox/config.yml`. If it doesn't already exist, you can create it. Update the `mount-type` setting to `netfs`.

#### netfs in the config.yml
```yaml
mount-type: netfs
```

### Things to Know When Using netfs
#### netfs Requires Admin Privileges
netfs does require admin privileges in order to create the mount. When Nanobox detects the `netfs` setting in your `config.yml`, it will prompt you for your administrative password whenever you start a dev platform.

#### Exports File Can be Corrupted
Your OS tracks filesystem mounts and exports in an export file. Sometimes (more frequently than you'd think) your exports file can be corrupted. It won't compromise your app or local environment in any way. It just prevents the mounts from being established correctly. Information about fixing your exports file can be found in the [Broken netfs Exports File](/troubleshooting/broken-exports-file/)


## Virtual Machine Settings
Nanobox uses [Virtual Box](https://www.virtualbox.org/) to create the Nanobox VM on your local machine. Virtual Box Manager (installed with Virtual Box) allows you to configure what system resources are allocated to the VM and how those resources are used. To access these settings, open Virtual Box Manager and, select your Nanobox VM, then click on the "Settings" icon in the top nav.

**Note:** *Changes to VM settings should be made while your VM is powered off.*

![Virtual Box VM Settings](vm-performance-mac-settings.png)

With the settings window open, click on the "System" tab.


### VM Memory
Inside System Settings, there's a "Motherboard" tab. Here you're able to adjust how much RAM is allocated to your Nanobox VM. Virtual Box Manager will show you how much memory is safe to allocate to your system. The more memory you allocate to your Nanobox VM, the more performant your dev apps will be. However, we recommend staying in the green.

![Virtual Box VM Settings](vm-performance-mac-ram.png)

### VM Processor
Under the "Processor" tab, you're able to specify how many of your system's available CPU cores should be allocated to your Nanobox VM as well as how much of each of those cores can be utilized.

The more CPU cores your VM has, the more performant it will be. Setting your execution cap low will prevent your VM from hurting the performance of your host machine, but it can also starve the VM of required compute power. Again, Virtual Box Manager will show you what's safe for your machine. We recommend staying in the green.

![Virtual Box VM Settings](vm-performance-mac-cpu.png)

### VM Acceleration
Under the "Acceleration" tab of your system settings, you have the option to select a Paravirtualization Interface (essentially a virtualization emulator). The most efficient interface offered is "KVM".

![Virtual Box VM Settings](vm-performance-mac-kvm.png)

Once all your changes are made, click "OK" to save.
