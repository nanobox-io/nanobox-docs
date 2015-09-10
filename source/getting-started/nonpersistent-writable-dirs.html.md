---
title: Nonpersistent Writable Directories
---

Code services created through nanobox are read-only, but in some cases, it may be necessary to enable writable permissions in a directory without storing that directory in [network storage](/getting-started/network-storage/). Nonpersistent writable directories allow you to enable writable permissions on directories in your code instances’ local filesystems. This doc explains how nonpersistent writable directories work and how they're different from network directories.

### What is a Nonpersistent Writable Directory
A nonpersistent writable directory is a directory stored in your instances’ local filesystem with writable permissions. Because they are stored locally in each instance, their contents do not persist when the instance is decommissioned.

### How Are They Different Than Network Directories?
Nonpersistent writable directories and Network Directories are very similar, but have two key differences.

- Nonpersistent writable directories are stored in your instances’ local filesystems and are unique to each instance. Network directories are stored in a network storage service and shared between all instances.

- The contents of nonpersistent writable directories are flushed on each deploy. The contents of network directories persist between deploys.

## Configuring Nonpersistent Writable Directories

Nonpersistent writable directories are available to code services (webs & workers) and are configured in your Boxfile. On deploy, these directories are replaced with empty, writable directories. Filepaths should be relative to the root of your repo.

#### nonpersistent\_writable\_dirs
```yaml
web1:
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB
```

#### Nested Directories Will Be Ignored
When specifying `nonpersistent_writable_dirs` in your Boxfile, you shouldn't list “nested” directories. For example: dirA and dirA/nested-dir. While the writable permissions are recursive, only the parent directory will be honored and the nested subdirectories will not be created.

#### Nonpersistent Writable Dirs Can't be Inside of Network Dirs
When defining `nonpersistent_writable_dirs`, be sure the directory you define is not inside of a `network_dir`. All network directories are stored in a storage service and files within them cannot be saved to the local filesystem of instances.

## Things To Know

### Do Not Persist Between Deploys
As the name suggests, nonpersistent writable directories do not persist between deploys. These directories are in each instances’ local filesystem and are decommissioned with the instance. They should only be used for transient data such as cache, temporary files, etc.

### Faster than Network Directories
Because nonpersistent network directories are a part of each instance’s local filesystem, they are much faster than network directories. Network directories are housed in an external service and accessed across the network, adding inherent latency.

### Overwrites the Directory in Your Repo
Nonpersistent writable directories will not inherit code from your repo. These directories are replaced with empty, writable directories on deploy, overwriting any files inside of them.

### Limited to Service’s Local Disk Size
The amount of code/data that can be stored in nonpersistent network directories is limited to the disk size of your code service – 4GB on public/private cloud instances and variable on bare metal instances.

## Recommended Uses

### Static Asset Caching
Nonpersistent writable directories are a great solution for caching static assets. The files are local, so reads and writes are fast. Caches are built organically as requests hit each instance. Also, there is no chance of multiple instances trying to write to the same cache file and interrupting network storage connections.

#### Priming Caches on Deploy
If using a `before_deploy` or `after_deploy` hook to prime your cache on deploy, these commands will only run on one of your service’s instances. In services with more than one instance, you should use `before_deploy_all` and `after_deploy_all` hooks to run the command on all instances.