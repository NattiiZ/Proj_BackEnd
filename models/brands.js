const Sequelize = require('../config/database');


const Brands = Sequelize.define("Brands", 
{
  brand_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


module.exports = Brands;