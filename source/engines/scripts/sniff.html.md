---
title: sniff
---

The sniff script is executed when Nanobox is attempting to determine which engine to use for the app. This script is not executed if the engine is explicitly specified in the application Boxfile.

## Purpose

This script looks for something within the application code that it can uniquely identify. If found, the script should return a 0 (success) exit code. Otherwise, the script should return a 1 (error).

The logic should be simple, short, and quick.

#### Caution

Simply looking for the existence of a file may not be unique. For example, a ruby framework should not just look for a Gemfile, as all ruby frameworks will likely require a Gemfile. After a preliminary check for the existence of a Gemfile, it should then look for content within the Gemfile to ensure a unique match.

## Usage

#### script

The sniff script is executed at `$ENGINE_ROOT/bin/sniff`. The sniff script must exist in this location.

#### args

A single argument `$1` is provided, and is the path to the codebase.

#### working directory

The working directory is set to `$ENGINE_ROOT/bin`.

## Example

The following example shows how to properly detect a middleman codebase, a ruby static site generator:

```bash
#!/usr/bin/env bash

# $1 = code_dir

# check for the existence of a Gemfile
if [ -f ${1}/Gemfile ]; then
  # found a Gemfile, now let's look for the middleman gem
  cat ${1}/Gemfile | grep 'middleman' || exit 1
else
  exit 1
fi
```
