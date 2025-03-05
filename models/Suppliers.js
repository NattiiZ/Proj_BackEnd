const Sequelize = require('../config/database');


const Suppliers = Sequelize.define("Suppliers", 
{
  supplier_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
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
      is: /^[0-9]{9}$/i
    }
  },
});


module.exports = Suppliers;