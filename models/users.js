const Sequelize = require('../config/database');


const Users = Sequelize.define("Users", 
{
  user_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('user_ID');
      return value ? `U${String(value).padStart(3, '0')}` : value;
    },
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  joinDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return new Date(this.getDataValue('joinDate')).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
    },
  },
  userType_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: UserType,
      key: "userType_ID",
    },
  },
});


module.exports = Users;