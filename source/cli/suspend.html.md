---
title: suspend
---

The `suspend` command suspends the currently running nanobox virtualized machine (VM) rather than [halting](/cli/halt/) it or [destroying](/cli/destroy/) it.

A suspend essentially saves the exact point-in-time state of the VM, so that when [resumed](cli/resume/), it begins running immediately from that point, rather than doing a full boot.

This generally requires extra disk space to store all the contents of the RAM within your VM, but the machine no longer consumes the RAM of your local machine or CPU cycles while it is suspended.

### Usage
```shell
$ nanobox suspend
```