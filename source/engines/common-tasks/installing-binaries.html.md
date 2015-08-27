---
title: Installing Binaries
---

Every engine will need to install binaries at some point. Nanobox provides a framework and a pattern for consuming binary packages within engines.

#### Warning!

You should be familiar with the [environment](/engines/the-environment) before reading this guide.

## pkgsrc

Nanobox uses [pkgsrc](https://www.pkgsrc.org/) for providing installable binary packages. Pkgsrc is a build framework for building third party software on UNIX-like systems, including Linux. Pkgsrc is platform and distribution-agnostic, allowing Nanobox the freedom to switch between distributions as it makes sense. A sophisticated, time-tested build framework with the ability to build packages to be installed in a nested filesystem provide engines the flexibility to install full binary packages. Using pkgsrc, Nanobox packages do not need to be statically compiled or hacked in an unnatural way to work.

## Finding packages

A full list of packages provided by Nanobox can be found [here](http://pkgsrc.nanobox.io/nanobox/base/Linux/). Search this list until you find a package that your engine requires. Once you find a package, you'll need to copy the package name, and optionally the version. For example, from this python package: `python27-2.7.9nb1.tgz` would need to copy `python27-2.7.9`, or if the requirements aren't so strict on specific versions, you can copy less and less of the package down to the name, like this: `python27`.

If you cannot find a package that you need, please don't try to find it by some other means. While it is possible to download binaries from other sources, doing so will likely break your engine in the future as Nanobox shifts platforms or distributions. Instead, please submit a [github issue](https://github.com/pagodabox/nanobox-pkgsrc-base/issues/new) including the requirement, and the location where the source can be downloaded. After submitting an issue, please ping a member of our team on the #nanobox irc. Most package requests can be fulfilled within 24 hours, depending on the queue and complexity of the compilation.

## Installing a package

Nos provides an idiomatic helper function for installing packages: `install`. The install function takes a single argument, the package name. The install function will print a [subtask header](/engines/common-tasks/generating-output/#printing-the-start-of-a-sub-process) indicating the start of the installation, and then proceed to install the package. All output will be indented to indicate association with the previous header.

Example:

```bash
install 'python27'
# or
install 'python27-2.7'
# or
install 'python27-2.7.9nb1'
```

## Installing a build-only package

If a package is only required for building the application, but not in the production environment, Nos provides a different function: `install_build`. The `install_build` is identical to the `install` function, except that Nos will add the package to a temporary list. During the [cleanup script](/engines/scripts/cleanup), Nos provides an `install_cleanup` function, which will purge any package from the system that was installed from the `install_build` function.
