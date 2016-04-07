---
title: Working with Input
---

A common concern when building an engine is how to provide configurable or tunable parameters from the application developer. One case for this is runtime versions. How might an engine allow an application developer to specify a specific version of ruby or python?

The engine has access to the codebase and can define whatever standard it wants. Nanobox provides an idiomatic approach to this problem, which is encouraged to provide consistency across engines.

#### Warning

Before continuing, you should be familiar with:

- [The Boxfile](/boxfile)
- [Using the Payload](/engines/common-tasks/using-the-payload)

## Again With the Boxfile

As mentioned before, the Boxfile is King. Nanobox provides and encourages engine developers to extract values from the Boxfile; specifically the `build` section. Nanobox does not require the engine to read and parse the Boxfile for this. Instead, it provides a convenient payload property `boxfile` which contains the data from the `build` section of the application-provided Boxfile.

As an additional convenience, upon initialization, Nos will unwrap the `boxfile` data, allowing quick access through the [payload](/engines/common-tasks/using-the-payload/#data-access) helper.

## Example

Let's say I'm building an engine that depends on the python runtime and I want to allow developers to specify the version of python. In addition, I would like to default to a version if no version is specified. This could be accomplished using the following:

```bash
# extract python version
if [[ -n "$(payload 'boxfile_python_version')" ]]; then
  python_version=$(payload 'boxfile_python_version')
else
  python_version="3.4"
fi
```

This would allow the application developer to specify a python version in their Boxfile like this:

```yaml
build:
  python_version: '2.7'
```
