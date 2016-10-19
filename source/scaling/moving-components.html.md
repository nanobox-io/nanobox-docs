---
title: Moving Components Out of a Bunkhouse
description: As your app grows, you need to expand and move components into their own scalable clusters or into other multi-component servers.
---

For many apps, a single Bunkhouse multi-component server works just fine, but as your app grows and you need to expand, you can move components out of your bunkhouse into their own scalable clusters or into other bunkhouse servers.

To move a component out of a bunkhouse, click on on the "Move" button under the component in your dashboard.

![Move](/src-images/move-button.png)

When moving a component out of a bunkhouse, you have two options:

### 1. Horizontal/Redundant Cluster
Moving a component into its own redundant cluster allows you to scale the component both vertically and horizontally. Web and worker components can have additional nodes, increasing their ability to handle concurrent requests. Data components can be redundant, insuring uptime in case a node goes offline. *(Redundancy depends on the image used for the data component)*

### 2. Single, Bunkhouse Server
You can move a component into a new single bunkhouse server, or into an existing bunkhouse server. There are certain limitations to be aware of when using bunkhouse servers. These are outlined in the [Bunkhouse Servers](/scaling/bunkhouse/#things-to-know-about-a-bunkhouse-server) doc.

### Horizontal Clusters vs. Single, Bunkhouse Servers
| Feature                                 | Redundant Cluster | Bunkhouse Server |
|:----------------------------------------|:-----------------:|:----------------:|
| Horizontally Scalable                   | &#9989;           | &#10060;         |
| Vertically Scalable                     | &#9989;           | &#9989;          |
| Dedicated RAM, CPU, Disk per Component  | &#9989;           | &#10060;         |
| Individually Scalable Components(s)     | &#9989;           | &#10060;         |
| Redundancy Options                      | &#9989;           | &#10060;         |
