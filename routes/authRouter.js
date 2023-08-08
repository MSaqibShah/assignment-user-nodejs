// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { validate } = require("../middlewares/validationMiddleware");
const { register, login } = require("../schemas/auth");
const upload = require("../middlewares/multer");

router.post(
  "/register",
  upload.single("profilePicture"),
  validate(register, "body"),
  authController.register
);
router.post("/login", validate(login, "body"), authController.login);

module.exports = router;
