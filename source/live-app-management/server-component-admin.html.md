---
title: Server & Component Admin
description: Each server and component deployed with Nanobox can be refreshed, rebooted, rebuilt, updated, and deleted from the Nanobox dashboard.
---

Every [bunkhouse server](/scaling/bunkhouse) and app component has administrative options that allow you to manage host machines and containers. These actions are helpful when either attempting to resolve issues with a server or apply updated config options. These options can be found under the "Admin" tab of each.

## Bunkhouse Options
With a shared host (bunkhouse server), you're able to reboot the host.

![Bunkhouse Admin Options](/src-images/host-component-bunkhouse-btns.png)

### Reboot
Rebooting a bunkhouse server will power-off the host machine, then power it back on.

<strong>Downtime Risk - <span class='red'>High</span></strong>  
All components housed on the bunkhouse server will be unavailable as server is shut off and brought back online. This will also flush the server's memory, wiping any data stored in memory.

### Delete
Deleting the bunkhouse server will decommission the server completely. All app and platform components must be moved off a bunkhouse before it can be deleted.

## Component Options
Application components provide refresh, reboot, and rebuild options.

![Component Admin Options](/src-images/host-component-btns.png)

### Refresh
Refresh will stop the service's running processes, then restart them.

<strong>Downtime Risk - <span class='yellow'>Medium</span></strong>  
The component will be unavailable as process are stopped and restarted. There will be downtime but it's usually pretty minimal. However, in cases where an app doesn't gracefully handle an unresponsive process, the downtime may be prolonged.

### Reboot
Reboot will power-off all component nodes, then power them back on.

<strong>Downtime Risk - <span class='red'>High</span></strong>  
The component will be unavailable as nodes are shut off and brought back online. This will also flush the component's memory, wiping any data stored in memory.

### Rebuild
Rebuilding a component will provision entirely new nodes in the background. Once the new nodes are confirmed functional, data is migrated (if applicable), then traffic is routed to the new nodes and the old nodes are decommissioned.

<strong>Downtime Risk - <span class='green'>Low</span></strong>    
Web and worker components shouldn't experience any downtime. The switch from old to new nodes is atomic and handled by your app's routing mesh. Data components may experience some downtime as the final data sync runs, but this is generally very minor. More information is available in the [Data Migrations During Scaling & Rebuilds](/data-management/data-migrations-scaling/) doc.

### Update
Updating a component will update the image used to create the component to the most stable version of the image.

<strong>Downtime Risk - <span class='green'>Low</span></strong>  
The process of updating a component is essentially the same as rebuilding a component. Web and worker components won't see any downtime, but data components may require brief downtime in order to migrate data.
