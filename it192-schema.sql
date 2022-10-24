CREATE DATABASE `adoption_system`;

USE `adoption_system`;

CREATE TABLE `Dogs` (
	`dog_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256),
	`gender` VARCHAR(256),
	`age` VARCHAR(256),
	`size` VARCHAR(256),
	`color` VARCHAR(256),
	`images` TEXT,
	`adjectives` VARCHAR(2560),
	`story` VARCHAR(2560),
	`has_owner` BOOLEAN,
	PRIMARY KEY (`dog_id`)
);

CREATE TABLE `Adoptions` (
	`adoption_id` INT NOT NULL AUTO_INCREMENT,
	`dog_id` INT,
	`status` VARCHAR(256),
	`adopter_name` VARCHAR(256),
	`adopter_contact` VARCHAR(256),
	`adopter_email` VARCHAR(256),
	`adopter_address` VARCHAR(256),
	PRIMARY KEY (`adoption_id`)
);

CREATE TABLE `Users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`user_name` VARCHAR(256),
	`user_email` VARCHAR(256),
	`user_password` VARCHAR(256),
	PRIMARY KEY (`user_id`)
);

INSERT INTO Users (user_name,user_email,user_password)
VALUES ('admin', 'admin@gmail.com', 'password');

INSERT INTO Dogs (name,gender,age,size,color,adjectives,story,has_owner)
VALUES ('Dog','male', '1', 'large','brown','loyal,loving,loud','Dog abandoned by owners',false);

INSERT INTO Dogs (name,gender,age,size,color,adjectives,story,has_owner)
VALUES ('Aso','female', '3', 'small','black','loyal,loving,loud','Dog abandoned by owners',true);

INSERT INTO Adoptions (dog_id,status,adopter_name,adopter_contact,adopter_email,adopter_address)
VALUES (2, 'accepted', 'John DOe','092890182912','john_doe@gmail.com','Blk 1 lot 2 John Doe St.');
