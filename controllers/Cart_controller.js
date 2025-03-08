const { Cart } = require("../models");




exports.createCart = async (req, res) => {
  try {
    const { user_ID } = req.body;

    const cart = await Cart.create({ user_ID });

    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ error: "Failed to create cart. Please try again." });
  }
};

exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll();

    res.status(200).json(carts);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch carts. Please try again." });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await Cart.findByPk(id);

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "An error occurred. Please try again." });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const cart = await Cart.findByPk(id);

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    await cart.update(data);

    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: "Failed to update cart. Please try again." });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await Cart.findByPk(id);

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    await cart.destroy();

    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: "Failed to delete cart. Please try again." });
  }
};
