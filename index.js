require('dotenv').config();
const port = process.env.PORT || 3000;

const express = require("express");
const app = express();
const Sequelize = require('sequelize');

// parse incoming requests
app.use(express.json());


// open a database connection
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/Store.sqlite',
});

// define the book model
const Book = sequelize.define('product', {
    product_ID: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoryID: {
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
    brand: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    suplierID: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// create the table if it doesn't exist
sequelize.sync()


// route to get all books
app.get("/books", (req, res) => {
   Book.findAll().then(books => {
       res.json(books);
   }).catch(err => {
       res.status(500).send(err);
   });
});

// route to get a book by id
app.get('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book)
            res.status(404).send();
        else
            res.json(book);
    }).catch(err => {
        res.status(500).send(err);
    });
});

// route to add a new book
app.post('/books', (req, res) => {
    Book.create(req.body).then(book => {
        res.json(book);
    }
    ).catch(err => {
        res.status(500).send(err);
    });
});

// route to update a book
app.put('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book)
            res.status(404).send();
        else
            book.update(req.body).then(book => {
                res.json(book);
            }).catch(err => {
                res.status(500).send(err);
            });
    }).catch(err => {
        res.status(500).send(err);
    });
});

// route to delete a book
app.delete('/books/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        if (!book)
            res.status(404).send();
        else
            book.destroy().then(() => {
                res.json(book);
            }).catch(err => {
                res.status(500).send(err);
            });
    }).catch(err => {
        res.status(500).send(err);
    });
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});