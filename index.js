// ===================================================
// --------------- Required Libraries ---------------
// ===================================================

const express = require("express");
const app = express();
const Sequelize = require("sequelize");

app.use(express.json());


// ===================================================
// --------------- Database Connection ---------------
// ===================================================

// ================= Define Database =================

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./Database/Store.sqlite",
});


// ================= Customers Table =================

const Customers = sequelize.define("Customers", {
  customer_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  joinDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return new Date(this.getDataValue('joinDate')).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
    },
    allowNull: false,
  },
});


// ================= Orders Table =================

const Orders = sequelize.define("Orders", {
  order_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  customer_ID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return new Date(this.getDataValue('joinDate')).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
    },
    allowNull: false,
  },
  totalAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


// ============== OrdersDetail Table ==============

const OrderDetail = sequelize.define("OrderDetail", {
  orderDetail_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  order_ID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  product_ID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  subtotal: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});


// ================= Products Table =================

const Products = sequelize.define("Products", {
  product_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    foreignKey: true,
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  stockQty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  suplier_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    foreignKey: true,
  }
});


// ================= Category Table =================

const Category = sequelize.define("Category", {
  category_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


// ================= Supliers Table =================

const Supliers = sequelize.define("Supliers", {
  suplier_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contactName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync();


// ===================================================
// ----------------- CRUD Operations -----------------
// ===================================================

// ==================== Customers ====================

app.get("/customers", (req, res) => 
{
  Customers.findAll().then(customers => {
      res.json(category);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
 
app.get("/customers/:id", (req, res) => 
{
  Customers.findByPk(req.params.id).then(customerId => {
    if (!customerId)
        res.status(404).send();
    else 
        res.json(customerId);
  });
});

app.post("/customers", (req, res) => 
{
  Customers.create(req.body).then(customer => {
      res.json(customer);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.put("/customers/:id", (req, res) => 
{
  Customers.findByPk(req.params.id).then(customerId => {
    if (!customerId)
      res.status(404).send();
    else
      customerId.update(req.body).then(customerId => {
        res.json(customerId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/customers/:id", (req, res) => 
{
  Customers.findByPk(req.params.id).then(customerId => {
    if (!customerId) 
      res.status(404).send();
    else
      customerId.destroy().then(() => {
          res.json(customerId);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});


// ==================== Orders ====================

app.get("/orders", (req, res) => 
{
  Orders.findAll().then(orders => {
      res.json(orders);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.get("/orders/:id", (req, res) => 
{
  Orders.findByPk(req.params.id).then(orderId => {
    if (!orderId)
        res.status(404).send();
    else 
        res.json(orderID);
  });
});

app.post("/orders", (req, res) => 
{
  Orders.create(req.body).then(order => {
      res.json(order);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.put("/orders/:id", (req, res) => 
{
  Orders.findByPk(req.params.id).then(orderId => {
    if (!orderId)
      res.status(404).send();
    else
      orderId.update(req.body).then(orderId => {
        res.json(orderId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/orders/:id", (req, res) => 
{
  Orders.findByPk(req.params.id).then(orderId => {
    if (!orderId) 
      res.status(404).send();
    else
      orderId.destroy().then(() => {
          res.json(orderId);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});


// ================= OrdersDetail =================

app.get("/details", (req, res) => 
{
  OrderDetail.findAll().then(details => {
      res.json(details);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.get("/detail/:id", (req, res) => 
{
  OrderDetail.findByPk(req.params.id).then(detailId => {
    if (!detailId)
        res.status(404).send();
    else 
        res.json(detailId);
  });
});

app.post("/details", (req, res) => 
{
  OrderDetail.create(req.body).then(detail => {
      res.json(detail);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.put("/details/:id", (req, res) => 
{
  OrderDetail.findByPk(req.params.id).then(detailId => {
    if (!detailId)
      res.status(404).send();
    else
      detailId.update(req.body).then(detailId => {
        res.json(detailId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/details/:id", (req, res) => 
{
  OrderDetail.findByPk(req.params.id).then(detailId => {
    if (!detailId) 
      res.status(404).send();
    else
      detailId.destroy().then(() => {
          res.json(detailId);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});


// ==================== Products ====================

app.get("/products", (req, res) => 
{
  Products.findAll().then(products => {
      res.json(products);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});

app.get("/products/:id", (req, res) => 
{
  Products.findByPk(req.params.id).then(productId => {
      if (!productId) 
          res.status(404).send();
      else 
          res.json(productId);
  })
  .catch((err) => {
        res.status(500).send(err);
  });
});

app.post("/products", (req, res) => 
{
  Products.create(req.body).then(product => {
      res.json(product);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});

app.put("/products/:id", (req, res) => 
{
  Products.findByPk(req.params.id).then(productId => {
      if (!productId) 
          res.status(404).send();
      else
          productId.update(req.body).then(productId => {
              res.json(book);
          })
          .catch((err) => {
              res.status(500).send(err);
          });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.delete("/products/:id", (req, res) => 
{
  Products.findByPk(req.params.id).then(productId => {
      if (!productId) 
          res.status(404).send();
      else
          productId.destroy().then(() => {
              res.json(productId);
          })
          .catch((err) => {
              res.status(500).send(err);
          });
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});


// ==================== Category ====================

app.get("/category", (req, res) => 
{
  Category.findAll().then(category => {
      res.json(category);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.get("/category/:id", (req, res) => 
{
  Category.findByPk(req.params.id).then(categoryId => {
      if (!categoryId) 
          res.status(404).send();
      else 
          res.json(categoryId);
  });
});
  
app.post("/category", (req, res) => 
{
  Category.create(req.body).then(category => {
      res.json(category);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.put("/category/:id", (req, res) => 
{
  Category.findByPk(req.params.id).then(categoryId => {
    if (!categoryId)
      res.status(404).send();
    else
      categoryId.update(req.body).then(category => {
        res.json(categoryId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/category/:id", (req, res) => 
{
  Category.findByPk(req.params.id).then(categoryId => {
    if (!categoryId) 
      res.status(404).send();
    else
      categoryId.destroy().then(() => {
          res.json(categoryId);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});


// ==================== Supliers ====================

app.get("/supliers", (req, res) => 
{
  Supliers.findAll().then(supliers => {
      res.json(details);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.get("/supliers/:id", (req, res) => 
{
  Supliers.findByPk(req.params.id).then(suplierId => {
    if (!suplierId)
        res.status(404).send();
    else 
        res.json(suplierId);
  });
});

app.post("/supliers", (req, res) => 
{
  Supliers.create(req.body).then(suplier => {
      res.json(suplier);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.put("/suplierss/:id", (req, res) => 
{
  Supliers.findByPk(req.params.id).then(suplierId => {
    if (!suplierId)
      res.status(404).send();
    else
      suplierId.update(req.body).then(suplierId => {
        res.json(suplierId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/supliers/:id", (req, res) => 
{
  Supliers.findByPk(req.params.id).then(suplierId => {
    if (!suplierId) 
      res.status(404).send();
    else
      suplierId.destroy().then(() => {
          res.json(suplierId);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  

// =====================================================
// ----------------- Server Connection -----------------
// =====================================================

require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
