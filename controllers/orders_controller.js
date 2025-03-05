const { Orders } = require("../models/Orders");


exports.createOrder = async (req, res) => 
{
  try {
    const { customer_ID, totalAmount, status_ID } = req.body;
    const order = await Orders.create({ customer_ID, totalAmount, status_ID });

    res.status(201).json(order);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => 
{
  try {
    const orders = await Orders.findAll();

    res.status(200).json(orders);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => 
{
  try {
    const { id } = req.params;
    const { customer_ID, totalAmount, status_ID } = req.body;
    const order = await Orders.findByPk(id);
    
    if (order) {
      order.customer_ID = customer_ID;
      order.totalAmount = totalAmount;
      order.status_ID = status_ID;
    
      await order.save();
    
      res.status(200).json(order);
    } 
    else
      res.status(404).json({ error: "Order not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => 
{
  try {
    const { id } = req.params;
    const order = await Orders.findByPk(id);
    
    if (order) {
      await order.destroy();
    
      res.status(204).json();
    } 
    else
      res.status(404).json({ error: "Order not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
