// =========================================================================================================
// -------------------------------------------- library Imports --------------------------------------------
// =========================================================================================================

require("dotenv").config();

const express = require("express");
const app = express();
const Sequelize = require("sequelize");

app.use(express.json());




// =========================================================================================================
// ------------------------------------------ Database Connection ------------------------------------------
// =========================================================================================================


// =============== Database Connection ===============

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./Database/Store.sqlite",
});


// ================= Customers Table =================

const Customers = sequelize.define("Customers", {
  customer_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      const value = this.getDataValue('customer_ID');
      return value ? `C${String(value).padStart(4, '0')}` : value;
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/i
    }
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


// ================= Suppliers Table =================

const Suppliers = sequelize.define("Suppliers", {
  supplier_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      const value = this.getDataValue('supplier_ID');
      return value ? `S${String(value).padStart(2, '0')}` : value;
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contactName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/i
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


// ================= Category Table =================

const Category = sequelize.define("Categories", {
  category_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      const value = this.getDataValue('category_ID');
      return value ? `T${String(value).padStart(2, '0')}` : value;
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


// ================= Products Table =================

const Products = sequelize.define("Products", {
  product_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      const value = this.getDataValue('product_ID');
      return value ? `P${String(value).padStart(3, '0')}` : value;
    }
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
    references: {
      model: Category,
      key: "category_ID",
    },
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  stockQty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  supplier_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Suppliers,
      key: "supplier_ID",
    },
  }
});


// ================= Orders Table =================

const Orders = sequelize.define("Orders", {
  order_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      const value = this.getDataValue('order_ID');
      return value ? `OD${String(value).padStart(3, '0')}` : value;
    }
  },
  customer_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Customers,
      key: "customer_ID",
    },
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return new Date(this.getDataValue('orderDate')).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
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

const OrderDetails = sequelize.define("OrderDetails", {
  orderDetail_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      const value = this.getDataValue('orderDetail_ID');
      return value ? `DT${String(value).padStart(2, '0')}` : value;
    }
  },
  order_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Orders,
      key: "order_ID",
    },
  },
  product_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Products,
      key: "product_ID",
    },
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


// ================== Relationships ==================

// ความสัมพันธ์ระหว่าง Customers และ Orders
Customers.hasMany(Orders, { foreignKey: "customer_ID" });
Orders.belongsTo(Customers, { foreignKey: "customer_ID" });

// ความสัมพันธ์ระหว่าง Orders และ OrderDetail
Orders.hasMany(OrderDetails, { foreignKey: "order_ID" });
OrderDetails.belongsTo(Orders, { foreignKey: "order_ID" });

// ความสัมพันธ์ระหว่าง Products และ Category
Products.belongsTo(Category, { foreignKey: "category_ID" });
Category.hasMany(Products, { foreignKey: "category_ID" });

// ความสัมพันธ์ระหว่าง Products และ Suppliers
Products.belongsTo(Suppliers, { foreignKey: "supplier_ID" });
Suppliers.hasMany(Products, { foreignKey: "supplier_ID" });

// ความสัมพันธ์ระหว่าง OrderDetails และ Products
OrderDetails.belongsTo(Products, { foreignKey: "product_ID" });
Products.hasMany(OrderDetails, { foreignKey: "product_ID" });


// ================== Database Sync ==================

sequelize.sync();




// =========================================================================================================
// -------------------------------------------- CRUD Operations --------------------------------------------
// =========================================================================================================


// ==================== Customers ====================

app.get("/customers", (req, res) => 
{
  Customers.findAll().then(customers => {
      res.json(customers);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
 
app.get("/customers/:id", (req, res) => 
{
  Customers.findByPk(req.params.id).then(customerId => {
    if (!customerId)
        res.status(404).send('Not found!');
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
      res.status(404).send('Not found!');
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
      res.status(404).send('Not found!');
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
        res.status(404).send('Not found!');
    else 
        res.json(orderId);
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
      res.status(404).send('Not found!');
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
      res.status(404).send('Not found!');
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
  OrderDetails.findAll().then(details => {
      res.json(details);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.get("/details/:id", (req, res) => 
{
  OrderDetails.findByPk(req.params.id).then(detailId => {
    if (!detailId)
        res.status(404).send('Not found!');
    else 
        res.json(detailId);
  });
});

app.post("/details", (req, res) => 
{
  OrderDetails.create(req.body).then(detail => {
      res.json(detail);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.put("/details/:id", (req, res) => 
{
  OrderDetails.findByPk(req.params.id).then(detailId => {
    if (!detailId)
      res.status(404).send('Not found!');
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
  OrderDetails.findByPk(req.params.id).then(detailId => {
    if (!detailId) 
      res.status(404).send('Not found!');
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
          res.status(404).send('Not found!');
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
          res.status(404).send('Not found!');
      else
          productId.update(req.body).then(productId => {
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

app.delete("/products/:id", (req, res) => 
{
  Products.findByPk(req.params.id).then(productId => {
      if (!productId) 
          res.status(404).send('Not found!');
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
          res.status(404).send('Not found!');
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
      res.status(404).send('Not found!');
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
      res.status(404).send('Not found!');
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


// ==================== Suppliers ====================

app.get("/suppliers", (req, res) => 
{
  Suppliers.findAll().then(suppliers => {
      res.json(suppliers);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.get("/suppliers/:id", (req, res) => 
{
  Suppliers.findByPk(req.params.id).then(supplierId => {
    if (!supplierId)
        res.status(404).send('Not found!');
    else 
        res.json(supplierId);
  });
});

app.post("/suppliers", (req, res) => 
{
  Suppliers.create(req.body).then(supplier => {
      res.json(supplier);
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});
  
app.put("/suppliers/:id", (req, res) => 
{
  Suppliers.findByPk(req.params.id).then(supplierId => {
    if (!supplierId)
      res.status(404).send('Not found!');
    else
      supplierId.update(req.body).then(supplierId => {
        res.json(supplierId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/suppliers/:id", (req, res) => 
{
  Suppliers.findByPk(req.params.id).then(supplierId => {
    if (!supplierId) 
      res.status(404).send('Not found!');
    else
      supplierId.destroy().then(() => {
          res.json(supplierId);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
  })
  .catch((err) => {
      res.status(500).send(err);
  });
});




// =========================================================================================================
// -------------------------------------------- Server Connection ------------------------------------------
// =========================================================================================================

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
