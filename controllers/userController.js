const User = require("../models/userModel");

module.exports = {
  getOne: async (req, res) => {
    let user, params;
    params = req.params;

    try {
      user = await User.findOne({ _id: params.id });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }

      user = user.toObject();
      delete user.password;
      res.status(200).json({ message: "ok", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getAll: async (req, res) => {
    let users;
    try {
      users = await User.find();

      for (let i = 0; i < users.length; i++) {
        users[i] = users[i].toObject();
        delete users[i].password;
      }
      res.status(200).json({ message: "ok", users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  updateOne: async (req, res) => {
    let user, params, body;
    params = req.params;
    body = req.body;

    try {
      user = await User.findOne({ _id: params.id });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }

      user.name = body.name || user.name;
      user.email = body.email || user.email;
      user.mobile = body.mobile || user.mobile;
      user.profilePicture = body.profilePicture || user.profilePicture;
      user.password = body.password || user.password;
      user = await user.save();
      user = user.toObject();
      delete user.password;
      res.status(200).json({ message: "ok", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  deleteOne: async (req, res) => {
    let user, params;
    params = req.params;

    try {
      user = await User.findOne({ _id: params.id });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }
      user = await user.deleteOne();
      res.status(200).json({ message: "ok", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
