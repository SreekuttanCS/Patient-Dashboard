const Shipment = require("../model/Shippment");

const getShippment = async (req, res) => {
  try {
    const shipments = await Shipment.find({ user: req.user._id }).sort({
      expectedDate: 1,
    });
    res.status(200).json({ message: "Shippment list", shipments });
  } catch (err) {
    res.status(500).json({ message: "Error fetching shipments" });
  }
};

const createShippment = async (req, res) => {
  const {
    medication,
    dosage,
    status,
    trackingNumber,
    expectedDate,
    shippedDate,
  } = req.body;
  try {
    const shipment = await Shipment.create({
      user: req.user._id,
      medication,
      dosage,
      status,
      trackingNumber,
      expectedDate,
      shippedDate,
    });
    res.status(201).json({ message: "Shipment created", shipment });
  } catch (err) {
    res.status(500).json({ message: "Error creating shipment" });
  }
};

module.exports = { createShippment, getShippment };
