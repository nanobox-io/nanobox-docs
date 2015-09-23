---
title: Single-Node & Multi-Node Apps
layout: prod
---

When deploying an app to a service provider through Nanobox, you have two options for the overall architecture of your application: Single-Node or Multi-Node. 

## Single-Node Apps
- The entire app lives on a single VM/instance
- All services share the available RAM, CPU, and Disk
- Only Vertical Scaling, No Horizontal Scaling
- No redundancy

#### Benefits
- Cost Savings

#### Disadvantages


## Multi-Node Apps
- Each service is a unique VM or cluster of VMs
- Vertical and Horizontal scaling
- Redundancy in Services with 2+ instance
- Each VM has its own allotted resource. Services do not share resources with each other 

#### Benefits
- Redundancy
- More Scaling Options
- Services can be scaled individually
- Both horizontal and vertical scaling

#### Disadvantages