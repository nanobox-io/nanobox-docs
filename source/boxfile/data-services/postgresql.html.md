---
title: PostgreSQL Boxfile Settings
---

#### Overview of PostgreSQL Boxfile Settings
```yaml
postgresql1:
  version: 9.4
  stability: stable
```


## Version & Stability

### Version
When configuring a PostgreSQL service in your Boxfile, you can specify which version to load into your database service. The following version(s) are available:

- 9.4

The specific patch level is determined by the "stability" config.

**Note:** PostgreSQL versions cannot be changed after the service is created. To use a different version, you'll have to create a new PostgreSQL service.

### Stability
The `stability` config allows you to specify which patch level of your Postgres version you would like to use. There are two stability options:

- beta
- stable

###### Beta Versions
Beta versions are for bleeding edge developers who want nothing but the latest releases of services. These are "builds-in-progress," and using them is done at your own risk. Stabilities do not represent the stability of the actual project, but rather the "image" provided by Nanobox.

#### version & stability
```yaml
# default setting
postgresql1:
  version: 9.4
  stability: stable
```

## Request PostgreSQL Boxfile Configs
One of the many benefits of using PostgreSQL is that it doesn't require much configuration. The project itself is finely tuned. However we know there are settings that users like to tweak. If there's a setting you'd like to modify that is typically handled in the postresql.conf, please let us know by requesting it in [our IRC channel](http://webchat.freenode.net/?channels=nanobox) (irc.freenode.net #nanobox).