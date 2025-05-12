const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all", getAllUser);

module.exports = router;
