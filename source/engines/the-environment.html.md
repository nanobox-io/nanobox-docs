---
title: The Environment
---

An engine is required to populate the contents of two directories: deploy and live, which will be copied into the container where the application is run.

#### Deploy

The deploy directory contains the environment that the application requires to run. Runtimes, binaries, configuration files, and any other resources that are required for the application to run are installed here. Essentially, the deploy directory is the environment that the application is "deployed" into.

The deploy directory is a full [FHS](http://www.pathname.com/fhs/) directory, mirrored after /. In here you will find bin, sbin, usr, var, etc, and all of the same directories you would find at /. In addition, binaries installed to bin and sbin will be on the $PATH by default. Essentially, the deploy directory is designed to be a fully-contained environment and can be likened unto a [chroot](https://en.wikipedia.org/wiki/Chroot) without the jailing and security restrictions.

Packages can be installed into the deploy directory and do not need to be statically compiled. Packages can contain shared libraries and the default linker will find and resolve dependencies at runtime, just like any other system. As a convenience and a recommendation, Nanobox provides a library of packages that can be installed into the deploy directory during the build process. More information on finding and installing packages can be found in the [Common Tasks](/engines/common-tasks) section.

#### Live

The live directory contains the "live" application. For a compiled application like c or golang, this would contain only the compiled binaries of the application. For dynamic runtimes like perl, python, and ruby, this would contain the source code that the interpreter uses. This directory would also contain application-specific configurations like database adapter configurations.

## The Live Environment

The live environment is a minimal, stripped down linux install with a very small set of installed binaries. The deploy and live directories are copied into the live environment, providing the application with required binaries and software to run the application. If the deploy or live directories were not populated during the build, the application will not be able to run.

## The Build Environment

The build environment contains the necessary build tools to install and configure the environment as well as compile the application. In addition to build tools, the build container contains multiple directories that are essential to the build process.

#### Code

The code directory is where the raw source code is contained. This is the location where all transformations, build, compiles, patches, etc are accomplished. This is NOT the final location of the application. This is just a staging location where the build occurs. The final application must be copied into the live directory.

#### Live

As mentioned above in greater detail, this directory contains the final application. This directory is later copied and mounted into the live environment. The application MUST be copied into here after any transformations for the application to be able to run.

#### Deploy

The purpose of this directory is outlined in full detail above. Essentially this directory contains the environment that the application is deployed into.

#### Cache

This contents of this directory persist between deploys. Anything stashed in here can be extracted on subsequent deploys.

#### Etc

The configuration directory. Special nginx, apache, or any other configuration should be placed here. Apache, nginx, and others will look here by default for configuration.

#### Env

The Env directory is where environment variables that will be available to the application in the live environment live. Environment variables are represented as a file, which is the key, and the file contents, which is the value. Only environment variables stored in this manner in this location will be available to the running application.

## Directory locations

The locations of these directories are provided with the script payload. You can find more information about the payload [here](/engines/scripts#payload). The actual locations are subject to change, so it is highly encouraged that the scripts use the payload values instead of hard-coded values.
