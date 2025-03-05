require('dotenv').config();
const { Sequelize } = require('sequelize');


const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_STORAGE } = process.env;

const DB = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD,
{
  host: DB_HOST,
  dialect: DB_DIALECT,
  storage: DB_STORAGE,
});


module.exports = DB;