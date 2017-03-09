---
title: login
seo_title: 'nanobox login' Command
description: The 'login' command authenticates your local Nanobox client with your Nanobox account.
keywords: authenticate user, connect account, account auth, register local user
---

The `login` command authenticates your local Nanobox client with your Nanobox account and stores your API token.

### Usage
```bash
# Simple Usage
nanobox login

# Short Pattern
nanobox login -u <username> -p <password>

# Short Example
nanobox login -u myuser -p PaSSw0rd

# Verbose Pattern
nanobox login --username=<username> --password=<password>

# Verbose Example
nanobox login --username=myuser --password=PaSSw0rd
```

### Options
#### -u, --username
Allows you to pass your username into the login command. If no username is specified, you will be prompted for one.

#### -p, --password
Allows you to pass your password into the login command. If you do not want to show your password in your bash history, don't pass this flag. The CLI will prompt you for your password.

## Automating the Login Process
When account authentication is required, Nanobox looks for two environment variables on the host machine:

```txt
NANOBOX_USERNAME
NANOBOX_PASSWORD
```

If these exist, Nanobox will automatically use their values to authenticate the cli with your user account. Having these environment variables set is recommended when using Nanobox in a continuous integration workflow.
