---
title: Cron Jobs
---

Cron Jobs allow you to create schuduled tasks for your Nanobox application. They are commonly used to automate system maintenance or administration, but can also be used for many other things.

## How Cron Jobs Work

Whenever you add a cron job to your application, the job is loaded into the [Crontab (Cron Table)](http://unixhelp.ed.ac.uk/CGI/man-cgi?crontab+5) of an instance within the service to which the cron job is assigned. For multi-instance services, only one instance will have the job added to its crontab. This prevents the job from running on all instances at the same time.

## Creating a Cron Job

Cron Jobs can be created in both your App Dashboard and your Boxfile.

### Through the Dashboard
To add a cron job in the Dashboard, go to Cron Jobs under your Dev Config tab and click "New Cron Job."

![Adding a Cron Job in the Dashboard](/images/cron-jobs-dashboard.png)

The settings for the cron job are covered in detail [below](#cron-job-configuration).

### In the Boxfile
To configure a cron job using the Boxfile, nest a cron job under the service on which it will run. Include both the [cron schedule](#schedule) and the [cron command](#command).

#### Cron Jobs in the Boxfile
```yaml
web.site:
  cron:
    # Pattern
    - 'schedule': 'command'

    # Examples
    - '0 0 * * *': 'rm -rf app/cache/*'
    - '*/3 */2 1-3 2,6,7 2': 'sh cron/script.sh'
```

On your next deploy, your cron job(s) will be created.

**Note:** When you remove a Cron Job from your Boxfile, it will not remove the Cron Job from your application. Cron jobs can only be removed from cloud applications in your dashboard. Also, if you make an edit to a Cron Job in your Boxfile, it will not edit the existing job, but create a new Cron Job instead. You will need to delete the previous version of your job in your App Dashboard.

## Cron Job Configuration

Cron jobs are really simple to configure, but there are some things you should know. With each cron, there are 4 main configuration settings:

### Command
The command is script or process that runs when the cron job fires. Be sure to include the executable in your command or make sure there's a [shebang](http://en.wikipedia.org/wiki/Shebang_(Unix)) in your script. Filepaths used in commands should be relative to the root of your project.

### Schedule
The schedule defines when and how often your cron job should run. Use [Cron Expressions](http://en.wikipedia.org/wiki/Cron#Predefined_scheduling_definitions) to define the schedule. Below are some simple examples:

| Interval | Description                                | Schedule    |
|:---------|:-------------------------------------------|:------------|
| Yearly   | Run once a year, midnight, Jan. 1st        | `0 0 1 1 *` |
| Monthly  | Run once a month, midnight, first of month | `0 0 1 * *` |
| Weekly   | Run once a week, midnight on Sunday        | `0 0 * * 0` |
| Daily    | Run once a day, midnight                   | `0 0 * * *` |
| Hourly   | Run once an hour, beginning of hour        | `0 * * * *` |

**Note:** Predefined Scheduling Definitions(e.g. @daily, @hourly, etc.) are not available on Nanobox. All schedules must be numeric.

### Service
The Service defines on which of your app's services the cron job will run. If adding a cron job in the Boxfile, the service under which the cron job is nested is used. When adding a cron job in your dashboard, if your app has more than one code service, you'll have the option to select which service to use.

### Output Emails
This is pretty self-explanatory. Nanobox allows you to specify email addresses to notify when your Cron Job runs. The email includes the actual output of the script or command. You can specify these email addresses in your App Dashboard when creating a new Cron Job or editing an existing job. Adding notification email addresses cannot be done in the Boxfile.

Cron output emails are sent through the SMTP provider you provide in your dashboard. In order to have the output of your cron jobs emailed to you, you must first [configure SMTP credentials in your dashboard](/cloud/app-management/mail).
