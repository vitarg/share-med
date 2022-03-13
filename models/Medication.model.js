const mongoose = require("mongoose");

const medicationSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    descr: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    img: String,
    hasRecipe: Boolean,
    expiryDate: String,
  },
  { timestamps: true }
);

const Medication = mongoose.model("Medication", medicationSchema);

module.exports = Medication;
