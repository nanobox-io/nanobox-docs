---
title: Managing SSL Certificates
---

Once and SSL certificate is installed, there are some simple management options available. Click on your an SSL certificate in your dashboard to see the management options.


## Edit/View Details
This allows you to view and, if necessary, edit your SSL’s Key, Certificate, and Certificate Authority.

**Warning:** *Be very careful about modifying these details. Modifications made in error will prevent the certificate from functioning properly.*

## Renew/Rekey a Certificate
This allows you to renew or rekey and existing certificate. Depending on the the type of certificate installed, this process is different.

### Renewing/Rekeying 3rd Party Certificates
We will generate a new key and Certificate Signing Request (CSR) for you to submit to your SSL provider. They will give you a new Certificate and Certificate authority. Your currently running SSL certificate will not be affected until the renewal/rekeying process is complete.

### Renewing/Rekeying LetsEncrypt Certificates
*Information Coming Soon*

## Delete Your Certificate
This is self-explanatory. This will delete your SSL certificate. This action cannot be undone without going through the SSL creation process again. Once you delete the certificate, any https requests to the associated domain will throw a warning.
