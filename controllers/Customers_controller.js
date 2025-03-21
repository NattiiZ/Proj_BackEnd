const { Customers } = require('../models');




exports.createCustomer = async (req, res) => {
  try {
    const { name, phone, address, user_ID } = req.body;
    
    const customer = await Customers.create({ name, phone, address, user_ID });

    res.status(201).json(customer);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to create customer." });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customers.findAll();

    res.status(200).json(customers);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to fetch customers." });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await Customers.findByPk(id);

    if (!customer)
      return res.status(404).json({ error: "Customer not found" });

    res.status(200).json(customer);
  } 
  catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the customer." });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const customer = await Customers.findByPk(id);

    if (!customer)
      return res.status(404).json({ error: "Customer not found" });
      
    await customer.update(data);
    
    res.status(200).json(customer);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to update customer." });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await Customers.findByPk(id);
    
    if (!customer)
      return res.status(404).json({ error: "Customer not found" });

    await customer.destroy();
  
    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to delete customer." });
  }
};
