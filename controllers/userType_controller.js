const { UserType } = require("../models");




exports.createUserType = async (req, res) => {
  try {
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({ error: "Role is required to create a user type" });
    }

    const userType = await UserType.create({ role });
    
    res.status(201).json(userType);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to create user type. Please try again." });
  }
};

exports.getUserTypes = async (req, res) => {
  try {
    const userTypes = await UserType.findAll();

    if (userTypes.length === 0) {
      return res.status(404).json({ error: "No user types found" });
    }

    res.status(200).json(userTypes);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to retrieve user types. Please try again." });
  }
};

exports.getUserTypeById = async (req, res) => {
  try {
    const { id } = req.params;

    const userType = await UserType.findByPk(id);

    if (!userType) {
      return res.status(404).json({ error: "User type not found" });
    }

    res.status(200).json(userType);
  } 
  catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the user type" });
  }
};

exports.updateUserType = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const userType = await UserType.findByPk(id);

    if (!userType) {
      return res.status(404).json({ error: "User type not found" });
    }

    await userType.update(data);
    
    res.status(200).json(userType);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to update user type. Please try again." });
  }
};

exports.deleteUserType = async (req, res) => {
  try {
    const { id } = req.params;

    const userType = await UserType.findByPk(id);

    if (!userType) {
      return res.status(404).json({ error: "User type not found" });
    }

    await userType.destroy();
  
    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to delete user type. Please try again." });
  }
};