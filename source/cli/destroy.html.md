---
title: destroy
seo_title: 'nanobox destroy' Command
description: The 'destroy' command destroys the current project and removes it from your local Nanobox container.
keywords: destroy local environment, remove local environment, remove local app, destroy docker containers
---

The `destroy` command destroys the current project/environment and removes it from your local Nanobox container, destroying the filesystem mount, associated dns aliases, and app data. You can destroy both local and dry-run environments or specify one to be destroyed.

### Usage
```bash
# Pattern
nanobox destroy <local | dry-run>

# Examples
nanobox destroy
nanobox destroy local
nanobox destroy dry-run
```
