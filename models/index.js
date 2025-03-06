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

Customers.hasMany(Orders, { foreignKey: "customer_ID" });
Orders.belongsTo(Customers, { foreignKey: "customer_ID" });

Orders.hasMany(OrderDetails, { foreignKey: "order_ID" });
OrderDetails.belongsTo(Orders, { foreignKey: "order_ID" });

Products.belongsTo(Category, { foreignKey: "category_ID" });
Category.hasMany(Products, { foreignKey: "category_ID" });

Products.belongsTo(Suppliers, { foreignKey: "supplier_ID" });
Suppliers.hasMany(Products, { foreignKey: "supplier_ID" });

OrderDetails.belongsTo(Products, { foreignKey: "product_ID" });
Products.hasMany(OrderDetails, { foreignKey: "product_ID" });

Users.hasMany(Customers, { foreignKey: "user_ID" });
Customers.belongsTo(Users, { foreignKey: "user_ID" });

Users.belongsTo(UserType, { foreignKey: "userType_ID" });
UserType.hasMany(Users, { foreignKey: "userType_ID" });

Users.hasMany(Cart, { foreignKey: "user_ID" });
Cart.belongsTo(Users, { foreignKey: "user_ID" });

Cart.hasMany(CartItems, { foreignKey: "cart_ID" });
CartItems.belongsTo(Cart, { foreignKey: "cart_ID" });

CartItems.belongsTo(Products, { foreignKey: "product_ID" });
Products.hasMany(CartItems, { foreignKey: "product_ID" });

Orders.belongsTo(Status, { foreignKey: "status_ID" });
Status.hasMany(Orders, { foreignKey: "status_ID" });

Products.belongsTo(Brands, { foreignKey: "brand_ID" });
Brands.hasMany(Products, { foreignKey: "brand_ID" });




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
