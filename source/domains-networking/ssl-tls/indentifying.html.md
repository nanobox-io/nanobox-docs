---
title: Identifying Certs, CAs, & Intermediate Certs
---

When keying a third-party certificate, your SSL/TLS provider will give you a collection of files that will contain your Certificate, Certificate Authority (CA), and in some cases, Intermediate Certificates. While the formats of these files are standardized, their names are not. Each SSL/TLS provider uses their own naming convention and it can be hard to determine what's what. Below are just a few tips to help you identify Certificates, CAs, and Intermediate Certificates.

## Certificate
Certificates contain a single body of text that begins with `BEGIN CERTIFICATE` and ends with `END CERTIFICATE`.

#### Certificate Pattern
```txt
-----BEGIN CERTIFICATE-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-----END CERTIFICATE-----
```

Most SSL/TLS certificates make it pretty obvious which file is the certificate through the filename. Generally, if the filename contains your domain in some form, it is likely your certificate. For example, `yourdomain-com.crt` would likely be your certificate.

**Note:** When pasting your certificate into your Nanobox dashboard, be sure to include everything in this file. The `BEGIN CERTIFICATE` And `END CERTIFICATE` tags are part of your certificate.

## Certificate Authority
Certificate Authorities establish an authoritative chain of certificates and typically contain two or more bodies of text beginning with `BEGIN CERTIFICATE` and ending with `END CERTIFICATE`.

#### Certificate Authority Pattern
```txt
-----BEGIN CERTIFICATE-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-----END CERTIFICATE-----
```

Note that CAs do not always contain two bodies of text. In some cases they will only contain one. In these cases, it’s likely that a separate file was provided containing [intermediate certificate(s)](#intermediate-certificates).

You can typically identify CAs by their filenames as well. CA filenames usually contain the name of the SSL/TLS provider and/or terms like “root,” “ca,” or “bundle.”

Be sure to paste the full contents of the CA in the “Certificate Authority” field in the SSL/TLS creation process.

## Intermediate Certificates
Intermediate Certificates are not required and are not always provided. They are a part of the certificates authoritative chain and should be pasted in the same field as your CA when building your certificate bundle in your dashboard.

Intermediate Certificates can be a little harder to identify since they generally follow the exact format of the CA. Usually you can identify Intermediate Certs through the process of elimination. If it’s not the Certificate or the CA, it’s likely an Intermediate Certificate.

They will contain one or more bodies of text beginning with `BEGIN CERTIFICATE` and ending with `END CERTIFICATE`.

You can also identify Intermediate Certs through filenames, but they aren’t as reliable. Many SSL/TLS providers use the same conventions in naming CAs and Intermediate Certificates, but terms such as “external,” “add trust,” or “chain” are often used.

The full contents of the Intermediate Certificate should be pasted into the “Certificate Authority” field during the certificate bundle creation process along with the full contents of the CA.

## A General Rule of Thumb
As a general rule of thumb, once you've identified which file is your certificate, it's safe to assume all other files provided by your SSL/TLS provider are required to complete your certificate's authoritative chain. Everything but your certificate should be pasted into the "Certificate Authority" field.

The one caveat to this is any txt files provided by your SSL/TLS provider. Only a few providers include these with your certificate and CA, but if they do, they are not part of your CA and should not be pasted into the CA field.
