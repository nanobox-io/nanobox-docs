---
title: NFS Boxfile Settings
---

#### Overview of NFS Boxfile Settings
```yaml
nfs1:
  name: file-storage

web1:
  network_dirs:
    nfs1:
      - path/to/dirA
```

There are no configuration options unique to NFS services, but they work in conjunction with network directories. These are covered in detail in the [Network Storage documentation](/getting-started/network-storage/).
