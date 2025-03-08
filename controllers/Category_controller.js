const { Category } = require("../models");




exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });

    res.status(201).json(category);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to create category." });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    res.status(200).json(categories);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to fetch categories." });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category)
      return res.status(404).json({ error: "Category not found" });

    res.status(200).json(category);
  } 
  catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the category." });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    
    const category = await Category.findByPk(id);

    if (!category)
      return res.status(404).json({ error: "Category not found" });
      
    await category.update(data);

    res.status(200).json(category);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to update category." });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category)
      return res.status(404).json({ error: "Category not found" });

    await category.destroy();

    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to delete category." });
  }
};