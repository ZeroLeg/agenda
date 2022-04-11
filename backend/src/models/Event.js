const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventhSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: Date, default: Date.now },
    priority: { type: String, required: false }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventhSchema);