---
title: Network Storage
---

Most web applications need to store files in the filesystem at some point. In a traditional hosting environment, your app consists of a single server running source code and all other auxiliary services. With Nanobox, your app consists "micro-services" - isolated virtual instances, each with their own resources and filesystems. In order for written files to be consistent across all services/instances in your app, they must be written to a single filesystem shared with other services. This is where network storage comes in.

## Understanding Writable Permissions in a Distributed Environment

Apps in Nanobox consist of multiple virtualized boxes or instances networked together, each with their own allotment of sysem resources (RAM, Disk, etc.). They are completely isolated from each other and do not share resources. This poses some interesting challenges as instances try to write to the filesystem, but the written files need to be accessed by other services.


### The Problem
If each individual instance were able to write to its own filesystem, anything written could not be access by other services. For example, if you were to upload an image through your web service, it would be written to the filesystem of that instance. No other service in the app would be able to access the filesystem of your web service.

<img alt="Network Storage Problem" src="/images/network-storage-problem.svg" style="width: 430px; display: block; margin: 0 auto;">


### The Solution
With Nanobox, code instances are read-only, but can be connected to a single, writable filesystem - network storage. This allows them to write when necessary, and share the written files with other services that need to access them.

<img alt="Network Storage Problem" src="/images/network-storage-solution.svg" style="width: 620px; display: block; margin: 0 auto;">


## How Network Storage Works
Network storage services are writable filesystems available to your app's services. The filesystem is accessed across the network through network mounts.

### Network Directories
Any directory in your application needing write-access can be specified as a network directory in your Boxfile. These directories are stored on your storage service and accessible to application instances. On deploy, network mounts are created over each specified directory, allowing all instances to connect and write to a single writable filesystem.

#### Network Directories Use the Same Filepath
Even though network directories are accessed across the network, you're app will still use the same filepath it would use if the directories were on the local filesystem.