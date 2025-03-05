const { Orders } = require("../models");


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
      const oders = await Orders.findAll();
  
      res.status(200).json(oders);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.getOrderById = async (req, res) => 
{
  try {
    const { id } = req.params;

    const order = await Orders.findByPk(id);

    if (!order)
      return res.status(404).json({ error: "Order not found" });

    res.status(200).json(order);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => 
{
  try {
    const { id } = req.params;
    const data = req.body;

    const order = await Orders.findByPk(id);
    
    if (!order)
      res.status(404).json({ error: "Order not found" });

    await order.update(data);
  
    res.status(200).json(order);
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
    
    if (!order)
      res.status(404).json({ error: "Order not found" });

    await order.destroy();
  
    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
