If you notice local apps running a little slowly with Nanobox, there are changes you can make that can drastically improve performance.

Nanobox stores Virtual Machine (VM) settings that are configured using the [`nanobox config` command](/cli/configure). This command is used to make the changes outlined below.

## If using the Light-Weight VM, Use netfs for Filesystem Mounting
If you're using a light-weight VM (VirtualBox/Docker-Machine), Nanobox mounts the current working directory into your Nanobox container. This allows changes made to code on your local machine to immediately appear in Nanobox container. The default `native` method used to mount code can be slow. Switching to `netfs` will greatly improve code read/write speeds in Nanobox.

*"netfs" is a generic term for "network filesystem". The actual technology used in Windows is [CIFS](https://technet.microsoft.com/en-us/library/cc939973.aspx).*

### Using netfs
To use netfs, set your `mount-type` setting to `netfs`.

```bash
nanobox config set mount-type: netfs
```

### Things to Know When Using netfs
#### netfs Requires Admin Privileges
netfs does require admin privileges in order to create the mount. Nanobox will prompt you for your administrative password whenever you start a dev environment.

## Virtual Machine Settings
You can set the amount of RAM, number of CPU cores, etc to make available to your VM. Information about config settings is available in the [Configure Nanobox doc](/local-config/configure-nanobox/).

```bash
# Example
nanobox config set ram 4
```

#### Start/Stop Your Nanobox Container
In order to apply changes to your virtual machine configuration, it must be restarted:

```bash
# If the Nanobox VM is running, stop it
nanobox stop

# Start Nanobox
nanobox start
```
