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

#### description

A detailed, possibly multi-line description of the engine.

#### stability

The current stability of the engine. Values can be one of: alpha/beta/stable.

#### license

License applied to this software. Value can be a title, link, or the actual license.

#### readme

Path to to the readme file. A readme is required to publish engines, as it contains the necessary documentation to consume the engine.

#### authors

A list of authors and contributors to the engine project.

## Release Content

When a release is generated, the files to pack within the release need to be explicitly declared. This allows the actual release to be as minimal as possibly, enabling quicker deployments.

Files and paths are declared in the `project_files` node.

## Example

```yaml

name: 'magento'
version: '0.1.0'
summary: 'Nanobox engine for Magento deployments'
description: 'Automated Magento deployment via Nanobox. This engine will provision the database, run database migrations, and configure the Magento codebase to connect to the database. In addition, this engine will simulate the install process.'
stability: 'stable'
license: 'MIT'
readme: 'README.md'

authors:
  - tyler@nanobox.io

release_content:
  - bin/*
  - templates/*
  - files/*

```
