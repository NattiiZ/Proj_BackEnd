const { Suppliers } = require("../models");


exports.createSupplier = async (req, res) => 
{
  try {
    const { name, email, phone } = req.body;
    const supplier = await Suppliers.create({ name, email, phone });

    res.status(201).json(supplier);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSuppliers = async (req, res) => 
{
  try {
    const suppliers = await Suppliers.findAll();

    res.status(200).json(suppliers);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSupplier = async (req, res) => 
{
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const supplier = await Suppliers.findByPk(id);
    
    if (supplier) {
      supplier.name = name;
      supplier.email = email;
      supplier.phone = phone;
  
      await supplier.save();
  
      res.status(200).json(supplier);
    } 
    else
      res.status(404).json({ error: "Supplier not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSupplier = async (req, res) => 
{
  try {
    const { id } = req.params;
    const supplier = await Suppliers.findByPk(id);
    
    if (supplier) {
      await supplier.destroy();
    
      res.status(204).json();
    } 
    else
      res.status(404).json({ error: "Supplier not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
