---
title: Using the Payload
---

The payload provided to each script is a JSON encoded dataset. Nos provides convenient helpers to access data within the payload. In addition, by initializing Nos, Nos will automatically convert the payload from JSON to [SHON](https://github.com/nanopack/shon) and access the data without you having to be concerned with the complex details.

If you are interested in seeing how Nos converts and accesses payload data, you can review the code [here](https://github.com/nanobox-io/nanobox-nos/blob/master/lib/payload.sh#L4-L10).

#### Warning!

If you are unfamiliar with the payload and what it contains, see the [Payload details here](/engines/scripts#payload).

## Usage

### Initialize Nos

If you haven't already, you must source and initialize Nos.

#### Source & Initialize Nos
```bash
# source the Nos framework
. /opt/nos/common.sh

# initialize Nos with the original arguments
nos_init $@
```

In the example above, initializing Nos with `nos_init` and passing the original script arguments will convert the payload into SHON, which can then be accessed from bash.

### Data Access

Nos provides a single helper function `payload` for accessing payload data. This helper takes a single argument which corresponds to a key within the payload.

For example, if I wanted to extract the `code_dir` from the payload, I would run the following:

```bash
payload 'code_dir'
```

I could also capture this output to chain logic. For instance, if I wanted to change directory into the code_dir, I could do so like this:

```bash
cd $(payload 'code_dir')
```

### Nested Data

Nested data (a hash of hashes) can be accessed by appending `_KEY` to the containing key. Since this is common for Boxfile data, the following example would extract a value from the `boxfile` node of the payload:

```bash
payload 'boxfile_engine'
```

## The code

As an additional reference, the code is available and documented [here](https://github.com/nanobox-io/nanobox-nos/blob/master/lib/payload.sh#L12-L20).
