---
title: Caching
---

Nanobox provides engines with the ability to cache certain content, which is then available on subsequent deploys.

## Libraries & Dependencies

Because libraries and dependencies are so common among frameworks, Nanobox has a special way of handling them. Please refer to the [Boxfile generation](/engines/scripts/boxfile/#cached-libraries) doc for specific details on how to do this. Using the built-in behavior is highly preferred over manual caching as it drastically reduces local build time.

## Custom Stuff

If there is a need that does not fit within the aforementioned process, you can manually access the cache using the `cache_dir` payload attribute.

#### Example:
```bash

mkdir -p $(payload 'cache_dir')/locker
cp -a /some/random/stuff $(payload 'cache_dir')/locker

```
