Generating SSH keys in Windows can be done using either the Git GUI or Git Bash, both of which should've been included in your Git install.

## Using the Git GUI
First, open the Git GUI.

![Windows Start Menu - Git GUI](/images/ssh-keys-win-start-menu-git-gui.png)

Go to Help > Show SSH Key.

![Git GUI - Show Key](/images/ssh-keys-win-git-gui-show-key.png)

Click Generate Key.

![Git GUI - Generate Key](/images/ssh-keys-win-git-gui-generate-key.png)

Passwords aren't required but can be added to your SSH key. If used, you will be required to enter your passphrase each time you push using the ssh key. Enter a passphrase if you'd like one.

![Git GUI - Enter Passphrase](/images/ssh-keys-win-git-gui-passphrase.png)

Congratulations! You've generated an SSH key!

![Git GUI - Key](/images/ssh-keys-win-git-gui-key.png)

Once your SSH key is generated, go ahead and copy it and [add it to your Nanobox account](/cloud/git-ssh/adding-ssh-keys/).

## Using Git Bash
Cd into your .ssh directory and check for existing keys.

#### Check for Existing Keys
```shell
$ cd ~/.ssh
$ ls
```

If you already have an SSH key pair (most likely id\_rsa and id\_rsa.pub), you can go ahead and [add it to your Nanobox account](/cloud/git-ssh/adding-ssh-keys/).

Generate a new SSH key.

#### Generate a New SSH Key Pair
```shell
$ ssh-keygen -t rsa -C "your_email@youremail.com"
Generating public/private rsa key pair.
Enter file in which to save the key
(/Users/your_user_directory/.ssh/id_rsa):
```

Passwords aren't required but can be added to your SSH key. If used, you will be required to enter your passphrase each time you push using the ssh key. Enter a passphrase if you'd like one.

#### Enter a Passphrase
```shell
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Enjoy the key randomart. After entering (or not entering) a passphrase, you should get output like the following:

#### Key Randomart
```shell
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

Congratulations! You've generated an SSH key! Now you just need to [add it to your Nanobox account](/cloud/git-ssh/adding-ssh-keys/).