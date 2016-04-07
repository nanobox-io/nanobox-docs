---
title: Managing Services
---

When data services are provisioned inside of a nanobox VM, port-forwards (tunnels) are established for each service. These allow you to connect to your Nanobox data services from outside of your running VM and provide a way for you to manage them with your local client of choice.

To view all of the tunnels available for your running VM as well as the necessary connection credentials, use the nanobox CLI's `info` command. It will provide all of the necessary connection credentials for the services in your app.

```shell
$ nanobox dev info

Local Domain   : app-name.dev
App Name       : app-name
Nanobox state  : running
Nanobox Files  : ~/.nanobox/apps/nanobox-ruby-test

///////// SERVICES /////////

data.redis :
   image : nanobox/redis
   host : app-name.dev
   ports : [6379]
data.db :
   image : nanobox/mysql
   host : app-name.dev
   ports : [3306]
   username : nanobox
   password : password
```

### Connecting to a Service Through a Tunnel
Simply use the credentials provided in the tunnel output to connect to your services. Below is an example of connecting to a Redis service inside of a nanobox VM using `redis-cli`.

#### Example Connection to Redis Service
```shell
$ nanobox dev info

...

data.redis :
   image : nanobox/redis
   host : app-name.dev
   ports : [6379]

...

# In a separate terminal session

$ redis-cli -h app-name.dev -p 6379
app-name.dev:6379>
```
