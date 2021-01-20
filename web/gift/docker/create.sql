drop database if exists santa_member;
create database santa_member;

drop user if exists yunsanta;
create user yunsanta identified by '44BB61CE450589FE6C214338B21D99C89A955E3D6EDCE0939901AC049A1104E5';
grant all privileges on santa_member.* to `yunsanta`;

use `santa_member`;
drop table if exists `member`;
create table `member`(`name` char(20) not null, `pwd` char(20) not null);

drop table if exists `board`;
create table `board`(`num` int not null, `title` char(20) not null, `name` char(20) not null, `content` varchar(2048) not null);

alter user root identified with mysql_native_password by '5bcdef8hijkl';
flush privileges;
