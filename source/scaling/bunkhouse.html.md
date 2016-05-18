---
title: Bunkhouse Servers
---

Every Nanobox app starts out in a single, multi-component server called a "Bunkhouse". Your Bunkhouse houses and runs each of your app's components.

Bunkhouse servers do have some limitations, as explained [below](#things-to-know-about-a-bunkhouse-server), and there will likely be a time you need components to be individually scalable. Components can be "split" out of a bunkhouse into their own scalable cluster, or even into another bunkhouse server. This process is explained the [Splitting Components Out of a Bunkhouse](#) doc.

### Things to Know About a Bunkhouse Server
While running in a Bunkhouse may be sufficient for some apps, there are some import things you should know about.

##### Components Can't be Scaled
Components inside of a bunkhouse server cannot be scaled individually. Only the bunkhouse server itself can be scaled.

##### Limited Bunkhouse Scalability
Bunkhouse servers can only be [scaled vertically](#), meaning you can only adjust what resources are available to the server.

##### No Redundancy
Components on a bunkhouse server and the bunkhouse server itself can not be redundant.

##### Components Share Resources
Components on a bunkhouse server share RAM, CPU, disk, disk IO, etc., with all other components running on the same bunkhouse server.
