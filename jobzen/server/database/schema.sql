-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema jobzen
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jobzen
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jobzen` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `jobzen` ;

-- -----------------------------------------------------
-- Table `jobzen`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `image` LONGTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`freelacercategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`freelacercategories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(255) NOT NULL,
  `image` LONGTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`freelancers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`freelancers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NULL DEFAULT NULL,
  `phone` INT NULL DEFAULT '0',
  `image` LONGTEXT NULL DEFAULT NULL,
  `skills` LONGTEXT NULL DEFAULT NULL,
  `aboutMe` LONGTEXT NULL DEFAULT NULL,
  `experience` LONGTEXT NULL DEFAULT NULL,
  `jobtitle` LONGTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `FreelancerCategoriesId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FreelancerCategoriesId` (`FreelancerCategoriesId` ASC) VISIBLE,
  CONSTRAINT `freelancers_ibfk_1`
    FOREIGN KEY (`FreelancerCategoriesId`)
    REFERENCES `jobzen`.`freelacercategories` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`contact_freelancers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`contact_freelancers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `body` LONGTEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `freelancerId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `freelancerId` (`freelancerId` ASC) VISIBLE,
  CONSTRAINT `contact_freelancers_ibfk_1`
    FOREIGN KEY (`freelancerId`)
    REFERENCES `jobzen`.`freelancers` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`jobowners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`jobowners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NULL DEFAULT NULL,
  `phone` INT NULL DEFAULT '0',
  `image` LONGTEXT NOT NULL,
  `rating` FLOAT NULL DEFAULT '2.5',
  `description` LONGTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`contact_jobowners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`contact_jobowners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `body` LONGTEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `jobownerId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `jobownerId` (`jobownerId` ASC) VISIBLE,
  CONSTRAINT `contact_jobowners_ibfk_1`
    FOREIGN KEY (`jobownerId`)
    REFERENCES `jobzen`.`jobowners` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `reply` TEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`freelancer_has_manycategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`freelancer_has_manycategories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`freelancermessages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`freelancermessages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `body` LONGTEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `sender` INT NULL DEFAULT NULL,
  `reciever` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `sender` (`sender` ASC) VISIBLE,
  INDEX `reciever` (`reciever` ASC) VISIBLE,
  CONSTRAINT `freelancermessages_ibfk_1`
    FOREIGN KEY (`sender`)
    REFERENCES `jobzen`.`freelancers` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `freelancermessages_ibfk_2`
    FOREIGN KEY (`reciever`)
    REFERENCES `jobzen`.`jobowners` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`jobcategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`jobcategories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(255) NOT NULL,
  `image` LONGTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`jobs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`jobs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `jobtitle` VARCHAR(255) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `budget` INT NOT NULL DEFAULT '0',
  `image` LONGTEXT NULL DEFAULT NULL,
  `role` LONGTEXT NULL DEFAULT NULL,
  `description` LONGTEXT NULL DEFAULT NULL,
  `qualification` LONGTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `jobOwnerId` INT NULL DEFAULT NULL,
  `jobCategoryId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `jobOwnerId` (`jobOwnerId` ASC) VISIBLE,
  INDEX `jobCategoryId` (`jobCategoryId` ASC) VISIBLE,
  CONSTRAINT `jobs_ibfk_1`
    FOREIGN KEY (`jobOwnerId`)
    REFERENCES `jobzen`.`jobowners` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `jobs_ibfk_2`
    FOREIGN KEY (`jobCategoryId`)
    REFERENCES `jobzen`.`jobcategories` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`job_has_freelancers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`job_has_freelancers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `states` TINYINT(1) NULL DEFAULT '0',
  `completed` TINYINT(1) NULL DEFAULT '0',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `jobId` INT NULL DEFAULT NULL,
  `freelancerId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `jobId` (`jobId` ASC) VISIBLE,
  INDEX `freelancerId` (`freelancerId` ASC) VISIBLE,
  CONSTRAINT `job_has_freelancers_ibfk_1`
    FOREIGN KEY (`jobId`)
    REFERENCES `jobzen`.`jobs` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `job_has_freelancers_ibfk_2`
    FOREIGN KEY (`freelancerId`)
    REFERENCES `jobzen`.`freelancers` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`jobownermessages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`jobownermessages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `body` LONGTEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `sender` INT NULL DEFAULT NULL,
  `reciever` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `sender` (`sender` ASC) VISIBLE,
  INDEX `reciever` (`reciever` ASC) VISIBLE,
  CONSTRAINT `jobownermessages_ibfk_1`
    FOREIGN KEY (`sender`)
    REFERENCES `jobzen`.`jobowners` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `jobownermessages_ibfk_2`
    FOREIGN KEY (`reciever`)
    REFERENCES `jobzen`.`freelancers` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jobzen`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jobzen`.`reviews` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `jobHasFreelancerId` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `jobHasFreelancerId` (`jobHasFreelancerId` ASC) VISIBLE,
  CONSTRAINT `reviews_ibfk_1`
    FOREIGN KEY (`jobHasFreelancerId`)
    REFERENCES `jobzen`.`job_has_freelancers` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
