const DataTypes = require('sequelize');

const DB = require('../config/database');
const Users = require('./Users');




const Customers = DB.define("Customers", 
{
  customer_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/i
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 2,
    references: {
      model: Users,
      key: "user_ID",
    }
  },
});




module.exports = Customers;