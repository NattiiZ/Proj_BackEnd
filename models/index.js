const DB = require('../config/database');

const UserType = require('./UserType');
const Users = require('./Users');
const Customers = require('./Customers');
const Suppliers = require('./Suppliers');
const Category = require('./Category');
const Brands = require('./Brands');
const Products = require('./Products');
const Cart = require('./Cart');
const CartItems = require('./CartItems');
const Status = require('./Status');
const Orders = require('./Orders');
const OrderDetails = require('./OrderDetails');



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
  DB,
  UserType,
  Users,
  Customers,
  Suppliers,
  Category,
  Brands,
  Products,
  Cart,
  CartItems,
  Status,
  Orders,
  OrderDetails
};
