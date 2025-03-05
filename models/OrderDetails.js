const Sequelize = require('../config/database');


const OrderDetails = Sequelize.define("OrderDetails", 
{
  orderDetail_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  order_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Orders,
      key: "order_ID",
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
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  subtotal: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});


module.exports = OrderDetails;