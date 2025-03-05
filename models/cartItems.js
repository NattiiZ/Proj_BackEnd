const DataTypes = require('sequelize');
const DB = require('../config/database');


const CartItems = DB.define("CartItems",
{
  cartItem_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cart_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cart,
      key: "cart_ID",
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
    defaultValue: 1,
  },
});


module.exports = CartItems;