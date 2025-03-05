const { Status } = require("../models");


exports.createStatus = async (req, res) => 
{
  try {
    const statusName = req.body;
    const status = await Status.create({ statusName });
    
    res.status(201).json(status);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStatuses = async (req, res) => 
{
  try {
    const statuses = await Status.findAll();

    res.status(200).json(statuses);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateStatus = async (req, res) => 
{
  try {
    const id = req.params;
    const statusName = req.body;
    const status = await Status.findByPk(id);
    
    if (status) {
      status.statusName = statusName;
      
      await status.save();
      
      res.status(200).json(status);
    } 
    else
      res.status(404).json({ error: "Status not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteStatus = async (req, res) => 
{
  try {
    const { id } = req.params;
    const status = await Status.findByPk(id);

    if (status) {
      await status.destroy();

      res.status(204).json();
    } 
    else
      res.status(404).json({ error: "Status not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
