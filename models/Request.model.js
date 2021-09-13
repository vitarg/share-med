const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    name: String,
    tel: String,
    email: String,
    message: String,
    medicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medication",
    },
    isAccept: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
