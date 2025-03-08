const { CartItems, Cart, Products } = require("../models");




exports.addCartItem = async (req, res) => {
  try {
    const { cart_ID, product_ID, quantity } = req.body;
    
    const cartItem = await CartItems.create({ cart_ID, product_ID, quantity });

    res.status(201).json(cartItem);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to add item to cart. Please try again." });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItems.findAll({ include: [Cart, Products] });

    res.status(200).json(cartItems);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to fetch cart items. Please try again." });
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const cartId = req.params.id;

    const cartItems = await CartItems.findAll({
      where: { cart_ID: cartId },
      include: [Cart, Products]
    });

    if (cartItems.length === 0)
      return res.status(404).json({ error: "No items found in this cart" });

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching cart items." });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const items = req.body;

    const cartItem = await CartItems.findOne({ 
      where: { cart_ID: id },
      include: [Cart, Products] 
    });

    if (!cartItem) 
      return res.status(404).json({ error: "Cart item not found" });
      
    await cartItem.update(items);

    res.status(200).json(cartItem);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to update cart item. Please try again." });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id, item } = req.query;

    if (!id || !item)
      return res.status(400).json({ error: "Missing cart ID or product ID" });

    const cartItem = await CartItems.findOne({ where: { cart_ID: id, product_ID: item } });

    if (!cartItem)
      return res.status(404).json({ error: "Cart item not found" });
    
    await cartItem.destroy();

    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to delete cart item. Please try again." });
  }
};