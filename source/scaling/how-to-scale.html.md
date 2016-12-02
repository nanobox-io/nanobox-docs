---
title: How to Scale
description: Nanobox provides scaling controls that allow you to easily and quickly scale your app.
---

Nanobox provides scaling controls in your dashboard that allow you to scale your apps when necessary. Scaling controls are exposed by clicking the "Scale" button underneath a scalable server/component.

![Scale Button](/assets/images/scale-button.png)

### The Resource Controller
The resource controller allows to [scale vertically](/scaling/scaling-methods/#vertical-scaling) by specifying what resources are available to your server/nodes.

![Scaling Server Resources](/assets/images/scale-resource-controller.png)

What resource options are available depend on what options your [hosting provider](/account/hosting-accounts/) has made available. These options are pulled directly from each provider.

### The Node Controller
The Node controller allows you to [scale horizontally](/scaling/scaling-methods/#horizontal-scaling) by specifying the number of nodes in a cluster. It comes in two forms depending on the type of component. Web and worker can scale to an infinite number of nodes. In these components, horizontal scaling is controlled through a slider.

![Scaling the Number of Nodes in a Cluster](/assets/images/scale-node-slider.png)

<!-- In most data components, horizontal scaling is limited to a redundant, master-master or master-slave cluster. In this case, horizontal scaling is handled through a simple dropdown that allows you to toggle redundancy.

![Redundant Dropdown](/assets/images/scaling-redundant-dropdown.png) -->
