const Products = require("../models");


exports.createProduct = async (req, res) => 
{
  try {
    const {
      name,
      brand_ID,
      category_ID,
      unitPrice,
      stockQty,
      supplier_ID,
      img_url,
      prductDetail,
    } = req.body;
    const product = await Products.create({
      name,
      brand_ID,
      category_ID,
      unitPrice,
      stockQty,
      supplier_ID,
      img_url,
      prductDetail,
    });

    res.status(201).json(product);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => 
{
  try {
    const products = await Products.findAll();

    res.status(200).json(products);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => 
{
  try {
    const id = req.params;
    const {
      name,
      brand_ID,
      category_ID,
      unitPrice,
      stockQty,
      supplier_ID,
      img_url,
      prductDetail,
    } = req.body;
    const product = await Products.findByPk(id);
    
    if (product) {
      product.name = name;
      product.brand_ID = brand_ID;
      product.category_ID = category_ID;
      product.unitPrice = unitPrice;
      product.stockQty = stockQty;
      product.supplier_ID = supplier_ID;
      product.img_url = img_url;
      product.prductDetail = prductDetail;
    
      await product.save();
    
      res.status(200).json(product);
    } 
    else
      res.status(404).json({ error: "Product not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => 
{
  try {
    const id = req.params;
    const product = await Products.findByPk(id);
    if (product) {
      await product.destroy();

      res.status(204).json();
    } 
    else
      res.status(404).json({ error: "Product not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
