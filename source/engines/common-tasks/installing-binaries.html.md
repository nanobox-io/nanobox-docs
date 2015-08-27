---
title: Installing Binaries
---

Every engine needs to install binaries at some point. Nanobox provides a framework and pattern for consuming binary packages within engines.

#### Warning!

You should be familiar with [the environment](/engines/the-environment) before reading this guide.

## pkgsrc

Nanobox uses [pkgsrc](https://www.pkgsrc.org/) for providing installable binary packages. Pkgsrc is a build framework for building third-party software on UNIX-like systems, including Linux. It is platform and distribution-agnostic, allowing Nanobox the freedom to switch between distributions as needed. This sophisticated, time-tested framework's ability to build packages to be installed in a nested filesystem gives engines the flexibility to install full binary packages. By using pkgsrc, Nanobox packages do not need to be statically compiled or hacked in an unnatural way to work.

## Finding Packages

A full list of packages provided by Nanobox can be found in the [Nanobox pkgsrc repository](http://pkgsrc.nanobox.io/nanobox/base/Linux/). Use this list to you find a package that your engine requires. Once found, copy the package name, and optionally the version.

For example, from the `python27-2.7.9nb1.tgz` package, you would copy `python27-2.7.9`. If the version requirements aren't strict, you can copy less and less of the package down to the name, like this: `python27`.

### Requesting a Package
If you cannot find a package you need, submit a [Github issue](https://github.com/pagodabox/nanobox-pkgsrc-base/issues/new) including the requirement and the location where the source can be downloaded. After submitting an issue, please ping a member of our team on the [#nanobox IRC](http://webchat.freenode.net/?channels=nanobox). Most package requests can be fulfilled within 24 hours, depending on the queue and complexity of the compilation.

Please don't try to find it by some other means. While it is possible to download binaries from other sources, doing so will likely break your engine if Nanobox shifts platforms or distributions in the future.

## Installing a Package

[Nos](#) provides an idiomatic helper function for installing packages: `install`. The install function takes a single argument: the package name. It will print a [subtask header](/engines/common-tasks/generating-output/#printing-the-start-of-a-sub-process) indicating the start of the installation, then proceed to install the package. All output will be indented to indicate the association with the previous header.

Example:

```bash
install 'python27'
# or
install 'python27-2.7'
# or
install 'python27-2.7.9nb1'
```

## Installing a Build-Only Package

If a package is required for building the application, but not in the production environment, Nos provides a different function: `install_build`. The `install_build` is identical to the `install` function, except that Nos will add the package to a temporary list. During the [cleanup script](/engines/scripts/cleanup), Nos provides an `install_cleanup` function, which will purge any package from the system that was installed from the `install_build` function.
