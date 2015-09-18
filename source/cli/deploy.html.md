---
title: deploy
---

The `deploy` command issues a deploy to your nanobox. Deploys provision an apps infrastructure and apply changes made to your Boxfile.

*If simply making changes to application code, you don't need to issue a full deploy. A* [`build`](/cli/build/) *will apply your code changes. Changes to your Boxfile config will only apply after a new* `deploy`.

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