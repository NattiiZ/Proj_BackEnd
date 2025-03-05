const Sequelize = require('../config/database');


const Products = Sequelize.define("Products", 
{
  product_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('product_ID');
      return value ? `P-${String(value).padStart(3, '0')}` : value;
    },
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brand_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Brands,
      key: "brand_ID",
    },
  },
  category_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "category_ID",
    },
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  stockQty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  supplier_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Suppliers,
      key: "supplier_ID",
    },
  },
  img_url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  prductDetail:{
    type: Sequelize.STRING,
    allowNull: false
  }
});


module.exports = Products;