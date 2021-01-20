#!/bin/bash

mkdir -p /var/run/mysqld
chown mysql:mysql /var/run/mysqld
/usr/bin/mysqld_safe > /dev/null 2>&1 &
sleep 10
mysql < /root/create.sql
/usr/local/tomcat/bin/catalina.sh run
