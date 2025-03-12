const DataTypes = require('sequelize');

const DB = require('../config/database');
const Customers = require('./Customers');




const Orders = DB.define("Orders", 
{
  order_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customer_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Customers,
      key: "customer_ID",
    },
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
    get() {
      return new Date(this.getDataValue('orderDate')).toLocaleDateString("th-TH", { timeZone: "Asia/Bangkok" });
    },
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});




module.exports = Orders;