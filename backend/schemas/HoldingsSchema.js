const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    qty: { type: Number, required: true, min: 1 },
    avg: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 },
    net: { type: String, default: "0%" },
    day: { type: String, default: "0%" },
    boughtAt: { type: Date, default: Date.now },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { HoldingsSchema };
