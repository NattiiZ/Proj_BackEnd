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
CREATE TABLE IF NOT EXISTS `Brands` (`brand_ID` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Brands: 2 rows
DELETE FROM "Brands";
/*!40000 ALTER TABLE "Brands" DISABLE KEYS */;
INSERT INTO "Brands" ("brand_ID", "name", "createdAt", "updatedAt") VALUES
	(1, 'Intel', '2025-03-03 08:42:32.398 +00:00', '2025-03-03 08:42:32.398 +00:00'),
	(2, 'ASUS', '2025-03-03 08:42:44.109 +00:00', '2025-03-03 08:42:44.109 +00:00');
/*!40000 ALTER TABLE "Brands" ENABLE KEYS */;

-- Dumping structure for table Store.CartItems
DROP TABLE IF EXISTS "CartItems";
CREATE TABLE IF NOT EXISTS `CartItems` (`cartItem_ID` INTEGER PRIMARY KEY AUTOINCREMENT, `cart_ID` INTEGER NOT NULL REFERENCES `Carts` (`cart_ID`) ON DELETE CASCADE ON UPDATE CASCADE, `product_ID` INTEGER NOT NULL REFERENCES `Products` (`product_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `quantity` INTEGER NOT NULL DEFAULT 1, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.CartItems: 2 rows
DELETE FROM "CartItems";
/*!40000 ALTER TABLE "CartItems" DISABLE KEYS */;
INSERT INTO "CartItems" ("cartItem_ID", "cart_ID", "product_ID", "quantity", "createdAt", "updatedAt") VALUES
	(1, 1, 2, 1, '2025-03-05 07:13:38.436 +00:00', '2025-03-05 07:13:38.436 +00:00'),
	(2, 2, 1, 2, '2025-03-05 07:13:38.436 +00:00', '2025-03-05 07:13:38.436 +00:00');
/*!40000 ALTER TABLE "CartItems" ENABLE KEYS */;

-- Dumping structure for table Store.Carts
DROP TABLE IF EXISTS "Carts";
CREATE TABLE IF NOT EXISTS `Carts` (`cart_ID` INTEGER PRIMARY KEY AUTOINCREMENT, `user_ID` INTEGER NOT NULL REFERENCES `Users` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Carts: 2 rows
DELETE FROM "Carts";
/*!40000 ALTER TABLE "Carts" DISABLE KEYS */;
INSERT INTO "Carts" ("cart_ID", "user_ID", "createdAt", "updatedAt") VALUES
	(1, 1, '2025-03-05 07:13:38.436 +00:00', '2025-03-05 07:13:38.436 +00:00'),
	(2, 2, '2025-03-05 07:13:38.436 +00:00', '2025-03-05 07:13:38.436 +00:00');
/*!40000 ALTER TABLE "Carts" ENABLE KEYS */;

-- Dumping structure for table Store.Categories
DROP TABLE IF EXISTS "Categories";
CREATE TABLE IF NOT EXISTS `Categories` (`category_ID` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `description` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Categories: 2 rows
DELETE FROM "Categories";
/*!40000 ALTER TABLE "Categories" DISABLE KEYS */;
INSERT INTO "Categories" ("category_ID", "name", "description", "createdAt", "updatedAt") VALUES
	(1, 'CPU', 'test', '2025-03-03 08:40:48.982 +00:00', '2025-03-03 08:40:48.982 +00:00'),
	(2, 'GPU', 'test', '2025-03-03 08:40:55.072 +00:00', '2025-03-03 08:40:55.072 +00:00');
/*!40000 ALTER TABLE "Categories" ENABLE KEYS */;

-- Dumping structure for table Store.Customers
DROP TABLE IF EXISTS "Customers";
CREATE TABLE IF NOT EXISTS `Customers` (`customer_ID` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `email` VARCHAR(255) NOT NULL, `phone` VARCHAR(255) NOT NULL, `address` VARCHAR(255) NOT NULL, `user_ID` INTEGER NOT NULL REFERENCES `Users` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Customers: 3 rows
DELETE FROM "Customers";
/*!40000 ALTER TABLE "Customers" DISABLE KEYS */;
INSERT INTO "Customers" ("customer_ID", "name", "email", "phone", "address", "user_ID", "createdAt", "updatedAt") VALUES
	(1, 'Nattawut Prasong', '2nat87972@gmail.com', '0637809503', '124 ม.3 สระแก้ว', 2, '2025-03-03 08:37:08.457 +00:00', '2025-03-03 08:37:08.457 +00:00'),
	(2, 'ART', 'nat87972@gmail.com', '0637809503', '124 ม.3 สระแก้ว', 2, '2025-03-03 08:38:25.571 +00:00', '2025-03-03 08:38:25.571 +00:00'),
	(3, 'test', 'test@email.com', '0800001234', '1234 สระแก้ว', 1, '2025-03-03 09:19:50.877 +00:00', '2025-03-03 09:19:50.877 +00:00');
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

-- Dumping data for table Store.Products: 5 rows
DELETE FROM "Products";
/*!40000 ALTER TABLE "Products" DISABLE KEYS */;
INSERT INTO "Products" ("product_ID", "name", "brand_ID", "category_ID", "unitPrice", "stockQty", "supplier_ID", "img_url", "detail", "createdAt", "updatedAt") VALUES
	(1, 'Core Ultra 9 285K', 1, 1, 20000.0, 150, 2, '_logo_store.png', 'spec test', '2025-03-03 08:47:14.371 +00:00', '2025-03-03 08:47:14.371 +00:00'),
	(2, 'ROG RTX5080', 2, 2, 35000.0, 85, 1, '_logo_store.png', 'spec test', '2025-03-03 08:48:01.396 +00:00', '2025-03-03 08:48:33.066 +00:00'),
	(3, 'Core Ultra 7 265K', 1, 1, 17000.0, 20, 2, '_logo_store.png', 'spec test', '2025-03-03 08:39:06.498 +00:00', '2025-03-03 08:39:06.498 +00:00'),
	(4, 'Core Ultra 7 265K', 1, 1, 17000.0, 20, 2, '_logo_store.png', 'spec test', '2025-03-05 07:13:38.436 +00:00', '2025-03-05 07:13:38.436 +00:00'),
	(5, 'Core Ultra 9 285K', 1, 1, 50000.0, 50, 1, '_logo_store.png', 'spec test', '2025-03-05 07:13:01.973 +00:00', '2025-03-05 07:13:01.973 +00:00');
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
CREATE TABLE IF NOT EXISTS `Users` (`user_ID` INTEGER PRIMARY KEY, `username` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL, `joinDate` DATETIME, `userType_ID` INTEGER NOT NULL REFERENCES `UserTypes` (`userType_ID`) ON DELETE NO ACTION ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Dumping data for table Store.Users: 3 rows
DELETE FROM "Users";
/*!40000 ALTER TABLE "Users" DISABLE KEYS */;
INSERT INTO "Users" ("user_ID", "username", "password", "joinDate", "userType_ID", "createdAt", "updatedAt") VALUES
	(1, 'admin', 'root123', '2025-03-03 08:33:55.688 +00:00', 1, '2025-03-03 08:33:55.689 +00:00', '2025-03-03 08:33:55.689 +00:00'),
	(2, 'nat2806', '280648', '2025-03-03 08:34:12.014 +00:00', 2, '2025-03-03 08:34:12.014 +00:00', '2025-03-03 08:34:50.051 +00:00'),
	(3, 'admin', '123', '2025-03-05 06:15:51.058 +00:00', 2, '2025-03-05 06:15:51.058 +00:00', '2025-03-05 06:15:51.058 +00:00');
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
