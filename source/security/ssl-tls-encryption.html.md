---
title: SSL/TLS Encryption
seo_title: Simple SSL/TLS Encryption on Live Apps
description: Nanobox simplifies the process of add SSL/TLS encryption to your production servers through an automated Let's Encrypt integration and 3rd party certificate imports.
keywords: nanobox security, data encryption, ssl, tls, docker security, secure docker, secure data, network security
---

An important part of any web application's security strategy is valid SSL/TLS encryption. Nanobox allows you quickly and easily encrypt your application with an automated Let's Encrypt integration as well as the ability to create and/or import third-party SSL/TLS certificates.

## Adding SSL/TLS Encryption
When adding SSL/TLS certificates to your application, you have a few options. You can either use Let's Encrypt, create a private key and certificate signing request (CSR) to key a new third-party certificate, or import an already existing and previously-keyed third-party certificate.

The [Adding SSL/TLS doc](https://docs.nanobox.io/domains-networking/ssl-tls/adding/) walks through each option for creating and installing SSL/TLS certificates in your application.

## Forcing HTTPS
Forcing SSL/TLS encryption happens on the application level, typically within your app's web server. All app's deployed with Nanobox sit behind [your app's router](https://docs.nanobox.io/live-app-management/platform-components/#mesh). As requests pass through the router, Nanobox appends the `X-Forward-Proto` header with the origin protocol of the incoming request (More information [here](https://docs.nanobox.io/domains-networking/user-ip-and-protocols/).

Below are examples of forcing HTTPS using the `X-Forward-Proto` header with popular web servers.

#### nginx
```nginx
if ($http_x_forwarded_proto != 'https') {
    rewrite ^ https://$host$request_uri? permanent;
}
```

#### apache
```apache
RewriteEngine On
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
```