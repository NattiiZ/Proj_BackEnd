const { OrderDetails } = require("../models");


exports.createOrderDetail = async (req, res) => 
{
  try {
    const { order_ID, product_ID, quantity, unitPrice, subtotal } = req.body;

    const orderDetail = await OrderDetails.create({
      order_ID,
      product_ID,
      quantity,
      unitPrice,
      subtotal,
    });

    res.status(201).json(orderDetail);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrderDetails = async (req, res) => 
{
  try {
    const orderDetails = await OrderDetails.findAll();

    res.status(200).json(orderDetails);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrderDetailById = async (req, res) => 
{
  try {
    const { id } = req.params;

    const orderDetail = await OrderDetails.findByPk(id);

    if (!orderDetail)
      return res.status(404).json({ error: "Order detail not found" });

    res.status(200).json(orderDetail);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrderDetail = async (req, res) => 
{
  try {
    const { id } = req.params;
    const data = req.body;
    const orderDetail = await OrderDetails.findByPk(id);

    if (!orderDetail)
      res.status(404).json({ error: "Order detail not found" });
    
    await orderDetail.update(data);
  
    res.status(200).json(orderDetail);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOrderDetail = async (req, res) => 
{
  try {
    const { id } = req.params;
    const orderDetail = await OrderDetails.findByPk(id);

    if (!orderDetail)
      res.status(404).json({ error: "Order detail not found" });

    await orderDetail.destroy();

    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
