If you notice local apps running a little slowly with Nanobox, there are changes you can make that can drastically improve performance.

Nanobox stores Virtual Machine (VM) settings that are configured using the [`nanobox config` command](/cli/configure). This command is used to make the changes outlined below.

## Use Native Docker Containers
Docker is really performant on Linux and we highly recommend using Native docker containers with Nanobox ([view the requirements](/install/requirements/docker/)). To use native docker containers, set your `provider` to `native`:

```bash
nanobox config set provider native
```

## Virtual Machine Settings
You can set the amount of RAM, number of CPU cores, etc to make available to your VM. Information about config settings is available in the [Configure Nanobox doc](/local-config/configure-nanobox/).

```bash
# Example
nanobox config set ram 4
```

#### Start/Stop Your Nanobox Container
In order to apply changes to your virtual machine configuration, must be restarted:

```bash
# If the Nanobox VM is running, stop it
nanobox stop

# Start Nanobox
nanobox start
```
