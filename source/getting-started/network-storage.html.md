---
title: Network Storage
---

In some cases, it may be necessary to store files in your app's filesystem. In a traditional hosting environment, apps run on a single server with both source code and all auxiliary services using the same server resources and filesystem. In Nanobox however, apps consist of "micro-services" - isolated virtual instances, each with their own resources and filesystems, networked together inside of a virtual machine. In order for written files to be consistent across all services/instances in your app, they must be written to a single filesystem shared with other services. This is where network storage comes in.

## Understanding File Consistency in a Distributed Architecture

In a distributed application architecture, there are multiple isolated filesystems. To ensure consistency across code services, code service filesystems are read-only. This prevents them from writing themselves out of sync, but it poses a problem in the case where an app does need to write to the filesystem.

### The Problem
Because each code service has its own isolated filsytem, anything written to the filesystem is not inaccessable to other code services.

**For example:** An app allows users to upload images. Images are uploaded through web1, but then processed into smaller sizes by worker1. Because web1's filesystem is isolated, the worker would never be able to access the uploaded images.

<img alt="Network Storage Problem" src="/images/network-storage-problem.svg" width="430" style="display: block; margin: 0 auto;">

### The Solution
Network storage services provide a centralized filesystem shared between code services. Directories inside of code services to which files must be written/read can be specified as "network directories". These directories are then replaced with [network mounts](#network-mounts) on deploy, which route requests to those directories across the network to the filesystem of the network storage service. This allows isolated code services to write to and read from a single writable filesystem. 

<img alt="Network Storage Solution" src="/images/network-storage-solution.svg" width="620" style="display: block; margin: 0 auto;">

## How Network Storage Works
Network storage services provide centralized writable filesystems sharable between multiple code services. For each code service, `network_dirs` can be specified in the [Boxfile](/getting-started/boxfile). On deploy, these directories are replaced with network mounts which route any requests to the directory or its contents across the app's private network to the correpsonding path inside of the storage service. This allows code services to access files stored in network storage using the same filepaths as if in local filesystem.

<h3 id="network-mounts">Network Mounts</h3>
Network mounts essentially replace those directories in your repo (and their contents) specified as network directories in your Boxfile. Anything inside of a network directory within your repo will not be accessible to your app until uploaded to the matching filepath inside of your storage service.

## Configuring Network Storage
Network storage services don't require much configuration. Really the only configurable option is the `name` of the service. Storage services use the <a href="https://en.wikipedia.org/wiki/Network_File_System" target="_blank">"nfs" file system protocol</a> and can be created/configured using the service ID `nfs1` (incremented up when using mulitple storage services). 

#### Network Storage Service in the Boxfile
```yaml
nfs1:
  name: file-storage
```

### Network Directories
In order for a code service to be able to store files in a storage service, network directories must be added to the code service's configuration. Network directories are configured per code service using the `network_dirs` config.

#### Network Directories in the Boxfile
```yaml
web1:
  network_dirs:
    - public/uploads

worker1:
  network_dirs:
    - public/uploads

nfs1:
  name: file-storage
```

###### Things to Note:
- Filepaths of `network_dirs` are relative to the root of your app's repo.
- If you have multiple code services that need to share network directories, the `network_dirs` config must be added to all the code services.
- If a code service includes `network_dirs` in the Boxfile, but no storage service is include, one will automatically be created using the service ID `nfs1`.

### Network Directories with Multiple Storage Services
It's possible to have multilple storage services in an app, with specific network directories stored on each. When using multiple storage services, you can specify which should be used be used by nesting the ID of the desired storage service under `network_dirs` config, then specifying the directory paths.

#### Network Directories for Mutliple Storage Services
```yaml
web1:
  network_dirs:
    nfs1:
      - public/uploads
    nfs2:
      - public/processed

worker1:
  network_dirs:
    nfs1:
      - public/uploads
    nfs2:
      - public/processed

nfs1:
  name: queued_images

nfs2:
  name: processed_images
```

## Managing Network Storage
Network directories and their contents can be managed through an SSH connection into your storage service. More information is availble in the [Shell Access doc](/getting-started/shell-access).
