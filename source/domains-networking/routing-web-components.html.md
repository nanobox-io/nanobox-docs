---
title: Routing to Web Components
---

In some cases, you may want or need multiple web components within a single application. Web component routing with Nanobox is really flexible, allowing you to route based on subdomains, paths, or both.

## Routes
Routes can be configured for each web component in your [boxfile.yml](/app-config/boxfile/).

### Syntax
A route can consist of both a subdomain and a path, separated by a colon, `:`. Subdomains aren't required, but a path is. The pattern is as follows:

`'subdomain:path'`

Nanobox detects the root domain in both your local environment and in production.

Below are few examples of routes and how they would work. In these examples, assume the domain being used on the app is "mydomain.com".

#### routes
```yaml
web.site:
  routes:
    - '/'
# mydomain.com would route to web.sites

web.admin:
  routes:
    - '/admin'
# mydomain.com/admin would route to web.admin

web.api:
  routes:
    - 'api:/'
# api.mydomain.com would route to web.api

web.api-auth:
  routes:
    - 'api:/auth/validate'
# api.mydomain.com/auth/validate would route to web.api-auth
```

#### Things to Know
- When using multiple web components, each must have at least one route specified.
- Routes must be unique to each web component.
- Routes only apply to connections using the http/https protocol.
