const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.patch("/:id", userController.updateOne);
router.delete("/:id", userController.deleteOne);

module.exports = router;
