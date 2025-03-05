const Sequelize = require('../config/database');


const Status = Sequelize.define("Status", 
{
  status_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  statusName: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});


module.exports = Status;