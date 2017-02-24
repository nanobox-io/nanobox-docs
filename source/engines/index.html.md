---
title: Engines
seo_title: Configure your Language & Runtime with Engines
description: Engines define, prepare, and build runtime environments for web and worker components.
keywords: code runtime, supported languages, custom language
---

Engines define, prepare, and build runtime environments for web and worker components. They consist of a handful of scripts that install necessary runtimes, run dependency managers (if applicable), expose configuration options, and a few other things.

## Finding an Engine
Nanobox provides engines for many different languages and technologies. You can view the [official Nanobox Engines on Github](https://github.com/nanobox-io?utf8=%E2%9C%93&query=nanobox-engine).

If you can't find an engine to suit your needs, you can [create your own](/engines/create/). *In the future, there will be a registry where you can search for and publish engines.*

## Using an Engine
Engines are specified in the `run.config` section of your `boxfile.yml` and define the runtime environment and configuration for your web and worker components.

#### Specifying an Engine in Your boxfile.yml
```yaml
run.config:
  engine: ruby
```

**Note**: We assume you're using official Nanobox engines stored on Github. If you are using your own engine stored in Github, use the following pattern:

```yaml
run.config:
  engine: github-username/repo-name
```

If hosted elsewhere, use the full git clone url.

### Setting Engine Configuration Options
Engines often include configuration options that allow you to customize your environment to your specific needs. Each engine should include documentation for available config options. These options are set in the  `env > config` section of your `boxfile.yml`.

#### Setting Engine Config Options in Your boxfile.yml
```yaml
run.config:
  engine: ruby
  config:
    runtime: ruby-2.2
```

## Creating Engines
You're free to create your own engine if you can't find one that suits your needs. The [Creating a Custom Engine](/engines/create/) docs cover the process in detail.
