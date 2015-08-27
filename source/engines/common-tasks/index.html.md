---
title: Common Tasks
---

Regardless of the app or framework in question, there are many scenarios and tasks that will be mostly the same. Nanobox has created a bash framework simplify the most common tasks and scenarios: [Nos]().

## Usage

Nos is already installed in the build container, so an installation will not be required. To use Nos, you must source the common.sh script, and then initialize the framework. For example:

```bash
#!/bin/bash

# source the Nos framework
. /opt/nos/common.sh

# initialize Nos with the original arguments
nos_init $@
```
