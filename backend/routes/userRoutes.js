const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
  getUserById,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all", getAllUser);
router.get("/:id", getUserById);
module.exports = router;
