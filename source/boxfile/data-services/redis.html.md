---
title: Redis Boxfile Settings
---

#### Overview of Redis Boxfile Settings
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

## Version & Stability
### Version
When configuring a Redis service in your Boxfile, can specify which version of Redis to use. The following version(s) are available:

- 2.8
- 3.0

The specific patch level is determined by the "stability" config.

**Note:** Due to version compatibility constraints, Redis versions cannot be changed after the service is created. To use a different version, you'll have to create a new Redis service.

### Stability
The `stability` config allows you to specify which patch level of your Redis version you would like to use. There are two stability options:

- beta
- stable

###### Beta Versions
Beta versions are for bleeding edge developers who want nothing but the latest releases of services. These are "builds-in-progress," and using them is done at your own risk. Stabilities do not represent the stability of the actual project, but rather the "image" provided by Nanobox.

#### version & stability
```yaml
# default setting
redis1:
  type: redis
  version: 3.0
  stability: stable
```

## Redis Configuration Options
###### Quick Links
[redis\_tcp\_keepalive](#tcp-keepalive)  
[redis\_databases](#databases)  
[redis\_stop\_writes\_on\_bgsave\_error](#stop-writes-on-bgsave-error)  
[redis\_slave\_serve\_stale\_data](#slave-serve-stale-data)  
[redis\_slave\_read\_only](#slave-read-only)  
[redis\_repl\_ping\_slave\_period](#repl-ping-slave-period)  
[redis\_repl\_timeout](#repl-timeout)  
[redis\_repl\_disable\_tcp\_nodelay](#repl-disable-tcp-nodelay)  
[redis\_max\_clients](#max-clients)  
[redis\_maxmemory\_policy](#maxmemory-policy)  
[redis\_maxmemory\_samples](#maxmemory-samples)  
[redis\_appendonly](#appendonly)  
[redis\_appendfsync](#appendfsync)  
[redis\_no\_appendfsync\_on\_rewrite](#no-appendfsync-on-rewrite)  
[redis\_auto\_aof\_rewrite\_percentage](#auto-aof-rewrite-percentage)  
[redis\_auto\_aof\_rewrite\_min\_size](#auto-aof-rewrite-min-size)  
[redis\_lua\_time\_limit](#lua-time-limit)  
[redis\_slowlog\_log\_slower\_than](#slowlog-log-slower-than)  
[redis\_slowlog\_max\_len](#slowlog-max-length)  

Advanced Configs  
[redis\_hash\_max\_ziplist\_entries](#hash-max-ziplist-entries)  
[redis\_hash\_max\_ziplist\_value](#hash-max-ziplist-value)  
[redis\_list\_max\_ziplist\_entries](#list-max-ziplist-entries)  
[redis\_list\_max\_ziplist\_value](#list-max-ziplist-value)  
[redis\_set\_max\_intset\_entries](#set-max-intset-entries)  
[redis\_zset\_max\_ziplist\_entries](#zset-max-ziplist-entries)  
[redis\_zset\_max\_ziplist\_value](#zset-max-ziplist-values)  
[redis\_activerehashing](#activerehashing)  
[redis\_hz](#redis-quot-hz-quot)  
[redis\_aof\_rewrite\_incremental\_fsync](#aof-rewrite-incremental-fsync)  


### TCP Keepalive
If non-zero, use SO_KEEPALIVE to send TCP ACKs to clients in absence of communication. This is useful for two reasons:

1. Detect dead peers.
2. Take the connection alive from the point of view of network equipment in the middle.

#### redis\_tcp\_keepalive
```yaml
# default setting
redis1:
  redis_tcp_keepalive: 60
```

### Databases
Sets the number of databases.

#### redis\_databases
```yaml
# default setting
redis1:
  redis_databases: 16
```

### Stop Writes on BGSave Error
By default Redis will stop accepting writes if RDB snapshots are enabled (at least one save point) and the latest background save failed. This will make the user aware (in an hard way) that data is not persisting on disk properly, otherwise chances are that no one will notice and some disaster will happen.

If the background saving process will start working again Redis will automatically allow writes again.

However if you have setup your proper monitoring of the Redis server and persistence, you may want to disable this feature so that Redis will continue to work as usually even if there are problems with disk, permissions, and so forth.

#### redis\_stop\_writes\_on\_bgsave\_error
```yaml
# default setting
redis1:
  redis_stop_writes_on_bgsave_error: 'yes'
```

### Slave Serve Stale Data
When a slave loses its connection with the master, or when the replication is still in progress, the slave can act in two different ways:

1. If slave-serve-stale-data is set to 'yes' the slave will still reply to client requests, possibly with out of date data, or the data set may just be empty if this is the first synchronization.

2. If slave-serve-stale-data is set to 'no' the slave will reply with an error "SYNC with master in progress" to all the kind of commands but to INFO and SLAVEOF.

#### redis\_slave\_serve\_stale\_data
```yaml
# default setting
redis1:
  redis_slave_serve_stale_data: 'yes'
```

### Slave Read-Only
You can configure a slave instance to accept writes or not. Writing against a slave instance may be useful to store some ephemeral data (because data written on a slave will be easily deleted after resync with the master) but may also cause problems if clients are writing to it because of a misconfiguration.

#### redis\_slave\_read\_only
```yaml
# default setting
redis1:
  redis_slave_read_only: 'yes'
```

### Repl Ping Slave Period
Slaves send PINGs to server in a predefined interval. It's possible to change this interval.

#### redis\_repl\_ping\_slave\_period
```yaml
# default setting
redis1:
  redis_repl_ping_slave_period: 10
```

### Repl Timeout
The following option sets a timeout for both Bulk transfer I/O timeout and master data or ping response timeout. The default value is 60 seconds. It is important to make sure that this value is greater than the value specified for [`redis_repl_ping_slave_period`](#repl-ping-slave-period) otherwise a timeout will be detected every time there is low traffic between the master and the slave.

#### redis\_repl\_timeout
```yaml
# default setting
redis1:
  redis_repl_timeout: 60
```

### Repl Disable TCP NoDelay
Toggles TCP_NODELAY on the slave socket after SYNC. If you select "yes" Redis will use a smaller number of TCP packets and less bandwidth to send data to slaves. But this can add a delay for the data to appear on the slave side. If you select "no" the delay for data to appear on the slave side will be reduced but more bandwidth will be used for replication.

#### redis\_repl\_disable\_tcp\_nodelay
```yaml
# default setting
redis1:
  redis_repl_disable_tcp_nodelay: 'no'
```

### Max Clients
Set the max number of clients connected at the same time. Once the limit is reached Redis will close all the new connections sending an error 'max number of clients reached'.

#### redis\_max\_clients
```yaml
# default setting
redis1:
  redis_max_clients: 1024
```

### MaxMemory Policy
Defines how Redis will select what to remove when maxmemory is reached. You can select among five behaviors:

- **volatile-lru** - remove the key with an expire set using an LRU algorithm
- **allkeys-lru** - remove any key accordingly to the LRU algorithm
- **volatile-random** - remove a random key with an expire set
- **allkeys-random** - remove a random key, any key
- **volatile-ttl** - remove the key with the nearest expire time (minor TTL)
- **noeviction** - don't expire at all, just return an error on write operations

#### redis\_maxmemory\_policy
```yaml
# default setting
redis1:
  redis_maxmemory_policy: 'volatile-lru'
```

### MaxMemory Samples
LRU and minimal TTL algorithms are not precise algorithms but approximated algorithms (in order to save memory), so you can select as well the sample size to check. For instance for default Redis will check three keys and pick the one that was used less recently, you can change the sample size using the following configuration directive.

#### redis\_maxmemory\_samples
```yaml
# default setting
redis1:
  redis_maxmemory_samples: 3
```

### AppendOnly

By default Redis asynchronously dumps the dataset on disk. This mode is good enough in many applications, but an issue with the Redis process or a power outage may result into a few minutes of writes lost (depending on the configured save points).

The Append Only File is an alternative persistence mode that provides much better durability. For instance, using the default data [fsync policy](#appendfsync), Redis can lose just one second of writes in a dramatic event like a server power outage, or a single write if something wrong with the Redis process itself happens, but the operating system is still running correctly.

AOF and RDB persistence can be enabled at the same time without problems. If the AOF is enabled on startup Redis will load the AOF, that is the file with the better durability guarantees. Please check [Redis Persistence Documentation](http://redis.io/topics/persistence) for more information.

#### redis\_appendonly
```yaml
# default setting
redis1:
  redis_appendonly: 'no'
```

### AppendFSync
The fsync() call tells the Operating System to actually write data on disk instead to wait for more data in the output buffer. Redis supports three different modes:

- **no** - don't fsync, just let the OS flush the data when it wants. Faster.
- **always** - fsync after every write to the append only log . Slow, Safest.
- **everysec** - fsync only one time every second. Compromise.

The default is "everysec", as that's usually the right compromise between speed and data safety. It's up to you to understand if you can relax this to "no" that will let the operating system flush the output buffer when it wants, for better performances (but if you can live with the idea of some data loss consider the default persistence mode that's snapshotting), or on the contrary, use "always" that's very slow but a bit safer than everysec.

More details in [Redis Persistence Demistified](http://antirez.com/post/redis-persistence-demystified.html).

If unsure, use "everysec".

#### redis\_appendfsync
```yaml
# default setting
redis1:
  redis_appendfsync: 'everysec'
```

### No AppendFSync on Rewrite
When the [AOF fsync](#appendfsync) policy is set to always or everysec, and a background saving process (a background save or AOF log background rewriting) is performing a lot of I/O against the disk, Redis may block too long on the fsync() call. Note that there is no fix for this currently, as even performing fsync in a different thread will block the synchronous write(2) call.

In order to mitigate this problem it's possible to use the following option that will prevent fsync() from being called in the main process while a BGSAVE or BGREWRITEAOF is in progress.

This means that while another child is saving, the durability of Redis is the same as `redis_appendfsync: 'none'`. In practical terms, this means that it is possible to lose up to 30 seconds of log in the worst scenario.

If you have latency problems turn this to "yes". Otherwise leave it as "no" that is the safest pick from the point of view of durability.

#### redis\_no\_appendfsync\_on\_rewrite
```yaml
# default setting
redis1:
  redis_no_appendfsync_on_rewrite: 'no'
```

### Auto AOF Rewrite Percentage
Redis is able to automatically rewrite the log file implicitly calling BGREWRITEAOF when the AOF log size grows by the specified percentage. Redis remembers the size of the AOF file after the latest rewrite. This base size is compared to the current size. If the current size is bigger than the specified percentage, the rewrite is triggered. Also you need to [specify a minimal size for the AOF file to be rewritten](#auto-aof-rewrite-percentage), this is useful to avoid rewriting the AOF file even if the percentage increase is reached but it is still pretty small.

Specify a percentage of zero in order to disable the automatic AOF rewrite feature.

#### redis\_auto\_aof\_rewrite\_percentage
```yaml
# default setting
redis1:
  redis_auto_aof_rewrite_percentage: 100
```

### Auto AOF Rewrite Min Size
Specifies the minimal size for the AOF file to be rewritten.

#### redis\_auto\_aof\_rewrite\_min\_size
```yaml
# default setting
redis1:
  redis_auto_aof_rewrite_min_size: '64m'
```

### Lua Time Limit
Set the Max execution time of a Lua script in milliseconds.

If the maximum execution time is reached Redis will log that a script is still in execution after the maximum allowed time and will start to reply to queries with an error.

When a long running script exceed the maximum execution time only the SCRIPT KILL and SHUTDOWN NOSAVE commands are available. The first can be used to stop a script that did not yet called write commands. The second is the only way to shut down the server in the case a write commands was already issue by the script but the user don't want to wait for the natural termination of the script.

Set it to 0 or a negative value for unlimited execution without warnings.

#### redis\_lua\_time\_limit
```yaml
# default setting
redis1:
  redis_lua_time_limit: 5000
```

### SlowLog Log Slower Than
This tells Redis what is the execution time, in microseconds, to exceed in order for the command to get logged to the [Redis Slow Log](http://redis.io/commands/slowlog).

#### redis\_slowlog\_log\_slower\_than
```yaml
# default setting
redis1:
  redis_slowlog_log_slower_than:
```

### SlowLog Max Length
This parameter sets the length of the slow log. When a new command is logged the oldest one is removed from the queue of logged commands.

#### redis\_slowlog\_max\_len
```yaml
# default setting
redis1:
  redis_slowlog_max_len: 128
```

## Advanced Redis Config

### Hash Max Ziplist Entries
Sets the max number of hash entries before they are encrypted to save space.

#### redis\_hash\_max\_ziplist\_entries
```yaml
# default setting
redis1:
  redis_hash_max_ziplist_entries: 512
```

### Hash Max Ziplist Value
Sets the max value of hash entries before they are encrypted to save space.

#### redis\_hash\_max\_ziplist\_value
```yaml
# default setting
redis1:
  redis_hash_max_ziplist_value: 64
```

### List Max Ziplist Entries
Sets the max number of list entries before they are encrypted to save space.

#### redis\_list\_max\_ziplist\_entrie
```yaml
# default setting
redis1:
  redis_list_max_ziplist_entries: 512
```

### List Max Ziplist Value
Sets the max value of list entries before they are encrypted to save space.

#### redis\_list\_max\_ziplist\_value
```yaml
# default settings
redis1:
  redis_list_max_ziplist_value: 64
```

### Set Max IntSet Entries
Sets have a special encoding in just one case: when a set is composed of just strings that happens to be integers in radix 10 in the range of 64 bit signed integers. The following configuration setting sets the limit in the size of the set in order to use this special memory saving encoding.

#### redis\_set\_max\_intset\_entries
```yaml
# default setting
redis1:
  redis_set_max_intset_entries: 512
```

### ZSet Max Ziplist Entries
Sets the maximum number of entries before a sorted set is encoded to save space.

#### redis\_zset\_max\_ziplist\_entries
```yaml
# default setting
redis1:
  redis_zset_max_ziplist_entries: 12    
```

### ZSet Max Ziplist Values
Sets the maximum value of entries before a sorted set is encoded to save space.

#### redis\_zset\_max\_ziplist\_value
```yaml
# default setting
redis1:
  redis_zset_max_ziplist_value: 64
```

### ActiveRehashing
Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in order to help rehashing the main Redis hash table (the one mapping top-level keys to values). The hash table implementation Redis uses (see dict.c) performs a lazy rehashing: the more operation you run into an hash table that is rehashing, the more rehashing "steps" are performed, so if the server is idle the rehashing is never complete and some more memory is used by the hash table.

The default is to use this millisecond 10 times every second in order to active rehashing the main dictionaries, freeing memory when possible.

If unsure: use `redis_activerehashing: 'no'` if you have hard latency requirements and it is not a good thing in your environment that Redis can reply form time to time to queries with 2 milliseconds delay.

Use `redis_activerehashing: 'yes'` if you don't have such hard requirements but want to free memory asap when possible.

#### redis\_activerehashing
```yaml
# default setting
redis1:
  redis_activerehashing: 'yes'
```

### Redis "hz"
Redis calls an internal function to perform many background tasks, like closing connections of clients in timeout, purging expired keys that are never requested, and so forth. Not all tasks are performed with the same frequency, but Redis checks for tasks to perform accordingly to the specified "hz" value.

By default "hz" is set to 10. Raising the value will use more CPU when Redis is idle, but at the same time will make Redis more responsive when there are many keys expiring at the same time, and timeouts may be handled with more precision.

The range is between 1 and 500, however a value over 100 is usually not a good idea. Most users should use the default of 10 and raise this up to 100 only in environments where very low latency is required.

#### redis\_hz
```yaml
# default setting
redis1:
  redis_hz: 10
```

### AOF Rewrite Incremental FSync
When a child rewrites the AOF file, if the following option is enabled the file will be fsync-ed every 32 MB of data generated. This is useful in order to commit the file to the disk more incrementally and avoid big latency spikes.

#### redis\_aof\_rewrite\_incremental\_fsync
```yaml
# default setting
redis1:
  redis_aof_rewrite_incremental_fsync: 'yes'
```
