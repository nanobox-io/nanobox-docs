---
title: Using File-Watchers
seo_title: Enabling File-Watching for Live-Reloads
description: Many front-end dev frameworks use file-watching to tell the OS when a file is modified. Nanobox includes file-watching functionality when running apps locally.
keywords: system filewatcher, getting livereload to work, livereload with nanobox
---

Many front-end development frameworks rely on a filesystem watcher that tells the OS when a file is modified and triggers some type of event (usually a browser refresh). Nanobox includes file-watching functionality that can be enabled when running your app locally.

To enable the file-watcher for the duration of [`run`](/cli/run/), set `fs_watch: true` in the `run.config` section of your boxfile.yml.

```yaml
run.config:  
  fs_watch: true
```

### How the File-Watcher Works
Nanobox includes two file-watchers - a fast watcher and a slow watcher. If the fast file-watcher panics or fails, it will failover to the slower file-watcher.

#### Fast
The fast file-watcher uses your OS's native file-watcher which holds a file descriptor open for every file in your project directory and gets notified by your OS any time a file changes.

**NOTE:** *The most common cause of the fast file-watcher panicking is exceeding your system's ulimit, which defines how many file can be open at a time. A quick google search will provide instructions on increasing your system's ulimit unique to your OS.*

#### Slow
The slow file-watcher is a "polling" solution that loops through all the files in your project directory and checks if they have been updated. This solution gets slower as the number of file in your project increases, but is still relatively fast. In our benchmarks, a codebase with 1000+ files took about a second to register a modified file with minimal system overhead.
