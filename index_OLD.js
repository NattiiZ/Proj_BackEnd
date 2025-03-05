// =========================================================================================================
// -------------------------------------------- library Imports --------------------------------------------
// =========================================================================================================

require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const Sequelize = require("sequelize");
const bcrypt = require('bcrypt');
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET || '',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // true ถ้าใช้ https
}));





// =========================================================================================================
// ------------------------------------------ Database Connection ------------------------------------------
// =========================================================================================================


// =============== Database Connection ===============

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_STORAGE } = process.env;

const sequelize = new Sequelize( DB_NAME, DB_USERNAME, DB_PASSWORD, 
{
  host: DB_HOST,
  dialect: DB_DIALECT,
  storage: DB_STORAGE,
});


// ================== UserType Table ==================

const UserType = sequelize.define("UserType", 
{
  userType_ID: {
    type: Sequelize.INTEGER,
    // defaultValue: this.autoincrement,
    autoincrement: true,
    primaryKey: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


// =================== Users Table ===================

const Users = sequelize.define("Users", 
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


// ================= Customers Table =================

const Customers = sequelize.define("Customers", 
{
  customer_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('customer_ID');
      return value ? `C-${String(value).padStart(4, '0')}` : value;
    },
    primaryKey: true,
    
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
  user_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "user_ID",
    }
  },
});


// ================= Suppliers Table =================

const Suppliers = sequelize.define("Suppliers", 
{
  supplier_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true,
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
      is: /^[0-9]{9}$/i
    }
  },
});


// ================= Categories Table =================

const Category = sequelize.define("Category", 
{
  category_ID: {
    type: Sequelize.INTEGER,
    defaultValue: this.autoincrement,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


// ================= Brands Table =================

const Brands = sequelize.define("Brands", 
{
  brand_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


// // ================= Products Table =================

const Products = sequelize.define("Products", 
{
  product_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('product_ID');
      return value ? `P-${String(value).padStart(3, '0')}` : value;
    },
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brand_ID: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Brands,
      key: "brand_ID",
    },
  },
  category_ID: {
    type: Sequelize.INTEGER,
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
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Suppliers,
      key: "supplier_ID",
    },
  },
  img_url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  prductDetail:{
    type: Sequelize.STRING,
    allowNull: false
  }
});


// ================= Cart Table =================

const Cart = sequelize.define("Cart", 
{
  cart_ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "user_ID",
    },
  }
});


// ================= Status Table =================

const CartItems = sequelize.define("CartItems",
{
  cartItem_ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cart_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Cart,
      key: "cart_ID",
    },
  },
  product_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: "product_ID",
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});


// ================= Status Table =================

const Status = sequelize.define("Status", 
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


// ================= Orders Table =================

const Orders = sequelize.define("Orders", 
{
  order_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    get() {
      const value = this.getDataValue('order_ID');
      return value ? `R-${String(value).padStart(4, '0')}` : value;
    },
    primaryKey: true,
  },
  customer_ID: {
    type: Sequelize.INTEGER,
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
  },
  totalAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  status_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Status,
      key: "status_ID",
    },
  },
});


// ============== OrdersDetail Table ==============

const OrderDetails = sequelize.define("OrderDetails", 
{
  orderDetail_ID: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  order_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Orders,
      key: "order_ID",
    },
  },
  product_ID: {
    type: Sequelize.INTEGER,
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


// // ================== Relationships ==================

// // ความสัมพันธ์ระหว่าง Customers และ Orders
// Customers.hasMany(Orders, { foreignKey: "customer_ID" });
// Orders.belongsTo(Customers, { foreignKey: "customer_ID" });

// // ความสัมพันธ์ระหว่าง Orders และ OrderDetail
// Orders.hasMany(OrderDetails, { foreignKey: "order_ID" });
// OrderDetails.belongsTo(Orders, { foreignKey: "order_ID" });

// // ความสัมพันธ์ระหว่าง Products และ Category
// Products.belongsTo(Category, { foreignKey: "category_ID" });
// Category.hasMany(Products, { foreignKey: "category_ID" });

// // ความสัมพันธ์ระหว่าง Products และ Suppliers
// Products.belongsTo(Suppliers, { foreignKey: "supplier_ID" });
// Suppliers.hasMany(Products, { foreignKey: "supplier_ID" });

// // ความสัมพันธ์ระหว่าง OrderDetails และ Products
// OrderDetails.belongsTo(Products, { foreignKey: "product_ID" });
// Products.hasMany(OrderDetails, { foreignKey: "product_ID" });


// ================== Database Sync ==================

sequelize.sync();




// =========================================================================================================
// -------------------------------------------- CRUD Operations --------------------------------------------
// =========================================================================================================


// ==================== UserType ====================

app.get("/usertype", (req, res) => 
{
  UserType.findAll().then(userType => {
    res.json(userType);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.get("/usertype/:id", (req, res) => 
{
  UserType.findByPk(req.params.id).then(typeId => {
    if (!typeId)
      res.status(404).send('Not found!');
    else 
      res.json(typeId);
  });
});

app.post("/usertype", (req, res) => 
{
  UserType.create(req.body).then(userType => {
    res.json(userType);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.put("/usertype/:id", (req, res) => 
{
  UserType.findByPk(req.params.id).then(typeId => {
    if (!typeId)
      res.status(404).send('Not found!');
    else
      typeId.update(req.body).then(typeId => {
        res.json(typeId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/usertype/:id", (req, res) => 
{
  UserType.findByPk(req.params.id).then(typeId => {
    if (!typeId) 
      res.status(404).send('Not found!');
    else
      typeId.destroy().then(() => {
        res.json(typeId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
  
// ===================== Users =====================

app.get("/users", (req, res) => 
{
  Users.findAll().then(users => {
    res.json(users);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
 
app.get("/users/:id", (req, res) => 
{
  Users.findByPk(req.params.id).then(userId => {
    if (!userId)
      res.status(404).send('Not found!');
    else 
      res.json(userId);
  });
});

app.post("/users", (req, res) => 
{
  Users.create(req.body).then(user => {
    res.json(user);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.put("/users/:id", (req, res) => 
{
  Users.findByPk(req.params.id).then(userId => {
    if (!userId)
      res.status(404).send('Not found!');
    else
      userId.update(req.body).then(userId => {
        res.json(userId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/users/:id", (req, res) => 
{
  Users.findByPk(req.params.id).then(userId => {
    if (!userId) 
      res.status(404).send('Not found!');
    else
      userId.destroy().then(() => {
        res.json(userId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});


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


// ==================== Categories ====================

app.get("/category", (req, res) => 
{
  Category.findAll().then(categories => {
    res.json(categories);
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
      categoryId.update(req.body).then(categoryId => {
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


// ==================== Brands ====================

app.get("/brands", (req, res) => 
{
  Brands.findAll().then(brands => {
    res.json(brands);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
 
app.get("/brands/:id", (req, res) => 
{
  Brands.findByPk(req.params.id).then(brandId => {
    if (!brandId)
      res.status(404).send('Not found!');
    else 
      res.json(brandId);
  });
});

app.post("/brands", (req, res) => 
{
  Brands.create(req.body).then(brand => {
    res.json(brand);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.put("/brands/:id", (req, res) => 
{
  Brands.findByPk(req.params.id).then(brandId => {
    if (!brandId)
      res.status(404).send('Not found!');
    else
      brandId.update(req.body).then(brandId => {
        res.json(brandId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});
  
app.delete("/brands/:id", (req, res) => 
{
  Brands.findByPk(req.params.id).then(brandId => {
    if (!brandId)
      res.status(404).send('Not found!');
    else
      brandId.destroy().then(() => {
        res.json(brandId);
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


// ====================== Status ======================

app.get("/status", (req, res) => 
{
  Status.findAll().then(status => {
    res.json(status);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.get("/status/:id", (req, res) => 
{
  Status.findByPk(req.params.id).then(statusId => {
    if (!statusId) 
      res.status(404).send('Not found!');
    else 
      res.json(statusId);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.post("/status", (req, res) => 
{
  Status.create(req.body).then(status => {
    res.json(status);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.put("/status/:id", (req, res) => 
{
  Status.findByPk(req.params.id).then(statusId => {
    if (!statusId) 
      res.status(404).send('Not found!');
    else
      statusId.update(req.body).then(statusId => {
        res.json(statusId);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.delete("/status/:id", (req, res) => 
{
  Status.findByPk(req.params.id).then(statusId => {
    if (!statusId) 
      res.status(404).send('Not found!');
    else
      statusId.destroy().then(() => {
        res.json(statusId);
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




// =========================================================================================================
// -------------------------------------------- Server Connection ------------------------------------------
// =========================================================================================================

const server_port = process.env.SERVER_PORT || 3000;

app.listen(server_port, () => {
  console.log(`Server listening at http://localhost:${server_port}`);
});
