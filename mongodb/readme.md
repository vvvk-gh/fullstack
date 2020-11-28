# Mongo DB 

## Installation (Ubuntu) 

```shell
  sudo apt update 
  sudo apt-get install mongodb
  mongod --version
```

## Service Up , Down

```shell
    sudo service mongodb             # status for checking the status of your database.
    sudo service mongodb             # start to start running your database.
    sudo service mongodb stop        # to stop running your database.
```

## Run database in project directory

```shell
    
    mkdir data   # inside project directory
    
    mongod --dbpath=/data

    After running the above the following files will be created 

    ./data/
    ├── WiredTiger
    ├── WiredTiger.lock
    ├── WiredTiger.turtle
    ├── WiredTiger.wt
    ├── WiredTigerLAS.wt
    ├── _mdb_catalog.wt
    ├── collection-0-1071903423710136296.wt
    ├── collection-2-1071903423710136296.wt
    ├── collection-4-1071903423710136296.wt
    ├── diagnostic.data
    │   ├── metrics.2020-11-28T11-33-14Z-00000
    │   └── metrics.interim
    ├── index-1-1071903423710136296.wt
    ├── index-3-1071903423710136296.wt
    ├── index-5-1071903423710136296.wt
    ├── index-6-1071903423710136296.wt
    ├── journal
    │   ├── WiredTigerLog.0000000001
    │   ├── WiredTigerPreplog.0000000001
    │   └── WiredTigerPreplog.0000000002
    ├── mongod.lock
    ├── sizeStorer.wt
    └── storage.bson

```


