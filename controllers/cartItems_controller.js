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

exports.getCartItemById = async (req, res) => {
  try {
    const cartId = req.params.id;
    
    const cartItems = await CartItems.findAll({
      where: { cart_ID: cartId },
      include: [Cart, Products]
    });

    // if (cartItems.length === 0)
      // return res.status(404).json({ error: "No items found in cart" });

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateCartItem = async (req, res) => 
{
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
    res.status(400).json({ error: error.message });
  }
};

exports.deleteItem = async (req, res) => 
{
  try {
    const { cartId, item } = req.body;


    if (!cartId || !item)
      return res.status(400).json({ error: "Missing userId or productId" });

    const cartItem = await CartItems.findOne({ where: { cart_ID: cartId, product_ID: item } });

    if (!cartItem)
      return res.status(404).json({ error: "Cart item not found" });
    
    await cartItem.destroy();

    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAll = async (req, res) =>
{
  try {
    const { cartId, productId, quantity } = req.body;

    const item = await CartItem.findOne({ where: { cart_ID: cartId, product_ID: productId } });

    if (!item) 
      return res.status(404).json({ success: false, message: 'ไม่พบสินค้าในตะกร้า' });

    await item.update({ quantity: quantity });

    res.json({ success: true, message: 'อัปเดตจำนวนสินค้าสำเร็จ' });
  } 
  catch (error) {
    console.error('Error updating quantity:', error);
    res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดภายในระบบ' });
}
}