---
title: dev
---

The `dev` node of the Boxfile allows you to define settings applied to interactive console sessions when using Nanobox locally.

### ignore\_lib\_dirs
When running Nanobox locally, directories specified as [`lib_dirs`](/boxfile/build/#library_directories) are populated and used inside your nanobox. In some cases, rather than using the library directories in your nanobox VM, you may want to use the contents of lib\_dirs on your local filesystem. Setting `ignore_lib_dirs` to `true` will mount the lib_dirs on your local filesystem rather than using those in your nanobox.

**Note:** This only applies when using an interactive console (`nanobox dev` or `nanobox dev console`).

#### ignore\_lib\_dirs
```yaml
# Default Setting
dev:
  ignore_lib_dirs: false
```
