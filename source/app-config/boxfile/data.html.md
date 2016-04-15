---
title: data
---

Data components handle application data. They can range anywhere in function from a database to a job queue. Functionality of data services is determined by the [image](#image) with which they're created.

#### Overview of Data Component Settings in the Boxfile
```yaml
data.db:
  # Image
  image: nanobox/postgresql

  # Config Options Exposed by the Image
  config:
    version: 9.4

```

## Image
The `image` setting defines which [image](/engines-images/) is used to create the data component.

#### image
```yaml
data.db:
  image: nanobox/postgresql
```

## Config
Images may provide configuration options. These options are specified in the `config` node of your data component. What config options are available depend on the image you're using and should be outlined in the image's documentation.

#### config
```yaml
data.db:
  image: nanobox/postgresql
  config:
    version: 9.4
```
