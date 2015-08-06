---
title: deploy
---

The `deploy` command issues a deploy to your nanobox.

### Usage
```shell
# Pattern
nanobox deploy [-v] [-r] [-s]

# Examples
$ nanobox deploy
$ nanobox deploy -v
$ nanobox deploy -r
$ nanobox deploy --sandbox
```

### Options:
#### -v, --verbose
Increase the level of log output from 'info' to 'debug'

#### -r, --reset
Clears cached libraries the project might use

#### -s, --sandbox
Deploys your app's data services, but not webs or workers. This is helpful when all you need is a console in a VM.