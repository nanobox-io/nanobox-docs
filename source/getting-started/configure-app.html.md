---
title: Configure Your App
---

Getting your app ready to run with Nanobox requires very little. There are just a few things to do to get your project ready.

1. [Configure Your Runtime](#configure-your-runtime)
2. [Listen on 0.0.0.0:8080](#listen-on-0-0-0-0-8080)

## Configure Your Runtime
Engines expose configuration settings in `boxfile.yml`. These settings can include anything from defining a specific runtime version to enabling libraries or packages. What options are available depend on the engine you're using. If using an official Nanobox engine, these options are outlined in the [Language Guides](https://guides.nanobox.io).

All engine config settings are specified in the `code.build > config` section of your boxfile.yml. If you don't need anything than the defaults, you don't need to include config settings.

#### Engine/Runtime Config in the boxfile.yml
```yaml
code.build:
  engine: ruby
  config:
    runtime: ruby-2.3
```

If you make changes to your engine config, you'll need to build a new runtime.

```bash
# build an updated runtime
$ nanobox build
```

## Listen on 0.0.0.0:8080
In order for your app to connect to the public network and receive http requests when deployed with Nanobox, it must listen on host `0.0.0.0` and port `8080`.

Below is an example of a `boot.rb` in a Rails app configured to work with Nanobox.

```ruby
require 'rails/commands/server'
module Rails
  class Server
    alias :_default_options :default_options
    def default_options
      _default_options.merge!(Host:'0.0.0.0', Port:8080)
    end
  end
end
```

If you're using an engine that installs a webserver for you, such as the [official PHP engine](https://github.com/nanobox-io/nanobox-engine-php), this is taken care of for you. If using UDP and TCP protocols, you can configure what ports your app listens. More information is available in the [Port Mapping](/domains-networking/port-mapping/) doc.
