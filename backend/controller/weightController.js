const Weight = require("../model/Weight");
const User = require("../model/User");

const addWeight = async (req, res) => {
  const { weight } = req.body;

  if (!weight) return res.status(400).json({ message: "Weight is required" });

  const newEntry = await Weight.create({
    user: req.user._id,
    weight,
  });
  res.status(200).json(newEntry);
};

const getWeight = async (req, res) => {
  const weight = await Weight.find({ user: req.user._id }).sort({
    createdAt: -1,
  });
  return res.status(200).json(weight);
};

const deleteWeight = async (req, res) => {
  try {
    const id = req.params.id;
    const weight = await Weight.findByIdAndDelete(id);
    if (!weight) {
      return res.status(404).json({ message: "weight not found" });
    }
    res.status(200).json({ message: "weight deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete weight", err });
  }
};

module.exports = { addWeight, getWeight, deleteWeight };
