const DB = require('../config/database');

const UserType = require('./UserType');
const Users = require('./Users');
const Customers = require('./Customers');
const Suppliers = require('./Products');
const Category = require('./Order');
const Brands = require('./Order');
const Products = require('./Order');
const Cart = require('./Order');
const CartItems = require('./Order');
const Status = require('./Order');
const Orders = require('./Order');
const OrderDetails = require('./Order');



// ================== Relationships ==================

// // ความสัมพันธ์ระหว่าง Customers และ Orders
// Customers.hasMany(Orders, { foreignKey: "customer_ID" });
// Orders.belongsTo(Customers, { foreignKey: "customer_ID" });

// // ความสัมพันธ์ระหว่าง Orders และ OrderDetail
// Orders.hasMany(OrderDetails, { foreignKey: "order_ID" });
// OrderDetails.belongsTo(Orders, { foreignKey: "order_ID" });

// // ความสัมพันธ์ระหว่าง Products และ Category
// Products.belongsTo(Category, { foreignKey: "category_ID" });
// Category.hasMany(Products, { foreignKey: "category_ID" });

// // ความสัมพันธ์ระหว่าง Products และ Suppliers
// Products.belongsTo(Suppliers, { foreignKey: "supplier_ID" });
// Suppliers.hasMany(Products, { foreignKey: "supplier_ID" });

// // ความสัมพันธ์ระหว่าง OrderDetails และ Products
// OrderDetails.belongsTo(Products, { foreignKey: "product_ID" });
// Products.hasMany(OrderDetails, { foreignKey: "product_ID" });




module.exports = {
  sequelize,
  User,
  Cart,
  Product,
  Order,
};
