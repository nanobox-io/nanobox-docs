Generating SSH keys in OSX and Linux is done in Terminal. First, cd into your .ssh directory and check for existing keys.

#### Check for Existing SSH Keys
```bash
$ cd ~/.ssh
$ ls
```

If you already have an SSH key pair (most likely id\_rsa and id\_rsa.pub), you can skip to adding your SSH key to your Nanobox account. If one does not already exist, you will need to generate a new ssh key:

#### Generate a New SSH Key Pair

```bash
$ ssh-keygen -t rsa -C "your_email@youremail.com"
Generating public/private rsa key pair.
Enter file in which to save the key
(/Users/your_user_directory/.ssh/id_rsa):
```
Enter a passphrase if you'd like one. If you do use a passphrase, you will have to enter it each time you push using the ssh key. Most go without a passphrase.

#### Enter a Passphrase
```bash
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```
Enjoy the key randomart. After entering (or not entering) a passphrase, you should get output like the following:

#### Key Randomart
```bash
----------
Your identification has been saved in /Users/your_user/.ssh/id_rsa.
Your public key has been saved in /Users/your_user/.ssh/id_rsa.pub.
The key fingerprint is:
0b:77:6e:9c:5f:77:e7:fa:14:ac:03:d7:aa:8d:0c:af demo@youremail.com
The keys randomart image is:
+--[ RSA 2048]----+
|                 |
|                 |
|                 |
|              o  |
|      . S .. . + |
|       o = .o o .|
|        ..=  +. =|
|         .+.+..+o|
|         E.=...oo|
+-----------------+
```

Congratulations! You've generated an SSH key! Now you just need to [add it to your Nanobox account](/production/git-ssh/adding-ssh-keys/).

