const DataTypes = require('sequelize');

const DB = require('../config/database');




const Users = DB.define("Users", 
{
  user_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
  },
  userType: {
    type: DataTypes.INTEGER,
    defaultValue: 3,
    allowNull: false
  },
  joinDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get() {
      return new Date(this.getDataValue('joinDate')).toLocaleDateString("th-TH", { timeZone: "Asia/Bangkok" });
    },
  },
});




module.exports = Users;