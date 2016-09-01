---
title: Finding & Using an Engine
---

## Finding an Engine
Nanobox provides engines for many different languages and technologies. You can view the [official Nanobox Engines on Github](https://github.com/nanobox-io?utf8=%E2%9C%93&query=nanobox-engine).

If you can't find an engine to suit your needs, you can [create your own](/engines/create/). *In the future, there will be a registry where you can search for and publish engines.*

## Using an Engine
Engines are specified in the `code.build` section of your `boxfile.yml` and define the runtime environment and configuration for your web and worker components.

#### Specifying an Engine in Your boxfile.yml
```yaml
code.build:
  engine: ruby
```

**Note**: We assume you're using official Nanobox engines stored on Github. If you are using your own engine stored in Github, use the following pattern:

```yaml
code.build:
  engine: github-username/repo-name
```

If hosted elsewhere, use the full git clone url.

### Setting Engine Configuration Options
Engines often include configuration options that allow you to customize your environment to your specific needs. Each engine should include documentation for available config options. These options are set in the  `env > config` section of your `boxfile.yml`.

#### Setting Engine Config Options in Your boxfile.yml
```yaml
code.build:
  engine: ruby
  config:
    runtime: ruby-2.2
```
