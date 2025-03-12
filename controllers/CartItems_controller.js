const { CartItems, Cart, Products } = require("../models");




exports.addCartItem = async (req, res) => {
  try {
    const { cart_ID, product_ID, quantity } = req.body;
    
    const cartItem = await CartItems.create({ cart_ID, product_ID, quantity });


    res.status(201).json(cartItem);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to add item to cart." });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItems.findAll({ include: [Cart, Products] });

    res.status(200).json(cartItems);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to fetch cart items." });
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const cartId = req.params.id;

    const cartItems = await CartItems.findAll({
      where: { cart_ID: cartId },
      include: [Cart, Products]
    });

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching cart items." });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const items = req.body;

    const cartItem = await CartItems.findOne({
      where: { cart_ID: items.cartId, product_ID: items.productId },
      include: [Cart, Products] 
    });

    console.log(items);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    cartItem.quantity = items.quantity;

    await cartItem.save();

    res.status(200).json(cartItem);
  } 
  catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update cart item." });
  }
};


exports.deleteItem = async (req, res) => {
  try {
    const { id, item } = req.params;

    if (!id || !item) 
      return res.status(400).json({ error: "Missing cart ID or product ID" });

    const cartItem = await CartItems.findOne({ where: { cart_ID: id, product_ID: item } });
    console.log(id, item);
    

    if (!cartItem)
      return res.status(404).json({ error: "Cart item not found" });
    
    await cartItem.destroy();

    res.status(204).json();
  } 
  catch (error) {
    console.error('Error in deleteItem:', error.message);
    res.status(400).json({ error: "Failed to delete cart item." });
  }
};
