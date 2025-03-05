const Sequelize = require('../config/database');


const Cart = Sequelize.define("Cart", 
{
  cart_ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "user_ID",
    },
  }
});


module.exports = Cart;