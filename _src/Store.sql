-- --------------------------------------------------------
-- Host:                         C:\Users\natta\Desktop\JS_Proj\Proj_BackEnd\_Database\Store.sqlite
-- Server version:               3.45.3
-- Server OS:                    
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for Store
DROP DATABASE IF EXISTS "Store";
CREATE DATABASE IF NOT EXISTS "Store";
;

-- Dumping structure for table Store.Brands
DROP TABLE IF EXISTS "Brands";
CREATE TABLE IF NOT EXISTS "Brands" (
    "brand_ID" INTEGER PRIMARY KEY, 
    "name" VARCHAR(255) NOT NULL, 
    "createdAt" DATETIME NOT NULL, 
    "updatedAt" DATETIME NOT NULL
);

-- Dumping data for table Store.Brands: 37 rows
DELETE FROM "Brands";
/*!40000 ALTER TABLE "Brands" DISABLE KEYS */;
INSERT INTO "Brands" ("brand_ID", "name", "createdAt", "updatedAt") VALUES
	(1, 'Intel', '2025-03-03 08:42:32.398 +00:00', '2025-03-03 08:42:32.398 +00:00'),
	(2, 'NVIDIA', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(3, 'AMD', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(4, 'ASUS', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(5, 'MSI', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(6, 'Gigabyte', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(7, 'ASRock', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(8, 'Corsair', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(9, 'G.SKILL', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(10, 'Kingston', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(11, 'TEAMGROUP', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(12, 'Crucial', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(13, 'Patriot', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(14, 'ADATA', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(15, 'Samsung', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(16, 'WD', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(17, 'Seagate', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(18, 'Toshiba', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(19, 'EVGA', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(20, 'Seasonic', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(21, 'Cooler Master', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(22, 'Thermaltake', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(23, 'be quiet!', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(24, 'NZXT', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(25, 'DeepCool', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(26, 'Noctua', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(27, 'Thermalright', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(28, 'Lian Li', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(29, 'Fractal Design', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(30, 'Phanteks', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(31, 'LG', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(32, 'Alienware', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(33, 'Apple', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(34, 'Dell', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(35, 'BenQ', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(36, 'AOC', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00'),
	(37, 'Xiaomi', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00');
/*!40000 ALTER TABLE "Brands" ENABLE KEYS */;

-- Dumping structure for table Store.CartItems
DROP TABLE IF EXISTS "CartItems";
CREATE TABLE IF NOT EXISTS `CartItems` (`cartItem_ID` INTEGER PRIMARY KEY AUTOINCREMENT, `cart_ID` INTEGER NOT NULL REFERENCES `Carts` (`cart_ID`) ON DELETE CASCADE ON UPDATE CASCADE, `product_ID` INTEGER NOT NULL REFERENCES `Products` (`product_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `quantity` INTEGER NOT NULL DEFAULT 1, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.CartItems: 2 rows
DELETE FROM "CartItems";
/*!40000 ALTER TABLE "CartItems" DISABLE KEYS */;
INSERT INTO "CartItems" ("cartItem_ID", "cart_ID", "product_ID", "quantity", "createdAt", "updatedAt") VALUES
	(40, 10, 1, 2, '2025-03-07 05:16:24.725 +00:00', '2025-03-07 05:16:42.808 +00:00'),
	(41, 10, 2, 1, '2025-03-07 05:16:34.605 +00:00', '2025-03-07 05:16:34.605 +00:00');
/*!40000 ALTER TABLE "CartItems" ENABLE KEYS */;

-- Dumping structure for table Store.Carts
DROP TABLE IF EXISTS "Carts";
CREATE TABLE IF NOT EXISTS `Carts` (`cart_ID` INTEGER PRIMARY KEY AUTOINCREMENT, `user_ID` INTEGER NOT NULL REFERENCES `Users` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Carts: 1 rows
DELETE FROM "Carts";
/*!40000 ALTER TABLE "Carts" DISABLE KEYS */;
INSERT INTO "Carts" ("cart_ID", "user_ID", "createdAt", "updatedAt") VALUES
	(10, 2, '2025-03-07 00:51:53.956 +00:00', '2025-03-07 00:51:53.956 +00:00');
/*!40000 ALTER TABLE "Carts" ENABLE KEYS */;

-- Dumping structure for table Store.Categories
DROP TABLE IF EXISTS "Categories";
CREATE TABLE IF NOT EXISTS `Categories` (`category_ID` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `description` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Categories: 9 rows
DELETE FROM "Categories";
/*!40000 ALTER TABLE "Categories" DISABLE KEYS */;
INSERT INTO "Categories" ("category_ID", "name", "description", "createdAt", "updatedAt") VALUES
	(1, 'CPU', 'test', '2025-03-03 08:40:48.982 +00:00', '2025-03-03 08:40:48.982 +00:00'),
	(2, 'Mainboard', 'test', '2025-03-05 22:27:32', '2025-03-05 22:27:32'),
	(3, 'RAM', 'test', '2025-03-05 22:27:30', '2025-03-05 22:27:31'),
	(4, 'Graphic Card', 'test', '2025-03-03 08:40:55.072 +00:00', '2025-03-03 08:40:55.072 +00:00'),
	(5, 'Storage', 'test', '2025-03-05 22:28:46', '2025-03-05 22:28:46'),
	(6, 'Power Supply', 'test', '2025-03-05 22:29:06', '2025-03-05 22:29:07'),
	(7, 'Case', 'test', '2025-03-05 22:29:54', '2025-03-05 22:29:55'),
	(8, 'Cooling System', 'test', '2025-03-05 22:30:19', '2025-03-05 22:30:21'),
	(9, 'Mornitor', 'test', '2025-03-05 22:31:23', '2025-03-05 22:31:23');
/*!40000 ALTER TABLE "Categories" ENABLE KEYS */;

-- Dumping structure for table Store.Customers
DROP TABLE IF EXISTS "Customers";
CREATE TABLE IF NOT EXISTS `Customers` (`customer_ID` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `phone` VARCHAR(255) NOT NULL, `address` VARCHAR(255) NOT NULL, `user_ID` INTEGER NOT NULL REFERENCES `Users` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Customers: 5 rows
DELETE FROM "Customers";
/*!40000 ALTER TABLE "Customers" DISABLE KEYS */;
INSERT INTO "Customers" ("customer_ID", "name", "phone", "address", "user_ID", "createdAt", "updatedAt") VALUES
	(1, 'Nattawut Prasong', '0637809503', '124 ม.3 สระแก้ว', 2, '2025-03-03 08:37:08.457 +00:00', '2025-03-03 08:37:08.457 +00:00'),
	(2, 'ART', '0637809503', '124 ม.3 สระแก้ว', 2, '2025-03-03 08:38:25.571 +00:00', '2025-03-03 08:38:25.571 +00:00'),
	(3, 'test', '0800001234', '1234 สระแก้ว', 1, '2025-03-03 09:19:50.877 +00:00', '2025-03-03 09:19:50.877 +00:00'),
	(4, 'sadawd', '0822221524', 'awdawdawd', 6, '2025-03-05 20:59:30.456 +00:00', '2025-03-05 20:59:30.456 +00:00'),
	(5, 'natt2806x@gmail.com', '0822221524', 'natt2806x@gmail.com', 8, '2025-03-05 21:05:11.357 +00:00', '2025-03-05 21:05:11.357 +00:00');
/*!40000 ALTER TABLE "Customers" ENABLE KEYS */;

-- Dumping structure for table Store.OrderDetails
DROP TABLE IF EXISTS "OrderDetails";
CREATE TABLE IF NOT EXISTS `OrderDetails` (`orderDetail_ID` INTEGER PRIMARY KEY, `order_ID` INTEGER NOT NULL REFERENCES `Orders` (`order_ID`) ON DELETE CASCADE ON UPDATE CASCADE, `product_ID` INTEGER NOT NULL REFERENCES `Products` (`product_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `quantity` INTEGER NOT NULL, `unitPrice` FLOAT NOT NULL, `subtotal` FLOAT NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.OrderDetails: 3 rows
DELETE FROM "OrderDetails";
/*!40000 ALTER TABLE "OrderDetails" DISABLE KEYS */;
INSERT INTO "OrderDetails" ("orderDetail_ID", "order_ID", "product_ID", "quantity", "unitPrice", "subtotal", "createdAt", "updatedAt") VALUES
	(1, 1, 1, 1, 20000.0, 20000.0, '2025-03-03 09:06:49.693 +00:00', '2025-03-03 09:06:49.693 +00:00'),
	(2, 1, 2, 1, 35000.0, 35000.0, '2025-03-03 09:07:05.675 +00:00', '2025-03-03 09:07:05.675 +00:00'),
	(3, 2, 1, 2, 20000.0, 40000.0, '2025-03-03 09:07:27.519 +00:00', '2025-03-03 09:07:27.519 +00:00');
/*!40000 ALTER TABLE "OrderDetails" ENABLE KEYS */;

-- Dumping structure for table Store.Orders
DROP TABLE IF EXISTS "Orders";
CREATE TABLE IF NOT EXISTS `Orders` (`order_ID` INTEGER PRIMARY KEY, `customer_ID` INTEGER NOT NULL REFERENCES `Customers` (`customer_ID`) ON DELETE CASCADE ON UPDATE CASCADE, `orderDate` DATETIME, `totalAmount` FLOAT NOT NULL, `status_ID` INTEGER NOT NULL REFERENCES `Statuses` (`status_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Orders: 2 rows
DELETE FROM "Orders";
/*!40000 ALTER TABLE "Orders" DISABLE KEYS */;
INSERT INTO "Orders" ("order_ID", "customer_ID", "orderDate", "totalAmount", "status_ID", "createdAt", "updatedAt") VALUES
	(1, 1, '2025-03-03 08:52:27.233 +00:00', 55000.0, 1, '2025-03-03 08:52:27.233 +00:00', '2025-03-03 08:52:27.233 +00:00'),
	(2, 2, '2025-03-03 08:52:41.823 +00:00', 40000.0, 3, '2025-03-03 08:52:41.823 +00:00', '2025-03-03 08:53:19.306 +00:00');
/*!40000 ALTER TABLE "Orders" ENABLE KEYS */;

-- Dumping structure for table Store.Products
DROP TABLE IF EXISTS "Products";
CREATE TABLE IF NOT EXISTS "Products" (`product_ID` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `brand_ID` INTEGER NOT NULL REFERENCES `Brands` (`brand_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `category_ID` INTEGER NOT NULL REFERENCES `Categories` (`category_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `unitPrice` FLOAT NOT NULL, `stockQty` INTEGER NOT NULL, `supplier_ID` INTEGER NOT NULL REFERENCES `Suppliers` (`supplier_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `img_url` VARCHAR(255) NOT NULL, "detail" VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Products: 88 rows
DELETE FROM "Products";
/*!40000 ALTER TABLE "Products" DISABLE KEYS */;
INSERT INTO "Products" ("product_ID", "name", "brand_ID", "category_ID", "unitPrice", "stockQty", "supplier_ID", "img_url", "detail", "createdAt", "updatedAt") VALUES
	(1, 'Core i9-13900K', 1, 1, 5000.0, 150, 1, 'i9-13900k.webp', '', '2025-03-05 15:00:09.097 +00:00', '2025-03-06 11:26:26.332 +00:00'),
	(2, 'Core i7-13700K', 1, 1, 5000.0, 150, 1, 'i7-13700k.webp', '', '2025-03-05 15:01:21.048 +00:00', '2025-03-06 11:27:55.537 +00:00'),
	(3, 'Core i5-13600K', 1, 1, 5000.0, 150, 1, 'i5-13600K.webp', '', '2025-03-05 15:03:20.461 +00:00', '2025-03-06 11:28:31.380 +00:00'),
	(4, 'Core i3-13100', 1, 1, 5000.0, 150, 1, 'i3-13100.webp', '', '2025-03-05 15:04:04.536 +00:00', '2025-03-06 11:29:07.931 +00:00'),
	(5, 'Ryzen 9 7950X', 3, 1, 5000.0, 150, 1, 'Ryzen_9_7950X.webp', '', '2025-03-05 15:04:21.120 +00:00', '2025-03-06 11:30:25.591 +00:00'),
	(6, 'Ryzen 7 7800X3D', 2, 1, 5000.0, 150, 1, 'Ryzen_7_7800X3D.webp', '', '2025-03-05 15:04:41.762 +00:00', '2025-03-06 11:31:13.355 +00:00'),
	(7, 'Ryzen 5 7600X', 2, 1, 5000.0, 150, 1, 'Ryzen_5_7600X.webp', '', '2025-03-05 15:04:54.781 +00:00', '2025-03-06 11:31:57.068 +00:00'),
	(8, 'ULTRA 5 245KF', 1, 1, 5000.0, 150, 1, 'ULTRA_5_245KF_LGA_1851.webp', '', '2025-03-05 15:05:21.083 +00:00', '2025-03-06 11:32:41.348 +00:00'),
	(9, 'ULTRA 7 265K', 1, 1, 5000.0, 150, 1, 'ULTRA_7_265K_LGA_1851.webp', '', '2025-03-05 15:05:36.950 +00:00', '2025-03-06 11:33:41.570 +00:00'),
	(10, 'ULTRA 9 285', 1, 1, 5000.0, 150, 1, 'ULTRA _9_285_LGA_1851.webp', '', '2025-03-05 15:05:48.500 +00:00', '2025-03-06 11:34:42.696 +00:00'),
	(11, 'GeForce RTX 4090', 1, 1, 5000.0, 150, 1, 'ULTRA _9_285_LGA_1851.webp', '', '2025-03-05 15:08:30.341 +00:00', '2025-03-06 11:34:50.229 +00:00'),
	(12, 'GeForce RTX 4080', 1, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:08:42.274 +00:00', '2025-03-05 15:08:42.274 +00:00'),
	(13, 'GeForce RTX 4070 Ti', 1, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:08:50.717 +00:00', '2025-03-05 15:08:50.717 +00:00'),
	(14, 'GeForce RTX 4060 Ti', 1, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:09:03.648 +00:00', '2025-03-05 15:09:03.648 +00:00'),
	(15, 'GeForce RTX 3050', 1, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:09:11.925 +00:00', '2025-03-05 15:09:11.925 +00:00'),
	(16, 'Radeon RX 7900 XTX', 1, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:09:33.452 +00:00', '2025-03-05 15:09:33.452 +00:00'),
	(17, 'Radeon RX 7800 XT', 1, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:09:43.222 +00:00', '2025-03-05 15:09:43.222 +00:00'),
	(18, 'Radeon RX 7600', 1, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:09:56.615 +00:00', '2025-03-05 15:09:56.615 +00:00'),
	(19, 'RADEON RX 7700 XT', 1, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:14:36.356 +00:00', '2025-03-05 15:14:36.356 +00:00'),
	(20, 'DUAL RADEON RX 6500 XT V2 OC EDITION', 4, 4, 5000.0, 150, 1, '', '', '2025-03-05 15:14:56.174 +00:00', '2025-03-05 15:14:56.174 +00:00'),
	(21, 'ROG Maximus Z790 Hero', 4, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:19:11.304 +00:00', '2025-03-05 15:19:11.304 +00:00'),
	(22, 'MPG Z790 Carbon WiFi', 5, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:19:25.385 +00:00', '2025-03-05 15:19:25.385 +00:00'),
	(23, 'Z790 AORUS Master', 6, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:19:54.672 +00:00', '2025-03-05 15:19:54.672 +00:00'),
	(24, 'Z790 Taichi', 7, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:20:06.238 +00:00', '2025-03-05 15:20:06.238 +00:00'),
	(25, 'TUF Gaming B760-PLUS WiF', 4, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:20:19.352 +00:00', '2025-03-05 15:20:19.352 +00:00'),
	(26, 'ROG Crosshair X670E Hero', 4, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:20:38.203 +00:00', '2025-03-05 15:20:38.203 +00:00'),
	(27, 'MEG X670E ACE', 5, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:20:46.194 +00:00', '2025-03-05 15:20:46.194 +00:00'),
	(28, 'X670 AORUS Elite AX', 6, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:20:59.103 +00:00', '2025-03-05 15:20:59.103 +00:00'),
	(29, 'B650E Steel Legend', 7, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:21:13.268 +00:00', '2025-03-05 15:21:13.268 +00:00'),
	(30, 'TUF Gaming B550-PLUS', 4, 2, 5000.0, 150, 1, '', '', '2025-03-05 15:21:22.327 +00:00', '2025-03-05 15:21:22.327 +00:00'),
	(31, 'Dominator Platinum RGB DDR5', 8, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:21:33.378 +00:00', '2025-03-05 15:21:33.378 +00:00'),
	(32, 'Trident Z5 RGB DDR5', 9, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:21:44.016 +00:00', '2025-03-05 15:21:44.016 +00:00'),
	(33, 'Fury Beast DDR5', 10, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:21:54.997 +00:00', '2025-03-05 15:21:54.997 +00:00'),
	(34, 'T-Force Delta RGB DDR5', 11, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:22:05.028 +00:00', '2025-03-05 15:22:05.028 +00:00'),
	(35, 'Pro DDR5', 5, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:22:23.131 +00:00', '2025-03-05 15:22:23.131 +00:00'),
	(36, 'Vengeance RGB Pro DDR4', 8, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:22:29.821 +00:00', '2025-03-05 15:22:29.821 +00:00'),
	(37, 'Ripjaws V DDR4', 9, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:22:38.106 +00:00', '2025-03-05 15:22:38.106 +00:00'),
	(38, 'Fury Renegade DDR4', 10, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:22:44.271 +00:00', '2025-03-05 15:22:44.271 +00:00'),
	(39, 'XPG Spectrix D60G DDR4', 14, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:22:53.125 +00:00', '2025-03-05 15:22:53.125 +00:00'),
	(40, 'Viper Steel DDR4', 13, 3, 5000.0, 150, 1, '', '', '2025-03-05 15:23:01.304 +00:00', '2025-03-05 15:23:01.304 +00:00'),
	(41, '990 Pro', 15, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:23:32.715 +00:00', '2025-03-05 15:23:32.715 +00:00'),
	(42, 'Black SN850X', 16, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:23:41.914 +00:00', '2025-03-05 15:23:41.914 +00:00'),
	(43, 'Fury Renegade', 10, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:23:49.700 +00:00', '2025-03-05 15:23:49.700 +00:00'),
	(44, 'P5 Plus', 12, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:23:58.927 +00:00', '2025-03-05 15:23:58.927 +00:00'),
	(45, 'FireCuda 530', 17, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:24:07.696 +00:00', '2025-03-05 15:24:07.696 +00:00'),
	(46, 'BarraCuda 4TB', 17, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:24:22.250 +00:00', '2025-03-05 15:24:22.250 +00:00'),
	(47, 'Blue 4TB', 16, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:24:32.156 +00:00', '2025-03-05 15:24:32.156 +00:00'),
	(48, 'X300 6TB', 18, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:24:41.957 +00:00', '2025-03-05 15:24:41.957 +00:00'),
	(49, 'Black 8TB', 16, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:24:54.098 +00:00', '2025-03-05 15:24:54.098 +00:00'),
	(50, 'IronWolf 10TB', 17, 5, 5000.0, 150, 1, '', '', '2025-03-05 15:25:02.886 +00:00', '2025-03-05 15:25:02.886 +00:00'),
	(51, 'RM1000x', 8, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:26:50.375 +00:00', '2025-03-05 15:26:50.375 +00:00'),
	(52, 'SuperNOVA 850 G7', 19, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:27:04.920 +00:00', '2025-03-05 15:27:04.920 +00:00'),
	(53, 'PRIME TX-1000', 20, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:27:30.539 +00:00', '2025-03-05 15:27:30.539 +00:00'),
	(54, 'Thor 1200W', 4, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:27:53.007 +00:00', '2025-03-05 15:27:53.007 +00:00'),
	(55, 'MPG A850G PCIE5', 5, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:28:37.696 +00:00', '2025-03-05 15:28:37.696 +00:00'),
	(56, 'MWE Gold 750 V2', 21, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:29:30.821 +00:00', '2025-03-05 15:29:30.821 +00:00'),
	(57, 'Toughpower GF3 1200W', 22, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:29:43.950 +00:00', '2025-03-05 15:29:43.950 +00:00'),
	(58, 'Dark Power 13 850W', 23, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:29:58.190 +00:00', '2025-03-05 15:29:58.190 +00:00'),
	(59, 'UD850GM', 6, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:30:08.605 +00:00', '2025-03-05 15:30:08.605 +00:00'),
	(60, 'C750', 24, 6, 5000.0, 150, 1, '', '', '2025-03-05 15:30:20.333 +00:00', '2025-03-05 15:30:20.333 +00:00'),
	(61, 'Kraken X73 RGB', 24, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:31:03.464 +00:00', '2025-03-05 15:31:03.464 +00:00'),
	(62, 'iCUE H150i Elite LCD XT', 8, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:31:32.372 +00:00', '2025-03-05 15:31:32.372 +00:00'),
	(63, 'Ryujin II 360', 4, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:32:01.636 +00:00', '2025-03-05 15:32:01.636 +00:00'),
	(64, 'MEG CoreLiquid S360', 5, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:32:14.084 +00:00', '2025-03-05 15:32:14.084 +00:00'),
	(65, 'LS720', 25, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:32:24.437 +00:00', '2025-03-05 15:32:24.437 +00:00'),
	(66, 'NH-D15', 26, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:32:35.086 +00:00', '2025-03-05 15:32:35.086 +00:00'),
	(67, 'Dark Rock Pro 4', 23, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:32:43.923 +00:00', '2025-03-05 15:32:43.923 +00:00'),
	(68, 'Hyper 212 Black Edition', 21, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:32:53.341 +00:00', '2025-03-05 15:32:53.341 +00:00'),
	(69, 'AK620', 25, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:33:14.134 +00:00', '2025-03-05 15:33:14.134 +00:00'),
	(70, 'Peerless Assassin 120 SE', 27, 8, 5000.0, 150, 1, '', '', '2025-03-05 15:33:26.373 +00:00', '2025-03-05 15:33:26.373 +00:00'),
	(71, 'O11 Dynamic XL', 28, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:34:02.801 +00:00', '2025-03-05 15:34:02.801 +00:00'),
	(72, '7000D Airflow', 8, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:34:12.224 +00:00', '2025-03-05 15:34:12.224 +00:00'),
	(73, 'Design Define 7 XL', 29, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:34:20.092 +00:00', '2025-03-05 15:34:20.092 +00:00'),
	(74, 'Enthoo Pro 2', 30, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:34:32.402 +00:00', '2025-03-05 15:34:32.402 +00:00'),
	(75, 'View 71 TG', 22, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:34:42.732 +00:00', '2025-03-05 15:34:42.732 +00:00'),
	(76, 'Lancool III', 28, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:34:52.412 +00:00', '2025-03-05 15:34:52.412 +00:00'),
	(77, 'H7 Flow', 24, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:35:05.063 +00:00', '2025-03-05 15:35:05.063 +00:00'),
	(78, '4000D Airflow', 8, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:35:13.303 +00:00', '2025-03-05 15:35:13.303 +00:00'),
	(80, 'MasterBox TD500 Mesh', 21, 7, 5000.0, 150, 1, '', '', '2025-03-05 15:35:42.415 +00:00', '2025-03-05 15:35:42.415 +00:00'),
	(81, 'Swift PG42UQ - 42" OLED 4K 138Hz', 4, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:36:55.695 +00:00', '2025-03-05 15:36:55.695 +00:00'),
	(82, 'Odyssey Neo G8 - 32" 4K 240Hz Quantum Mini LED', 15, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:37:13.472 +00:00', '2025-03-05 15:37:13.472 +00:00'),
	(83, 'UltraGear 27GP950-B – 27" 4K 144Hz Nano IPS', 31, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:37:30.038 +00:00', '2025-03-05 15:37:30.038 +00:00'),
	(84, '3423DW – 34" QD-OLED 175Hz Ultrawide', 32, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:37:45.465 +00:00', '2025-03-05 15:37:45.465 +00:00'),
	(85, 'M32U – 32" 4K 144Hz IPS', 6, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:38:04.671 +00:00', '2025-03-05 15:38:04.671 +00:00'),
	(86, 'UltraSharp U3223QE – 32" 4K IPS', 34, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:38:29.427 +00:00', '2025-03-05 15:38:29.427 +00:00'),
	(87, 'PD3220U – 32" 4K', 35, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:38:46.938 +00:00', '2025-03-05 15:38:46.938 +00:00'),
	(88, '24G2 – 24" 1080p 144Hz IPS', 36, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:39:00.279 +00:00', '2025-03-05 15:39:00.279 +00:00'),
	(89, 'Mi Curved Gaming Monitor', 37, 9, 5000.0, 150, 1, '', '', '2025-03-05 15:39:12.888 +00:00', '2025-03-05 15:39:12.888 +00:00');
/*!40000 ALTER TABLE "Products" ENABLE KEYS */;

-- Dumping structure for table Store.Statuses
DROP TABLE IF EXISTS "Statuses";
CREATE TABLE IF NOT EXISTS `Statuses` (`status_ID` INTEGER PRIMARY KEY, `statusName` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Statuses: 3 rows
DELETE FROM "Statuses";
/*!40000 ALTER TABLE "Statuses" DISABLE KEYS */;
INSERT INTO "Statuses" ("status_ID", "statusName", "createdAt", "updatedAt") VALUES
	(1, 'Complete', '2025-03-03 08:49:46.022 +00:00', '2025-03-03 08:49:46.022 +00:00'),
	(2, 'Fail', '2025-03-03 08:49:59.102 +00:00', '2025-03-03 08:49:59.102 +00:00'),
	(3, 'Pending', '2025-03-03 08:50:12.119 +00:00', '2025-03-03 08:50:12.119 +00:00');
/*!40000 ALTER TABLE "Statuses" ENABLE KEYS */;

-- Dumping structure for table Store.Suppliers
DROP TABLE IF EXISTS "Suppliers";
CREATE TABLE IF NOT EXISTS `Suppliers` (`supplier_ID` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `phone` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Suppliers: 2 rows
DELETE FROM "Suppliers";
/*!40000 ALTER TABLE "Suppliers" DISABLE KEYS */;
INSERT INTO "Suppliers" ("supplier_ID", "name", "email", "phone", "createdAt", "updatedAt") VALUES
	(1, 'Ascenti Resource', 'nat87972@gmail.com', '0637809503', '2025-03-03 08:39:06.498 +00:00', '2025-03-03 08:39:06.498 +00:00'),
	(2, 'Synnex', 'synnex@email.com', '027770216', '2025-03-03 08:39:06.498 +00:00', '2025-03-03 08:39:06.498 +00:00');
/*!40000 ALTER TABLE "Suppliers" ENABLE KEYS */;

-- Dumping structure for table Store.Users
DROP TABLE IF EXISTS "Users";
CREATE TABLE IF NOT EXISTS `Users` (`user_ID` INTEGER PRIMARY KEY, `username` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `joinDate` DATETIME, `userType_ID` INTEGER NOT NULL REFERENCES `UserTypes` (`userType_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Users: 6 rows
DELETE FROM "Users";
/*!40000 ALTER TABLE "Users" DISABLE KEYS */;
INSERT INTO "Users" ("user_ID", "username", "password", "email", "joinDate", "userType_ID", "createdAt", "updatedAt") VALUES
	(1, 'admin', 'root123', 'nat87972@gmail.com', '2025-03-03 08:33:55.688 +00:00', 1, '2025-03-03 08:33:55.689 +00:00', '2025-03-03 08:33:55.689 +00:00'),
	(2, 'nat2806', '280648', 'test@email.com', '2025-03-03 08:34:12.014 +00:00', 2, '2025-03-03 08:34:12.014 +00:00', '2025-03-03 08:34:50.051 +00:00'),
	(5, 'earn', '123', 'earn@gmail.com', '2025-03-05 15:06:08.334 +00:00', 1, '2025-03-05 15:06:08.334 +00:00', '2025-03-05 15:06:08.334 +00:00'),
	(6, 'xxxxxxxxxxxx', '28062806', 'nattasdaasdaw2806x@gmail.com', '2025-03-05 20:59:30.442 +00:00', 2, '2025-03-05 20:59:30.442 +00:00', '2025-03-05 20:59:30.442 +00:00'),
	(7, 'qweqweqweqweqwe', '28062806', 'assadda@email.com', '2025-03-05 21:04:39.522 +00:00', 2, '2025-03-05 21:04:39.522 +00:00', '2025-03-05 21:04:39.522 +00:00'),
	(8, 'qweqweqweqweqwe', '28062806', 'assadda@email.com', '2025-03-05 21:05:11.346 +00:00', 2, '2025-03-05 21:05:11.346 +00:00', '2025-03-05 21:05:11.346 +00:00');
/*!40000 ALTER TABLE "Users" ENABLE KEYS */;

-- Dumping structure for table Store.UserTypes
DROP TABLE IF EXISTS "UserTypes";
CREATE TABLE IF NOT EXISTS `UserTypes` (`userType_ID` INTEGER PRIMARY KEY, `role` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.UserTypes: 2 rows
DELETE FROM "UserTypes";
/*!40000 ALTER TABLE "UserTypes" DISABLE KEYS */;
INSERT INTO "UserTypes" ("userType_ID", "role", "createdAt", "updatedAt") VALUES
	(1, 'Admin', '2025-03-03 08:30:59.532 +00:00', '2025-03-03 08:30:59.532 +00:00'),
	(2, 'User', '2025-03-03 08:31:07.317 +00:00', '2025-03-03 08:32:10.789 +00:00');
/*!40000 ALTER TABLE "UserTypes" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
