---
title: User Build Hooks
---

Generally, it is the responsibility of the engine to build the application. That said, engines can and should expose hooks to the application developer to run at the beginning and the end of the [build script](/engines/scripts/build/). Nos provides a framework to assist this. The `run_hooks` function accepts a single argument, which is the node in the Boxfile build section, such as "before" or "after".

The `run_hooks` function will print a header conforming to the [style guide](/engines/style-guide/), and then will stream the output indented to the header.

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

In the [build script](/engines/scripts/build/), those could be executing with the following:

```bash
run_hooks "before"
# ... build script logic ...
run_hooks "after"
```
