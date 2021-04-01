CREATE DATABASE test_task;
CREATE TABLE users(id serial, username varchar(50), paswd varchar(200));
CREATE TABLE slots(id serial, value char(50), user_id int);