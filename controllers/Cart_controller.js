const Cart = require("../models");


exports.createCart = async (req, res) => 
{
  try {
    const user_ID = req.body;
    const cart = await Cart.create({ user_ID });

    res.status(201).json(cart);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCarts = async (req, res) => 
{
  try {
    const carts = await Cart.findAll();

    res.status(200).json(carts);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCart = async (req, res) => 
{
  try {
    const id = req.params;
    const user_ID = req.body;
    const cart = await Cart.findByPk(id);

    if (cart) {
      cart.user_ID = user_ID;
      
      await cart.save();

      res.status(200).json(cart);
    } 
    else
      res.status(404).json({ error: "Cart not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCart = async (req, res) => 
{
  try {
    const id = req.params;
    const cart = await Cart.findByPk(id);

    if (cart) {
      await cart.destroy();
    
      res.status(204).json();
    } 
    else
      res.status(404).json({ error: "Cart not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
