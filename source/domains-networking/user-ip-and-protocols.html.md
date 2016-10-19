---
title: Detecting User IPs & Protocols
description: Apps deployed with Nanobox sit behind their router/load-balancer. Certain HTTP headers must be used to detect the origin IP and protocols of requests.
---

All web requests that hit your app first go through your app's [routing-mesh/load-balancer](/production-management/platform-components/#mesh). Because of this, trying to detect the origin IP and/or protocol of requests using the usual methods will returns the IP and protocol of the load-balancer rather than the request's origin's. To mitigate this issue, the load-balancer sets/appends headers with the appropriate information.

## Detecting User IPs
To detect the origin IP of a request, use the `X-Forwarded-For` header. Your app's load-balancer sets or appends this header with the origin IP of the request.

## Detecting Request Protocols
To detect the protocol of the request (http or https), use the `X-Forwarded-Proto` header. Your app's load-balancer sets this header with the request's origin protocol.
