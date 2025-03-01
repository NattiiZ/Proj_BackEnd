const express = require("express");
const app = express();
const Sequelize = require("sequelize");

app.use(express.json());

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./Database/Store.sqlite",
});

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
    allowNull: false,
  },
});

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
  },
});

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


app.get("/products", (req, res) => 
{
    Products.findAll().then((products) => {
        res.json(products);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

app.get("/products/:id", (req, res) => 
{
    Products.findByPk(req.params.id).then((productId) => {
        if (!productId) 
            res.status(404).send();
        else 
            res.json(productId);
    })
    .catch((err) => {
          res.status(500).send(err);
    });
});

app.post("/addProduct", (req, res) => {
    Products.create(req.body).then((product) => {
        res.json(product);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

// route to update a book
app.put("/books/:id", (req, res) => {
  Book.findByPk(req.params.id)
    .then((book) => {
      if (!book) res.status(404).send();
      else
        book
          .update(req.body)
          .then((book) => {
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

// route to delete a book
app.delete("/books/:id", (req, res) => {
  Book.findByPk(req.params.id)
    .then((book) => {
      if (!book) res.status(404).send();
      else
        book
          .destroy()
          .then(() => {
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

require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
