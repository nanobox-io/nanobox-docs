---
title: Services
---

Apps consists of multiple services, virtualized machines each devoted to a specific process/function. Services can be split into to main categories - code services and data services.

### Code Services
Codes services run application code. All code services are connected to data services within the app's virtualized network. Their runtime configuration is handled by the [engines](/getting-started/engines/), which expose config options through the [Boxfile](/getting-started/boxfile/). Code services come in two forms - webs and workers.

#### Webs
Web services come packaged with a web server of some kind which handles incoming traffic through external network connections (port 8080).

#### Workers
Worker services are meant for running background processes and do not connect with the external network.

### Data Services
Data services house application data. They include services such as PostgreSQL, MySQL, MongoDB, Redis, Memcached, NFS (network storage), etc. These are [configured from the Boxfile](/boxfile/services/) as well.
