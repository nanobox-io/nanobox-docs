---
title: halt
---

The `halt` command shuts down the currently running nanobox VM.

Nanobox/Vagrant will first attempt to gracefully shut down the machine by running the guest OS shutdown mechanism. If this fails, it will effectively just shut off power to the virtualized machine.

### Usage
```shell
$ nanobox halt
$ nanobox halt -f
```

### Options
#### -f, --force
Halts the VM without confirmation.