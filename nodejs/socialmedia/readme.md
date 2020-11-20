# Social media Project 

### Sql Service 

```shell
sudo service mysql start
mysql -u root -p
Enter Password : 
```
### Create Database , User  & Grant Privileges

```mysql 
create database socialmediadb;  # create a database
use socialmediadb;

create user socialuser identified by 'mediapass';
grant all privileges on socialmediadb.* to 'socialuser';
flush privileges;

```

### Project Structure

```shell
src
├── controllers         # functions to connect routes to db operations
├── db                  # defining and modeling db
├── public              # html/css/js static frontend
└── routes              # # express middlewares (route wise)

```
