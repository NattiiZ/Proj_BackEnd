const { Category } = require("../models");




exports.createCategory = async (req, res) => 
{
  try {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });

    res.status(201).json(category);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCategories = async (req, res) => 
{
  try {
    const categories = await Category.findAll();

    res.status(200).json(categories);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCategoryById = async (req, res) => 
{
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category)
      return res.status(404).json({ error: "Category not found" });

    res.status(200).json(category);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => 
{
  try {
    const { id } = req.params;
    const data = req.body;
    
    const category = await Category.findByPk(id);

    if (!category)
      res.status(404).json({ error: "Category not found" });
      
    await category.update(data);

    res.status(200).json(category);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => 
{
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category)
      res.status(404).json({ error: "Category not found" });

    await category.destroy();

    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
