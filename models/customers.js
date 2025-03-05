const DataTypes = require('sequelize');
const DB = require('../config/database');


const Customers = DB.define("Customers", 
{
  customer_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('customer_ID');
      return value ? `C-${String(value).padStart(4, '0')}` : value;
    },
    primaryKey: true,
    
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
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
    references: {
      model: Users,
      key: "user_ID",
    }
  },
});


module.exports = Customers;