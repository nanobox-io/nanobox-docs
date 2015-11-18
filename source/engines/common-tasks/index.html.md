---
title: Common Tasks
---

Regardless of the app or framework, the majority of scenarios and necessary tasks will most likely be the same. Nanobox has created [Nos](#nos), a bash framework designed to simplify the most common tasks and scenarios when developing engines.

## Nos
The Nos framework provides helpers meant to expedite bash scripting in engine development. Examples of using Nos helpers are included throughout the following "Common Tasks" docs. For the full list of helpers, view the [Nos API documentation on Github](https://github.com/nanobox-io/nanobox-nos).

### Usage

Nos is pre-installed in all build containers. To use it, simply source the common.sh script and initialize the framework.

#### Sourcing & Initializing the Nos Framework
```bash
#!/bin/bash

# source the Nos framework
. /opt/nos/common.sh

# initialize Nos with the original arguments
nos_init $@
```
