const { Products } = require("../models");




exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      brand_ID,
      category_ID,
      unitPrice,
      stockQty,
      imgName,
      detail,
    } = req.body;

    const product = await Products.create({
      name,
      brand_ID,
      category_ID,
      unitPrice,
      stockQty,
      imgName,
      detail,
    });

    res.status(201).json(product);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to create product." });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();

    res.status(200).json(products);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to fetch products." });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findByPk(id);

    if (!product)
      return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  } 
  catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the product." });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const product = await Products.findByPk(id);
    
    if (!product)
      return res.status(404).json({ error: "Product not found" });

    await product.update(data);

    res.status(200).json(product);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to update product." });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    const product = await Products.findByPk(id);
    
    if (!product)
      return res.status(404).json({ error: "Product not found" });

    await product.destroy();

    res.status(204).json();        
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to delete product." });
  }
};