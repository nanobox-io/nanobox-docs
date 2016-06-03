---
title: Service Stats
---

With any production application, visibility into your servers' resource usage is incredibly important. They help to identify any possible bottlenecks and are a good indicator of what to scale and when to scale it. Service resource usage statistics are provided in your Nanobox dashboard.

### Monitored Server Resources
To provide visibility into the health of your app, Nanobox collects RAM, CPU, & Disk usage from all components and nodes.

#### RAM
The RAM statistic indicates how much of the allotted RAM a component/node is using. The higher the RAM usage, the more likely your service is to become unresponsive. *In multi-instance components, this is an average of RAM usage across all nodes in the cluster.*

#### CPU
The CPU statistic indicates how much of the available CPU a component/node is using. CPU provides compute time, speed, and responsiveness. The higher the CPU usage, the more likely your service is to become slow or completely unresponsive. *In multi-instance components, this is an average of CPU usage across all nodes in the cluster.*

#### Disk
The Disk statistic represents how much of your component's/node's allotted disk space is being used. If you run out of disk space, the component/node will not function properly. *In multi-instance components, this is an average of Disk usage across all nodes in the cluster.*

### Summary View
Your Nanobox dashboard provides live stats as well as a summary of hourly historical stats.

![Service Resource Usage Summary](/images/service-stats-summary.png)


### Detailed View
Click on the "Stats" button under a component/node to view detailed historical hourly averages. In multi-component servers ([bunkouses](/scaling/bunkhouse/)), you'll also see a summary of what each component is using of the available resources.

![Expanded Service Resource Usage](/images/service-stats-expanded.png)

**Note:** Historical averages are provided in hourly blocks. In some cases, a brief period of high resource usage may be lost in the hourly average.
