---
title: Data Services
---

Data services house your application data. There following data services are currently available, each with their own configuration options.

- MySQL
- Percona
- MariaDB
- PostgreSQL
- MongoDB
- Redis
- Memcached
- Network File System (NFS)

## Type
The type of data service is defined by the ID used in the Boxfile. For example, to create a PostgreSQL database, you'd add a `postgresql1` service to your Boxfile.

#### Postgres Database in the Boxfile
```yaml
postresql1:
  name: postgres
```

## Name
Adding a custom name to your data service is simply a way to identify/differentiate your service.

#### name
```yaml
redis1:
  name: job-queue
  
redis2:
  name: app-cache
```

## Type-Specific Settings
Most data services have configs that are unique. These configs are covered in the following docs.