---
title: dev
---

The `dev` node of the Boxfile allows you to define settings applied to interactive console sessions when using Nanobox locally.

### ignore\_lib\_dirs
When running a Nanobox [dev platform](/cli/dev/), directories specified as [`lib_dirs`](/app-config/boxfile/code-build/#library-directories) are populated and used inside your Nanobox VM. In some cases, rather than using the library directories in your nanobox VM, you may want to use the contents of lib\_dirs on your local filesystem. Setting `ignore_lib_dirs` to `true` will mount the lib_dirs on your local filesystem rather than using those in your VM.

**Note:** This only applies when using an interactive console (`nanobox dev console`).

#### ignore\_lib\_dirs
```yaml
# Default Setting
dev:
  ignore_lib_dirs: false
```

### fs_watch
Many front-end development frameworks rely on a filesystem watcher that tells the OS when a file is modified and triggers some type of event (usually a browser refresh). Nanobox dev environments includes a file-watcher that is disabled by default. You can enable the file-watcher using the `fs_watch` setting your boxfile.yml.

```yaml
# Default Setting
dev:
   fs_watch: true
```
