const Weight = require("../model/Weight");
const User = require("../model/User");

const addWeight = async (req, res) => {
  const { weight } = req.body;

  // Validate the incoming weight data
  if (!weight) return res.status(400).json({ message: "Weight is required" });

  try {
    // Create a new weight entry for the user
    const newEntry = await Weight.create({
      user: req.user._id,
      weight,
    });

    // Respond with the created weight entry
    res.status(201).json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while adding weight" });
  }
};

  const getWeight = async (req, res) => {
    const userId = req.params.userId;
    try {
      const weight = await Weight.find({ user: userId }).sort({ createdAt: -1 });
      if (weight.length === 0) {
        return res.status(404).json({ message: "No weight data found" });
      }
      return res.status(200).json(weight);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
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
