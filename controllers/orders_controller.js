const { or } = require("sequelize");
const { Orders } = require("../models");




exports.createOrder = async (req, res) => {
  try {
    const { customer_ID, totalPrice } = req.body;

    const order = await Orders.create({ customer_ID, totalPrice });

    res.status(201).json(order);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to create order." });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll();

    res.status(200).json(orders);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to fetch orders." });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Orders.findAll({ where: { customer_ID: id } });

    res.status(200).json(order);
  } 
  catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the order." });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const order = await Orders.findByPk(id);
    
    if (!order)
      return res.status(404).json({ error: "Order not found" });

    await order.update(data);
  
    res.status(200).json(order);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to update order." });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    
    const order = await Orders.findByPk(id);
    
    if (!order)
      return res.status(404).json({ error: "Order not found" });

    await order.destroy();
  
    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to delete order." });
  }
};
