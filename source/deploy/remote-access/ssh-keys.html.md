---
title: App SSH Keys
seo_title: Application SSH Keys for Remote SSH Access into Live Servers
description: Nanobox provides application SSH keys that allow you to SSH into any of your app's servers and/or containers.
keywords: ssh keys, remote ssh access, direct ssh access, ssh user, docker remote access, secure remote connection, docker ssh access, docker remote console, docker ssh tunnel
---

App SSH keys give you the ability to SSH directly into any of your app's servers and/or containers.

## Viewing Your App's SSH Key
In your application dashboard, go to "Admin" > "Security". Here you are provided with the IPs of each server/container in your app, an example connection command, and your app's private SSH key.

_**Note:** In team apps, only team members with the role of "Owner" or "Admin" can view App SSH keys._

![App SSH Keys](/assets/images/app-ssh-keys.png)

## Using App SSH Keys
App SSH keys can be used to establish secure SSH connections from your local machine or other servers to your app's server(s)/container(s). Copy the contents of the private key into a file on the machine from which you'd like to connect and [set the appropriate permissions](#private-ssh-key-permissions). You can then pass the private key file into `ssh` commands with the identity\_file argument (`-i`).

```bash
ssh root@123.45.67.89 -i /path/to/private_key
```

_**Note:** Host IPs and SSH users are provided in your dashboard above your app's private key._

### Private SSH Key Permissions
In order to successfully establish SSH connections using your app's private key, you need to set the file permissions to `600` – Owner read/write.

```bash
chmod 600 path/to/private_key
```

#### Important Note
_With SSH access and the user permissions granted, you have the ability to manipulate your live servers and containers. Please know that any damage or dataloss caused in error or with intent is your responsibility and Nanobox will not be held liable._
