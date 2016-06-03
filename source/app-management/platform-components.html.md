---
title: Platform Components
---

Each app on Nanobox includes "platform components". These services provide specific functionality necessary for your app to run on Nanobox. Below are summaries of the purpose of each platform component.

*Each component is powered using a [Nanopack](http://nanopack.io) open-source project. While you don't need to worry about knowing these projects, you're welcome to take a look.*

##  Load Balancer
The load balancer is the public access point for your app that both load balances and routes incoming requests to appropriate web component(s). Because it is the public access point for your app, custom domains are pointed to the IP of the server which houses the load balancer.

***Under the Hood:*** [*Portal*](https://github.com/nanopack/portal)

##  Metrics
The metrics component tracks and stores resource usage (RAM, CPU, Disk, etc.) of components and nodes.

***Under the Hood:*** [*Pulse*](https://github.com/nanopack/pulse)

##  Logger
The logger captures and stores logs from your app's components.

***Under the Hood:*** [*Logvac*](https://github.com/nanopack/logvac)

##  Pusher
The pusher is a realtime message bus that pushes data such as resource usage metrics and logs to the Nanobox dashboard and CLI for live updates.

***Under the Hood:*** [*Mist*](https://github.com/nanopack/mist)

##  Warehouse
The warehouse is a storage component that houses files and data required for Nanobox apps. This includes code builds and data backups.

***Under the Hood:*** [*Hoarder*](https://github.com/nanopack/hoarder)
