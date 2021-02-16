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
  CREATE TABLE `Wolf_Pack_Backpack`
(
    `wp_backpack_id` INTEGER NOT NULL AUTO_INCREMENT,
    `wolf_pack_id` VARCHAR(200) NOT NULL,
    `type_of_adventure_id` VARCHAR(200) NOT NULL,
    PRIMARY KEY (`wp_backpack_id`),
    FOREIGN KEY (`wolf_pack_id`) REFERENCES `Wolfpack` (`id`),
    FOREIGN KEY (`type_of_adventure_id`) REFERENCES `type_of_adventure` (`id`)

);

CREATE TABLE IF NOT EXISTS `Gear`
(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `weight` NUMERIC(500) NOT NULL,
    `brand` VARCHAR(100) NOT NULL,
    PRIMARY KEY ( `id` )

);

CREATE TABLE `Wolfpack_Backpack_Item`
(
    `wp_backpack_item_id` INTEGER  AUTO_INCREMENT NOT NULL,
    `wp_backpack_id` VARCHAR(200) NOT NULL,
    `gear_id` INTEGER NOT NULL,
    `accounted_for` TINYINT(1, 0),
    PRIMARY KEY (`wp_backpack_item`),
    FOREIGN KEY (`wp_backpack_id`) REFERENCES `Wolf_Pack_Backpack` ( `id`),
    FOREIGN KEY (`gearId`) REFERENCES `Gear` (`id`)
);

CREATE TABLE `Planned_Adventures`
(
    `planned_adventures_id` INTEGER AUTO_INCREMENT NOT NULL,
    `wolf_pack_id` VARCHAR(200) NOT NULL,
    `type_of_adventure_id`  VARCHAR(200) NOT NULL,
    `location_of_adventure` VARCHAR(200) NOT NULL,
    PRIMARY KEY (`planned_adventures_id`),
    FOREIGN KEY (`wolf_pack_id`) REFERENCES `Wolf_Pack` ( `id` ),
    FOREIGN KEY (`type_of_adventure_id`) REFERENCES `Type_Of_Adventure` ( `id` )
);

CREATE TABLE IF NOT EXISTS `Type_Of_Adventure`
(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `type_name` VARCHAR(200) NOT NULL,
    PRIMARY KEY ( `id` )

);