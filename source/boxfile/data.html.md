---
title: data
description: Data components handle application data and can vary in function - anything from a database to a job queue.
---

Data components handle application data. They can range anywhere in function from a database to a job queue. Functionality of data services is determined by the [image](#image) with which they're created.

#### Overview of Data Component Settings in the Boxfile
```yaml
data.db:
  # Image
  image: nanobox/myslq:5.6

  # Config Options Exposed by the Image
  config:
    plugins:
      - federated
      - audit_log
    event_scheduler: 'Off'

```

## Image
The `image` setting defines which [image](/images/) and version is used to create the data component. Versions are appended to the image with a colon (`:`). Available version are listed in the [data component guides](http://guides.nanobox.io/components/).

#### image
```yaml
data.db:
  image: nanobox/mysql:5.6
```

## Config
Images may provide configuration options. These options are specified in the `config` node of your data component. What config options are available depend on the image you're using and are be outlined in the [data component guides](http://guides.nanobox.io/components/).

#### config
```yaml
data.db:
  image: nanobox/mysql:5.6
  config:
    plugins:
      - federated
      - audit_log
    event_scheduler: 'Off'
```
