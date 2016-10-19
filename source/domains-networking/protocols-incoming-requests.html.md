---
title: Protocols & Incoming Requests
description: Depending on which protocol your app uses, there are different ways to configure it in order to receive incoming requests.
---

Depending on which protocol(s) your app uses, there are different ways to configure it in order to receive incoming requests.

### HTTP/HTTPS
In order to receive incoming requests over http or https, your app must listen on `0.0.0.0:8080`. All incoming requests to ports 80 (http) and https (443) are forwarded to port 8080.

**Host:** `0.0.0.0`  
**Port:** `8080`


### TCP & UDP
TCP & UDP ports are configurable in your boxfile.yml. What ports your app listens on is up to you. More information is available in the [Port Mapping](/domains-networking/port-mapping/) doc.
