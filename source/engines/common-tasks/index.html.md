---
title: Common Tasks
---

Regardless of the app or framework, the majority of scenarios and necessary tasks will most likely be the same. Nanobox has created a bash framework to simplify the most common tasks and scenarios: [Nos]().

## Usage

Nos is pre-installed in all build containers. To use it, simply source the common.sh script and initialize the framework.

#### Sourcing & Initializing the Nos Framework
```bash
#!/bin/bash

# source the Nos framework
. /opt/nos/common.sh

# initialize Nos with the original arguments
nos_init $@
```
