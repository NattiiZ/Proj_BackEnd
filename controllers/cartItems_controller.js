const { CartItems, Cart, Products } = require("../models");


exports.addCartItem = async (req, res) => 
{
  try {
    const { cart_ID, product_ID, quantity } = req.body;
    
    const cartItem = await CartItems.create({ cart_ID, product_ID, quantity });

    res.status(201).json(cartItem);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCartItems = async (req, res) => 
{
  try {
    const cartItems = await CartItems.findAll({ include: [Cart, Products] });

    res.status(200).json(cartItems);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCartById = async (req, res) => 
{
  try {
    const { id } = req.params;

    const cart = await Cart.findByPk(id);

    if (!cart)
      return res.status(404).json({ error: "Product not found" });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCartItem = async (req, res) => 
{
  try {
    const { id } = req.params;
    const quantity = req.body;

    const cartItem = await CartItems.findByPk(id);

    if (cartItem) {
      cartItem.quantity = quantity;
      
      await cartItem.save();

      res.status(200).json(cartItem);
    } 
    else 
      res.status(404).json({ error: "Cart item not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCartItem = async (req, res) => 
{
  try {
    const { id } = req.params;
    const cartItem = await CartItems.findByPk(id);

    if (cartItem) {
      await cartItem.destroy();

      res.status(204).json();
    } 
    else 
      res.status(404).json({ error: "Cart item not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
