const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/User");

dotenv.config();

const app = express();

app.use(express.json());

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Db is connected");
  })
  .catch((err) => {
    console.log("error:" + err);
  });

app.use(userRoutes);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Discussion panel rinning on port ${PORT}`);
});
