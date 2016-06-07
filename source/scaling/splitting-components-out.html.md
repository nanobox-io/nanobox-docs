---
title: Splitting Components Out of a Bunkhouse
---

For many apps, a single Bunkhouse multi-component server works just fine, but as your app grows and you need to expand, you can "split" components out of your bunkhouse into their own scalable clusters or into another bunkhouse server.

To split a component out of a bunkhouse, click on on the "Split" button under the component in your dashboard.

![Split](/src-images/split-button.png)

When splitting a component out of a bunkhouse, you have two options:

### 1. Horizontal Cluster
Splitting a component into its own horizontal cluster allows you to scale the component both vertically and horizontally. Web and worker components can have additional nodes, increasing their ability to handle concurrent requests. Data components can be redundant, insuring uptime in case a node goes offline. *(Redundancy depends on the image used for the data component)*

### 2. Single, Bunkhouse Server
You can split a component into a new single bunkhouse server, or into an existing bunkhouse server. There are certain limitations to be aware of when using bunkhouse servers. These are outlined in the [Bunkhouse Servers](/scaling/bunkhouse/#things-to-know-about-a-bunkhouse-server) doc.

### Horizontal Clusters vs. Single, Bunkhouse Servers
| Feature                                 | Horizontal Cluster           | Bunkhouse Server             |
|:----------------------------------------|:----------------------------:|:----------------------------:|
| Horizontally Scalable                   | <span class="green">✔</span> | <span class="red">✘</span>   |
| Vertically Scalable                     | <span class="green">✔</span> | <span class="green">✔</span> |
| Dedicated RAM, CPU, Disk per Component  | <span class="green">✔</span> | <span class="red">✘</span>   |
| Individually Scalable Components(s)     | <span class="green">✔</span> | <span class="red">✘</span>   |
| Redundancy Options                      | <span class="green">✔</span> | <span class="red">✘</span>   |
