const DataTypes = require('sequelize');
const DB = require('../config/database');


const Brands = DB.define("Brands", 
{
  brand_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = Brands;