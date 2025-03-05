const Sequelize = require('../config/database');


const Orders = Sequelize.define("Orders", 
{
  order_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('order_ID');
      return value ? `R-${String(value).padStart(4, '0')}` : value;
    },
    primaryKey: true,
  },
  customer_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Customers,
      key: "customer_ID",
    },
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return new Date(this.getDataValue('orderDate')).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
    },
  },
  totalAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  status_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Status,
      key: "status_ID",
    },
  },
});


module.exports = Orders;