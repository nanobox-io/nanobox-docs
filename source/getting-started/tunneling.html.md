---
title: Tunneling
---

When data services are provisioned inside of a nanobox VM, port-forwards (tunnels) are established for each service. These allow you to connect to your nanobox data services from oustide of your running VM and provide a way for you to manage them with your local client of choice.

To view all of the tunnels available for your running VM as well as the necessary connection credentials, use the nanobox CLI's `tunnel` command:

```shell
$ nanobox tunnel

Service                 | Username, Password     | Ports
----------------------------------------------------------------------
postgresql1             | nanobox, password      | [5432             ]
mysql1                  | nanobox, password      | [3306             ]
redis1                  | ,                      | [6379             ]
```

### Connecting to a Service Through a Tunnel
Simply use the credentials provided in the tunnel output to connect to your services. Below is an example of connecting to a redis service inside fo a nanobox VM using `redis-cli`.

#### Example Connection to Redis Service
```shell
$ nanobox tunnel

Service                 | Username, Password     | Ports
----------------------------------------------------------------------
postgresql1             | nanobox, password      | [5432             ]
mysql1                  | nanobox, password      | [3306             ]
redis1                  | ,                      | [6379             ]

$ redis-cli -h appname.nano.dev -p 6379
appname.nano.dev:6379>
```