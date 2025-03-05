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

exports.getSupplierById = async (req, res) => 
{
  try {
    const { id } = req.params;

    const supplier = await Suppliers.findByPk(id);

    if (!supplier)
      return res.status(404).json({ error: "Supplier not found" });

    res.status(200).json(supplier);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSupplier = async (req, res) => 
{
  try {
    const { id } = req.params;
    const data = req.body;

    const supplier = await Suppliers.findByPk(id);
    
    if (!supplier)
      res.status(404).json({ error: "Supplier not found" });
  
    await supplier.update(data);

    res.status(200).json(supplier);
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
    
    if (!supplier)
      res.status(404).json({ error: "Supplier not found" });

      await supplier.destroy();
    
      res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
