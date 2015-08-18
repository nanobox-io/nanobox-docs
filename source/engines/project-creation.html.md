---
title: Project Creation
---

Creating an engine project is really simple. Assume there will be an engine project generator at some point in the future.

## Naming Convention

The Nanobox naming convention is established to ensure clarity where context is not available. For instance, when a Nanobox engine repo is forked, the name of the repo should provide sufficient context about what the project contains. Thus, the established naming convention is as follows:

```text
nanobox-engine-ENGINE_NAME
```

So if I were creating a drupal engine, the project name might be:

```text
nanobox-engine-drupal
```

## Project Layout

#### Example Engine File Structure
```txt
nanobox-engine-my_engine/
  bin/
    boxfile
    build
    cleanup
    prepare
    sniff
  lib/
  templates/
  files/
  Enginefile
  README.md
```

#### bin

The *bin* directory houses scripts executed at different phases of a deploy. Specific information can be found in the [scripts docs](/engines/scripts/intro).

#### lib

The *lib* houses shared resources or helpers which may be sourced within the *bin* scripts. *This directory is optional.*

#### templates

The *templates* houses templates that are used within the render process. More information can be found in the [Template Generation doc](/engines/common-tasks/template-generation). *This directory is optional.*

#### files

The *files* directory houses files that are copied within the render process. More information can be found in the [Template Generation doc](/engines/common-tasks/template-generation). *This directory is optional*.

#### Enginefile

The Engine file is a yaml file which defines the engine. More information can be found in the [Enginefile doc](/engines/enginefile).

#### README.md

A markdown file that contains the content that will utlimately appear on the engine's page at nanobox.io. It should contain documentation on what the engine does, configuration options, etc. **Required to publish an engine.**
