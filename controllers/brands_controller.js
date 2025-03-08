const { Brands } = require('../models');




exports.createBrand = async (req, res) => {
  try {
    const { name } = req.body;

    const brand = await Brands.create({ name });

    res.status(201).json(brand);
  } catch (error) {
    res.status(400).json({ error: "Failed to create brand." });
  }
};

exports.getBrands = async (req, res) => {
  try {
    const brands = await Brands.findAll();

    res.status(200).json(brands);
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch brands." });
  }
};

exports.getBrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brands.findByPk(id);

    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }

    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const brand = await Brands.findByPk(id);

    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }

    await brand.update(data);

    res.status(200).json(brand);
  } catch (error) {
    res.status(400).json({ error: "Failed to update brand." });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brands.findByPk(id);

    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }

    await brand.destroy();

    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: "Failed to delete brand." });
  }
};