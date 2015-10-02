---
title: Services
---

Apps consists of multiple services, virtualized machines each devoted to a specific process/function. Services can be split into to main categories - code services and data services.

### Code Services
Codes services run application code. All code services are connected to data services within the app's virtualized network. Their runtime configuration is handled by the [engines](/getting-started/engines/), which expose config options through the [Boxfile](/getting-started/boxfile/). Code services include webs, workers, TCP, and UDP. More information is available in the [Code Services](/boxfile/code-services/) doc.

### Data Services
Data services house application data. They include services such as PostgreSQL, MySQL, MongoDB, Redis, Memcached, NFS (network storage), etc. More information is available in the [Data Services](/boxfile/data-services/) doc.