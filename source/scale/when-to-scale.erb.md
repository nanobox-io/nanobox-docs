---
title: When to Scale
seo_title: When to Scale Production Applications
description: Knowing when and what to scale is key to ensuring the uptime of your app. These few concepts will guide you in your scaling.
keyword: vertical scaling, horizontal scaling, knowing when to scale
---

Knowing when and what to scale is key to ensuring the uptime of your application. In the heat of the moment, it's easy to panic and just scale everything, but there's a couple of rules and questions to ask that will help identify what, how, and when something should be scaled.

*Most of the concepts outlined in this doc apply to components that have been [moved into horizontal clusters](/scaling/moving-components/). Single, bunkhouse servers have limited scalability.*

### 1. Check Component Stats & Logs First
If you notice degraded performance or odd behavior, the first things you should look at are your server/components stats and logs. Each will provide valuable information about what's going on and what actions to take. More information [below](#3-know-how-your-app-uses-resources).

### 2. Preemptive Scaling is Better than Reactive Scaling
If you know a period of high demand is coming, scale up before it hits. It's always better to scale up before users start to experience issues than waiting until after they run into them.

### 3. Know How Your App Uses Resources
Understanding how each component in your app uses its available resources is extremely helpful when identifying what to scale and how to scale it. Below are some questions to ask when identifying what action needs to be taken.

#### What are my component stats and logs telling me?
Your server/component stats and logs are the first place to look. If you see that RAM usage is high on one of your services, it's likely that's the component that needs scaling. But high RAM usage doesn't necessarily tell you how to scale. The [next question](#is-the-component-under-abnormal-load) will help to answer that.

Another use case involves resource usage appearing normal, but errors appearing in the logs indicating other errors, such as maxed out connections. It's possible to max out connections on an node without affecting the node's resource usage. In this case, you can immediately assume that the component needs more nodes rather than more resources. Adding nodes will increase the number of possible connections available to the service.

#### Is the component under abnormal load?
Understanding how a component performs under different levels of load will tell you the most effective means of scaling that component. For example, if while under little or no load, a component uses most of its available resources, the most effective scaling strategy for that particular component will be scaling vertically - adding more resources. On the other hand, if while under little or no load, a component uses hardly any of its available resources, but as traffic increases, it's resource consumption does as well, the answer to the [next question](#if-under-high-load-what-is-the-nature-cause-of-the-load) will help to identify the best scaling method.

#### If under high load, what is the nature/cause of the load?
If you know a component is under load, it's important to understand the nature and cause of the load. When a component is under stress, it's usually caused by one of three things:

- Large amounts of concurrent requests or queries
- Resource-intensive requests or queries
- Large amounts of data being stored in RAM or written to disk

For web and worker components, highly concurrent requests are best addressed by [scaling horizontally](/scaling/scaling-methods/#horizontal-scaling). Adding nodes to your component cluster increases a web/worker component's ability to handle concurrent requests. If a web or worker is running a resource-intensive process, then scaling vertically is the best way to address performance issues.

The primary means for relieving stress on data components (with a few exceptions) is [scaling vertically](/scaling/scaling-methods/#vertical-scaling). Adding more resources will address all three of the major causes of stress.

## Use Cases
Probably the best way to understand how and when to scale is to walk through some basic use cases.

### Your Blog Post Hits No.1 on Hacker News
**Problem:** You're blog runs on a simple WordPress. You write this awesome post that changes the development world and shoots up to the top of [Hacker News](http://news.ycombinator.com/). All of the sudden, your blog is inundated with traffic, your web component's RAM usage jumps to 99% and your database stays steady right around 65% RAM Usage.

**Solution:** The first thing to do would be to add more nodes to your web component. WordPress is a fairly lightweight CMS that doesn't require a lot of processing power so scaling vertically wouldn't be the best approach for handling the traffic. Adding multiple nodes would increase your web's connection pool and ability to process concurrent requests. Your RAM usage would drop as the traffic load gets spread across multiple nodes.

At this point, you may not need to scale your database, but as traffic increases, you'll probably see an increase in the RAM usage. Once analytics show your DB in the red, you'll probably want to scale up.

### Developing an Image Processing Service
**Problem:** You're developing an image processing service with a light front-end and a worker that handles the image processing. Your front-end works fine, but once you send a job to the worker, the worker's CPU usage spikes and the job never finishes.

**Solution:** Image processing can be very demanding. In this case, your worker doesn't have enough compute resources to handle the image processing. By scaling vertically (adding additional resources), the worker will be able to complete what's required of it. Because a single worker node can only work on one job at a time, horizontal scaling won't help the jobs complete. But once you move into production and concurrency picks up, horizontal scaling will increase your worker's throughput.

### Ecommerce Store During the Holidays
**Problem:** It's that wonderful time of the year when everyone starts shopping online and Ecommerce stores do the majority of their annual sales. During times like this, chances are all your services will start to be in the red.

**Solution:** Keep an eye on your stats to know what components in your application should be scaled. Scale your components when resource usage is high. Take comfort in the fact that your app can be scaled up to handle the surge in traffic and then back down when it's all over.
