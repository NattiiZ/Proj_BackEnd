const DataTypes = require('sequelize');

const DB = require('../config/database');


const Suppliers = DB.define("Suppliers", 
{
  supplier_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
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
      is: /^[0-9]{9}$/i
    }
  },
});


module.exports = Suppliers;