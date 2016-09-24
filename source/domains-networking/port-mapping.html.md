---
title: Port Mapping
---

Nanobox allows you to define on which ports your web components listen for connections over tcp and udp protocols.

#### Listen for HTTP/HTTPS on Port 8080
Custom http/https ports cannot be specified. All http requests connect on port 80 and all https requests on port 443. Both forward to your app on port 8080.

**Your app must listen on** `0.0.0.0:8080` **to connect to the public network over http/https.**

#### ports
```yaml
# Pattern
web.site:
  ports:
    - protocol:source:destination

# Examples (Default)
web.site:
  ports:
    - tcp:21:3420
    - udp:53:3000
```

**Note:** If a single number is provided, Nanobox assumes the source and destination ports are the same. For example, if `80` is specified, it will be interpreted as `80:80`
