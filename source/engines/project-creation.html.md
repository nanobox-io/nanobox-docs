---
title: Project Creation
---

Creating an engine project is trivial. Assume there will be an engine project generator at some point in the future.

## Naming Convention

The Nanobox naming convention standard is established to ensure clarity where context is not available. For instance, when a Nanobox engine repo is forked, the name of the repo should provide sufficient context about what the project contains. Thus, the established naming convention is as follows:

```text
nanobox-engine-ENGINE_NAME
```

So if I were creating a drupal engine, the project name might be:

```text
nanobox-engine-drupal
```

## Project Layout

#### bin

Location for all scripts which are executed at different phases of a deploy. Specific information can be found [here](/engines/scripts/intro).

#### lib

Optional location for shared resources or helpers which may be sourced within the bin scripts.

#### templates

Optional location for templates that are used within the render process. More information can be found [here](/engines/common-tasks/template-generation)

#### files

Optional location for files that are copied within the render process. More information can be found [here](/engines/common-tasks/template-generation)

#### Enginefile

The engine definition. This is a yaml file which defines the engine. More information can be found [here](/engines/enginefile)

#### README.md

Required to publish an engine. This becomes the content for the engine show page at nanobox.io
