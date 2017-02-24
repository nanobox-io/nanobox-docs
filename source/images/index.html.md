---
title: Images
seo_title: Use Docker Images for Data Components
description: Images build and configure databases, caches, job queues, etc. for use with Nanobox.
---

Images build and configure supporting data services such as databases, caches, job queues, etc. They are Docker images that include scripts unique to Nanobox.

## Finding Images
Nanobox provides images for many different services and technologies. You can view the [official Nanobox Images on Docker Hub](https://hub.docker.com/u/nanobox/).

If you can't find an image to suit your needs, you can [create your own](/images/create/). *In the future, there will be a registry where you can search for and publish images.*

## Using an Image
Images are specified in the `data` components sections of your `boxfile.yml`. Images are used to provision and configure your data services. Image specifications should also include a version for the service, which is appended to the image path with a colon (`:`). Versions are optional, but recommended.

#### Specifying an Image in Your boxfile.yml
```yaml
data.db:
  image: nanobox/postgresql:9.5
```

**Note**: Only images published on Docker Hub can be used with Nanobox. If you want to use your own image, use the following pattern:

```yaml
data.db:
  image: dockerhub-username/repo-name
```

### Setting Image Configuration Options
Images often include configuration options allowing you to customize your service to your specific needs. Each image should include documentation for available config options. These options are set in the  `data > config` section of your `boxfile.yml`.

#### Setting Engine Config Options in Your boxfile.yml
```yaml
data.db:
  image: nanobox/mysql:5.6
  config:
    plugins:
      - federated
      - audit_log
    event_scheduler: 'Off'
```

## Creating Images
You're free to create your own image if you can't find one that suits your needs. The [Creating a Custom Image](/images/create/) docs cover the process in detail.
