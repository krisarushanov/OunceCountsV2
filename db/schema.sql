DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
USE users;


CREATE TABLE IF NOT EXISTS `Users` (
  'id' Int AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(32) NOT NULL,
  `lastname` VARCHAR(32) NOT NULL,
  `phonenumber` INTEGER (10) NOT NULL,
  `username` VARCHAR(32) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `authenticated` BOOLEAN DEFAULT false,
  `email` VARCHAR(32), 
  PRIMARY KEY ( `id` ),
  FOREIGN KEY ( `emergency_contactid` ) REFERENCES `emergency_contact` ( `id` )
  );

CREATE TABLE IF NOT EXISTS `Emergency_contact` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `first_name` VARCHAR(32) NOT NULL,
  `last_name` VARCHAR(32) NOT NULL,
  `authenticated` BOOLEAN DEFAULT false,
  `phone_number` INTEGER(32),
  PRIMARY KEY ( `id` ) 
);

CREATE TABLE IF NOT EXISTS `backpack` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `nickname` VARCHAR(32) NOT NULL,
  PRIMARY KEY ( `id` ),
  FOREIGN KEY ( `Usersid` ) REFERENCES `Users` ( `id` )
  );

CREATE TABLE IF NOT EXISTS `Wolfpack` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `wolfpack_name` VARCHAR(32) NOT NULL,
  PRIMARY KEY ( `id` ),
  FOREIGN KEY ( `planned_adventuresid` ) REFERENCES `planned_adventures` ( `id` )
  );

CREATE TABLE IF NOT EXISTS `Wolf_Pack_Member` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `wolfpack_name` VARCHAR(32) NOT NULL,
  PRIMARY KEY ( `id` ),
  FOREIGN KEY ( `Usersid` ) REFERENCES `Users` ( `id` ),
  FOREIGN KEY ( 'Wolfpackid') REFERENCES 'Wolfpack' ('id')
  );