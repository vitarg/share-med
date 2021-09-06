const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(fileUpload());
app.use(cors());
app.use(require("./routes/index"));

mongoose.connect(process.env.MONGO).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server has been started on port http://localhost:${process.env.PORT}`
    );
  });

  console.log("Connected with MongoDB");
});
