const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    medication: {
      type: String,
      required: true,
    },
    dosage: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending",
    },
    trackingNumber: String,
    expectedDate: {
      type: Date,
      required: true,
    },
    shippedDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shipment", shipmentSchema);
