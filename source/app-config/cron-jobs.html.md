---
title: Cron Jobs
description: Nanobox cron jobs allow you to create scheduled tasks for your apps for things like automated backups, system maintenance, etc.
---

Cron Jobs allow you to create scheduled tasks for your apps. They are commonly used to automate system maintenance or administration, but can also be used for many other things.

## How Cron Jobs Work

Whenever you add a cron job to your application, the job is loaded into the [Crontab (Cron Table)](http://www.adminschoice.com/crontab-quick-reference) of an node within the component to which the cron job is assigned. For multi-node components, only one node will have the job added to its crontab. This prevents the job from running on all nodes at the same time.

## Creating a Cron Job

Cron jobs are created in your `boxfile.yml`. To configure a cron job, nest a cron job under the component on which it will run.

Each cron job needs an [ID](#id), a [schedule](#schedule), and a [command](#command).

#### Cron Jobs in the Boxfile
```yaml
web.site:
  cron:
    # Pattern
    - id: unique-identifier
      schedule: 'schedule'
      command: 'command'

    # Examples
    - id: flush-cache
      schedule: '0 0 * * *'
      command: 'rm -rf app/cache/*'
    - id: cron-script
      schedule: '*/3 */2 1-3 2,6,7 2'
      command: 'sh cron/script.sh'
```

On your next build and deploy, your cron job(s) will be created.

**Note:** Removing a Cron Job from your `boxfile.yml` will remove the cron job from your app on the next deploy.

## Cron Job Configuration
Cron jobs are really simple to configure. There are three required pieces of information:

### ID
The ID is a unique-identifier to help identify the specific cron job that's running. Your cron's ID is used to tag log output from the cron job. For example, the following would appear in your app's log stream:

```txt
web.site[cron:flush-cache] ...
```

### Schedule
The schedule defines when and how often your cron job should run. Use [Cron Expressions](http://en.wikipedia.org/wiki/Cron#Configuration_file) to define the schedule. Below are some simple examples:

| Interval | Description                                | Schedule    |
|:---------|:-------------------------------------------|:------------|
| Yearly   | Run once a year, midnight, Jan. 1st        | `0 0 1 1 *` |
| Monthly  | Run once a month, midnight, first of month | `0 0 1 * *` |
| Weekly   | Run once a week, midnight on Sunday        | `0 0 * * 0` |
| Daily    | Run once a day, midnight                   | `0 0 * * *` |
| Hourly   | Run once an hour, beginning of hour        | `0 * * * *` |

**Note:** Predefined Scheduling Definitions (@daily, @hourly, etc.) are not available. All schedules must be numeric.

### Command
The command is script or process that runs when the cron job fires. Be sure to include the executable in your command or make sure there's a [shebang](http://en.wikipedia.org/wiki/Shebang_(Unix)) in your script. Filepaths used in commands should be relative to the root of your project.
