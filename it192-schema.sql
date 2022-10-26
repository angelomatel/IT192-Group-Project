CREATE DATABASE `adoption_system`;

USE `adoption_system`;

CREATE TABLE
	`Dogs` (
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

CREATE TABLE
	`Adoptions` (
		`adoption_id` INT NOT NULL AUTO_INCREMENT,
		`dog_id` INT,
		`status` VARCHAR(256),
		`adopter_name` VARCHAR(256),
		`adopter_contact` VARCHAR(256),
		`adopter_email` VARCHAR(256),
		`adopter_address` VARCHAR(256),
		`adopter_reason` TEXT,
		PRIMARY KEY (`adoption_id`)
	);

-- CREATE TABLE `Users` (
-- 	`user_id` INT NOT NULL AUTO_INCREMENT,
-- 	`user_name` VARCHAR(256),
-- 	`user_email` VARCHAR(256),
-- 	`user_password` VARCHAR(256),
-- 	PRIMARY KEY (`user_id`)
-- );
-- INSERT INTO Users (user_name,user_email,user_password)
-- VALUES ('admin', 'admin@gmail.com', 'password');
INSERT INTO
	Dogs (
		name,
		gender,
		age,
		size,
		color,
		adjectives,
		story,
		has_owner,
		images
	)
VALUES
	(
		'Barbs',
		'female',
		'8',
		'Average',
		'Light Brown with Spots',
		'loyal,loving,loud,affectionate,energetic,kid-friendly',
		'Barbie needs to be a solo dog because she is very jealous and dominant. It’s also best if the household has no small children who might mishandle her.',
		false,
		'https://paws.org.ph/wp-content/uploads/2020/12/Adopt-Barbie-1.jpg'
	);

INSERT INTO
	Dogs (
		name,
		gender,
		age,
		size,
		color,
		adjectives,
		story,
		has_owner,
		images
	)
VALUES
	(
		'Delly',
		'male',
		'5',
		'Average',
		'Brown with Dark Spots',
		'loyal,loving,loud,affectionate,energetic,kid-friendly',
		'Delro is well socialized with other canines, and has no glaring requirements or behavioral issues. She should be well suited to most families.',
		false,
		'https://paws.org.ph/wp-content/uploads/2019/08/Adopt-Delro.jpg'
	);

INSERT INTO
	Dogs (
		name,
		gender,
		age,
		size,
		color,
		adjectives,
		story,
		has_owner,
		images
	)
VALUES
	(
		'Cocoa',
		'female',
		'1',
		'Very Small',
		'Black',
		'energetic,rat,drama queen',
		'Cocoa is a portmanteau of Del Rosario Street, the location of this young lady’s rescue. Cocoa is yet another case of the way stray dogs are treated on the streets. Ignored and underfed.',
		false,
		'https://i.imgur.com/qsijFMz.jpg'
	);

INSERT INTO
	Dogs (
		name,
		gender,
		age,
		size,
		color,
		adjectives,
		story,
		has_owner,
		images
	)
VALUES
	(
		'Ben',
		'male',
		'1',
		'Medium',
		'Gold',
		'loyal,friendly,introverted',
		'Ben is a portmanteau of Del Rosario Street, the location of this young lady’s rescue. Ben is yet another case of the way stray dogs are treated on the streets. Ignored and underfed.',
		false,
		'https://i.imgur.com/Wy8AkKi.jpg'
	);

-- INSERT INTO
-- 	Adoptions (
-- 		dog_id,
-- 		status,
-- 		adopter_name,
-- 		adopter_contact,
-- 		adopter_email,
-- 		adopter_address,
-- 		adopter_reason
-- 	)
-- VALUES
-- 	(
-- 		1,
-- 		'accepted',
-- 		'John Doeers',
-- 		'092890182912',
-- 		'john_doe@gmail.com',
-- 		'Blk 1 lot 2 John Doe St.',
-- 		'I badly want to have a dog plsplspls'
-- 	);
-- INSERT INTO
-- 	Adoptions (
-- 		dog_id,
-- 		status,
-- 		adopter_name,
-- 		adopter_contact,
-- 		adopter_email,
-- 		adopter_address,
-- 		adopter_reason
-- 	)
-- VALUES
-- 	(
-- 		1,
-- 		'pending',
-- 		'Johnny',
-- 		'092890182912',
-- 		'john_doe@gmail.com',
-- 		'Blk 1 lot 2 John Doe St.',
-- 		'I badly want to have a dog plsplsspls'
-- 	);