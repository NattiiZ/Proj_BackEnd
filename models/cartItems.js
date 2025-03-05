const Sequelize = require('../config/database');


const CartItems = Sequelize.define("CartItems",
{
  cartItem_ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cart_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Cart,
      key: "cart_ID",
    },
  },
  product_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: "product_ID",
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});


module.exports = CartItems;