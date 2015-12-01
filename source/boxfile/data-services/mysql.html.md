---
title: MySQL Boxfile Settings
---

#### Overview of MySQL Boxfile Settings
```yaml
mysql1:
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
When configuring MySQL in your Boxfile, you can define which of the following versions you'd like to use.

- 5.5
- 5.6

The specific patch level is determined by the "stability" config.

#### Version Defined on Create
Due to version compatibility constraints, data service versions cannot be changed after the service is created. To use a different version, you'll have to create a new service and manually migrate data.

### Stability
The `stability` config allows you to specify which patch level of your MySQL version you would like to use. There are two stability options:

- beta
- stable

###### Beta Versions
Beta versions are for bleeding edge developers who want nothing but the latest releases of services. These are "builds-in-progress," and using them is done at your own risk. Stabilities do not represent the stability of the actual project, but rather the "image" provided by Nanobox.

#### version & stability
```yaml
# default setting
mysql1:
  version: 5.6
  stability: stable
```

## MySQL Settings

###### Quick Links 
[mysql\_plugins](#mysql-plugins)  
[mysql\_event\_scheduler](#mysql-event-scheduler)  
[mysql\_max\_connections](#mysql-max-connections)  
[mysql\_thread\_stack](#mysql-thread-stack)  
[mysql\_myisam\_recover](#myisam-recover)  
[mysql\_max\_allowed\_packet](#mysql-max-allowed-packet)  
[mysql\_max\_join\_size](#mysql-max-join-size)  
[mysql\_table\_open\_cache](#mysql-table-open-cache)  
[mysql\_query\_cache\_limit](#mysql-query-cache-limit)  
[mysql\_allow\_suspicious\_udfs](#allow-suspicious-udfs)  
[mysql\_ansi](#mysql-ansi)  
[mysql\_audit\_log](#mysql-audit-log)  
[mysql\_ft\_max\_word\_len](#fulltext-maximum-word-length)  
[mysql\_ft\_min\_word\_len](##fulltext-minimum-word-length)  
[mysql\_ft\_query\_expansion\_limit](#fulltext-query-expansion-limit)  
[mysql\_ft\_stopword\_file](#fulltext-stopword-file) 

### MySQL Plugins
This allows you to specify what MySQL plugins to load into your database service. The following plugins are available:

- archive
- blackhole
- federated
- audit_log

#### mysql_plugins
```yaml
database1:
  mysql_plugins:
    - federated
```

**Note:** When using the `audit_log` plugin, you must also specify a [`mysql_audit_log`](#mysql-audit-log) setting in your Boxfile.

### MySQL Event Scheduler
This enables or disables [MySQL's event scheduler](http://dev.mysql.com/doc/refman/5.6/en/events-overview.html).

**Note:** Even though `mysql_event_scheduler`'s default is "Off", it can still be enabled through a SQL query in your database. Setting it to "On" just enables the event scheduler when the database is provisioned.

#### mysql\_event\_scheduler
```yaml
# default setting
database1:
  mysql_event_scheduler: 'Off'
```

### MySQL Max Connections
View [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_max_connections) for definition and configuration options.

#### mysql\_max\_connections
```yaml
# default setting
database1:
  mysql_max_connections: 1024
```

### MySQL Thread Stack
View [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_thread_stack) for definition and configuration options.

#### mysql\_thread\_stack
```yaml
# default setting
database1:
  mysql_thread_stack: '256K'
```

### MyISAM Recover
View [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-options.html#option_mysqld_myisam-recover-options) for definition and configuration options.

#### mysql\_myisam\_recover
```yaml
# default setting
database1:
  mysql_myisam_recover: 'DEFAULT'
```

### MySQL Max Allowed Packet
View [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_max_allowed_packet) for definition and configuration options.

#### mysql\_myisam\_recover
```yaml
# default setting
database1:
  mysql_max_allowed_packet:  '16M'
```

### MySQL Max Join Size
View [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_max_join_size) for definition and configuration options.

#### mysql\_max\_join\_size
```yaml
# default setting
database1:
  mysql_max_join_size: 9223372036854775807
```

### MySQL Table Open Cache
View [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.1/en/server-system-variables.html#sysvar_table_open_cache) for definition and configuration options.

#### mysql\_table\_open\_cache
```yaml
# default setting
database1:
  mysql_table_open_cache: 64
```

### MySQL Query Cache Limit
View [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_query_cache_limit) for definition and configuration options.

#### mysql\_query\_cache\_limit
```yaml
# default setting
database1:
  mysql_query_cache_limit: '1M'
```

### Allow Suspicious UDFs
View the [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.6/en/server-options.html#option_mysqld_allow-suspicious-udfs) for definition and configuration options.

#### mysql\_allow\_suspicious\_udfs
```yaml
# default setting
database1:
  mysql_allow_suspicious_udfs: 'Off'
```

### MySQL ANSI
View the [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.6/en/server-options.html#option_mysqld_ansi) for definition and configuration options.

#### mysql\_ansi
```yaml
# default setting
database1:
  mysql_ansi: 'Off'
```

### MySQL Audit Log
View the [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/audit-log-plugin-installation.html) for definition and configuration details. Below are the following options:

- on
- off
- force
- force\_plus\_permanent

**Note:** In order to specify a `mysql_audit_log` setting, you must also include the [`audit_log` mysql plugin](#mysql-plugins) in your Boxfile.

#### mysql\_audit\_log
```yaml
database1:
  mysql_audit_log: 'On'
  mysql_plugins:
    - audit_log
```

### FULLTEXT Maximum Word Length
View the [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_ft_max_word_len) for definition and configuration options.

### mysql\_ft\_max\_word\_len
```yaml
database1:
  mysql_ft_max_word_len: 84
```

### FULLTEXT Minimum Word Length
View the [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_ft_min_word_len) for definition and configuration options.

#### mysql\_ft\_min\_word\_len
```yaml
database1:
  mysql_ft_min_word_len: 4
```

### FULLTEXT Query Expansion Limit
View the [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_ft_query_expansion_limit) for definition and configuration options.

#### mysql\_ft\_query\_expansion\_limit
```yaml
database1:
  mysql_ft_query_expansion_limit: 20
```

### FULLTEXT Stopword File
View the [dev.mysql.com documentation](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_ft_stopword_file) for definition and configuration options.

#### mysql\_ft\_stopword\_file
```yaml
database1:
  mysql_ft_stopword_file: ' '
```
