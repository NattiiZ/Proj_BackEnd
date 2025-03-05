require("dotenv").config();
const express = require("express");
const session = require("express-session");

const DB = require("./models").DB;
const UserType_Route = require('./routes/UserType_route');
const Users_Route = require('./routes/Users_route');
const Customers_Route = require('./routes/Customers_route');
const Suppliers_Route = require('./routes/Suppliers_route');
const Category_Route = require('./routes/Category_route');
const Brands_Route = require('./routes/Brands_route');
const Products_Route = require('./routes/Products_route');
const Cart_Route = require('./routes/Cart_route');
const CartItems_Route = require('./routes/CartItems_route');
const Status_Route = require('./routes/Status_route');
const OrderDetails_Route = require('./routes/OrderDetails_route');
const Orders_Route = require('./routes/Orders_route');

const port = process.env.SERVER_PORT || 3000;

const app = express();
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use(express.json());
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
// }));

app.use('/cart-item', CartItems_Route);
app.use('/category', Category_Route);
app.use('/brand', Brands_Route);
app.use('/cart', Cart_Route);
app.use('/customer', Customers_Route);
app.use('/order-detail', OrderDetails_Route);
app.use('/order', Orders_Route);
app.use('/product', Products_Route);
app.use('/status', Status_Route);
app.use('/supplier', Suppliers_Route);
app.use('/user', Users_Route);
app.use('/user-type', UserType_Route);


DB.sync().then(() => 
{
  console.log(`\x1b[32mDatabase has synced!\x1b[0m`);
  app.listen(port, () => console.log(`\x1b[44mServer running on http://localhost:${port}\x1b[0m`));
});
