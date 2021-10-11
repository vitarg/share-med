const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.resolve(__dirname, "client", "build")));
app.use(fileUpload());
app.use(cors());
app.use(require("./routes/index"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

mongoose.connect(process.env.MONGO).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server has been started on port http://localhost:${process.env.PORT}`
    );
  });

  console.log("Connected with MongoDB");
});
