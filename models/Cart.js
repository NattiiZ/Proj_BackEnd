const DataTypes = require('sequelize');

const DB = require('../config/database');
const Users = require('./Users');




const Cart = DB.define("Cart", 
{
  cart_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "user_ID",
    },
  }
});




module.exports = Cart;