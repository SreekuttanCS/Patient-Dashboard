const express = require("express");
const {
  addWeight,
  getWeight,
  deleteWeight,
} = require("../controller/weightController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getWeight);
router.post("/add", protect, addWeight);
router.delete("/:id", protect, deleteWeight);

module.exports = router;
