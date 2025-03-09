const DataTypes = require('sequelize');

const DB = require('../config/database');
const Brands = require('./Brands');
const Category = require('./Category');




const Products = DB.define("Products", 
{
  product_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand_ID: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Brands,
      key: "brand_ID",
    },
  },
  category_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "category_ID",
    },
  },
  unitPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stockQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imgName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail:{
    type: DataTypes.STRING,
    allowNull: false
  }
});




module.exports = Products;