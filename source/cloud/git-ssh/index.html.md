---
title: Git & SSH

---

SSH keys are what allow you to securely connect to and manage your apps on Nanobox. Everything from pushing and pulling with Git to remotely accessing services requires an SSH Key. The following docs walk through generating SSH keys, adding them to your Nanobox account, and troubleshooting any issues you may run into.

### How Do SSH Keys Work?
SSH keys allow you to securely connect to a server without ever having to send a password over the network. They use [public-key cryptography](http://en.wikipedia.org/wiki/Public-key_cryptography) and [challenge-response authentication](http://en.wikipedia.org/wiki/Challenge-response_authentication). SSH keys always come in pairs — a public key and a private key. Data is encrypted using your private key, sent over the network to the Nanobox servers and decrypted using the public key tied to your user account. Data sent from Nanobox is encrypted using your public key, sent over the network to your local desktop and decrypted using your Private key.

### How Are Git & SSH Related?
Git uses SSH to establish secure connections to remote repositories. In order to push or pull code to or from Nanobox using Git, you must add your public SSH key to your Nanobox account.