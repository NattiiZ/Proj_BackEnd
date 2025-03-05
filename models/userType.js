const DataTypes = require('sequelize');

const DB = require('../config/database');


const UserType = DB.define("UserType", 
{
  userType_ID: {
    type: DataTypes.INTEGER,
    // defaultValue: this.autoincrement,
    autoincrement: true,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = UserType;