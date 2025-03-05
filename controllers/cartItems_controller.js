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

exports.getCartItemById = async (req, res) => 
{
  try {
    const { id } = req.params;

    const cartItem = await Cart.findByPk(id);

    if (!cartItem)
      return res.status(404).json({ error: "Product not found" });

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCartItem = async (req, res) => 
{
  try {
    const { id } = req.params;
    const items = req.body;

    const cartItem = await CartItems.findByPk(id);

    if (!cartItem) 
      res.status(404).json({ error: "Cart item not found" });
      
      await cartItem.update(items);

      res.status(200).json(cartItem);
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

    if (!cartItem)
      res.status(404).json({ error: "Cart item not found" });

    await cartItem.destroy();

    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
