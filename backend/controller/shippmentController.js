const Shipment = require("../model/Shippment");

const getShippment = async (req, res) => {
  try {
    const { status, medication, startDate, endDate } = req.query;

    let query = { user: req.user._id };

    if (status) query.status = status;
    if (medication) query.medication = { $regex: medication, $options: "i" };

    if (startDate || endDate) {
      query.expectedDate = {};
      if (startDate) query.expectedDate.$gte = new Date(startDate);
      if (endDate) query.expectedDate.$lte = new Date(endDate);
    }

    const shipments = await Shipment.find(query).sort({ expectedDate: 1 });

    res.status(200).json({ message: "Shipment list", shipments });
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
    console.error(err);
    res.status(500).json({ message: "Error creating shipment" });
  }
};

module.exports = { createShippment, getShippment };
