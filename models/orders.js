const DataTypes = require('sequelize');

const DB = require('../config/database');
const Customers = require('./Customers');
const Status = require('./Status');


const Orders = DB.define("Orders", 
{
  order_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    // get() {
    //   const value = this.getDataValue('order_ID');
    //   return value ? `R-${String(value).padStart(4, '0')}` : value;
    // },
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
    defaultValue: DataTypes.NOW,
    get() {
      return new Date(this.getDataValue('orderDate')).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
    },
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Status,
      key: "status_ID",
    },
  },
});


module.exports = Orders;