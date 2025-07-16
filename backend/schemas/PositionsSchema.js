const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema(
  {
    product: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    qty: { type: Number, required: true, min: 1 },
    avg: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 },
    net: { type: String },
    day: { type: String },
    isLoss: { type: Boolean, default: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { PositionsSchema };
