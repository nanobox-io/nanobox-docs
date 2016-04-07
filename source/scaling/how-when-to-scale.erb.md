---
title: How & When to Scale

---

Nanobox provides scaling controls in your dashboard that allow you to scale your production apps when necessary. This doc provides information on how to scale apps and when to scale your apps.

## Different Scaling Strategies
Before getting into the specifics of how and when to scale, its important to understand the different scaling strategies available. There are two main approaches to scaling. They can be used exclusively or in tandem, but each has their own benefits.

### Vertical Scaling
***Summary: Scaling Server Resources***  
Scaling vertically consists of adding more RAM, CPU, and Disk to your instance(s), providing more power or capacity to accomplish their specific tasks.

<div class='interactive-svg'>
  <%= partial "svgs/scaling-vertical" %>
</div>

Scaling vertically is extremely effective for services with heavy processing loads like databases, caches, and sometimes even webs and workers depending on what they're doing. For [single-node apps](/cloud/scaling/single-vs-multi-node/#single-node-apps), this is the only means of scaling.

### Horizontal Scaling
***Summary: Scaling for Traffic and/or Redundancy***  
Horizontal scaling is accomplished by increasing the number of instances inside a service cluster.

<div class='interactive-svg'>
  <%= partial "svgs/scaling-horizontal" %>
</div>

Horizontal scaling does a few things:

1. Increases a code services' ability to handle concurrent requests.
2. Increases a code services' traffic throughput.
3. Adds redundancy and fail-over to both code and data services.

Scaling horizontally is extremely effective for [code services](/boxfile/code-services/). Adding instances spreads the load across multiple processes instead of dumping it on one.

In data services, horizontal scaling is achieved by [making the service redundant](#).

## How to Scale
In [single-node apps](/cloud/scaling/single-vs-multi-node/#single-node-apps), the application VM can be scaled vertically (allotted additional resources. In [multi-node apps](/cloud/scaling/single-vs-multi-node/#multi-node-apps), each service is scaled independently. All application scaling is done in your app dashboard through two main scaling controls — the instance controller and the resource controller.

Scaling controls are exposed by clicking of the service or VM you'd like to scale in your dashboard. By default, the "Configure" tab loads, which is where you can configure the scale of the service.

![Service Configure](/images/scaling-service-configure.png)

### The Instance Controller
The instance controller allows you to [scale horizontally](#horizontal-scaling) by specifying the number of instances in a service. It comes in two forms depending on the type of service. All code services can scale to an infinite number of instances. In these services, horizontal scaling is controlled through a slider.

<img src="">

In most data services, horizontal scaling is limited to a redundant, master-master or master-slave cluster. In this case, horizontal scaling is handled through a simple dropdown that allows you to toggle redundancy.

![Redundant Dropdown](/images/scaling-redundant-dropdown.png)

### The Resource Controller
The resource controller allows to [scale vertically](#vertical-scaling) by specifying what resources are available to your app's VM in single-node apps, or to each instance within a service in multi-node apps.

<img src="">

What resource options are available depend on what options your [service provider](/cloud/getting-started/providers/) has made available. These options are pulled directly from each provider.

## When to Scale

Knowing when and what to scale is key to ensuring the uptime of your application. In the heat of the moment, it's easy to panic and just scale everything, but there's a couple of rules and questions to ask that will help identify what, how, and when something should be scaled.

*Keep in mind that these principles mainly apply to mutli-node apps, which have multiple scaling options. In single-node apps, the only means of scaling is increasing the instance size of the app's VM.*

### 1. Check Service Statistics & Logs First
If you notice degraded performance or odd behavior, the first things you should look at are you app's service stats and logs. Each will provide valuable information on what's going on and what actions to take. More information [below](#3-know-how-your-app-uses-resources).

### 2. Preemptive Scaling is Better than Reactive Scaling
If you know a period of high demand is coming, scale up before it hits. It's always better to scale up before users start to experience issues than waiting until after they run into them.

### 3. Know How Your App Uses Resources
Understanding how each service in your app uses its available resources is extremely helpful when identifying what to scale and how to scale it. Below are some questions to ask when identifying what action needs to be taken.

#### What are my service stats and logs telling me?
Your service stats and logs are the first place to look when trying to identify what to scale. If you see that RAM usage is high on one of your services, it's likely that's the service that needs scaling. But the high RAM usage doesn't necessarily tell you how to scale. The [next question](#is-the-service-under-abnormal-load) will help to answer that.

Another use case involves resource usage appearing normal, but errors appearing in the logs indicating other errors, such as maxed out connections. It's possible to max out connections on an instance without affecting the instance's resource usage. In this case, you can immediately assume that the service needs more instances rather than more resources. Adding instances will increase the number of possible connections available to the service.

#### Is the service under abnormal load?
Understanding how a service performs under different levels of load will tell you the most effective means of scaling that service. For example, if while under little or no load, a service uses most of its available resources, the most effective scaling strategy for that particular service will be scaling vertically - adding more resources. On the other hand, if while under little or no load, a service uses hardly any of its available resources, but as traffic increases, it's resource consumption does as well, the answer to the [next question](#if-under-high-load-what-is-the-nature-cause-of-the-load) will help to identify the best scaling strategy.

#### If under high load, what is the nature/cause of the load?
If you know a service is under load, it's important to understand the nature and cause of the load. When a service is under stress, it's usually caused by one of three things:

- Large amounts of concurrent requests or queries
- Resource-intensive requests or queries
- Large amounts of data being stored in RAM or written to disk

For code services, highly concurrent requests are best addressed by [scaling horizontally](#horizontal-scaling). Adding instances to your service increases a code service's ability to handle concurrent requests. If a web or worker is running a resource-intensive process, then scaling vertically is the best way to address performance issues.

The primary means for relieving stress on database services (with a few exceptions) is [scaling vertically](#vertical-scaling). Adding more resources to a database will address all 3 of the major causes of stress.

With cache services, it really depends on the type of cache you're using. It's normal for Memcached services to use a lot of RAM. Memcached stores all of its data in RAM. As it fills up, it will dump old data to make room for new data. Scaling Memcached will simply increase the amount of data that can be stored and allow data to persist longer. Redis stores data in RAM but also routinely persists to disk. Vertical scaling is the primary means of addressing performance issues in cache services.

## Use Cases

Probably the best way to understand how and when to scale is to walk through some pretty basic use cases.

### Your Blog Post Hits No.1 on Hacker News
**Problem:** You're blog runs on a simple WordPress install using a micro-cloud web instance and a micro-cloud Database. You write this awesome post that changes the development world and shoots up to the top of [Hacker News](http://news.ycombinator.com/). All of the sudden, your blog is inundated with traffic, your web service's RAM usage jumps to 99% and your database stays steady right around 65% RAM Usage.

**Solution:** The first thing to do would be to add more instances to your web service. WordPress is a fairly lightweight CMS that doesn't require a lot of processing power so scaling vertically wouldn't be the best approach for handling the traffic. Micro cloud instances have plenty of processing power for WordPress. Adding multiple instances would increase your apps ability to process concurrent requests and handle the surge in traffic. Your RAM usage would drop as it gets spread across multiple instances.

At this point, you may not need to scale your database, but as traffic increases, you'll probably see an increase in the RAM usage. Once analytics show your DB in the red, you'll probably want to scale up.

### Developing an Image Processing Service
**Problem:** You're developing an image processing service with a light front-end and a background worker to handle all the image processing. You have 1 micro cloud web instance and 1 micro cloud worker instance. Your front-end works fine, but once you send a job to the worker, the worker's CPU usage spikes and the job never finishes.

**Solution:** Image processing can be very demanding. In this case, your worker doesn't have enough compute resources to handle the image processing. By scaling vertically (adding additional resources), the worker will be able to complete what's required of it. Because a single worker instance can only work on one job at a time, horizontal scaling won't help the jobs complete. But once you move into production and concurrency picks up, horizontal scaling will increase your workers throughput.

### Ecommerce Store During the Holidays
**Problem:** It's that wonderful time of the year when everyone starts shopping online and Ecommerce stores do the majority of their annual sales. During times like this, chances are all your services will start to be in the red.

**Solution:** Keep an eye on your analytics to know what services in your application should be scaled. Scale your services when resource usage is high. Take comfort in the fact that your app can be scaled up to handle the surge in traffic and then back down when it's all over. That way you only use and pay for what you need. Nothing more.
