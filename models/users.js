const DataTypes = require('sequelize');
const DB = require('../config/database');


const Users = DB.define("Users", 
{
  user_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('user_ID');
      return value ? `U${String(value).padStart(3, '0')}` : value;
    },
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
  joinDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    get() {
      return new Date(this.getDataValue('joinDate')).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
    },
  },
  userType_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserType,
      key: "userType_ID",
    },
  },
});


module.exports = Users;