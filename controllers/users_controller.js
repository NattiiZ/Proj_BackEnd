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

exports.updateUser = async (req, res) => 
{
  try {
    const { id } = req.params;
    const { username, password, userType_ID } = req.body;
    const user = await Users.findByPk(id);
    
    if (user) {
      user.username = username;
      user.password = password;
      user.userType_ID = userType_ID;
    
      await user.save();
    
      res.status(200).json(user);
    } 
    else
      res.status(404).json({ error: "User not found" });
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
    
    if (user) {
      await user.destroy();
    
      res.status(204).json();
    } 
    else
      res.status(404).json({ error: "User not found" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};
