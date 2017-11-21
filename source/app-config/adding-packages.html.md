---
title: Adding Packages
seo_title: Adding Packages to Your App's Runtime Environment
description: Nanobox provides 'extra_packages' and 'dev_packages' as an alternative to 'apt-get' for installing packages in your app's runtime.
keywords: apt-get, custom packages, linux package, package install
---

At some point you may need to install packages that are't pre-installed by your [engine](/engines/). Nanobox maintains its own custom-compiled package library from which packages can be downloaded, installed, and included in both your development and production environments.

## Don't Use apt-get
Each Nanobox server is provisioned using a bare-bones Ubuntu image. Generally, `apt-get` is used to download and install packages in Linux, but with Nanobox, `apt-get` shouldn't be used.

`apt-get` installs packages in the `/usr` directory. Nanobox only includes the `/data` and `/app` directories in your deployed runtime, so any packages installed with `apt-get` will not get deployed and will not be available in production.

## Installing Packages
The [`extra_packages`](/boxfile/run-config/#extra-packages) and [`dev_packages`](/boxfile/run-config/#dev-packages) options in the `boxfile.yml` allow you to include packages in your app's runtime.

Packages listed as `extra_packages` are installed and will be available in both local development and production environments. Packages listed as `dev_packages` are only installed and available in your local development environment. They are not included in your deployed runtime.

#### extra_packages
```yaml
run.config:
  # ...
  extra_packages:
    - curl
    - nodejs
```

#### dev_packages:
```yaml
run.config:
  # ...
  dev_packages:
    - inotify-tools
```

#### Specific Package Versions in dev_packages
If you need a specific package version in `dev_packages`, you need to list the entire package name, including the major, minor, and patch versions (leaving off the `.tgz` extension). For example, `nodejs-8.1.2` would work, but `nodejs-8` would not.

`pkgin` isn't able to properly _remove_ packages with partial version numbers. All `dev_packages` get removed before the your app is deployed.

## Where to Find Packages
Only packages included in the [Nanobox pkgsrc](http://packages.nanobox.io/2017/11/base/index.html) can be installed as `extra_packages` or `dev_packages`. Use the link below to browse avialable packages.

<div class="btn">
  <a href="http://packages.nanobox.io/2017/11/base/index.html" target="\_blank">View Nanobox Packages</a>
</div>

**Note:** This is currently only a system-generated list of all the available packages, but we do have <a href="https://trello.com/c/psTicIdk/73-searchable-pkgsrc" target="\_blank">plans to provide an easy-to-use, searchable pkgsrc UI</a>.

## Requesting Packages
If you need a package that isn't available in the Nanobox pkgsrc, feel free to [create a new issue](https://github.com/nanobox-io/nanobox-pkgsrc-base/issues) on the Nanobox pkgsrc repository, reach out in the [Nanobox Slack Channel](https://nanoboxio.slack.com), or email us at [hello@nanobox.io](mailto:hellow@nanobox.io).
