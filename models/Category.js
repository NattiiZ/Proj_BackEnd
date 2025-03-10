const DataTypes = require('sequelize');

const DB = require('../config/database');




const Category = DB.define("Category", 
{
  category_ID: {
    type: DataTypes.INTEGER,
    defaultValue: this.autoincrement,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});




module.exports = Category;