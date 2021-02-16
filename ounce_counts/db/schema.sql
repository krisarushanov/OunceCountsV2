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
