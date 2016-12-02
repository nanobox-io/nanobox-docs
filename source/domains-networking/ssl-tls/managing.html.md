---
title: Managing SSL Certificates
description: For SSL/TLS certificate installed with Nanobox, tasks such as renewing, rekeying, updating, or removing the certificate are handled in your Nanobox dashboard.
---

Once you've created a SSL/TLS certificate and bundles, managing the certificate is simple. This doc walks through the most common management tasks.

## Renew/Rekey a Certificate
To renew or rekey a certificate, simply [generate a new certificate bundle](/domains-networking/ssl-tls/adding/#certificate-bundles). For third-party certificates, the new bundle will include a new Private Key and Certificate Signing Request (CSR) required in the renewal process.

Once your bundle is complete, [activate it](/domains-networking/ssl-tls/adding/#activate-a-bundle) to replace the existing certificate bundle installed on your running web nodes.

## View/Edit Bundle Details
To view/edit your certificate's Private Key, Certificate, and Certificate Authority, click on your certificate, then the currently active bundle. Here you can view everything and edit your certificate details.

**Warning:** *Be very careful about modifying these details. Modifications made in error will prevent the certificate from functioning properly.*

## Update Organization Details
If you need to update the organizational details associated with your certificate, you'll need to create a new certificate. All certificate bundles are generated using the details provided. Edits to organizational details on a certificate with existing bundles would result in mismatched bundles.

Creating a new certificate is covered in the [Adding SSL/TLS doc](/domains-networking/ssl-tls/adding/).

## Delete Your Certificate
To delete a certificate, click on the certificate in your dashboard. Once inside your certificate view, click the "Delete Cert" button to delete the certificate.

![Delete Certificate](/assets/images/ssl-tls-delete-cert.png)

## Delete a Bundle
To delete a bundle, click on the certificate in your dashboard, then "Manage" next to the bundle you'd like to delete. Once inside your bundle view, click the "Delete Bundle" button to delete the bundle.

![Delete Bundle](/assets/images/ssl-tls-delete-bundle.png)
