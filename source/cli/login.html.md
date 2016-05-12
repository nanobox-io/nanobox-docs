---
title: login
---

The `login` command authenticates your local Nanobox client with your Nanobox account and stores your API token.

### Usage
```bash
# Simple Usage
$ nanobox login

# Short Pattern
$ nanobox login -u <username> -p <password>

# Short Example
$ nanobox login -u myuser -p PaSSw0rd

# Verbose Pattern
$ nanobox login --username=<username> --password=<password>

# Verbose Example
$ nanobox login --username=myuser --password=PaSSw0rd
```

### Options
#### -u --username
Allows you to pass your username into the login command. If no username is specified, you will be prompted for one.

#### -p --password
Allows you to pass your password into the login command. If you do not want to show your password in your bash history, don't pass this flag. The CLI will prompt you for your password.
