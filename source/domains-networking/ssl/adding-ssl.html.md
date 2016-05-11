---
title: Adding SSL
---

Normally the process of adding SSL to your app is tedious complicated, but with Nanobox, we've tried to make it as simple as possible. To get started, click on the "Network" tab of your application dashboard and go to "SSL Certificates". Then click "Add an SSL Certificate".

![Add an SSL Certificate](/images/ssl-add.png)

You have three different options when adding a new certificate:

- [Import an Existing Certificate](#import-an-existing-certificate)
- [Use LetsEncrypt](#use-letsencrypt)
- [Key & Install a 3rd Party Certificate](#key-amp-install-a-3rd-party-certificate)

## Import an Existing Certificate
If you have a certificate that has already been keyed and used on another host, you can import that certificate into Nanobox. You'll need your cert's key, certificate, and certificate authority (CA). These can be obtained from either your SSL provider or where your certificate is currently installed. Paste the full contents of each into the corresponding field in your dashboard and save. The SSL certificate will be installed on all running web nodes.

## Use LetsEncrypt
[LetsEncrypt](https://letsencrypt.org) is is a free, automated, and open certificate authority that provides encryption at no cost. When using LetsEncrypt, all you need to do is fill out the necessary information about your domain and organization, then save. Nanobox will generate the key, certificate, and CA, and install the certificate on all your web nodes.

![LetsEncrypt Information](/images/ssl-letsencrypt-info.png)

## Key & Install a 3rd Party Certificate
If you've purchased an SSL certificate from a 3rd Party SSL provider and have not keyed the certificate, this is the option you should go with. This is a multi-step process.

### 1. Provide Required Information
When keying a certificate, certain information is required. This information is used to create a secure, private key for your certificate. Fill out all the required fields in your dashboard and click "Next".

![SSL Certificate Information](/images/ssl-cert-info.png)

### 2. Submit Your CSR to Your SSL Provider
With your private key generated, we then create and provide a Certificate Signing Request (CSR). Submit your CSR to your SSL provider. They will use it to generate a certificate and certificate authority that matches your private key.

![Certificate Request](/images/ssl-cert-request.png)

*Be sure to copy the full contents of your Certificate Request.*

### 3. Paste in Your Certificate & Certificate Authority
Your SSL provider will make available files that include your Certificate and Certificate Authority. Paste the full contents of these files into the corresponding fields in your dashboard.

![Cert & CA](/images/ssl-cert-ca.png)

*Be sure to paste the full contents of your Certificate and Certificate Authority.*

The naming of these files isn't standardized so it can be hard to know which is which. The [Identifying Certificates, CAs, and Intermediate Certs](/domains-networking/ssl/indentifying/) doc should help.

#### Intermediate Certificates
Some SSL providers provide intermediate certificates that are part of your certificate's authoritative chain. Without these, some browsers will not honor the certificate. To install intermediate certificates, include them in the Certificate Authority field with your CA.

### 4. Save Your Certificate
Once your certificate and CA are in place and saved, we install your certificate on all web nodes.
