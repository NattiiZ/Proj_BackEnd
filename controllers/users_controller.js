const { Users, UserType } = require("../models");


exports.createUser = async (req, res) => 
{
  try {
    const { username, password, userType_ID } = req.body;

    const user = await Users.create({ username, password, userType_ID });

    res.status(201).json(user);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => 
{
  try {
    const users = await Users.findAll({ include: [UserType] });
    
    res.status(200).json(users);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => 
{
  try {
    const { id } = req.params;

    const user = await Users.findByPk(id);

    if (!user)
      return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => 
{
  try {
    const { id } = req.params;
    const data = req.body;

    const user = await Users.findByPk(id);
    
    if (!user)
      res.status(404).json({ error: "User not found" });

    await user.update(data);
  
    res.status(200).json(user);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => 
{
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);
    
    if (!user)
      res.status(404).json({ error: "User not found" });

    await user.destroy();
  
    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
