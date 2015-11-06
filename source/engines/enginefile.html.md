---
title: Enginefile
---

The Enginefile provides Nanobox with two primary pieces of information:

1. Metadata about the engine.
2. Contents of the engine that should be packed in the release.

## Metadata

#### name

The name of the engine. This only needs to be unique per nanobox.io account. The engine will be referenced by `user/engine_name`.

#### version

The current release version. This should follow the [semver](http://semver.org/) standard.

#### summary

A short, one sentence summary of the engine.

#### language

The runtime language supported by the engine. Available options can be found on [engines.nanobox.io](https://engines.nanobox.com). Languages are used to categorize engines.

#### stability

The current stability of the engine. The value can be either **alpha, beta, or stable**.

#### license

License applied to this software. Value can be a title, link, or the actual license.

#### generic

True/false value that specifies whether or not an engine is "generic". Some engines provide a basic runtime with flexible configuration options that can be used to run almost any app written in the supported language. This type of engine would be considered generic. Other engines are framework-specific. By default, this is set to false, assuming the engine is specific to a framework.

#### overlays

Overlays allow you to "overlay" functionality on top of already existing engines. This is an array of engine names. Only engines that have been published to [engines.nanobox.io](https://engines.nanobox.io) can be overlayed. More information is available in the [Overlays](/engines/overlays/) doc.

#### authors

A list of authors and contributors to the engine project.

## Example Enginefile

```yaml
name: 'magento'
version: '0.1.0'
summary: 'Nanobox engine for Magento deployments'
language: php
stability: 'stable'
license: 'MIT'
generic: false
overlays:
  - php

authors:
  - tyler@nanobox.io
```
