---
title: MongoDB Boxfile Settings
---

#### Overview of MongoDB Boxfile Settings
```yaml
mongodb1:
  version: 3.0
  stability: production
  mongodb_diaglog: 0
  mongodb_objcheck: true
  mongodb_log_verbosity: 'v'
  mongodb_directoryperdb: true
  mongodb_logappend: true
  mongodb_nojournal: false
  mongodb_noscripting: false
```

## Version & Stability
### Version
When configuring a MongoDB service in your Boxfile, you can specify the version to use into your database service. The following version(s) are available:

- 2.6
- 3.0

The specific patch level is determined by the "stability" config.

**Note:** Due to version compatibility constraints, MongoDB versions cannot be changed after the service is created. To use a different version, you'll have to create a new MongoDB service and manually migrate data.

### Stability
The `stability` config allows you to specify which patch level of your MongoDB version you would like to use. There are three stability options:

- alpha
- beta
- production

###### Alpha & Beta Versions
Alpha and beta versions are for bleeding edge developers who want nothing but the latest releases of services. These are "builds-in-progress," and using them is done at your own risk. Stabilities do not represent the stability of the actual project, but rather the "image" provided by Nanobox.

#### mongodb version & stability
```yaml
# default setting
mongodb1:
  version: 3.0
  stability: production
```

## MongoDB Configuration Options
###### Quick Links
[mongodb\_diaglog](#diaglog)  
[mongodb\_objcheck](#objcheck)  
[mongodb\_log\_verbosity](#log-verbosity)  
[mongodb\_directoryperdb](#directoryperdb)  
[mongodb\_logappend](#logappend)  
[mongodb\_nojournal](#nojournal)  
[mongodb\_noscripting](#noscripting)  

### Diaglog
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#diaglog) for details and configuration options.

#### mongodb\_diaglog
```yaml
#default setting
mongodb1:
  mongodb_diaglog: 0
```

### ObjCheck
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#diaglog) for details and configuration options.

#### mongodb\_objcheck
```yaml
#default setting
mongodb1:
  mongodb_objcheck: true
```

### Log Verbosity
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#verbose) for details and configuration options.

#### mongodb\_log\_verbosity
```yaml
mongodb1:
  mongodb_log_verbosity: 'v'
```

### DirectoryPerDB
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#directoryperdb) for details and configuration options.

#### mongodb\_directoryperdb
```yaml
#default setting
mongodb1:
  mongodb_directoryperdb: true
```

### LogAppend
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#logappend) for details and configuration options.

#### mongodb\_logappend
```yaml
#default setting
mongodb1:
  mongodb_logappend: true
```

### NoJournal
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#nojournal) for details and configuration options.

#### mongodb\_nojournal
```yaml
#default setting
mongodb1:
  mongodb_nojournal: false
```

### NoScripting
View the [MongoDB documentation](http://docs.mongodb.org/manual/reference/configuration-options/#noscripting) for details and configuration options.

#### mongodb\_noscripting
```yaml
#default setting
mongodb1:
  mongodb_noscripting: false
```
