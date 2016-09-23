---
title: Platform Components
---

Each app deployed with Nanobox includes "platform components". These services provide specific functionality necessary for your app to run. Below are summaries of the purpose of each platform component.

*Each component is powered using a [Nanopack](http://nanopack.io) open-source project. While you don't need to worry about knowing these projects, you're welcome to take a look.*

##  Mesh
The mesh component is a router and load-balancer that acts as the public access point for your app. It routes and load-balances incoming requests to appropriate web component(s). Because it is the public access point for your app, custom domains are pointed to the IP of the server which houses the load balancer.

***Under the Hood:*** [*Portal*](https://github.com/nanopack/portal)

##  Monitor
The monitor component tracks and stores resource usage (RAM, CPU, Disk, etc.) of components and nodes.

***Under the Hood:*** [*Pulse*](https://github.com/nanopack/pulse)

##  Logger
The logger captures and stores logs from your app's components.

***Under the Hood:*** [*Logvac*](https://github.com/nanopack/logvac)

##  Message Bus
The message bus pushes data such as resource usage metrics and logs to the Nanobox dashboard/API for live updates.

***Under the Hood:*** [*Mist*](https://github.com/nanopack/mist)

##  Warehouse
The warehouse is a storage component that houses files and data required for apps. This includes code builds and data backups.

***Under the Hood:*** [*Hoarder*](https://github.com/nanopack/hoarder)
