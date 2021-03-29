CREATE DATABASE test_task;
CREATE TABLE users(id serial, username varchar(50), paswd varchar(200));
CREATE TABLE slots(id serial, value bigint, user_id int);