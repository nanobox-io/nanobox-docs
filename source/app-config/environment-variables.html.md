---
title: Environment Variables
description: Environment variables let you to obfuscate sensitive information or define environment-specific options. Managing evars with Nanobox is simple.
---

Environment variables are helpful when you need to obfuscate sensitive information or define environment-specific options. Nanobox auto-generates environment variables for all data service connection credentials and allows you to define your own custom environment variables.

## Auto-Generated Environment Variables
Most data services require connection credentials of some kind, which could include a host, port, name, user, and password. Whenever data services are provisioned, Nanobox automatically generates an environment variable for each of the required credentials.

### Variable Naming Convention
Environment variable names/keys are generated using the ID of the data component in your boxfile.yml - `data`, `data.db`, `data.whatever`, etc. Letters are capitalized and special characters are replaced with underscores. For example:

`data.cthulu` would generate `DATA_CTHULU`

The credential name is appended with an underscore. Below are the possible credential names:

`_HOST` `_USER` `_PASS` `_NAME`  

*Your service's [image](/images/) defines what credentials are required and generated.*

Knowing the naming convention of data service connection variables allows you to pre-populate your connection details with environment variables before ever deploying your app locally or in production. It also keeps you from ever having to hard-code connection credentials.

### Practical Example

#### Data Services in a boxfile.yml
```yaml
data.postgres:
  image: nanobox/postgresql:9.5

data.redis:
  image: nanobox/redis:3.0

data.cthulu:
  image: nanobox/mysql:5.6
```

#### Resulting Auto-Generated Environment Variables
```bash
# Postres Connection Variables
DATA_POSTGRES_HOST
DATA_POSTGRES_USER
DATA_POSTGRES_PASS
DATA_POSTGRES_NAME

# Redis Connection Variables
DATA_REDIS_HOST

# Cthulu (MySQL) Connection Variables
DATA_CTHULU_HOST
DATA_CTHULU_USER
DATA_CTHULU_PASS
DATA_CTHULU_NAME
```

## Custom Environment Variables
Custom environment variables can be added to your production app through your dashboard, or to both production and local dev apps using the Nanobox CLI's ['evar' command](/cli/evar/).

### Adding Environment Variables in the Dashboard
Environment variables can be added in your dashboard under Config > Environment Variables. Simply add a key and a value, then save.

![Adding Environment Variables](/src-images/evar-add.png)

**Note:** Newly added or updated environment variables will not apply to the live environment until the next deploy.

### Adding Environment Variables Through the CLI
The Nanobox CLI's `evar` command allows you easily manage environment variables.

#### Adding Environment Variables to a Production App
```bash
# Adding a Single Environment Variable
nanobox evar add KEY=VALUE

# Adding Multiple Environment Variables
nanobox evar add KEY1=VALUE1,KEY2=VALUE2,KEY3=VALUE3
```

#### Adding Environment Variables to a Local Environment
```bash
# Adding a Single Environment Variable
nanobox evar add local KEY=VALUE

# Adding Multiple Environment Variables
nanobox evar add local KEY1=VALUE1,KEY2=VALUE2,KEY3=VALUE3
```

For more information about the `evar` command, check out the ['evar' documentation](/cli/evar/).
