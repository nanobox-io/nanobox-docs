---
title: The Environment
---

An engine is required to populate the contents of two directories: **deploy** and **live**. These directories are copied into the container in which the application is run.

#### deploy

The "deploy" directory contains everything required to run the application. Runtimes, binaries, configuration files, and any other necessary resources are installed here. Essentially, the deploy directory is the environment into which the application is "deployed".

The deploy directory is a full [FHS](http://www.pathname.com/fhs/) directory, mirrored after `/`. In here you will find bin, sbin, usr, var, etc, and all of the same directories you would find at /. In addition, binaries installed to bin and sbin will be on the $PATH by default.

Essentially, the deploy directory is designed to be a fully-contained environment and can be likened unto a [chroot](https://en.wikipedia.org/wiki/Chroot) without the jailing and security restrictions.

Packages can be installed into the deploy directory and do not need to be statically compiled. Packages can contain shared libraries and the default linker will find and resolve dependencies at runtime, just like any other system. As a convenience, Nanobox provides a library of packages that can be installed into the deploy directory during the build process. We *highly recommend* using these packages. More information on finding and installing packages can be found in the [Common Tasks](/engines/common-tasks/installing-binaries/) section.

#### live

The live directory contains the "live" application. For a compiled application like c or golang, this would contain only the compiled binaries of the application. For dynamic runtimes such as perl, python, and ruby, this would contain the source code used by the interpreter. This directory should also contain application-specific configurations like database adapter configurations.

## The Live Environment

The live environment is a minimal, stripped-down Linux install with a small set of installed binaries. The deploy and live directories are copied into the live environment, providing the binaries and software necessary to run the application. If the deploy or live directories are not populated during the build, the application will not be able to run.

## The Build Environment

The build environment contains the build tools necessary to install and configure the environment as well as compile the application. In addition to build tools, the build container contains multiple directories essential to the build process.

#### code

The code directory contains the application's raw source. This is where all transformations, builds, compiles, patches, etc. are accomplished. This is NOT the final location of the application. It is just a staging location where the build occurs. The compiled and prepared application source code is copied into the live directory.

#### live

As mentioned above, the live directory contains the final application. This directory is later copied and mounted into the live environment. The application MUST be copied into after any transformations for the application to be able to run.

#### deploy

The purpose of the deploy directory is outlined [above](#deploy). Essentially this directory contains the environment into which the application is deployed.

#### cache

The contents of the cache directory persist between deploys. Anything stored here can be extracted on subsequent deploys.

#### etc

The etc directory houses application configuration files. Special nginx, apache, or any other configuration should be placed here. Apache, nginx, and others will look here by default for configuration.

#### env

The env directory contains environment variables available to the application in the live environment. Environment variables are represented as a file, which is the key, and the file contents, which is the value. Only environment variables stored in this manner in this location will be available to the running application. More information is available in the [Environment Variables](/engines/common-tasks/environment-variables/) doc.

## Directory Locations

The locations of these directories are provided with the script payload. You can find more information about the payload [here](/engines/scripts#payload). The actual locations are subject to change, so we *highly encouraged* using the payload values instead of hard-coded values.
