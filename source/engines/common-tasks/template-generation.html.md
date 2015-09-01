---
title: Configuration Templates
---

Nos provides a template generation framework, which can be used to dynamically generate application configuration from a template file.

## Mustache

Nos uses [mustache](https://mustache.github.io/mustache.5.html) as the template rendering framework. Mustache is simple, logic-less, and does not require previous knowledge of a particular language or templating engine to use.

## Using Templates

#### Template Location

Nos requires templates to live within the `/templates` directory. You can nest templates within `/templates` like `/templates/apache/apache.conf.mustache`.

It is not required to have a .mustache extension, however it is recommended as it will help your editor identify the file type.

#### Rendering

To render a template, Nos provides a `template` helper function. This function accepts 3 arguments:

- A template source
- The destination file
- The payload

Essentially, the `template` helper will render a mustache template from the `/templates` directory, writing the result into a destination file.

###### Example:

#### /templates/nginx.conf.mustache:

```mustache
daemon off;
worker_processes  1;

error_log  {{deploy_dir}}/var/log/nginx/error.log;

events {
    worker_connections  1024;
}

http {
    include       /data/etc/nginx/mime.types;
    default_type  application/octet-stream;
    keepalive_timeout  65;
    gzip  on;

    server {
        listen       {{port}};
        server_name  localhost;

        location / {
            root   {{live_dir}};
            index  index.html;
        }
    }
}

```

#### /bin/prepare

```bash
#!/bin/bash

# source the Nos framework
. /opt/nos/common.sh

# initialize Nos with the original arguments
nos_init $@

# store the payload argument to use as the template payload
payload=$1

# generate nginx config
template \
  "nginx.conf.mustache" \
  "$(payload 'deploy_dir')/etc/nginx/nginx.conf" \
  $payload


```

## Inline Templates

Coming Soon

## Files

At times a dynamically generated template isn't required. In such cases, a static file can be copied into the environment. Nos provides a `file` helper to assist with this common task. To use the `file` function, files must be placed in the `/files` directory. The function accepts 2 arguments:

- The source file
- The destination file.

###### Example:

```bash
file \
  "patches/fix-flock.php" \
  "$(payload 'code_dir')/lib/framework/flock.php"

```
