const DataTypes = require('sequelize');

const DB = require('../config/database');


const UserType = DB.define("UserType", 
{
  userType_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = UserType;