---
title: Stage Locally with Dry-Run
seo_title: Stage Application Deploys Locally with Nanobox "Dry-Run" Environments
description: Nanobox provides dry-run environments that perfectly simulate your production deploy process and environment.
keywords: local staging, local deploy, development workflow, local testing, dry-run deploy, test deploy, test deployment
---

Nanobox provides a "dry-run" environment that simulates your production infrastructure on your local machine. When you deploy to `dry-run`, Nanobox will go through the same deploy process it goes through when deploying to live app, but the app is deployed to containers running locally. If your app deploys successfully to dry-run, it'll work in production.

## Deploy to Dry-Run
Run the following to start your dry-run environment and deploy your app to it:

```bash
nanobox deploy dry-run
```

Your app deploys and runs in the dry-run environment as if were deployed and run on a live server – [deploy hooks](https://docs.nanobox.io/app-config/build-deploy-hooks/#deploy-hooks) run, web and worker components are created and started, [cron jobs](https://docs.nanobox.io/app-config/cron-jobs/) are scheduled and run, etc.

## Managing Dry-Run Environments
The dry-run environment is considered a "remote" or "context" for your application that exists locally. For many of the [CLI commands](/cli/), you can specify the dry-run context.

```bash
# Add a DNS Alias to a dry-run app
nanobox dns add dry-run myapp.st

# Add environment variables to dry-run
nanobox evar add dry-run ENV=staging PROCESS_JOBS=true

# Console into web.site in a dry-run app
nanobox console dry-run web.site
```

### Managing Data Components in Dry-Run
Data components provisioned in your dry-run environment are given a virtual IP that can be used to connect directly to the running service. Run the following to output the connection credentials for your dry-run components:

```bash
nanobox info dry-run
```

You can use the IPs/users/passwords provided in the output to connect to your data services using your client of choice.

### Detecting the Dry-Run Environment
You may want to detect when your app is running inside of a dry-run environment. Nanobox provides an `APP_NAME` environment variable in all application environments. When running in dry-run, `APP_NAME` is set to `sim` (short for simulation).

## SSL/TLS in Dry-Run
Every dry-run application is deployed with a valid, self-signed SSL/TLS certificate keyed to the IP of your dry-run environment. Most browsers will warn you when a self-signed certificate is used, but you can acknowledge the warning and proceed to the app. If you're using a DNS alias, the browser will warn you of a domain/certificate mismatch since the certificate is keyed to the IP of the dry-run environment. This too you can acknowledge and ignore. The certificate is valid and all dry-run data passed over HTTPS is encrypted.
