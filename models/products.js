const DataTypes = require('sequelize');

const DB = require('../config/database');
const Brands = require('./Brands');
const Category = require('./Category');
const Suppliers = require('./Suppliers');




const Products = DB.define("Products", 
{
  product_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    // get() {
    //   const value = this.getDataValue('product_ID');
    //   return value ? `P-${String(value).padStart(3, '0')}` : value;
    // },
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
  supplier_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Suppliers,
      key: "supplier_ID",
    },
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail:{
    type: DataTypes.STRING,
    allowNull: false
  }
});




module.exports = Products;