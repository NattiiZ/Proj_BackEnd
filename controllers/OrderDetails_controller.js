const { OrderDetails } = require("../models");




exports.createOrderDetail = async (req, res) => {
  try {
    const { order_ID, product_ID, quantity } = req.body;

    const orderDetail = await OrderDetails.create({
      order_ID,
      product_ID,
      quantity,
    });    

    res.status(201).json(orderDetail);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to create order detail." });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const orderDetails = await OrderDetails.findAll();

    res.status(200).json(orderDetails);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to fetch order details." });
  }
};

exports.getOrderDetailById = async (req, res) => {
  try {
    const { id } = req.params;

    const orderDetail = await OrderDetails.findAll({ where: { order_ID: id } });

    if (!orderDetail)
      return res.status(404).json({ error: "Order detail not found" });

    res.status(200).json(orderDetail);
  } 
  catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the order detail." });
  }
};

exports.updateOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const orderDetail = await OrderDetails.findByPk(id);

    if (!orderDetail)
      return res.status(404).json({ error: "Order detail not found" });
    
    await orderDetail.update(data);
  
    res.status(200).json(orderDetail);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to update order detail." });
  }
};

exports.deleteOrderDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const orderDetail = await OrderDetails.findByPk(id);

    if (!orderDetail)
      return res.status(404).json({ error: "Order detail not found" });

    await orderDetail.destroy();

    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to delete order detail." });
  }
};
