---
title: dev
---

The `dev` command starts the nanobox VM and drops you into an interactive console.

### Usage
```shell
$ nanobox dev [flags]
```

### Options
#### --rebuild
Rebuilds your application as the nanobox starts up

#### --background
Stops nanobox from auto-suspending

## Subcommands
The `dev` command includes many subcommands that each interact with your local Nanobox VM.

| Sub-Command    | Summary                                                        |
|:---------------|:---------------------------------------------------------------|
| [`deploy`](deploy)  | Runs a full deploy deploys to your Nanobox VM                  |
| [`info`](info)    | Displays information about your dev app                        |
| [`console`](console) | Opens an interactive console inside your Nanobox VM            |
| [`exec`](exec)    | Runs a command in your Nanobox VM without having to console in |
| [`evar`](evar)    | Manages environment variables in your Nanobox VM               |
| [`destroy`](destroy) | Destroys the Nanobox VM                                        |
