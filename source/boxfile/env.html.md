---
title: env
---

The `env` node of the Boxfile allows you to define environment variables for your application. Environment variables can be used for obscuring sensitive information, simplifying multi-environment management, or any other way you can think of to use Environment Variables in your app. 

#### Environment Variables in the Boxfile
```yaml
# Pattern
env:
  KEY: value

# Example
env:
  ENVIRONMENT: production
  AUTH_SALT: SStp8fP7qTpqqjUIfGbOym8MLiE7ds
```