---
title: Remote Access
---

The `nanobox console` command allows you to securely access your production servers from your local machine. It drops you into an interactive console inside a node of whichever component you specify.

```bash
# Pattern
$ nanobox console <component>

# Example
$ nanobox console web.site
```

More information about the `console` command is available in the ['console' documentation](/cli/console/).

For data components, you can also use the `nanobox tunnel` command to create a secure tunnel between your local machine and a production server. More information is available in the [Remotely Managing Data](/data-management/remotely-managing-data/#create-a-secure-tunnel) doc.

### User Authentication
Whenever servers are accessed remotely, there are three levels of authorization the requests goes through:

1. Your are an authorized Nanobox user.
2. Your are an authorized team member on the app.
3. Your are authorized to access the component.

If any of these authorizations fail, the remote connection is rejected.
