const { Cart, CartItem, Product } = require('../models');

exports.addToCart = async (req, res) => 
{
  try {
    const { user_ID, product_ID, quantity } = req.body;

    let cart = await Cart.findOne({ where: { user_ID } });
    if (!cart) {
      cart = await Cart.create({ user_ID });
    }

    await CartItem.create({ cart_ID: cart.cart_ID, product_ID, quantity });
    res.status(200).json({ message: 'เพิ่มสินค้าในตะกร้าสำเร็จ' });

  } 
  catch (err) {
    console.error(err);
    res.status(500).send('เกิดข้อผิดพลาด');
  }
};