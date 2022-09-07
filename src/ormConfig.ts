[
    {
      "skip": false,
      "name": "mysql",
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "admin",
      "database": "test",
      "logging": false
    },
    {
      "skip": false,
      "name": "mariadb",
      "type": "mariadb",
      "host": "localhost",
      "port": 3307,
      "username": "root",
      "password": "admin",
      "database": "test",
      "logging": false
    },
    {
      "skip": false,
      "name": "sqlite",
      "type": "sqlite",
      "database": "./temp/sqlitedb-1.db",
      "logging": false,
      "relationLoadStrategy": "join"
    },
    {
      "skip": false,
      "name": "sqlite-2",
      "type": "sqlite",
      "database": "./temp/sqlitedb-2.db",
      "logging": false,
      "relationLoadStrategy": "query"
    },
    {
      "skip": false,
      "name": "better-sqlite3",
      "type": "better-sqlite3",
      "database": "temp/better-sqlite3db.db",
      "logging": false
    },
    {
      "skip": false,
      "name": "postgres",
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "test",
      "password": "test",
      "database": "test",
      "logging": false
    },
    {
      "skip": true,
      "name": "mssql",
      "type": "mssql",
      "host": "localhost",
      "username": "sa",
      "password": "Admin12345",
      "database": "tempdb",
      "logging": false,
      "extra": {
        "trustServerCertificate": true
      }
    },
    {
      "skip": true,
      "name": "oracle",
      "type": "oracle",
      "host": "localhost",
      "username": "system",
      "password": "oracle",
      "port": 1521,
      "sid": "xe.oracle.docker",
      "logging": false
    },
    {
      "skip": false,
      "name": "cockroachdb",
      "type": "cockroachdb",
      "host": "localhost",
      "port": 26257,
      "username": "root",
      "password": "",
      "database": "defaultdb"
    },
    {
      "skip": false,
      "name": "sap",
      "type": "sap",
      "host": "192.168.56.102",
      "port": 39015,
      "username": "SYSTEM",
      "password": "MySuperHanaPwd123!",
      "database": "HXE",
      "logging": false
    },
    {
      "skip": false,
      "disabledIfNotEnabledImplicitly": true,
      "name": "mongodb",
      "type": "mongodb",
      "database": "test",
      "logging": false,
      "useNewUrlParser": true,
      "useUnifiedTopology": true
    },
    {
      "skip": true,
      "name": "aurora-mysql",
      "type": "aurora-mysql",
      "region": "us-east-1",
      "secretArn": "mysecret",
      "resourceArn": "app-dbcluster",
      "database": "app-dbcluster-mine",
      "serviceConfigOptions": {
        "maxRetries": 3
      },
      "logging": false
    },
    {
      "skip": true,
      "name": "aurora-postgres",
      "type": "aurora-postgres",
      "region": "us-east-1",
      "secretArn": "mysecret",
      "resourceArn": "app-dbcluster",
      "database": "app-dbcluster-mine",
      "serviceConfigOptions": {
        "maxRetries": 3
      },
      "logging": false
    }
  ]