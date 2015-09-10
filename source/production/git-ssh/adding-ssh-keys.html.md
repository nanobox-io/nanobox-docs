---
title: Adding SSH Keys to Nanobox
layout: prod
---

Adding SSH keys to your Nanobox account allows you securely connect to Nanobox apps for things such as Git pushes and pulls as well as remote access to services.

To add your SSH key to your Nanobox account, go to your user account page by clicking on your username in the upper right hand corner of your Dashboard. Then click "SSH Keys". Once in the SSH Keys section of your Account Admin, click "New SSH Key".

![Add New SSH Key](/images/ssh-keys-add-key.png)

Go ahead and name your key. The name is arbitrary and is meant to help you identify keys in a list of multiple keys.

![Paste in Key](/images/ssh-keys-add-key-paste.png)

[Copy the contents of your Public Key](#copying-public-keys), paste it in, then save.

## Things to Know About SSH Keys

### SSH Keys Are Unique to Each User Account
An SSH key can only be associated with one Nanobox account. The same SSH key cannot be used across multiple accounts. Sharing access to apps should and can not be done by sharing SSH keys. Access to apps should be granted using the [Nanobox collaboration system](/production/team/).

### You Can Have Multiple Nanobox Accounts, Each with Unique SSH Keys
If you have multiple Nanobox accounts and you want to use them from the same machine, you'll need to generate a unique SSH Key for each user. Telling your local SSH agent which key to use when pushing to certain repos does require modification to your local SSH config, which is not documented here.

### You Can Have Multiple SSH Keys Tied to Your Account
SSH keys are unique to your user on your machine. If you use your Nanobox account from multiple computers, you'll need to add an SSH key for each.

## Copying Public Keys
There are some really simple ways to copy public SSH keys. The ways described below will help to avoid any encoding errors that may be caused to opening keys in text editors and copying them that way.

### OSX
Open up terminal and run the following command to copy the contents of your public key to your clipboard.

```bash
# Pattern
$ pbcopy < path/to/public-key

# Example
$ pbcopy < ~/.ssh/id_rsa.pub
```

### Linux
Any Linux distro with Xwindows has xclip, a tool similar to OSX's pbcopy. To make things really easy, make the following alias I like to make this alias(es):

```shell
alias pbcopy='xclip -selection clipboard'
```

Or if you'd rather use xsel:

```shell
alias pbcopy='xsel --clipboard --input'
```

Now you can pipe any text to pbcopy.

```shell
# Pattern
$ cat path/to/public-key | pbcopy

# Example
$ cat ~/.ssh/id_dsa.pub | pbcopy
```

This will copy your public key into your clipboard.

### Windows
In Windows, you can copy your key using either Git GUI or Git Bash.

#### Git GUI
In Git GUI, go to Help > Show SSH Key and click "Copy to Clipboard".

![Git GUI - Copy to Clipboard](/images/ssh-keys-win-git-gui-key.png)

#### Git Bash
In Git Bash, run the following command to copy your public key to your clipboard:

```shell
# Pattern
$ clip < path/to/public-key

# Example
$ clip < ~/.ssh/id_rsa.pub
```
