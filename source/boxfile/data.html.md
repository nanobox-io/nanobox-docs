---
title: data
seo_title: Create & Configure Data Components in the boxfile.yml
description: Data components handle application data and can vary in function - anything from a database to a job queue.
keywords: database, cache, configure data, create database, configure database
---

Data components handle application data. They can range anywhere in function from a database to a job queue. Functionality of data services is determined by the [image](#image) with which they're created.

#### Overview of Data Component Settings in the Boxfile
```yaml
data.db:
  # Image
  image: nanobox/mysql:5.6

  # Config Options Exposed by the Image
  config:
    plugins:
      - federated
      - audit_log
    event_scheduler: 'Off'

  # Cron
  cron:
    - id: backup
      schedule: '0 0 * * *'
      command: 'bash /path/to/scripts/backup.sh'
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: 'echo i\'m a little teapot'

  # Extra Packages (in addition to what the image installs)
  extra_packages:
    - perl
    - curl

  # Additions to $PATH
  extra_path_dirs:
    - /custom/bin

  # Custom commands to prepare the environment
  extra_steps:
    - wget -o /path/to/scripts/cron.sh http://example.com/cron.sh
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

## Cron Jobs
Cron is a time-based job scheduler that enables you to schedule jobs (commands) to run periodically at certain times or dates. Cron jobs specified in a component's boxfile config are loaded into the component's crontab. More information is available in the [Cron Jobs](/app-config/cron-jobs/) doc.

#### cron
```yaml
data.db:
  # ...
  cron:
    - id: backup
      schedule: '0 0 * * *'
      command: 'bash /path/to/scripts/backup.sh'
    - id: echo_msg
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: 'echo i\'m a little teapot'
```

## Extra Packages
In some cases, you may need a package that your image does not make available. The `extra_packages` config allows you to specify additional packages that should be loaded into your data component.

#### extra_packages
```yaml
data.db:
  # ...
  extra_packages:
    - perl
    - curl
```

**Note:** Only packages available in the [Nanobox pkgsrc](http://pkgsrc.nanobox.io/nanobox/base/Linux/) can be loaded using `dev_packages`.

## Add Directories to the $PATH
Some tools you may be using include binaries that need to be added to the system $PATH. The `extra_path_dirs` config allows you to specify these directories. Directory paths should be absolute.

#### extra_path_dirs
```yaml
data.db:
  # ...
  extra_path_dirs:
    - /custom/bin
```

## Extra Steps
You can add custom steps to the process of provisioning your data component. These run anytime the nodes in your data component are built (scaling, moving, etc.).

#### extra_steps
```yaml
data.db:
  # ...
  extra_steps:
    - wget -o /path/to/scripts/cron.sh http://example.com/cron.sh
```
