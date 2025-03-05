const Sequelize = require('../config/database');


const UserType = Sequelize.define("UserType", 
{
  userType_ID: {
    type: Sequelize.INTEGER,
    // defaultValue: this.autoincrement,
    autoincrement: true,
    primaryKey: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


module.exports = UserType;