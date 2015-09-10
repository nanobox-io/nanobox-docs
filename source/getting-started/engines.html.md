---
title: Engines
---

### What Exactly is an Engine?
Engines are what truly add simplicity and power to nanobox. An engine is essentially a collection of scripts that detect, build, and configure a runtime environment specific to your app.

As nanobox starts up, it uses the list of *official* engines to "sniff" your codebase for criteria that match it to a specific engine. The matching engine is used to download and install the necessary binaries and packages for your runtime environment, configure the environment, and apply any [Boxfile](/getting-started/boxfile/) configuration options specific to the engine. You also have the option to specify a specific engine in your Boxfile.

### Build & Publish Engines
Anybody can build & publish engines. You may be a framework developer who wants to make it simple for others to use your framework with nanobox. Or you may have an app with very specific needs. Either way, you can build a custom engine and publish it to the community.

For more information on building and publishing engines, read through the detailed [Engine docs](/engines/).

### View & Search Community Engines
All published engines can be viewed and searched on [engines.nanobox.io](http://engines.nanobox.io).

### Manage Your Own Engines
To view and manage your own engines, go to your [Nanobox Dashboard](https://dashboard.nanobox.io).