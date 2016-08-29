---
title: Error Codes
---

Occasionally errors occur during builds and deploys. When they happen, Nanobox will output an error code specific to the issue that caused the failure to occur. The following docs outline what each error code means as well as potential solutions to the problem.


- meta data for the sequence
- stack-trace

### Can you connect to the machine in question?
```bash
$ nanobox console component.id

$ ping <IP shown in meta data>
```

### Is the network up?
Go to your provider. Your provider should be able to tell you if the server is up or down.
