---
title: Using Engines & Images
---

Engines and images are each specified in your [`boxfile.yml`](/app-config/boxfile/).

## Using an Engine
Engines are specified in the `code.build` section of your `boxfile.yml` and define the runtime environment and configuration for your web and worker components.

#### Specifying an Engine in Your boxfile.yml
```yaml
code.build:
  engine: nanobox-io/ruby
```

**Note**: Engines are assumed to be on Github. If on Github, all you need to include when specifying the engine is the username and repo name, as shown above. If hosted elsewhere, include the full git clone url.

### Setting Engine Configuration Options
Engines often include configuration options allowing you to customize your environment to your specific needs. Each engine should include documentation for available config options. These options are set in the  `env > config` section of your `boxfile.yml`.

#### Setting Engine Config Options in Your boxfile.yml
```yaml
code.build:
  engine: nanobox-io/ruby
  config:
    webserver: 'unicorn'
    ruby_runtime: ruby-2.2
    unicorn_timeout: 60
```

## Using an Image
Images are specified in the `data` components sections of your `boxfile.yml`. Images are used to provision and configure your data services.

#### Specifying an Image in Your boxfile.yml
```yaml
data.db:
  image: nanobox/postgresql
```

**Note**: Only images published on Docker Hub can be used on Nanobox. When specifying an image, you simply need to include the Docker Hub username and image, as show above.

### Setting Image Configuration Options
Images often include configuration options allowing you to customize your service to your specific needs. Each image should include documentation for available config options. These options are set in the  `data > config` section of your `boxfile.yml`.

#### Setting Engine Config Options in Your boxfile.yml
```yaml
data.db:
  image: nanobox/postgresql
  config:
    version: 9.4
```
