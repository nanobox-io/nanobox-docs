## Docker for Windows
In order for Nanobox to use native docker virtualization, Docker for Windows must be installed.

[Installing Docker for Windows](https://docs.docker.com/docker-for-windows/)

## Hyper-V
This is noted in the Docker for Windows installation instructions, but it should be repeated here. Hyper-V manages virtualization in Windows and is required for Docker to be able to create virtualized containers.

#### Important
If you're using docker-machine and switch to docker native, you won't be able to use VirtualBox again until Hyper-V is disabled.
