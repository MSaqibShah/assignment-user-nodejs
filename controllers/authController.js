const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../middlewares/authMiddleware");

module.exports = {
  register: async (req, res) => {
    let user, body, profilePicture;
    body = req.body;
    body.profilePicture = req.file ? req.file.filename : null;
    try {
      // check if user already exists
      user = await User.findOne({ email: body.email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      user = await User.create(body);
      user = user.toObject();
      delete user.password;
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  login: async (req, res) => {
    req.body;
    let user, body;
    body = req.body;
    try {
      user = await User.findOne({ email: body.email });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }
      //   check password
      const isMatch = await user.comparePassword(body.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect Password" });
      }
      user = user.toObject();
      delete user.password;
      const token = generateToken(user);
      res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
