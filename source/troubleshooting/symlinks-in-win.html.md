---
title: Symlinks in Windows
description: If running in Windows, creating symlinks in an app running in Nanobox is made possible through the 'mfsymlinks' option.
---

Nanobox launches your app in a virtualized Linux environment and into which it mounts your local codebase. Creating symlinks in a codebase that mounted into a Linux environment, but actually resides in a Windows host filesystem can be tricky.

## The Problem
Windows and Linux/Unix have completely separate implementations for creating symlinks. Symlinks created in a Linux environment will not be honored by Windows and vice versa.

## The Solution
In order for symlinks created in Nanobox to work on a Windows host, there needs to be a "translation" layer. The <a href="http://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=736a33205969c16f81d747db14ff4c0f133609a6" target="\_blank"><code>mfsymlinks</code></a> option available when creating a CIFS (the mounting technology used in Windows) provides this layer.

### Enable mfsymlinks in Your config.yml
To enable mfsymlinks, open your [`~/.nanobox/config.yml`](/local-config/nanobox-config-yml/) and add the following:

```yaml
netfs_mount_opts: 'mfsymlinks'
```

*Information is also available in the [config.yml documentation](/local-config/nanobox-config-yml/#netfs-mount-options).*

## Caveats with mfsymlinks
There are important things to know when using `mfsymlinks`.

### Keep Symlink'd Files out of Version Control
If you create symlinks on Windows and then commit it into your source code, no other operating system will recognized it and it will cause issues for collaborators.

Don't commit symlinks to version control. All other collaborators need to create the symlinks themselves.
