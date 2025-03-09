const express = require("express");
const session = require("express-session");

require("dotenv").config();

const DB = require("./models").DB;

const Users_Route = require('./routes/Users_route');
const Customers_Route = require('./routes/Customers_route');
const Category_Route = require('./routes/Category_route');
const Brands_Route = require('./routes/Brands_route');
const Products_Route = require('./routes/Products_route');
const Cart_Route = require('./routes/Cart_route');
const CartItems_Route = require('./routes/CartItems_route');
const OrderDetails_Route = require('./routes/OrderDetails_route');
const Orders_Route = require('./routes/Orders_route');


const port = process.env.SERVER_PORT || 3000;

const app = express();
app.use(express.json());




app.use('/cart-item', CartItems_Route);
app.use('/category', Category_Route);
app.use('/brand', Brands_Route);
app.use('/cart', Cart_Route);
app.use('/customer', Customers_Route);
app.use('/order-detail', OrderDetails_Route);
app.use('/order', Orders_Route);
app.use('/product', Products_Route);
app.use('/user', Users_Route);




DB.sync().then(() => 
{
  const { execSync } = require('child_process');

  const clearPort = (port) => {
      try {
          const result = execSync(`netstat -ano | findstr :${port}`).toString();
          const lines = result.trim().split('\n');
          
          lines.forEach(line => {
              const parts = line.trim().split(/\s+/);
              const pid = parts[parts.length - 1];
          
              execSync(`taskkill /PID ${pid} /F`);
              console.log(`\x1b[32mSuccessfully killed process on port ${port} (PID: ${pid})\x1b[0m`);
          });
      } 
      catch (error) {
          console.error(`\x1b[31m[ERROR]\x1b[0m Failed to clear port ${port}`);
      }
  };

  clearPort(port);

  console.log(`\x1b[32mDatabase has synced!\x1b[0m`);
  app.listen(port, () => console.log(`\x1b[44mServer running on http://localhost:${port}\x1b[0m`));
});