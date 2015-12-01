---
title: Memcached Boxfile Settings
---

#### Overview of Memcached Boxfile Settings
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

## Version & Stability
### Version
When configuring a Memcached service in your Boxfile, you can specify which version to use. The following version(s) are available:

- 1.4

The specific patch level is determined by the "stability" config.

**Note:** Due to version compatibility constraints, memcached versions cannot be changed after the service is created. To use a different version, you'll have to create a new Memcached service.

### Stability
The `stability` config allows you to specify which patch level of your Memcached version you would like to use. There are two stability options:

- beta
- stable

###### Beta Versions
Beta versions are for bleeding edge developers who want nothing but the latest releases of services. These are "builds-in-progress," and using them is done at your own risk. Stabilities do not represent the stability of the actual project, but rather the "image" provided by Nanobox.

#### version & stability
```yaml
# default setting
memcached1:
  type: memcached
  version: 1.4
  stability: stable
```

## Memcached Configuration Options
###### Quick Links
[memcached\_return\_error\_on\_memory\_exhausted](#return-error-on-memory-exhausted)  
[memcached\_max\_connections](#max-connections)  
[memcached\_chunk\_size\_growth\_factor](#chunk-size-growth-factor)  
[memcached\_minimum\_allocated\_space](#minimum-allocated-space)  
[memcached\_maximum\_requests\_per\_event](#maximum-requests-per-event)  
[memcached\_disable\_cas](#disable-cas)  
[memcached\_max\_backlog](#max-backlog)  
[memcached\_binding\_protocol](#binding-protocol)  

### Return Error on Memory Exhausted
This allows you to have memcached return an error when memory is exhausted rather than removing items.

#### memcached\_return\_error\_on\_memory\_exhausted
```yaml
#default setting
memcached1:
  memcached_return_error_on_memory_exhausted: false
```

### Max Connections
Sets the limit for simultaneous connections.

#### memcached\_max\_connections
```yaml
#default setting
memcached1:
  memcached_max_connections: 1024
```

### Chunk Size Growth Factor
Specifies the chunk size growth factor.

#### memcached\_chunk\_size\_growth\_factor
```yaml
#default setting
memcached1:
  memcached_chunk_size_growth_factor: 1.25
```

### Minimum Allocated Space
Sets the minimum space allocated for key+value+flags.

#### memcached\_minimum\_allocated\_space
```yaml
#default setting
memcached1:
  memcached_minimum_allocated_space: 48
```

### Maximum Requests Per Event
Sets the maximum number of requests per event and limits the number of requests processed for a given connection to prevent starvation.

#### memcached\_maximum\_requests\_per\_event
```yaml
#default setting
memcached1:
  memcached_maximum_requests_per_event: 20
```

### Disable CAS
Allows you to disable the use of [CAS](https://code.google.com/p/memcached/wiki/NewCommands#cas).

#### memcached\_disable\_cas
```yaml
#default setting
memcached1:
  memcached_disable_cas: false
```

### Max Backlog
Sets the backlog queue limit.

#### memcached\_max\_backlog
```yaml
#default setting
memcached1:
  memcached_max_backlog: 1024
```

### Binding Protocol
Allows you to set the binding protocol. The following are available:

- auto
- ascii
- binary

#### memcached\_binding\_protocol
```yaml
#default setting
memcached1:
  memcached_binding_protocol: 'auto'
```