When using the "netfs" [mount-type](/local-dev/local-config/nanobox-config-yml/#mount-type), Nanobox mounts your codebase into your Nanobox container using NFS. NFS stores a registry of mounted directories in an exports config file located at `/etc/exports`. It's possible and fairly common for changes to this file to prevent the NFS mounts from working.

A clean exports file will looks something like this:

```conf
"/home/user/directory/app-dir-1" 192.168.99.100 -alldirs -mapall=501:20
"/home/user/directory/app-dir-2" 192.168.99.100 -alldirs -mapall=501:20
"/home/user/directory/app-dir-3" 192.168.99.100 -alldirs -mapall=501:20
"/home/user/directory/app-dir-4" 192.168.99.100 -alldirs -mapall=501:20
"/home/user/directory/app-dir-1" 192.168.99.100 -alldirs -mapall=501:20
"/home/user/directory/app-dir-2" 192.168.99.100 -alldirs -mapall=501:20
```

## Mounted Directory No Longer Exists
If you ever remove a directory containing a nanobox project without running a `nanobox dev destroy` or a `nanobox sim destroy`, it will leave "orphaned" mounts in your exports file and prevent the NFS service from starting. In some cases, this will also affect your machine's boot process, but is easily fixed.

#### Solution
Open up `/etc/exports` and remove the line associated with the removed directory. Then restart the NFS process. The following is what you'd run in Ubuntu 16.04

```bash
$ sudo systemctl start nfs-kernel-server.service
```

*This will prompt you for your administrative password.*

## Parent Directories & Subdirectories
NFS can't mount inside of a mounted directory so a parent directory and one of its subdirectories can't both exist in your exports config file. The most common cause of this is running `nanobox dev` or `nanobox sim` in the wrong context (in the parent directory rather than the subdirectory).

#### Solution
To fix this issue, open up `/etc/exports` and choose the correct directory to mount and remove the other.
