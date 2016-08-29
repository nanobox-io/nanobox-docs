---
title: dev console
---

The `dev console` command opens an interactive terminal inside your running dev platform. To console into a data service, you can specify a the specific container to console into.

### Usage
```bash
$ nanobox dev console <container>
```

#### Examples
```bash
# Opens a console inside your dev platform
$ nanobox dev console

# Open a console inside the data.db container
# running in the dev platform
$ nanobox dev console data.db
```
