---
title: User Build Hooks
---

Generally, it is the responsibility of the engine to build the application. However, engines can and should expose hooks to the application developer to run at the beginning and/or the end of the [build script](/engines/scripts/build/). Nos provides the `run_hooks` helper which accepts a single argument: the node in the Boxfile build section, such as "before" or "after".

The `run_hooks` function prints a header conforming to the [style guide](/engines/style-guide/) and streams the output under the header.

## Example

A user could define before and after hooks in the application's Boxfile, with the following:

```yaml
build:
  before: 'rm -rf /some/dir'
  after: 'ls -lah'
```

or:

```yaml
build:
  before:
    - 'rm -rf /some/dir'
    - 'mkdir -p /some/other/dir'
  after:
    - 'touch /some/file'
    - 'rake generate_catalog'
```

In the [build script](/engines/scripts/build/), those would be executed with the following:

```bash
run_hooks "before"
# ... build script logic ...
run_hooks "after"
```
