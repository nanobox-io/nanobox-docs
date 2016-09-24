---
title: Using Custom Domains
---

Using your own domain on your app is really simple and can be done by either adding an A-Record or CNAME to your DNS zone file. There are pros and cons to using each method as outlined below. Both are added and managed through your DNS provider.

## Using an A-Record
A-Records are used to point your domain to a specific IP address. If you choose to use this method, you need to point your domain to the IP of the server that houses your [load-balancer](/app-management/platform-components/#load-balancer). This IP can be found in your dashboard under Network > DNS.

![Load-Balancer IP](/src-images/dns-ip.png)

### Pros of Using an A-Record
- You're able to use root domains without subdomains (`domain.com` vs `www.domain.com`).

### Cons of Using an A-Record
- If you ever move or scale your load balancer, you'll have to update your A-Record with a new IP. In either case, your load-balancer is moved to a new server with a different IP.

## Using a CNAME
CNAMEs are used to define aliases for domains. Essentially they point a domain at another domain, but are not a redirect. For example, if domain.com has a CNAME for myapp.nanoapp.io, domain.com acts as a alias for myapp.nanoapp.io and loads the site without changing the request URI.

Every app deployed with Nanobox is given a dev url using this pattern: `app-name.nanoapp.io`. You can add this domain as a CNAME on your own domain.

### Pros of Using a CNAME
- If/when you scale or move your load balancer or the server it's on, you don't have to update your DNS record. Nanobox manages DNS routing for nanoapp.io dev urls.

### Cons of Using a CNAME
- You must use a subdomain. You can't CNAME a root domain.
- Nanobox manages DNS routing for nanoapp.io domains through our own DNS servers, but we do not guarantee uptime for dev URLs. If for some reason your dev url isn't reachable, your site won't be either.
