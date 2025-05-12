const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  getShippment,
  createShippment,
} = require("../controller/shippmentController");

const router = express.Router();

router.get("/", protect, getShippment);
router.post("/", protect, createShippment);

module.exports = router;
