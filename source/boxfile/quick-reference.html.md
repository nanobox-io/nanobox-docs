---
title: Boxfile Quick Reference
---

This doc is meant to act as a quick reference to all available base Boxfile Settings for code and data services. These settings are those made available by Nanobox, but [Engines](/getting-started/engines/) may make more available. Those config options made available by engines should be documented in the engine's documentation.

#### Quick Links
[Env Settings](#env-settings-in-the-boxfile)  
[Build Settings](#build-settings-in-the-boxfile)  
[Console Settings](#console-settings-in-the-boxfile)

***Code Services***  
[Web Settings](#web-settings-in-the-boxfile)  
[Worker Settings](#worker-settings-in-the-boxfile)  
[TCP Settings](#tcp-settings-in-the-boxfile)  
[UDP Settings](#udp-settings-in-the-boxfile)  

***Data Services***  
[MySQL, Percona, & MariaDB Settings](#mysql-percona-amp-mariadb-boxfile-settings)  
[PostgreSQL Settings](#postgresql-settings-in-the-boxfile)  
[MongoDB Settings](#mongodb-settings-in-the-boxfile)  
[Redis Settings](#redis-settings-in-the-boxfile)  
[Memcached Settings](#memcached-settings-in-the-boxfile)  
[NFS Settings](#nfs-settings-in-the-boxfile)  

---

### Env Settings in the Boxfile
```yaml
env:
  ENVIRONMENT: production
  AUTH_SALT: SStp8fP7qTpqqjUIfGbOym8MLiE7ds
```

###### Full Doc
[Boxfile env](/boxfile/env/)

---

### Build Settings in the Boxfile
```yaml
build:
  # Engine
  engine: 'my/engine'
  disable_engine_boxfile: true

  # Dependency Management
  lib_dirs:
    - vendor
    - packages
  reuse_libs: true
```

###### Full Doc
[Boxfile build](/boxfile/build/)

--- 

### Console Settings in the Boxfile
```yaml
console:
  ignore_lib_dirs: false
```

###### Full Doc
[Boxfile console](/boxfile/console/)

---

### Web Settings in the Boxfile
```yaml
web1:
  name: app-server

  # Exec
  exec: "ruby app.rb"

  # Routing
  routes:
    - 'sub:/path/'
    - '/admin/'

  # Network Storage
  network_dirs:
    nfs1:
      - path/to/directoryA
      - path/to/directoryB
    nfs2:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: "path/to/error.log"

  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"

  # Deploy Hooks
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.rb"
  before_deploy_all:
    - "scripts/cache_prime.rb"
  after_deploy:
    - "scripts/clear_cache.rb"
  after_deploy_all:
    - "scripts/local_cache_prime.rb"
```
###### Full Doc
[Web Boxfile Settings](/boxfile/code-services/web) 

--- 

### Worker Settings in the Boxfile
```yaml
worker1:
  name: background-worker

  # Exec
  exec: "ruby worker.rb"

  # Network Storage
  network_dirs:
    nfs1:
      - path/to/directoryA
      - path/to/directoryB
    nfs2:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: "path/to/error.log"

  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"

  # Deploy Hooks
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.rb"
  before_deploy_all:
    - "scripts/cache_prime.rb"
  after_deploy:
    - "scripts/clear_cache.rb"
  after_deploy_all:
    - "scripts/local_cache_prime.rb"
```
###### Full Doc
[Worker Boxfile Settings](/boxfile/code-services/worker)  

---

### TCP Settings in the Boxfile
```yaml
tcp1:
  name: mail-server

  # Exec
  exec: "ruby smtp.rb"

  # Port Mapping
  ports:
    - 25:3000

  # Network Storage
  network_dirs:
    nfs1:
      - path/to/directoryA
      - path/to/directoryB
    nfs2:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: "path/to/error.log"

  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"

  # Deploy Hooks
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.rb"
  before_deploy_all:
    - "scripts/cache_prime.rb"
  after_deploy:
    - "scripts/clear_cache.rb"
  after_deploy_all:
    - "scripts/local_cache_prime.rb"
```

###### Full Doc
[TCP Boxfile Settings](/boxfile/code-services/tcp)

---

### UDP Settings in the Boxfile
```yaml
udp1:
  name: dns-server

  # Exec
  exec: "ruby server.rb"

  # Port Mapping
  ports:
    - 53:3000

  # Network Storage
  network_dirs:
    nfs1:
      - path/to/directoryA
      - path/to/directoryB
    nfs2:
      - path/to/directoryC

  # Nonpersistent Writable Dirs
  nonpersistent_writable_dirs:
    - path/to/dirA
    - path/to/dirB

  # Custom Logs
  log_watch:
    app[error]: "path/to/error.log"

  # Cron
  cron:
    - "0 0 * * *": "rm -rf app/cache/*"
    - "*/3 */2 1-3 2,6,7 2": "echo 'im a little teapot'"

  # Deploy Hooks
  deploy_hook_timeout: 600
  before_deploy:
    - "scripts/migrate_db.rb"
  before_deploy_all:
    - "scripts/cache_prime.rb"
  after_deploy:
    - "scripts/clear_cache.rb"
  after_deploy_all:
    - "scripts/local_cache_prime.rb"
```

###### Full Doc
[UDP Boxfile Settings](/boxfile/code-services/udp)

---

### MySQL, Percona, & MariaDB Boxfile Settings
```yaml
# The service ID defines the database type.
# 'mysql1' will create a MySQL database.
# 'percona1' will create a Percona database
# 'mariadb1' will create a MariaDB database

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
###### Full Docs
[MySQL Boxfile Settings](/boxfile/data-services/mysql/)  
[Percona Boxfile Settings](/boxfile/data-services/percona/)  
[MariaDB Boxfile Settings](/boxfile/data-services/mariadb/)  

--- 

### PostgreSQL Settings in the Boxfile
```yaml
postgresql1:
  version: 9.4
  stability: stable
```
###### Full Doc
[PostgreSQL Boxfile Settings](/boxfile/data-services/postgresql/)  

--- 

### MongoDB Settings in the Boxfile
```yaml
mongodb1:
  version: 3.0
  stability: stable
  mongodb_diaglog: 0
  mongodb_objcheck: true
  mongodb_log_verbosity: 'v'
  mongodb_directoryperdb: true
  mongodb_logappend: true
  mongodb_nojournal: false
  mongodb_noscripting: false
```
###### Full Doc
[MongoDB Boxfile Settings](/boxfile/data-services/mongodb/)

---  

### Redis Settings in the Boxfile
```yaml
redis1:
  version: 2.8
  stability: stable
  redis_tcp_keepalive: 60
  redis_databases: 16
  redis_stop_writes_on_bgsave_error: 'yes'
  redis_slave_serve_stale_data: 'yes'
  redis_slave_read_only: 'yes'
  redis_repl_ping_slave_period: 10
  redis_repl_timeout: 60
  redis_repl_disable_tcp_nodelay: 'no'
  redis_max_clients: 1024
  redis_maxmemory_policy: 'volatile-lru'
  redis_maxmemory_samples: 3
  redis_appendonly: 'no'
  redis_appendfsync: 'everysec'
  redis_no_appendfsync_on_rewrite: 'no'
  redis_auto_aof_rewrite_percentage: 100
  redis_auto_aof_rewrite_min_size: '64m'
  redis_lua_time_limit: 5000
  redis_slowlog_log_slower_than: 0
  redis_slowlog_max_len: 128
  # Advanced Configs
  redis_hash_max_ziplist_entries: 512
  redis_hash_max_ziplist_value: 64
  redis_list_max_ziplist_entries: 512
  redis_list_max_ziplist_value: 64
  redis_set_max_intset_entries: 512
  redis_zset_max_ziplist_entries: 12
  redis_zset_max_ziplist_value: 64
  redis_activerehashing: 'yes'
  redis_hz: 10
  redis_aof_rewrite_incremental_fsync: 'yes'
```
###### Full Doc
[Redis Boxfile Settings](/boxfile/data-services/redis/)  

---

### Memcached Settings in the Boxfile
```yaml
memcached1:
  version: 1.4
  stability: stable
  memcached_return_error_on_memory_exhausted: false
  memcached_max_connections: 1024
  memcached_chunk_size_growth_factor: 1.25
  memcached_minimum_allocated_space: 48
  memcached_maximum_requests_per_event: 20
  memcached_disable_cas: false
  memcached_max_backlog: 1024
  memcached_binding_protocol: 'auto'
```
###### Full Doc
[Memcached Boxfile Settings](/boxfile/data-services/memcached/)  

---

### NFS Settings in the Boxfile
```yaml
nfs1:
  name: file-storage

web1:
  network_dirs:
    nfs1:
      - path/to/dirA
```
###### Full Docs
[NFS Boxfile Settings](/boxfile/data-services/nfs/)  
[Network Storage](/getting-started/network-storage/)