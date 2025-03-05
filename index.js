require("dotenv").config();

const port = process.env.SERVER_PORT || 3000;

const express = require("express");
const session = require("express-session");

const DB = require("./models").DB;

const CartItems_Routes = require('./routes/CartItems_route');
const Category_Routes = require('./routes/Category_route');
const Brands_Routes = require('./routes/Brands_route');
const Cart_Routes = require('./routes/Cart_route');
const Customers_Routes = require('./routes/Customers_route');
const OrderDetails_Routes = require('./routes/OrderDetails_route');
const Orders_Routes = require('./routes/Orders_route');
const Products_Routes = require('./routes/Products_route');
const Status_Routes = require('./routes/Status_route');
const Suppliers_Routes = require('./routes/Suppliers_route');
const UserType_Routes = require('./routes/UserType_route');
const Users_Routes = require('./routes/Users_route');

const app = express();

// app.use(express.json());
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
// }));




DB.sync({ alter: true }).then(() => 
{
  console.log("Database synced");
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
});
