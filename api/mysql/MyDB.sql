-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Sep 21, 2022 at 12:02 PM
-- Server version: 8.0.29
-- PHP Version: 8.0.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydatabase`
--
CREATE DATABASE IF NOT EXISTS `mydatabase` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `mydatabase`;

-- --------------------------------------------------------

--
-- Table structure for table `Articles`
--

CREATE TABLE `Articles` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(500) NOT NULL,
  `Client` varchar(100) NOT NULL,
  `Categories` enum('development','photography','design','branding') CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `content` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `Blog_post`
--

CREATE TABLE `Blog_post` (
  `ID` int NOT NULL,
  `Title` varchar(500) NOT NULL,
  `Client` text NOT NULL,
  `Categories` enum('Development','Design','Digital marketing','Photography') NOT NULL,
  `Thumbnail` mediumblob NOT NULL,
  `Text` longblob NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `ID` int NOT NULL,
  `Title` varchar(500) NOT NULL,
  `Answers` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Mail_list`
--

CREATE TABLE `Mail_list` (
  `ID` int NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Message`
--

CREATE TABLE `Message` (
  `id` int UNSIGNED NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Message` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `Teams_Table`
--

CREATE TABLE `Teams_Table` (
  `ID` int NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Job` varchar(500) NOT NULL,
  `Image` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Testimonials`
--

CREATE TABLE `Testimonials` (
  `ID` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Image` blob NOT NULL,
  `Comment` text NOT NULL,
  `User_info` varchar(100) NOT NULL,
  `Rating` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `video_src`
--

CREATE TABLE `video_src` (
  `ID` int NOT NULL,
  `Src` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Articles`
--
ALTER TABLE `Articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Blog_post`
--
ALTER TABLE `Blog_post`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Mail_list`
--
ALTER TABLE `Mail_list`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Message`
--
ALTER TABLE `Message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Email` (`Email`);

--
-- Indexes for table `Teams_Table`
--
ALTER TABLE `Teams_Table`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Testimonials`
--
ALTER TABLE `Testimonials`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `video_src`
--
ALTER TABLE `video_src`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Articles`
--
ALTER TABLE `Articles`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Blog_post`
--
ALTER TABLE `Blog_post`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Mail_list`
--
ALTER TABLE `Mail_list`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Message`
--
ALTER TABLE `Message`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Teams_Table`
--
ALTER TABLE `Teams_Table`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Testimonials`
--
ALTER TABLE `Testimonials`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `video_src`
--
ALTER TABLE `video_src`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
