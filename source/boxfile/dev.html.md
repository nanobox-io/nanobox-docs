---
title: dev
---

The `dev` node of the Boxfile allows you to define settings applied to interactive console sessions when using Nanobox locally.

### fs_watch
Many front-end development frameworks rely on a filesystem watcher that tells the OS when a file is modified and triggers some type of event (usually a browser refresh). Nanobox dev environments includes a file-watcher that is disabled by default. You can enable the file-watcher using the `fs_watch` setting your boxfile.yml.

```yaml
# Default Setting
dev:
   fs_watch: true
```
