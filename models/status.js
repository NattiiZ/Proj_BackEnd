const DataTypes = require('sequelize');

const DB = require('../config/database');




const Status = DB.define("Status", 
{
  status_ID: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  statusName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});




module.exports = Status;