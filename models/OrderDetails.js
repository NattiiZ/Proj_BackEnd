const DataTypes = require('sequelize');

const DB = require('../config/database');
const Orders = require('./Orders');
const Products = require('./Products');




const OrderDetails = DB.define("OrderDetails", 
{
  orderDetail_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  order_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Orders,
      key: "order_ID",
    },
  },
  product_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: "product_ID",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});




module.exports = OrderDetails;