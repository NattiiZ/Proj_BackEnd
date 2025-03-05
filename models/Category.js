const Sequelize = require('../config/database');


const Category = Sequelize.define("Category", 
{
  category_ID: {
    type: Sequelize.INTEGER,
    defaultValue: this.autoincrement,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


module.exports = Category;