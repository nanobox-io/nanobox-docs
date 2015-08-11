---
title: global
---

The `global` node of the Boxfile contains global configs for your application such as environment variables.

### Environment Variables
Environment variables can be used for obscuring sensitive information, simplifying multi-environment management, or any other way you can think of to use Environment Variables in your app. They can be generated from your Boxfile by including them in the `global` configuration node.

#### Environment Variables in the Boxfile
```yaml
# Pattern
global:
  env:
    KEY: value

# Example
global:
  env:
    ENVIRONMENT: production
```