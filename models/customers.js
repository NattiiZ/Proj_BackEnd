const Sequelize = require('../config/database');


const Customers = Sequelize.define("Customers", 
{
  customer_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('customer_ID');
      return value ? `C-${String(value).padStart(4, '0')}` : value;
    },
    primaryKey: true,
    
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/i
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "user_ID",
    }
  },
});


module.exports = Customers;