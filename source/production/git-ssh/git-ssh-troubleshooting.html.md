---
title: Git & SSH Troubleshooting
layout: prod
---

## Confirm You've Added Your SSH Key to Your User Account
In order for Git/SSH to successfully authorize with Nanobox, you must first add your public SSH key to your Nanobox account. You can see what SSH key(s) you've added to your account by clicking on your user image in the upper right corner of your dashboard and going to Account Admin > SSH Keys.

If no SSH keys have been added, the [Adding SSH Keys doc](/production/git-ssh/adding-ssh-keys/) walks through how.

## SSH Authorization Failure & SSH Fingerprint
Whenever you try to connect to Nanobox through an SSH connection, your local machine sends one of the keys you've added to your local SSH agent. Every SSH key has a fingerprint. Whenever there's an SSH authorization error, the fingerprint of the SSH key sent with the connection request is displayed in the error output.

#### Example SSH Authorization Failure
```bash
::::::::::::::::: AUTHORIZATION FAILURE !!!
 
Sorry, the SSH key provided is not authorized for this repo.
 
ssh fingerprint provided: aa:bb:cc:dd:ee:ff:00:11:22:33:44:55:66:77:88:99
~~~

This is the fingerprint of the key your machine sent when trying to authorize the SSH connection.

## Compare Fingerprints
The fingerprints of each SSH key you've added to your account are shown in your dashboard. Compare the fingerprint shown in the error output to the SSH fingerprint(s) of the key(s) added to your Nanobox account.

![SSH Fingerprints in Dashboard](ssh-troubleshooting-fingerprints-lg.png)

### The Fingerprint Matches a Key Added to Your Account
If the fingerprint shown in the connection error output does match a key added to your account, it means you're trying to connect to a service or push to an app that your user account does not have access to. You have not been [added as a team member](/production/team/) on the app. It could also mean that the git clone url tied to the remote to which you're trying to push is wrong (more info [below](#check-your-git-remote-39-s-clone-url)).

### The Fingerprint Does NOT Match a Key Added to Your Account
If the fingerprint shown in the SSH connection error does not match any key added to your user account, it means your local machine is sending a key that Nanobox doesn't know about. To see exactly which key is being sent, you'll need to compare the fingerprint shown in the SSH authorization error output with the fingerprints of your local keys.

To view the fingerprints of the keys added to your local SSH agent, run the following:

#### Viewing Local SSH Fingerprints
```
$ ssh-add -l
```

##### Fingerprint Matches a Local Key
If the fingerprint shown in the authorization error output does match a local key, you have two options:

1. Add the matching key to your Nanobox account. The [Adding SSH Keys doc](/production/git-ssh/adding-ssh-keys/) explains how.

2. If you have multiple keys locally, the SSH agent is likely sending the wrong one. You can [specify which key the SSH agent should use](#specify-which-key-to-use-with-nanobox) when pushing to Nanobox.

##### Fingerprint Does NOT Match a Local Key
If the fingerprint shown in the authorization error does NOT match any of the keys registered to your local SSH-agent, it means your local SSH agent doesn't know about the key that's being used. In this case, you'll need to add all your generated keys to your local SSH-agent.

#### Adding Keys to Your Local SSH Agent Terminal
```shell
# List keys stored in your .ssh directory
$ ls ~/.ssh
 
# Add a key pair to your ssh agent
$ ssh-add ~/.ssh/keyname
```

Below is a quick example of the workflow:

#### Example of Adding Keys to Your Local SSH Agent
```shell
$ ls ~/.ssh
github_rsa  github_rsa.pub id_rsa  id_rsa.pub  known_hosts nanobox_rsa  nanobox_rsa.pub
 
$ ssh-add ~/.ssh/github_rsa
Identity added: github_rsa (github_rsa)
 
$ ssh-add ~/.ssh/id_rsa
Identity added: id_rsa (id_rsa)
 
$ ssh-add ~/.ssh/nanobox_rsa
Identity added: nanobox_rsa (nanobox_rsa)
```

Now if you run `ssh-add -l`, you'll see the newly added keys and their fingerprints. Compare the newly added key fingerprints to the key shown in the SSH authorization output and take any [appropriate steps](#viewing-local-ssh-fingerprints).

## Specify Which Key to Use with Nanobox
By default, your local SSH agent will use the default key, `id_rsa`. However if you didn't use the default name or you've created multiple keys, you need to tell the SSH agent which key to use when pushing to Nanobox. This is done in your local SSH config file located at `~/.ssh/config`.

#### SSH Config
```txt
Host git.nanobox.io
    User git
    Hostname git.nanobox.io
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/keyname
```

You may also need to update the permissions on your .ssh folder and its contents. The SSH application will ignore secret files that are too permissive.

#### Update .ssh Permissions
```shell
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/*
```

## SSH Keys in Non-Default Location or using Non-Default Name
If your key is not at the default location (`~/.ssh/`) or it's using a Non-Default Name (`id_rsa`), move or rename it. Or run the following command to make SSH aware of it's existence.

#### Add SSH Key Path Terminal
```shell
$ ssh-add path/to/key
```

## SSH Keys Generated Using Different User
Keep in mind that SSH keys are user specific. If you generated keys using `sudo ssh-keygen`, then those keys will only be available to sudo. You can either run all your `git` commands as sudo (not recommended) or regenerate SSH keys for your user and add the new public key (`id_rsa.pub`) to your Nanobox account.

## Check Your Git Remote's Clone URL
Make sure the clone url tied to the remote to which you're pushing matches the clone url of your app.

#### View Your Remotes' Clone URLs
```shell
$ git remote -v
nanobox  git@git.pagodabox.io:apps/app-name.git (fetch)
nanobox  git@git.pagodabox.io:apps/app-name.git (push)
```

Ensure the clone url of the remote to which you're trying to push exactly matches the clone url of your app. Your app's clone URL can be found in your dashboard under Admin > App Info.