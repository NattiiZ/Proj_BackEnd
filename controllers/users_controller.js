const { Users } = require("../models");




exports.createUser = async (req, res) => {
  try {
    const { username, password, email, userType_ID } = req.body;

    if (!username || !password || !email || !userType_ID) {
      return res.status(400).json({ error: "Username, password, email, and userType_ID are required" });
    }

    const user = await Users.create({ username, password, email, userType_ID });

    res.status(201).json(user);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to create user. Please try again." });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    if (users.length === 0) {
      return res.status(404).json({ error: "No users found" });
    }

    res.status(200).json(users);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to retrieve users. Please try again." });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } 
  catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.update(data);

    res.status(200).json(user);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to update user. Please try again." });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();

    res.status(204).json();
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to delete user. Please try again." });
  }
};
