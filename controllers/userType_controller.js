const { UserType } = require("../models");


exports.createUserType = async (req, res) => 
{
  try {
    const role = req.body;
    const userType = await UserType.create({ role });
    
    res.status(201).json(userType);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserTypes = async (req, res) => 
{
  try {
    const userTypes = await UserType.findAll();

    res.status(200).json(userTypes);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUserType = async (req, res) => 
{
  try {
    const id = req.params;
    const role = req.body;
    const userType = await UserType.findByPk(id);

    if (userType) {
      userType.role = role;
      
      await userType.save();
      
      res.status(200).json(userType);
    } 
    else
      res.status(404).json({ error: "User type not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUserType = async (req, res) => 
{
  try {
    const id = req.params;
    const userType = await UserType.findByPk(id);
    
    if (userType) {
      await userType.destroy();
    
      res.status(204).json();
    } 
    else
      res.status(404).json({ error: "User type not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
