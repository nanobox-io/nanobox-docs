---
title: Generating a Boxfile
---

Each engine has the ability to generate a [Boxfile](/getting-started/boxfile/) for the codebase. If leveraged to it's full extent, this feature can empower an engine to auto-generate an entire infrastructure to satisfy all of the app's dependencies without any custom configuration.

#### **Warning!**

If you are unfamiliar with the role of a Boxfile, you need to read [the Boxfile doc](/boxfile/intro/) first.

## The Vision

The Boxfile allows an engine to automate the entire infrastructure for an app. An engine's [boxfile script](/engines/scripts/boxfile/) runs before the [prepare](/engines/scripts/prepare/) and [build](/engines/scripts/build/) scripts, allowing Nanobox to generates the specified services and configuration on which the [prepare](/engines/scripts/prepare) and [build](/engines/scripts/build) scripts may depend.

The order is important here. Each newly created service also generates environment variables such as `REDIS1_HOST`, `REDIS1_PORT`, `POSTGRES1_USER`, and `POSTGRES1_PASS` which are available in both the [prepare](/engines/scripts/prepare/) and [build](/engines/scripts/build/) scripts. Ultimately, an engine can tell Nanobox that this app needs a database, and by the time the [build](/engines/scripts/build/) script is called, the environment variables exist which can be used to generate application-specific connection configuration.

The extent of the engine-derived Boxfile can be simple and static or advanced and dynamic. Consider an engine for a popular blogging framework such as Wordpress. The requirements are simple and predictable. A database will always be required. In this case, the [boxfile](/engines/scripts/boxfile) script can simply echo a static Boxfile containing a mysql database.

On the other hand, consider a more general-purpose framework like rails or django. The requirements change depending on the functionality of the specific application. In this case, the [boxfile](/engines/scripts/boxfile) script may inspect the Gemfile or requirements.txt for a postgres or redis adapter. If such an adapter is required, it's safe to assume the application needs that type of service. Within the [build](/engines/scripts/build) script, the application can be configured to connect to the dynamically-generated services.

A Boxfile be dynamically composed to provide an infrastructure for even the most flexible frameworks.

## Developer Overrides

While this is certainly empowering to the engine developer, the application developer has the final say in the infrastructure definition. If a Boxfile is provided within the codebase, the two Boxfiles will be merged together, with the application Boxfile values used in the event of a conflict. Basically, if the application developer wants to change a particular configuration that is set by the engine, the same setting in the application's Boxfile will be used instead of the engine's generated Boxfile.

For example, the following engine-generated Boxfile:

```yaml
mysql1:
  name: silly-salad
  max_connections: 1024
```

And the following application Boxfile:

```yaml
mysql1:
  name: catalog
```

Would generate:

```yaml
mysql1:
  name: catalog
  max_connections: 1024
```


In addition, the application developer ultimately has the option to disable an engine-defined Boxfile. The following setting within the application Boxfile:

```yaml
build:
  disable_engine_boxfile: true
```

will disable the engine's ability to generate a Boxfile. This is important to consider when writing the [build](/engines/scripts/build) script. The logic here should conditionally activate depending on the existence of the auto-generated environment variables. If they don't exist, then likely the application developer disabled the engine-defined Boxfile generation, and the app should not be configured to connect to non-existent services.
