---
title: Percona Boxfile Settings
---

#### Overview of Percona Boxfile Settings
```yaml
percona1:
  version: 5.5
  stability: stable
  
  # All settings below apply to MySQL, Percona, & MariaDB services
  mysql_plugins:
    - federated
    - audit_log
  mysql_event_scheduler: 'Off'
  mysql_max_connections: 1024
  mysql_thread_stack: '256K'
  mysql_myisam_recover: 'DEFAULT'
  mysql_max_allowed_packet:  '16M'
  mysql_max_join_size: 9223372036854775807
  mysql_table_open_cache: 64
  mysql_query_cache_limit: '1M'
  mysql_allow_suspicious_udfs: 'Off'
  mysql_ansi: 'Off'
  mysql_audit_log: 'On'
  mysql_ft_max_word_len: 84
  mysql_ft_min_word_len: 4
  mysql_ft_query_expansion_limit: 20
  mysql_ft_stopword_file: ' '
``` 

## Version & Stability

### Version
When configuring Percona in your Boxfile, you can define which of the following versions you'd like to use.

- 5.5
- 5.6

The specific patch level is determined by the "stability" config.

#### Version Defined on Create
Due to version compatibility constraints, data service versions cannot be changed after the service is created. To use a different version, you'll have to create a new service and manually migrate data.

### Stability
The `stability` config allows you to specify which patch level of your Percona version you would like to use. There are two stability options:

- beta
- stable

###### Beta Versions
Beta versions are for bleeding edge developers who want nothing but the latest releases of services. These are "builds-in-progress," and using them is done at your own risk. Stabilities do not represent the stability of the actual project, but rather the "image" provided by Nanobox.

#### version & stability
```yaml
# default setting
percona1:
  version: 5.6
  stability: stable
```

## Percona MySQL Settings
Because Percona is a fork of the MySQL project, it is configured using the same [MySQL Boxfile settings](/boxfile/data-services/mysql#mysql-settings) available to MySQL services.

###### Quick Links 
[mysql\_plugins](/boxfile/data-services/mysql#mysql-plugins)  
[mysql\_event\_scheduler](/boxfile/data-services/mysql#mysql-event-scheduler)  
[mysql\_max\_connections](/boxfile/data-services/mysql#mysql-max-connections)  
[mysql\_thread\_stack](/boxfile/data-services/mysql#mysql-thread-stack)  
[mysql\_myisam\_recover](/boxfile/data-services/mysql#mysql-myisam-recover)  
[mysql\_max\_allowed\_packet](/boxfile/data-services/mysql#mysql-max-allowed-packet)  
[mysql\_max\_join\_size](/boxfile/data-services/mysql#mysql-max-join-size)  
[mysql\_table\_open\_cache](/boxfile/data-services/mysql#mysql-table-open-cache)  
[mysql\_query\_cache\_limit](/boxfile/data-services/mysql#mysql-query-cache-limit)  
[mysql\_allow\_suspicious\_udfs](/boxfile/data-services/mysql#mysql-allow-suspicious-udfs)  
[mysql\_ansi](/boxfile/data-services/mysql#mysql-ansi)  
[mysql\_audit\_log](/boxfile/data-services/mysql#mysql-audit-log)  
[mysql\_ft\_max\_word\_len](/boxfile/data-services/mysql#mysql-ft-max-word-len)  
[mysql\_ft\_min\_word\_len](/boxfile/data-services/mysql#mysql-ft-min-word-len)  
[mysql\_ft\_query\_expansion\_limit](/boxfile/data-services/mysql#mysql-ft-query-expansion-limit)  
[mysql\_ft\_stopword\_file](/boxfile/data-services/mysql#mysql-ft-stopword-file) 