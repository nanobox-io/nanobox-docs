---
title: Project Setup
---

One great thing about nanobox is that very little project setup is required. There's two config files you can include ([.nanofile](/getting-started/nanofile/) & [Boxfile](/getting-started/boxfile/)), but they aren't required. You also have the option of specifying an [engine](/getting-started/engines/), but that too is optional.

```shell
$ cd app-dir
$ nanobox dev
```

Simply by running `nanobox dev` inside of your application directory, nanobox will provision your virtual environment, auto-detect engines and services required by your app, then deploy your code into virtualized instances. It's that simple.