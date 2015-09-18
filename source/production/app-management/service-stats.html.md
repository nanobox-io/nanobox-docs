---
title: Service Stats
layout: prod
---

With any production application, visibility into your servers' resource usage is incredibly important. They help to identify any possible bottlenecks and/or are a good indicator of what and when to scale. Service resource usage statistics are provided in your Nanobox dashboard.

### Monitored Server Resources
To provide visibility into the health of your app's services, [NanoAgent](/production/getting-started/nanoagent) collects RAM, CPU, & Disk usage from all services.

#### RAM
The RAM statistic indicates how much of the allotted RAM a service is using. The higher the RAM usage, the more likely your service is to become unresponsive. *In multi-instance services, this is an average of RAM usage across all instances in the cluster.*

#### CPU
The CPU statistic indicates how much of the available CPU a service is using. CPU provides speed and responsiveness. The higher the CPU usage, the more likely your service is to become slow or completely unresponsive. *In multi-instance services, this is an average of CPU usage across all instances in the cluster.*

#### Disk
The Disk statistic represents how much of your service's allotted disk space is being used. If your service ever runs out of disk space, it will not function properly. *In multi-instance services, this is an average of Disk usage across all instances in the cluster.*

### Single-Node Apps vs Multi-Node Apps
In single-node applications, all services run on a single VM shown as a single "service" in your dashboard. Services share resources.

In multi-node apps, every service is its own virtual machine or cluster, each with their own server resources. The stats provided in your dashboard are an average of usage across all instances within a service cluster.

For more information about the differences between single-node and multi-node apps, view the [Single-Node & Multi-Node Apps](/production/scaling/single-vs-multi-node).

### Summary View
On your app's dashboard home page, a summary of both hourly historical stats and each services' current resource usage are provided.

![Service Resource Usage Summary](/images/service-stats-summary.png)


### Expanded View
By clicking on the service to expand its options, you'll see more detailed historical hourly averages.

![Expanded Service Resource Usage](/images/service-stats-expanded.png)

**Note:** Historical averages are provided in hourly blocks. In some cases, a breif period of high resource usage may be lost in the hourly average.