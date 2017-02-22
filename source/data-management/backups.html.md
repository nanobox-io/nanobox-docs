---
title: Backups
seo_title: Database Backup Strategies
description: Data backups can be life-savers in case of emergency. With Nanobox, you have a few options for running backups.
keywords: automated database backups, backup database, docker database backup
---

Data backups can be life-savers in case of emergency and it's always a good idea to run frequent backups. You can trigger backups in your dashboard or through a cron job.

## Backups Through Your Dashboard *(Coming Soon)*
A backup option is available in your dashboard for any data component built using an [image that is "backup-able"](/images/create/#).

![Dashboard Backups](/assets/images/dashboard-backup.png)

Triggering a backup runs your data component's backup script and stores the exported file(s) in your app's [warehouse](/live-app-management/platform-components/#warehouse).

### Restore to a Backup
To restore to a backup stored in your warehouse, click the "Restore" button next to the backup in your list of backups.

![Restoring to a Backup](/assets/images/dashboard-backup-restore.png)

## Automated Backups
Configuring automated backups is a feature we plan to add in the future, but in the mean time, you can automate backups with a cron job. You can find more information about cron jobs in the [Cron Jobs](/app-config/cron-jobs/) doc.
