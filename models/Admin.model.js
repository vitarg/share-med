const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    name: String,
    login: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
