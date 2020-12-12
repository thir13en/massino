# Massino


Configure your health.


### Bootstrap

#### Nx
```
npm install -g nx
yarn create nx-workspace
```

#### Docker/Postgres
Init docker postgres db:
```shell
docker pull postgres:alpine
docker run --name massino-db -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres:alpine
```
Check that is running:
```
docker ps
```
Get into the container:
```
docker exec -it massino-db bash
```
Within the image, access postgres:
```
psql -U postgres
postgres-# \du # You are the superuser now
postgres-# create database massino;
# check db
postgres=# \l
# connect to db
postgres=# \c massino
massino=# \d # Did not find any relations
```