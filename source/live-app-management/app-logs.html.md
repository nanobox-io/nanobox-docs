---
title: App Logs
seo_title: View Application Logs in Your Dashboard
destroy: Logs for production apps deployed with Nanobox are available in your Nanobox dashboard.
keywords: stream live logs, stream logs, view app logs, view application logs
---

Logs for apps deployed with Nanobox are available in your dashboard.

## Unified Log Stream
All application logs are aggregated and streamed in a unified log stream. This allows all logs to be viewed in one place. Everything output to stdout and stderr as well as "log_watch'd" files are included in the log stream. For more information read through the [Application Logs doc](/app-config/app-logs/).

## Viewing Logs in Your Dashboard
Logs can be accessed in your app dashboard under the "Logs" tab. There are two types of available logs:

- Live Stream
- Historical

![Dashboard Logs](/assets/images/log-management-dashboard.png)

### Live Stream
Live Stream streams your app's logs. These allow you to see errors in your application as they happen. Each log entry is timestamped and flagged with the component-ID and specific log from which it came.

With Streaming logs, only logs entries written after the stream is started are viewable. Any log entries written prior can be viewed in Historical logs.

### Historical Logs
Historical logs contain all of your app's stored log entries. Each log entry is timestamped and flagged with the component-ID and specific log from which it came. When viewing historical logs, the entries are loaded 100 at a time. To load more, click the "View More" button and the next 100 entries will be loaded.

<!-- ## Viewing Logs Through the CLI
To view the application logs through the CLI, use the the `nanobox log` command. More information is available in the [CLI log doc](/cli/log). -->
