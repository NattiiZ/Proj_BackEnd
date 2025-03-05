const Category = require("../models");


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

exports.updateCategory = async (req, res) => 
{
  try {
    const id = req.params;
    const { name, description } = req.body;
    const category = await Category.findByPk(id);

    if (category) {
      category.name = name;
      category.description = description;
      
      await category.save();

      res.status(200).json(category);
    } 
    else 
      res.status(404).json({ error: "Category not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => 
{
  try {
    const id = req.params;
    const category = await Category.findByPk(id);

    if (category) {
      await category.destroy();

      res.status(204).json();
    } 
    else 
      res.status(404).json({ error: "Category not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
