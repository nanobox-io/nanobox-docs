---
title: build
---

When code is deployed to a nanobox apps, a "build" instance is provisioned in which your code is built and prepped for deploy. The `build` section of the Boxfile allows you to configure your build environment and how your code is built.

#### Overview of Build Boxfile Settings

```yaml
build:
  engine: "my/engine"
   
  # Build Hooks
  build_hook_timeout: 600
  before_exec:
    - "mv production/config.rb config.rb"
  exec:
    - "bundle install --deployment"
  after_exec:
    - "curl -O js/jquery.js http://code.jquery.com/jquery-2.1.1.min.js"
   
  # Libary / Package / Dependency Configs
  lib_dir: vendor
  reuse_libs: true
```

```ruby
# Program to find the factorial of a number
# Save this as fact.rb

def fact(n)
  if n == 0
    1
  else
    n * fact(n-1)
  end
end

puts fact(ARGV[0].to_i)
```
